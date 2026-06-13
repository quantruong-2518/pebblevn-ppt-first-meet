"use client";

import { AnimatePresence, motion } from "motion/react";
import type { SlideData } from "@/lib/slides";

// Bảng "đồng hồ" meta — truy vết: vì sao slide này, ai làm, trạng thái, file nguồn.
// Nhãn (key) bằng mono tiếng Anh (ASCII), giá trị bằng sans (an toàn tiếng Việt).
export function MetaPanel({ s, open }: { s: SlideData; open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-0 top-0 z-30 flex h-full w-[clamp(300px,28vw,380px)] flex-col gap-4 overflow-auto border-l border-white/10 bg-surface/95 p-7 backdrop-blur-sm"
        >
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              slide {String(s.n)} · beat {String(s.nhip)}
            </div>
            <h3 className="mt-1 font-serif text-2xl font-semibold text-ink">{s.title}</h3>
          </div>

          <dl className="flex flex-col">
            <Row k="status" v={<span className="rounded border border-gold/30 bg-gold/10 px-1.5 py-0.5 font-sans text-gold">{s.status}</span>} />
            <Row k="owner" v={s.owner} />
            <Row k="for" v={s.gatDau} />
            <Row k="tech" v={s.tech} />
            <Row k="source" v={`slides/${s.file}`} mono />
          </dl>

          <Block label="why" body={s.why} />
          {s.notes && <Block label="script" body={s.notes} />}
          {s.need && (
            <Block label="need" body={s.need.join("  ·  ")} />
          )}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

function Row({ k, v, mono }: { k: string; v: React.ReactNode; mono?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/8 py-2">
      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{k}</dt>
      <dd className={`text-right text-[13px] font-medium text-ink ${mono ? "font-mono text-[12px]" : "font-sans"}`}>
        {v}
      </dd>
    </div>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div className="border-t border-white/10 pt-3">
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">{label}</div>
      <p className="mt-1.5 font-sans text-[13px] leading-relaxed text-muted">{body}</p>
    </div>
  );
}
