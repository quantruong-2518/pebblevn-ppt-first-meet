"use client";

import { motion, type Variants } from "motion/react";
import type { SlideData, Lang } from "@/lib/slides";
import { Figure } from "@/components/Figure";

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

export function Slide({ s, lang }: { s: SlideData; lang: Lang }) {
  return s.cover ? <Cover s={s} lang={lang} /> : <Content s={s} lang={lang} />;
}

function Content({ s, lang }: { s: SlideData; lang: Lang }) {
  return (
    <motion.div
      key={lang}
      variants={container}
      initial="hidden"
      animate="show"
      className="flex h-full w-full flex-col"
    >
      <motion.div
        variants={rise}
        className="font-sans text-[12px] font-semibold uppercase tracking-[0.34em] text-accent"
      >
        {s.eyebrow[lang]}
      </motion.div>

      <div className="mt-4 flex items-start gap-5">
        <motion.span
          variants={drawY}
          className="mt-[0.35em] hidden h-[clamp(2rem,5vw,3.4rem)] w-[3px] origin-top bg-gold md:block"
        />
        <motion.h2
          variants={rise}
          className="font-serif text-[clamp(1.9rem,4.4vw,3.1rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-ink"
        >
          {s.title[lang]}
        </motion.h2>
      </div>

      {s.headline && (
        <motion.p
          variants={rise}
          className="mt-4 max-w-[56ch] font-sans text-[clamp(1.08rem,1.75vw,1.5rem)] font-light leading-[1.42] text-ink/85"
        >
          {s.headline[lang]}
        </motion.p>
      )}

      <motion.div variants={drawX} className="mt-5 h-px w-24 origin-left bg-white/15" />

      {s.figure && (
        <motion.div variants={rise} className="mt-5">
          <Figure figure={s.figure} lang={lang} />
        </motion.div>
      )}

      {s.bullets && (
        <motion.ul variants={container} className="mt-5 flex flex-col gap-3">
          {s.bullets[lang].map((b, i) => (
            <motion.li key={i} variants={rise} className="flex items-baseline gap-4">
              <span className="font-mono text-[12px] font-medium tabular-nums text-accent/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-sans text-[clamp(1rem,1.5vw,1.25rem)] leading-snug text-ink/90">
                {b}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      )}

      <div className="mt-auto" />
    </motion.div>
  );
}

function Cover({ s, lang }: { s: SlideData; lang: Lang }) {
  return (
    <motion.div
      key={lang}
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
        {s.eyebrow[lang]}
      </motion.div>

      <motion.h1
        variants={rise}
        className="font-serif text-[clamp(3rem,9vw,6rem)] font-semibold leading-[0.95] tracking-[-0.02em] text-ink"
      >
        {s.title[lang]}
      </motion.h1>

      {s.headline && (
        <motion.p
          variants={rise}
          className="mt-7 max-w-[44ch] font-sans text-[clamp(1.2rem,2vw,1.65rem)] font-light leading-[1.4] text-ink/85"
        >
          {s.headline[lang]}
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
          {s.cobrand && (
            <span className="font-sans text-[13px] text-muted/90">
              ·{" "}
              {lang === "ko"
                ? "베트남 공식 공인 총판"
                : lang === "en"
                  ? "Official authorized distributor in Vietnam"
                  : "Nhà phân phối ủy quyền chính thức tại Việt Nam"}
            </span>
          )}
        </motion.div>
      )}

      {s.event && (
        <motion.div variants={rise} className="mt-4 font-mono text-[12px] uppercase tracking-[0.2em] text-accent">
          {s.event[lang]}
        </motion.div>
      )}
    </motion.div>
  );
}
