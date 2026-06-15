"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, RoundedBox } from "@react-three/drei";
import { useEffect, useMemo, useRef, type RefObject } from "react";
import * as THREE from "three";

// Cảnh 3D thật (R3F) cho bìa — exploded die Analog-PIM của Pebble Square.
// HỆ THIẾT KẾ 3D (xem ../3d-design-system.md): thân TITANIUM phay (kim loại, hơi ấm xám),
// vùng tính toán phát sáng ACCENT (xanh điện), branding & chân tiếp xúc GOLD. Mọi item 3D
// trong deck dùng chung bảng màu + chất liệu này để nhất quán & high-tech.
//
// Tương tác với legend: mỗi anchor 3D được chiếu → toạ độ màn hình mỗi frame (camera.project);
// component cha vẽ leader VUÔNG GÓC (ngang rồi dọc) + đặt nhãn ở khoảng cách-x cố định.

export type LeadEl = {
  poly: SVGPolylineElement | null;
  dot: SVGCircleElement | null;
  core: SVGCircleElement | null;
  label: HTMLDivElement | null;
};

// ── Hệ màu/chất liệu dùng chung (titanium · accent · gold) ────────────────────
const TITANIUM = "#c4c8cd"; // titanium phay sáng (thân die / IO driver)
const DARK_TI = "#39434e"; // titanium anode tối (đế / package)
const ACCENT = "#4f93e8"; // xanh điện — vùng tính toán phát sáng
const GOLD = "#e0b056"; // vàng tiết chế — chân tiếp xúc, branding

// Vật liệu phát sáng dùng CHUNG cho mọi ô PIM-core / bar logic (1 instance thay vì vài chục)
// → giảm bộ nhớ GPU & overhead mỗi frame. Module-level: tạo 1 lần cho cả vòng đời app.
const CORE_MAT = new THREE.MeshStandardMaterial({ color: new THREE.Color("#0a1c34"), emissive: new THREE.Color(ACCENT), emissiveIntensity: 1.35, roughness: 0.4, metalness: 0.2 });
const LOGIC_MAT = new THREE.MeshStandardMaterial({ color: new THREE.Color("#0a1c34"), emissive: new THREE.Color(ACCENT), emissiveIntensity: 1.15, roughness: 0.4, metalness: 0.2 });

const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeOut = (x: number) => 1 - Math.pow(1 - x, 3);
const easeOutBack = (x: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
};

// Đế (substrate/package) — footprint vừa phải, mỏng & bo nhẹ.
const BASE_W = 2.3;
const BASE_D = 2.3;
const BASE_H = 0.16;

// 3 die: thân titanium, bo cạnh tinh tế. Mỗi die mang chi tiết "đúng nội dung":
// PIM CORE = mảng ô nhớ-tính phát sáng; Activation = dải bar theo đường cong kích hoạt.
// Thứ tự khớp callout ở cha: [PIM CORE-1, Activation Logic, PIM CORE-2].
const DIE_H = 0.1;
type DieCfg = {
  size: [number, number, number];
  color: string;
  kind: "core" | "logic";
  cells: [number, number];
  target: [number, number, number]; // vị trí khi đã "nổ" (exploded)
  rank: number; // 0 = thấp nhất → tách trước
};
// Cao độ exploded CÁCH ĐỀU trên trục đứng: 0.52 · 0.96 · 1.40 (bước 0.44).
const DICE: DieCfg[] = [
  { size: [1.08, DIE_H, 0.94], color: TITANIUM, kind: "core", cells: [4, 3], target: [0.4, 1.4, -0.12], rank: 2 },
  { size: [0.9, DIE_H, 0.78], color: "#bcc1c7", kind: "logic", cells: [6, 1], target: [-0.46, 0.96, 0.16], rank: 1 },
  { size: [1.0, DIE_H, 0.86], color: "#cacfd3", kind: "core", cells: [4, 3], target: [0.34, 0.52, 0.1], rank: 0 },
];

