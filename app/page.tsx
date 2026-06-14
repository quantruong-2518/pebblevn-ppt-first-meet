"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { DECK, APPENDIX, LANGS, LANG_LABEL, type Lang } from "@/lib/slides";
import { Slide } from "@/components/Slide";

const variants = {
  enter: (d: number) => ({ x: d > 0 ? 70 : -70, opacity: 0, filter: "blur(6px)" }),
  center: { x: 0, opacity: 1, filter: "blur(0px)" },
  exit: (d: number) => ({ x: d > 0 ? -70 : 70, opacity: 0, filter: "blur(6px)" }),
};

export default function DeckPage() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [lang, setLang] = useState<Lang>("vi");
  const [appendix, setAppendix] = useState(false);
  const total = DECK.length;

  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(total - 1, next));
      setDir(clamped >= i ? 1 : -1);
      setI(clamped);
    },
    [i, total],
  );

  const cycleLang = useCallback(() => {
    setLang((l) => LANGS[(LANGS.indexOf(l) + 1) % LANGS.length]);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (k === "a") {
        setAppendix((v) => !v);
        return;
      }
      if (e.key === "Escape") {
        setAppendix(false);
        return;
      }
      if (appendix) return; // khóa điều hướng khi đang ở phụ lục
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(i + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        go(i - 1);
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(total - 1);
      } else if (k === "l") {
        cycleLang();
      } else if (k === "1") {
        setLang("vi");
      } else if (k === "2") {
        setLang("ko");
      } else if (k === "3") {
        setLang("en");
      } else if (k === "f") {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, go, total, cycleLang, appendix]);

  const s = appendix ? APPENDIX[0] : DECK[i];
  const pct = Math.round(((i + 1) / total) * 100);
  const animKey = `${appendix ? "ap" : i}`;

  return (
    <main className="deck-bg fixed inset-0 flex items-center justify-center overflow-hidden">
      {/* Khung "instrument" */}
      <div className="relative flex h-[min(94vh,680px)] w-[min(95vw,1200px)] flex-col border border-white/10 bg-white/[0.012] px-[clamp(1.5rem,5vw,4.5rem)] py-[clamp(1.25rem,3.5vh,2.75rem)]">
        {/* dấu căn 4 góc */}
        <Tick className="left-[-1px] top-[-1px] border-l border-t" />
        <Tick className="right-[-1px] top-[-1px] border-r border-t" />
        <Tick className="bottom-[-1px] left-[-1px] border-b border-l" />
        <Tick className="bottom-[-1px] right-[-1px] border-b border-r" />

        {/* Header */}
        <header className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          <div className="flex items-center gap-3">
            {appendix ? (
              <span className="text-gold">appendix</span>
            ) : (
              <>
                <span className="tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-white/20">/</span>
                <span className="tabular-nums">{String(total).padStart(2, "0")}</span>
              </>
            )}
            <span className="ml-3 hidden text-ink sm:inline">Pebble&nbsp;Vina</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded border border-accent/30 bg-accent/10 px-1.5 py-0.5 text-accent">{LANG_LABEL[lang]}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span>beat {String(s.nhip)}</span>
          </div>
        </header>

        {/* Vùng nội dung */}
        <div className="relative flex-1 overflow-hidden">
          {/* số slide mờ làm nền */}
          {!s.cover && (
            <div className="pointer-events-none absolute -right-2 -top-6 select-none font-serif text-[clamp(8rem,22vw,16rem)] font-semibold leading-none text-white/[0.022]">
              {String(s.n).padStart(2, "0")}
            </div>
          )}
          <div className="relative flex h-full items-stretch py-[clamp(0.5rem,2vh,1.75rem)]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={animKey}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Slide s={s} lang={lang} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer: progress */}
        <footer className="flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10">
            <motion.div
              className="h-px bg-accent"
              animate={{ width: appendix ? "100%" : `${pct}%` }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <span className="font-mono text-[11px] tabular-nums text-muted">{appendix ? "—" : `${pct}%`}</span>
        </footer>
      </div>

      {/* Gợi ý phím */}
      <div className="pointer-events-none fixed bottom-3 left-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted/60">
        ← → / space · <span className="text-ink/70">l</span> lang ·{" "}
        <span className="text-ink/70">a</span> appendix · <span className="text-ink/70">f</span> fullscreen
      </div>

      {/* Vùng bấm trái/phải (tắt khi ở phụ lục) */}
      {!appendix && (
        <>
          <button
            aria-label="Slide trước"
            onClick={() => go(i - 1)}
            className="fixed left-0 top-0 z-10 h-full w-[20%] cursor-w-resize"
          />
          <button
            aria-label="Slide sau"
            onClick={() => go(i + 1)}
            className="fixed right-0 top-0 z-10 h-full w-[20%] cursor-e-resize"
          />
        </>
      )}
    </main>
  );
}

function Tick({ className }: { className: string }) {
  return <span aria-hidden className={`absolute h-3.5 w-3.5 border-accent/50 ${className}`} />;
}
