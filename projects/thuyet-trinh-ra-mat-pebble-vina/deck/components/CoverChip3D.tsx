"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { Cpu } from "lucide-react";
import type { LeadEl } from "@/components/ChipScene";
import type { Lang, LText } from "@/lib/slides";

// Bìa — chip 3D thật (R3F) + legend khoá đúng die (xem ChipScene). Canvas client-only (ssr:false).
const ChipScene = dynamic(() => import("@/components/ChipScene").then((m) => m.ChipScene), { ssr: false });

const ease = [0.16, 1, 0.3, 1] as const;

// Mỗi legend = NHÃN + CHÚ THÍCH nhỏ (in nghiêng). Đặt CẠNH đúng item; ChipScene cập nhật
// vị trí mỗi frame sao cho khoảng cách-x tới khối LUÔN bằng nhau (trái hay phải).
// side khớp SIDES trong ChipScene: [CORE-1 phải, Activation trái, CORE-2 phải, IO trái].
const tri = (vi: string, ko: string, en: string): LText => ({ vi, ko, en });

// legend (label) + desc TAM NGỮ — đổi theo phím "l" (VI/KO/EN). KO là bản draft, cần native proofread.
const CALLOUTS: { label: LText; desc: LText; side: "left" | "right" }[] = [
  { label: tri("PIM CORE-1", "PIM 코어-1", "PIM CORE-1"), desc: tri("nhân Analog-PIM", "아날로그-PIM 코어", "Analog-PIM core"), side: "right" },
  { label: tri("Activation Logic", "활성화 로직", "Activation Logic"), desc: tri("kích hoạt phi tuyến", "비선형 활성화", "nonlinear activation"), side: "left" },
  { label: tri("PIM CORE-2", "PIM 코어-2", "PIM CORE-2"), desc: tri("nhân PIM song song", "병렬 PIM 코어", "parallel PIM core"), side: "right" },
  { label: tri("I/O Driver", "I/O 드라이버", "I/O Driver"), desc: tri("giao tiếp & nguồn", "인터페이스 & 전원", "interface & power"), side: "left" },
];

const PLUSES = [
  { left: "8%", top: "14%", size: 12, delay: 0 },
  { left: "94%", top: "86%", size: 11, delay: 0.9 },
  { left: "12%", top: "90%", size: 10, delay: 1.5 },
];

function NeonPlus({ left, top, size, delay }: { left: string; top: string; size: number; delay: number }) {
  const glow = "0 0 6px rgba(255,255,255,0.9)";
  return (
    <motion.span
      className="absolute"
      style={{ left, top, width: size, height: size, transform: "translate(-50%,-50%)" }}
      animate={{ opacity: [0.2, 0.8, 0.35, 0.7, 0.25] }}
      transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <span className="absolute bg-white" style={{ left: "50%", top: 0, width: 1.5, height: "100%", transform: "translateX(-50%)", boxShadow: glow }} />
      <span className="absolute bg-white" style={{ top: "50%", left: 0, height: 1.5, width: "100%", transform: "translateY(-50%)", boxShadow: glow }} />
    </motion.span>
  );
}

export function CoverChip3D({ lang }: { lang: Lang }) {
  const leads = useRef<LeadEl[]>([]);
  const setLead = (i: number, k: keyof LeadEl, el: LeadEl[keyof LeadEl]) => {
    (leads.current[i] ??= { poly: null, dot: null, core: null, label: null })[k] = el as never;
  };

  return (
    <div aria-hidden className="pointer-events-none relative hidden h-full w-full md:block">
      {/* quầng sáng nền */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 460,
          height: 460,
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(79,147,232,0.18), rgba(79,147,232,0.04) 45%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />

      {/* cảnh 3D */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease }}
      >
        <ChipScene leads={leads} />
      </motion.div>

      {/* mini-title */}
      <motion.div
        className="absolute left-[4%] top-[6%] flex items-center gap-2 text-accent"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Cpu className="h-4 w-4" strokeWidth={2.2} />
        <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-ink/90">Analog-PIM</span>
      </motion.div>

      {/* leader VUÔNG GÓC (ngang → dọc), điểm gắn die do ChipScene cập nhật mỗi frame */}
      <motion.svg
        className="absolute inset-0 h-full w-full overflow-visible"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.9 }}
      >
        {CALLOUTS.map((c, i) => (
          <g key={`lead-${i}`}>
            <polyline
              ref={(el) => setLead(i, "poly", el)}
              points="-100,-100 -100,-100 -100,-100"
              fill="none"
              stroke="rgba(255,255,255,0.42)"
              strokeWidth={1}
              strokeLinejoin="round"
            />
            <circle ref={(el) => setLead(i, "dot", el)} cx={-100} cy={-100} r={3.6} fill="#4f93e8" />
            <circle ref={(el) => setLead(i, "core", el)} cx={-100} cy={-100} r={1.5} fill="#eaf2fb" />
          </g>
        ))}
      </motion.svg>

      {/* thẻ nhãn legend: nền tối mờ (glassy) cho DỄ ĐỌC trên titanium sáng; treo dưới góc rẽ,
          tách khỏi line. Vị trí (left/top px) do ChipScene set mỗi frame; top = mép-trên thẻ. */}
      {CALLOUTS.map((c, i) => (
        <motion.div
          key={`lbl-${i}`}
          ref={(el) => setLead(i, "label", el)}
          className="absolute"
          style={{
            left: -100,
            top: -100,
            transform: c.side === "left" ? "translateX(-100%)" : "none",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 2.0 + i * 0.12, ease }}
        >
          <div
            className="rounded-md border border-accent/20 bg-base/80 px-2 py-1 shadow-[0_3px_12px_rgba(0,0,0,0.4)] backdrop-blur-sm"
            style={{ textAlign: c.side === "left" ? "right" : "left" }}
          >
            <div className="whitespace-nowrap font-sans text-[11.5px] font-semibold leading-tight text-ink">{c.label[lang]}</div>
            <div className="whitespace-nowrap font-serif text-[10px] italic leading-snug text-muted">{c.desc[lang]}</div>
          </div>
        </motion.div>
      ))}

      {PLUSES.map((p, i) => (
        <NeonPlus key={`plus-${i}`} {...p} />
      ))}
    </div>
  );
}
