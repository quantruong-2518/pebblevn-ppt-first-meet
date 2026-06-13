"use client";

import { motion, type Variants } from "motion/react";
import type { SlideData } from "@/lib/slides";
import { Badge } from "@/components/ui/badge";

const ease = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.14 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};
const drawX: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.6, ease } },
};
const drawY: Variants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 0.5, ease } },
};

export function Slide({ s }: { s: SlideData }) {
  return s.cover ? <Cover s={s} /> : <Content s={s} />;
}

function Content({ s }: { s: SlideData }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex h-full w-full flex-col"
    >
      <motion.div
        variants={rise}
        className="font-sans text-[12px] font-semibold uppercase tracking-[0.34em] text-accent"
      >
        {s.eyebrow}
      </motion.div>

      <div className="mt-5 flex items-start gap-5">
        <motion.span
          variants={drawY}
          className="mt-[0.35em] hidden h-[clamp(2.2rem,5.5vw,3.6rem)] w-[3px] origin-top bg-gold md:block"
        />
        <motion.h2
          variants={rise}
          className="font-serif text-[clamp(1.9rem,4.4vw,3.1rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-ink"
        >
          {s.title}
        </motion.h2>
      </div>

      {s.headline && (
        <motion.p
          variants={rise}
          className="mt-5 max-w-[54ch] font-sans text-[clamp(1.05rem,1.7vw,1.4rem)] font-light leading-[1.45] text-muted"
        >
          {s.headline}
        </motion.p>
      )}

      <motion.div variants={drawX} className="mt-7 h-px w-24 origin-left bg-white/15" />

      {s.bullets && (
        <motion.ul variants={container} className="mt-7 flex flex-col gap-4">
          {s.bullets.map((b, i) => (
            <motion.li key={i} variants={rise} className="flex items-baseline gap-4">
              <span className="font-mono text-[12px] font-medium tabular-nums text-accent/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-sans text-[clamp(0.98rem,1.4vw,1.18rem)] leading-snug text-ink/90">
                {b}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      )}

      <div className="mt-auto" />

      {s.need && (
        <motion.div
          variants={rise}
          className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">need</span>
          {s.need.map((n, i) => (
            <Badge key={i}>{n}</Badge>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

function Cover({ s }: { s: SlideData }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex h-full w-full flex-col justify-center"
    >
      <motion.div
        variants={rise}
        className="mb-6 flex items-center gap-3 font-sans text-[12px] font-semibold uppercase tracking-[0.3em] text-gold"
      >
        <span className="h-px w-10 bg-gold/60" />
        {s.eyebrow}
      </motion.div>

      <motion.h1
        variants={rise}
        className="font-serif text-[clamp(3rem,9vw,6rem)] font-semibold leading-[0.95] tracking-[-0.02em] text-ink"
      >
        {s.title}
      </motion.h1>

      {s.headline && (
        <motion.p
          variants={rise}
          className="mt-7 max-w-[42ch] font-sans text-[clamp(1.15rem,2vw,1.6rem)] font-light leading-[1.4] text-muted"
        >
          {s.headline}
        </motion.p>
      )}

      <motion.div
        variants={drawX}
        className="mt-9 h-px w-40 origin-left bg-gradient-to-r from-gold to-transparent"
      />

      {s.cobrand && (
        <motion.div variants={rise} className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-mono text-[13px] uppercase tracking-[0.16em] text-ink">Pebble Vina</span>
          <span className="text-accent">×</span>
          <span className="font-mono text-[13px] uppercase tracking-[0.16em] text-ink">Pebble Square</span>
          <span className="font-sans text-[13px] text-muted/80">· Nhà phân phối ủy quyền chính thức tại Việt Nam</span>
        </motion.div>
      )}
    </motion.div>
  );
}