// Tham số "nảy ngẫu nhiên" cho 3 die — biên/tần/pha khác nhau → lệch nhịp, trông ngẫu nhiên.
const BOUNCE = [
  { amp: 0.06, freq: 1.4, phase: 0.0 },
  { amp: 0.085, freq: 0.95, phase: 2.2 },
  { amp: 0.05, freq: 1.75, phase: 4.1 },
];

// Khi "ráp": cả 3 chồng khít tại tâm thành MỘT khối (HBM-style stack). Tách sau 0.5s.
const ASSEMBLE_DELAY = 0.5;
const STAGGER = 0.22;
const SEP_DUR = 0.95;
const ASSEM_SCALE = 0.86; // nhỏ hơn chút khi ráp → "vừa tách vừa to ra"
const assembledY = (rank: number) => BASE_H / 2 + DIE_H * (rank + 0.5);

// ── Texture thủ tục (client-only nên có document) ─────────────────────────────
function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// Nhiễu hạt mịn → roughnessMap + bumpMap cho bề mặt "sần" của IO driver.
function makeNoiseTexture() {
  const size = 256;
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d")!;
  const img = ctx.createImageData(size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = 105 + Math.random() * 95;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(4, 4);
  return tex;
}

// Logo "PEBBLE SQUARE" in trên mặt IO driver (canvas → CanvasTexture, không phụ thuộc CDN font).
function makeBrandTexture() {
  const w = 640;
  const h = 256;
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d")!;
  ctx.clearRect(0, 0, w, h);
  // dấu hiệu "pebble" — ô vuông bo, khuyết góc
  ctx.fillStyle = GOLD;
  roundRect(ctx, 28, h / 2 - 52, 104, 104, 26);
  ctx.fill();
  ctx.fillStyle = "#10161d";
  roundRect(ctx, 64, h / 2 - 16, 44, 44, 12);
  ctx.fill();
  // chữ
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#eef3f8";
  ctx.font = "700 72px Arial, sans-serif";
  ctx.fillText("PEBBLE", 168, h / 2 - 32);
  ctx.fillStyle = "#aab4be";
  ctx.font = "600 46px Arial, sans-serif";
  ctx.letterSpacing = "10px";
  ctx.fillText("SQUARE", 170, h / 2 + 34);
  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 8;
  return tex;
}

// ── Chi tiết mặt die ──────────────────────────────────────────────────────────
function CoreArray({ size, cells }: { size: [number, number, number]; cells: [number, number] }) {
  const pts = useMemo(() => {
    const [nx, nz] = cells;
    const spanX = size[0] * 0.62;
    const spanZ = size[2] * 0.58;
    const out: [number, number][] = [];
    for (let i = 0; i < nx; i++)
      for (let j = 0; j < nz; j++) {
        const x = nx > 1 ? -spanX / 2 + (spanX / (nx - 1)) * i : 0;
        const z = nz > 1 ? -spanZ / 2 + (spanZ / (nz - 1)) * j : 0;
        out.push([x, z]);
      }
    return out;
  }, [size, cells]);
  const y = size[1] / 2 + 0.012;
  const cw = Math.min(size[0], size[2]) * 0.12;
  const geo = useMemo(() => new THREE.BoxGeometry(cw, 0.022, cw), [cw]);
  useEffect(() => () => geo.dispose(), [geo]);
  return (
    <group>
      {pts.map((p, i) => (
        <mesh key={i} position={[p[0], y, p[1]]} geometry={geo} material={CORE_MAT} />
      ))}
    </group>
  );
}

function LogicBars({ size, count }: { size: [number, number, number]; count: number }) {
  const bars = useMemo(() => {
    const span = size[0] * 0.62;
    return Array.from({ length: count }, (_, i) => {
      const t = i / (count - 1);
      const s = 1 / (1 + Math.exp(-(t * 8 - 4))); // đường cong kích hoạt (sigmoid)
      return { x: -span / 2 + span * t, h: 0.02 + 0.07 * s };
    });
  }, [size, count]);
  const baseY = size[1] / 2;
  return (
    <group>
      {bars.map((b, i) => (
        <mesh key={i} position={[b.x, baseY + b.h / 2, 0]} material={LOGIC_MAT}>
          <boxGeometry args={[size[0] * 0.05, b.h, size[2] * 0.52]} />
        </mesh>
      ))}
    </group>
  );
}

// ── Khối I/O Driver — high-tech: titanium sần, bo, có cấu kiện + branding ──────
function IODriver({
  anchorRef,
  noiseTex,
  brandTex,
}: {
  anchorRef: (el: THREE.Object3D | null) => void;
  noiseTex: THREE.Texture;
  brandTex: THREE.Texture;
}) {
  const W = 1.6;
  const H = 0.18;
  const D = 0.48;
  const cy = BASE_H / 2 + H / 2;
  const zc = 0.66;
  const pins = useMemo(() => Array.from({ length: 11 }, (_, i) => -W * 0.42 + (W * 0.84 * i) / 10), []);
  return (
    <group position={[0, cy, zc]}>
      {/* thân driver — titanium sần (noise → roughness + bump), bo cạnh */}
      <RoundedBox args={[W, H, D]} radius={0.035} smoothness={4} creaseAngle={0.5}>
        <meshStandardMaterial
          color={TITANIUM}
          metalness={0.92}
          roughness={0.52}
          roughnessMap={noiseTex}
          bumpMap={noiseTex}
          bumpScale={0.02}
          envMapIntensity={1.0}
        />
      </RoundedBox>

      {/* logo Pebble Square in trên mặt */}
      <mesh position={[-W * 0.12, H / 2 + 0.004, -D * 0.05]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[W * 0.46, W * 0.46 * 0.4]} />
        <meshStandardMaterial map={brandTex} transparent emissive="#ffffff" emissiveMap={brandTex} emissiveIntensity={0.4} roughness={0.6} metalness={0} />
      </mesh>

      {/* cấu kiện SMD nhỏ trên mặt */}
      <mesh position={[W * 0.34, H / 2 + 0.02, -D * 0.22]}>
        <boxGeometry args={[0.16, 0.05, 0.1]} />
        <meshStandardMaterial color="#11161c" roughness={0.55} metalness={0.4} />
      </mesh>
      <mesh position={[W * 0.34, H / 2 + 0.02, D * 0.0]}>
        <boxGeometry args={[0.1, 0.045, 0.1]} />
        <meshStandardMaterial color="#0d1318" roughness={0.5} metalness={0.4} />
      </mesh>
      {/* vạch tiếp xúc vàng nhỏ cạnh SMD */}
      <mesh position={[W * 0.34, H / 2 + 0.005, D * 0.2]}>
        <boxGeometry args={[0.22, 0.012, 0.16]} />
        <meshStandardMaterial color={GOLD} metalness={1} roughness={0.3} emissive={GOLD} emissiveIntensity={0.12} />
      </mesh>

      {/* hàng chân tiếp xúc (gold pins) chạy dọc mép trước */}
      {pins.map((x, i) => (
        <mesh key={i} position={[x, -H * 0.12, D / 2 + 0.03]}>
          <boxGeometry args={[0.055, 0.07, 0.09]} />
          <meshStandardMaterial color={GOLD} metalness={1} roughness={0.28} envMapIntensity={1.2} />
        </mesh>
      ))}

      {/* anchor cho leader I/O Driver — đặt ở mép trái khối để nhãn (bên trái) ra vùng trống */}
      <object3D ref={anchorRef} position={[-W * 0.46, H * 0.5 + 0.02, D * 0.18]} />
    </group>
  );
}

function Assembly({ leads }: { leads: RefObject<LeadEl[]> }) {
  const root = useRef<THREE.Group>(null);
  const dieGroups = useRef<(THREE.Group | null)[]>([]);
  const anchors = useRef<(THREE.Object3D | null)[]>([]);
  const { camera, size } = useThree();
  const v = useRef(new THREE.Vector3()).current;
  const lastProj = useRef<{ x: number; y: number }[]>([]).current;
  const noiseTex = useMemo(() => makeNoiseTexture(), []);
  const brandTex = useMemo(() => makeBrandTexture(), []);
  const packTex = useMemo(() => {
    const t = noiseTex.clone();
    t.needsUpdate = true;
    t.repeat.set(6, 6);
    return t;
  }, [noiseTex]);

  // Khoảng cách-x cố định từ MÉP khối tới thẻ nhãn + đoạn rẽ dọc (px) — đồng bộ với cha.
  const GAP = 46;
  const DROP = 15;
  const SIDES = [1, -1, 1, -1]; // [CORE-1 phải, Activation trái, CORE-2 phải, IO trái]

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (root.current) {
      const s = easeOut(clamp01(t / 0.7));
      root.current.scale.setScalar(0.93 + 0.07 * s);
    }
    // ráp → tách: nội suy vị trí + scale cho từng die (thấp nhất tách trước)
    DICE.forEach((d, i) => {
      const g = dieGroups.current[i];
      if (!g) return;
      const p = clamp01((t - (ASSEMBLE_DELAY + d.rank * STAGGER)) / SEP_DUR);
      const ep = easeOutBack(p);
      const es = easeOut(p);
      g.position.x = lerp(0, d.target[0], ep);
      g.position.y = lerp(assembledY(d.rank), d.target[1], ep);
      g.position.z = lerp(0, d.target[2], ep);
      g.scale.setScalar(lerp(ASSEM_SCALE, 1, es));
      // nảy ngẫu nhiên — chỉ bật SAU khi nổ-lắp xong (ramp mượt, không giật)
      const b = BOUNCE[i];
      const bg = clamp01((t - 2.2) / 1.2);
      g.position.y += b.amp * bg * Math.sin(t * b.freq + b.phase);
      g.position.x += b.amp * 0.4 * bg * Math.sin(t * b.freq * 0.8 + b.phase * 1.7);
      g.rotation.y = 0.1 * bg * Math.sin(t * b.freq * 0.6 + b.phase);
    });

    // chiếu anchor → màn hình; cập nhật leader VUÔNG GÓC + vị trí nhãn
    const els = leads.current;
    if (els && size.width > 0 && size.height > 0) {
      anchors.current.forEach((a, i) => {
        const L = els[i];
        if (!a || !L) return;
        a.updateWorldMatrix(true, false);
        a.getWorldPosition(v).project(camera);
        const x = (v.x * 0.5 + 0.5) * size.width;
        const y = (-v.y * 0.5 + 0.5) * size.height;
        // Throttle DOM: bỏ qua khi điểm chiếu dịch < 0.5px so với lần ghi trước → sau khi
        // die "nổ" xong (chỉ còn trôi rất nhẹ), gần như không còn thao tác DOM mỗi frame.
        const lp = lastProj[i];
        if (lp && Math.abs(lp.x - x) < 0.5 && Math.abs(lp.y - y) < 0.5) return;
        lastProj[i] = { x, y };
        const side = SIDES[i] ?? 1;
        const lx = x + side * GAP; // khoảng cách-x tới thẻ nhãn LUÔN = GAP (trái hay phải)
        const ly = y + DROP; // chân đoạn rẽ dọc = mép-trên thẻ nhãn
        // điểm: mép khối → (đi ngang) → góc → (rẽ dọc) → góc-trên thẻ nhãn
        L.poly?.setAttribute("points", `${x},${y} ${lx},${y} ${lx},${ly}`);
        L.dot?.setAttribute("cx", String(x));
        L.dot?.setAttribute("cy", String(y));
        L.core?.setAttribute("cx", String(x));
        L.core?.setAttribute("cy", String(y));
        if (L.label) {
          L.label.style.left = `${lx}px`;
          L.label.style.top = `${ly}px`;
        }
      });
    }
  });

  return (
    <group ref={root} position={[-0.28, 0, 0]}>
      {/* đế / package — titanium anode tối, bo, hơi sần */}
      <RoundedBox args={[BASE_W, BASE_H, BASE_D]} radius={0.05} smoothness={4} creaseAngle={0.5} position={[0, 0, 0]}>
        <meshStandardMaterial
          color={DARK_TI}
          metalness={0.85}
          roughness={0.46}
          roughnessMap={packTex}
          bumpMap={packTex}
          bumpScale={0.012}
          envMapIntensity={0.9}
        />
      </RoundedBox>
      {/* vùng active mỏng trên đế — ánh accent để "có sự sống" */}
      <RoundedBox args={[BASE_W * 0.8, 0.022, BASE_D * 0.62]} radius={0.008} smoothness={3} position={[0, BASE_H * 0.5 + 0.012, -BASE_D * 0.14]}>
        <meshStandardMaterial color="#1a3556" metalness={0.4} roughness={0.3} emissive={ACCENT} emissiveIntensity={0.22} />
      </RoundedBox>

      {/* khối I/O Driver high-tech (+ anchor index 3) */}
      <IODriver anchorRef={(el) => (anchors.current[3] = el)} noiseTex={noiseTex} brandTex={brandTex} />

      {/* 3 die — titanium, chi tiết theo nội dung; vị trí/scale do useFrame điều khiển */}
      {DICE.map((d, i) => (
        <group key={i} ref={(el) => (dieGroups.current[i] = el)} position={[0, assembledY(d.rank), 0]}>
          <RoundedBox args={d.size} radius={0.022} smoothness={4} creaseAngle={0.5}>
            <meshStandardMaterial
              color={d.color}
              metalness={0.94}
              roughness={0.34}
              envMapIntensity={1.15}
            />
          </RoundedBox>
          {d.kind === "core" ? <CoreArray size={d.size} cells={d.cells} /> : <LogicBars size={d.size} count={d.cells[0]} />}
          {/* anchor ở MÉP ngoài (phía nhãn) → leader xuất phát từ cạnh khối, không chạy ngang qua die */}
          <object3D ref={(el) => (anchors.current[i] = el)} position={[(SIDES[i] ?? 1) * d.size[0] * 0.46, d.size[1] * 0.5 + 0.02, 0]} />
        </group>
      ))}
    </group>
  );
}

export function ChipScene({ leads }: { leads: RefObject<LeadEl[]> }) {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [3.3, 2.7, 5.2], fov: 30 }}
      onCreated={({ camera }) => camera.lookAt(0, 0.78, 0)}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 4]} intensity={1.6} />
      <directionalLight position={[-5, 4, -3]} intensity={0.5} color="#bcd2ff" />
      <directionalLight position={[0, 2.5, -6]} intensity={0.45} color="#e0b056" />
      <Environment resolution={128} frames={1}>
        <Lightformer form="rect" intensity={2.6} position={[0, 6, 2]} scale={[10, 10, 1]} color="#dbe7ff" />
        <Lightformer form="rect" intensity={1.7} position={[6, 3, 4]} scale={[6, 8, 1]} color="#ffffff" />
        <Lightformer form="rect" intensity={1.2} position={[-6, 2, 2]} scale={[6, 8, 1]} color="#ffe6c0" />
        <Lightformer form="ring" intensity={1.1} position={[0, 4, -6]} scale={6} color="#bcd2ff" />
      </Environment>
      <Assembly leads={leads} />
    </Canvas>
  );
}
