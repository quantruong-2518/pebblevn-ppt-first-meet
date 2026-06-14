"use client";

import { motion } from "motion/react";

// Mô-típ "die" 3D cho bìa — gợi đúng sản phẩm gốc: chip bán dẫn Analog-PIM của Pebble Square.
// Pure CSS 3D (perspective + preserve-3d + translateZ) + motion. Không cần three.js.
// Lớp tách theo trục Z → có chiều sâu thật (parallax), không phải ảnh phẳng.

const ease = [0.16, 1, 0.3, 1] as const;

const S = 250; // cạnh package (px)
const T = 24; // độ dày (extrude theo Z)
const PAD = 24; // lề từ package vào die
const DIE = S - PAD * 2; // cạnh die

const wall =
  "absolute bg-gradient-to-b from-[#173453] to-[#0a1825] border border-accent/15";

// Vị trí các "node năng lực" nổi phía trên die — gợi chip làm được NHIỀU việc (không chỉ arc-fault).
const NODES = [
  { x: 36, y: 24, z: T + 46, d: 0 },
  { x: 190, y: 58, z: T + 70, d: 0.6 },
  { x: 128, y: 198, z: T + 54, d: 1.2 },
];

export function CoverChip3D() {
  const pins = Array.from({ length: 7 });
  return (
    <div
      aria-hidden
      className="pointer-events-none relative hidden h-full w-full items-center justify-center md:flex"
      style={{ perspective: "1200px" }}
    >
      {/* quầng sáng nền */}
      <div
        className="absolute"
        style={{
          width: 380,
          height: 380,
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(79,147,232,0.20), rgba(79,147,232,0.04) 45%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, rotateX: 70, rotateZ: -56, y: 44 }}
        animate={{ opacity: 1, rotateX: 58, rotateZ: -45, y: 0 }}
        transition={{ duration: 1.2, ease, delay: 0.15 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* trôi nhẹ vô hạn — cho cảm giác vật thể sống */}
        <motion.div
          animate={{ y: [0, -12, 0], rotateZ: [0, 1.6, 0] }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          style={{ transformStyle: "preserve-3d", width: S, height: S }}
          className="relative"
        >
          {/* mặt đáy (z = 0) */}
          <div className="absolute inset-0 bg-[#060f19]" />

          {/* chân (pins) trên mặt đáy, đua ra 4 cạnh */}
          {pins.map((_, i) => {
            const p = PAD + (i * (DIE - 8)) / (pins.length - 1);
            return (
              <div key={`pin-${i}`}>
                <span className="absolute bg-accent/45" style={{ left: p, top: -10, width: 4, height: 10 }} />
                <span className="absolute bg-accent/45" style={{ left: p, bottom: -10, width: 4, height: 10 }} />
                <span className="absolute bg-accent/45" style={{ top: p, left: -10, width: 10, height: 4 }} />
                <span className="absolute bg-accent/45" style={{ top: p, right: -10, width: 10, height: 4 }} />
              </div>
            );
          })}

          {/* 4 vách bên → tạo độ dày */}
          <div className={wall} style={{ width: S, height: T, top: 0, left: 0, transformOrigin: "top", transform: "rotateX(-90deg)" }} />
          <div className={wall} style={{ width: S, height: T, bottom: 0, left: 0, transformOrigin: "bottom", transform: "rotateX(90deg)" }} />
          <div className={wall} style={{ width: T, height: S, top: 0, left: 0, transformOrigin: "left", transform: "rotateY(90deg)" }} />
          <div className={wall} style={{ width: T, height: S, top: 0, right: 0, transformOrigin: "right", transform: "rotateY(-90deg)" }} />

          {/* mặt trên (z = T) */}
          <div
            className="absolute inset-0 border border-accent/35"
            style={{
              transform: `translateZ(${T}px)`,
              background: "linear-gradient(135deg, #102a42 0%, #0a1a2a 60%, #0c2138 100%)",
            }}
          >
            {/* die: lưới crossbar (gợi mảng tính-trong-bộ-nhớ Analog-PIM) */}
            <div
              className="absolute overflow-hidden border border-accent/30"
              style={{
                inset: PAD,
                backgroundColor: "#08151f",
                backgroundImage:
                  "linear-gradient(rgba(79,147,232,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(79,147,232,0.22) 1px, transparent 1px)",
                backgroundSize: `${DIE / 9}px ${DIE / 9}px`,
              }}
            >
              {/* lõi phát sáng */}
              <div
                className="absolute left-1/2 top-1/2"
                style={{
                  width: 42,
                  height: 42,
                  transform: "translate(-50%,-50%)",
                  background:
                    "radial-gradient(circle, rgba(224,176,86,0.9), rgba(224,176,86,0.18) 60%, transparent 72%)",
                  boxShadow: "0 0 22px 6px rgba(224,176,86,0.35)",
                }}
              />
              <span className="absolute bottom-1.5 right-2 font-mono text-[8px] uppercase tracking-[0.2em] text-accent/70">
                PIM
              </span>

              {/* tia quét */}
              <motion.div
                className="absolute left-0 right-0 bg-accent"
                style={{ top: 0, height: 2, boxShadow: "0 0 10px 2px rgba(79,147,232,0.7)" }}
                animate={{ y: [0, DIE - 2, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity }}
              />
            </div>
          </div>

          {/* node năng lực nổi phía trên (parallax theo Z) */}
          {NODES.map((n, i) => (
            <motion.span
              key={`node-${i}`}
              className="absolute rounded-full bg-accent"
              style={{
                left: n.x,
                top: n.y,
                width: 10,
                height: 10,
                transform: `translateZ(${n.z}px)`,
                boxShadow: "0 0 14px 3px rgba(79,147,232,0.6)",
              }}
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: n.d }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
