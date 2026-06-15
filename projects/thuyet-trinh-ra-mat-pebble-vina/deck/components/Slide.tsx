"use client";

import { motion, type Variants } from "motion/react";
import type { SlideData, Lang } from "@/lib/slides";
import { Figure } from "@/components/Figure";
import { CoverChip3D } from "@/components/CoverChip3D";
import { rich } from "@/lib/rich";

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
          {rich(s.title[lang])}
        </motion.h2>
      </div>

      {s.headline && (
        <motion.p
          variants={rise}
          className="mt-4 max-w-[56ch] font-sans text-[clamp(1.08rem,1.75vw,1.5rem)] font-light leading-[1.42] text-ink/85"
        >
          {rich(s.headline[lang])}
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
                {rich(b)}
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
      className="grid h-full w-full grid-cols-1 items-center gap-x-10 md:grid-cols-[42fr_58fr]"
    >
      {/* CỘT TRÁI — chữ */}
      <div className="flex flex-col justify-center">
        <motion.div
          variants={rise}
          className="mb-5 flex items-center gap-3 font-sans text-[12px] font-semibold uppercase tracking-[0.3em] text-gold"
        >
          <span className="h-px w-10 bg-gold/60" />
          {s.eyebrow[lang]}
        </motion.div>

        <motion.h1
          variants={rise}
          className="font-serif text-[clamp(2.6rem,6.5vw,4.6rem)] font-semibold leading-[0.95] tracking-[-0.02em] text-ink"
        >
          {s.title[lang]}
        </motion.h1>

        {s.slogan && (
          <motion.p
            variants={rise}
            className="mt-5 max-w-[30ch] text-balance font-sans text-[clamp(1.35rem,2.35vw,2rem)] font-light leading-[1.18] text-ink"
          >
            {s.slogan[lang]}
          </motion.p>
        )}

        {s.headline && (
          <motion.p
            variants={rise}
            className="mt-4 max-w-[46ch] font-sans text-[clamp(1rem,1.45vw,1.2rem)] font-light leading-[1.45] text-muted"
          >
            {s.headline[lang]}
          </motion.p>
        )}

        <motion.div
          variants={drawX}
          className="mt-7 h-px w-40 origin-left bg-gradient-to-r from-gold to-transparent"
        />

        {s.cobrand && (
          <motion.div variants={rise} className="mt-6 max-w-[44ch] font-sans text-[13px] leading-relaxed text-muted/90">
            <CobrandLine lang={lang} />
          </motion.div>
        )}

        <motion.div variants={rise} className="mt-6 flex flex-col gap-1.5">
          {s.presenter && (
            <div className="flex items-center gap-2 font-sans text-[13.5px] text-ink/90">
              <span className="h-1 w-1 rounded-full bg-gold" />
              {s.presenter[lang]}
            </div>
          )}
          {s.audience && <div className="font-sans text-[12.5px] text-muted">{s.audience[lang]}</div>}
          {s.event && (
            <div className="mt-1 font-mono text-[12px] uppercase tracking-[0.2em] text-accent">{s.event[lang]}</div>
          )}
        </motion.div>
      </div>

      {/* CỘT PHẢI — die 3D */}
      <CoverChip3D lang={lang} />
    </motion.div>
  );
}

// Dòng co-brand gọn: chỉ nhắc "Pebble Square" một lần (không lặp "Pebble Vina" — đã có ở tiêu đề).
function CobrandLine({ lang }: { lang: Lang }) {
  if (lang === "ko")
    return (
      <>
        Pebble Square(한국) 기술의 <span className="font-medium text-ink/90">공식 공인 총판</span>
      </>
    );
  if (lang === "en")
    return (
      <>
        The <span className="font-medium text-ink/90">official authorized distributor</span> of Pebble Square (Korea)
        technology
      </>
    );
  return (
    <>
      Nhà <span className="font-medium text-ink/90">phân phối ủy quyền chính thức</span> công nghệ Pebble Square (Hàn
      Quốc)
    </>
  );
}
