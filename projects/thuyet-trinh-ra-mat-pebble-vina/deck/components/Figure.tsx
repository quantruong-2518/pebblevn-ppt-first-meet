"use client";

import { motion, type Variants } from "motion/react";
import type { Figure as Fig, Lang, LText } from "@/lib/slides";
import { rich } from "@/lib/rich";

const ease = [0.16, 1, 0.3, 1] as const;
const wrap: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const rise: Variants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } };
const grow: Variants = { hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.5, ease } } };

// Khung hình — biến điệu thị giác cho từng slide. Mọi nhãn lấy theo ngôn ngữ hiện tại.
export function Figure({ figure, lang }: { figure: Fig; lang: Lang }) {
  const tx = (t: LText) => t[lang];
  switch (figure.kind) {
    case "stat":
      return (
        <motion.div variants={wrap} initial="hidden" animate="show" className="flex flex-col gap-2">
          <div className="flex items-end gap-5">
            <motion.span
              variants={rise}
              className="font-serif text-[clamp(3.4rem,9vw,6rem)] font-semibold leading-[0.9] tracking-[-0.02em] text-accent"
            >
              {tx(figure.value)}
            </motion.span>
            <motion.span variants={rise} className="mb-2 max-w-[34ch] font-sans text-[clamp(0.95rem,1.4vw,1.18rem)] leading-snug text-ink/90">
              {rich(tx(figure.caption))}
            </motion.span>
          </div>
          {figure.source && (
            <motion.span variants={rise} className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {tx(figure.source)}
            </motion.span>
          )}
        </motion.div>
      );

    case "flow":
      return (
        <motion.div variants={wrap} initial="hidden" animate="show" className="flex flex-col gap-4">
          <div className="flex flex-wrap items-stretch gap-3">
            {figure.steps.map((st, i) => (
              <div key={i} className="flex items-center gap-3">
                <motion.div
                  variants={rise}
                  className="flex min-w-[8.5rem] flex-col gap-1 border border-white/12 bg-white/[0.02] px-4 py-3"
                >
                  <span className="font-sans text-[clamp(1rem,1.5vw,1.25rem)] font-medium text-ink">{rich(tx(st.label))}</span>
                  {st.sub && <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">{tx(st.sub)}</span>}
                </motion.div>
                {i < figure.steps.length - 1 && (
                  <motion.span variants={rise} className="font-mono text-lg text-accent" aria-hidden>
                    →
                  </motion.span>
                )}
              </div>
            ))}
          </div>
          <motion.div variants={grow} className="h-px w-full origin-left bg-white/10" />
          <motion.span variants={rise} className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {rich(tx(figure.foot))}
          </motion.span>
        </motion.div>
      );

    case "forces":
      return (
        <motion.div variants={wrap} initial="hidden" animate="show" className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {figure.items.map((it, i) => (
            <motion.div key={i} variants={rise} className="flex flex-col gap-2 border-t-2 border-accent/60 bg-white/[0.02] px-4 py-4">
              <span className="font-mono text-[12px] font-medium tabular-nums text-accent/70">{`0${i + 1}`}</span>
              <span className="font-sans text-[clamp(1rem,1.45vw,1.22rem)] font-medium leading-snug text-ink">{rich(tx(it.label))}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] leading-relaxed text-muted">{tx(it.sub)}</span>
            </motion.div>
          ))}
        </motion.div>
      );

    case "twocol":
      return (
        <motion.div variants={wrap} initial="hidden" animate="show" className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 md:grid-cols-2">
          <Col head={tx(figure.left.head)} items={figure.left.items.map(tx)} tone="ink" />
          <Col head={tx(figure.right.head)} items={figure.right.items.map(tx)} tone="gold" />
        </motion.div>
      );

    case "matrix":
      return (
        <motion.div variants={wrap} initial="hidden" animate="show" className="flex flex-col gap-3">
          {/* 4 cột: trên = năng lực Pebble Square · ↓ · dưới = phân khúc VN + số bằng chứng */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {figure.cols.map((c, i) => (
              <motion.div key={i} variants={rise} className="flex flex-col border border-white/10 bg-white/[0.02]">
                <div className="flex flex-col gap-0.5 border-b border-white/10 bg-accent/[0.06] px-4 py-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent/70">Pebble Square</span>
                  <span className="font-sans text-[clamp(0.95rem,1.25vw,1.12rem)] font-medium leading-snug text-ink">{tx(c.cap)}</span>
                </div>
                <span className="py-1 text-center font-mono text-sm text-accent/60" aria-hidden>↓</span>
                <div className="flex flex-1 flex-col gap-2 px-4 pb-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Vietnam</span>
                  <span className="font-sans text-[clamp(0.9rem,1.2vw,1.05rem)] font-medium leading-snug text-ink/90">{tx(c.seg)}</span>
                  <span className="mt-auto pt-1 font-mono text-[11px] leading-relaxed tabular-nums text-muted">{c.stat}</span>
                </div>
              </motion.div>
            ))}
          </div>
          {/* đòn bẩy xuyên suốt — KOCHAM */}
          <motion.div variants={rise} className="flex items-center gap-3 border-l-2 border-gold bg-gold/[0.06] px-4 py-2.5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span className="font-sans text-[clamp(0.9rem,1.2vw,1.05rem)] leading-snug text-ink/90">{tx(figure.bar)}</span>
          </motion.div>
          <motion.span variants={rise} className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
            {tx(figure.foot)}
          </motion.span>
        </motion.div>
      );

    case "bridge":
      return (
        <motion.div variants={wrap} initial="hidden" animate="show" className="flex flex-col gap-4">
          <div className="flex items-center">
            {figure.nodes.map((nd, i) => (
              <div key={i} className="flex flex-1 items-center">
                <motion.div variants={rise} className="flex flex-col items-center gap-2">
                  <span className={`h-4 w-4 rounded-full ${i === (figure.gold ?? 1) ? "bg-gold" : "bg-accent"}`} />
                  <span className="whitespace-nowrap font-sans text-[clamp(1rem,1.5vw,1.3rem)] font-medium text-ink">{tx(nd)}</span>
                </motion.div>
                {i < figure.nodes.length - 1 && (
                  <motion.div variants={grow} className="mx-2 mb-7 h-px flex-1 origin-left bg-gradient-to-r from-accent/70 to-accent/30" />
                )}
              </div>
            ))}
          </div>
          <motion.span variants={rise} className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
            {rich(tx(figure.foot))}
          </motion.span>
        </motion.div>
      );
  }
}

function Col({ head, items, tone }: { head: string; items: string[]; tone: "ink" | "gold" }) {
  const accent = tone === "gold" ? "text-gold" : "text-accent";
  const dot = tone === "gold" ? "bg-gold" : "bg-accent";
  return (
    <motion.div variants={rise} className="flex flex-col gap-3 bg-white/[0.02] px-5 py-4">
      <span className={`font-mono text-[12px] font-semibold uppercase tracking-[0.18em] ${accent}`}>{head}</span>
      <ul className="flex flex-col gap-2.5">
        {items.map((it, i) => (
          <li key={i} className="flex items-baseline gap-2.5 font-sans text-[clamp(0.92rem,1.3vw,1.1rem)] leading-snug text-ink/90">
            <span className={`mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-[1px] ${dot}`} />
            {rich(it)}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
