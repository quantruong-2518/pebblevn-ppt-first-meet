---
name: slide-copyedit
description: >-
  Copy-edit the VIETNAMESE language of the Pebble Vina launch deck — hunt 5
  classes of expression defects: (1) repeated words / phrases, (2) spelling,
  (3) imprecise semantics, (4) too "AI slop" / lacking a human voice, (5)
  long-winded confusing sentences. Use when the GM says "rà soát ngôn ngữ
  slide", "soát lỗi diễn đạt", "biên tập slide", "polish slide", "soát chính
  tả / lặp từ slide", or when finalizing slide copy before the stage. Runs over
  the whole deck or a single slide ("slide-copyedit 04"). Returns a PROPOSAL
  report (original → suggested fix + why); it does NOT edit files on its own —
  the GM approves first, then it applies. PREFLIGHT GATE: at preflight this runs
  FIRST — before any i18n locale fill / translation sync (e.g. the i18n-vi-first
  preflight triggered by "preflight", "dịch i18n", "fill translations", "sync
  locales", "chuẩn bị release"). The Vietnamese source must be clean before it
  is translated into KO/EN.
---

# Slide language review (Vietnamese copy-edit for the deck)

This skill is the **Vietnamese copy-editor** for the Pebble Vina launch deck. It
does **not** check facts / numbers / strategy (that's `analyst`, `product-lead`,
`cfo`) — it only audits the **quality of the wording** the audience will read,
in the deck's voice: "engineer talking to engineer, not flashy"
("kỹ sư nói với kỹ sư, không hào nhoáng").

> Company principle (CLAUDE.md §3): **Agent proposes, GM decides.**
> By default this skill **returns a proposal report and does NOT edit files.**
> Only edit when the GM explicitly says "sửa luôn" / "áp dụng" / "apply".

The skill file is English (technical artifact); the **report it produces for the
GM is written in Vietnamese** — Vietnamese is the company's working language.

---

## 0. Preflight ordering — run this FIRST

This skill is the **first preflight gate** for the deck. Because `vi` is the
translation source, the Vietnamese copy must be clean **before** it is rendered
into KO/EN.

- When the GM kicks off **preflight / release prep / locale sync** — i.e. any
  trigger for the global `i18n-vi-first` skill ("preflight", "preflight i18n",
  "điền ngôn ngữ", "dịch i18n", "fill translations", "sync locales", "chuẩn bị
  release") — run **this skill first**, get the `vi` edits approved and applied,
  and **only then** let `i18n-vi-first` fill / re-sync KO/EN from the cleaned
  `vi`.
- Rationale: editing `vi` after translation forces KO/EN to be redone. Edit the
  source first, translate once.
- If KO/EN already exist and a `vi` line changes here, that line's KO/EN is now
  stale → it's exactly what the subsequent `i18n-vi-first` preflight should
  re-translate. Make the stale lines easy to find (see the "⚠️ KO/EN cần dịch
  lại" flag in §3).

---

## 1. Scope: only the Vietnamese the audience sees

Deck content is split into **two layers** (don't mix them — see deck README
"Hai tầng tách bạch"):

- **SHOW layer** = `eyebrow / title / headline / bullets / figure` → the audience
  reads these. **This is the skill's primary scope.** Vietnamese (`vi`) is the
  **source**; KO/EN are translations.
- **WORKING-DOC** = `why / notes / need` + meta → internal, never on a slide.
  Skip by default; pick up an obvious typo only if it's free, never propose
  "polishing" it.

The Vietnamese SHOW copy lives in **two places that must stay in sync**:

1. `projects/thuyet-trinh-ra-mat-pebble-vina/deck/lib/slides.ts` — the official
   render. Look at the `vi` argument inside each `L(...)`, plus `bullets.vi` and
   `figure`. **This is where the finalized Vietnamese sentences live** → review
   here first.
2. `projects/thuyet-trinh-ra-mat-pebble-vina/slides/NN-*.md` — the content
   source of truth (the "🎯 Thông điệp chính" line and "🖼 Nội dung slide"
   section). Cross-check to catch errors and to flag drift when the two diverge.

Slide list: `00-bia` → `09-keu-goi-cam-on`, plus `99-phu-luc-ky-thuat`.

---

## 2. Procedure

1. **Set scope.** Default: the whole deck. If the GM names a number (e.g.
   "slide 04" / "slide-copyedit 04"): just that slide.
2. **Check the system date** (CLAUDE.md §5) — used for the report filename.
3. **Extract the Vietnamese SHOW text** of each slide from `slides.ts` (and
   cross-check `slides/NN-*.md`). List it field by field: eyebrow · title ·
   headline · each bullet · each figure label/sub/caption/source.
4. **Run the 5 checks** on each fragment (detailed rubric: read
   `references/criteria.md` — it holds the rubric, the Vietnamese "AI slop"
   wordlist, spelling traps, number conventions). For a large deck or when the
   GM asks for a "deep" pass, you may give each cluster of slides to a sub-agent
   and synthesize.
5. **Write the proposal report** in the format in §4 — every finding carries a
   **concrete rewrite**, not just a generic flag.
6. **Save the report** to `reports/YYYY-MM-DD-ra-soat-ngon-ngu-deck.md` (or
   `...-slide-NN.md` for a single slide). Give the GM a summary: total findings,
   how many 🔴 need fixing now.
7. **Wait for GM approval.** When the GM picks which items to apply → edit **both
   places** (`slides.ts` + `slides/NN-*.md`) to match, and **flag "KO/EN needs
   re-translation"** if a `vi` sentence changed meaning (see §3).

---

## 3. Safety constraints (read before proposing any edit)

- **Never change numbers or proper nouns.** Keep verbatim: `Pebble Vina`,
  `Pebble Square`, `MINT`, `Analog-PIM`, `KOCHAM`, `bác Kim`, `Bae Hak-yeol`,
  `Lee Choong-hyun`, `TCVN/QCVN`, `UL 1699B`, `IEC 63027`, and every figure
  (`17,6 TOPS/W`, `38%`, `9,58 GW`, `102.000`, `>92 tỷ USD`...). If a NUMBER /
  FACT looks wrong → **do not fix it**, flag it for `analyst`/`product-lead`.
  Copy-editing touches **wording only**, never the **data**.
- **Never introduce an over-claim.** Electrical safety is legally sensitive.
  Don't "polish" into absolutes ("đảm bảo không cháy", "loại bỏ hoàn toàn rủi
  ro"). Keep "phát hiện sớm", "giảm rủi ro".
- **Don't break intentional repetition.** Slide 01 ↔ 09 is a **bookend**
  (the positioning line repeats on purpose); rhetorical anaphora ("đừng để cháy,
  đừng dừng máy, đừng trượt kiểm định") is deliberate. Tell **accidental
  repetition** (fix) apart from **rhetorical repetition** (keep).
- **Respect Vietnamese number convention:** comma decimal (`17,6`), dot
  thousands separator (`102.000`). Do NOT "fix" them to English style. (KO/EN use
  a dot decimal — that's correct, leave it.)
- **Trilingual:** edit `vi` only. If a `vi` edit **changes meaning** (not just
  word choice) → write "⚠️ KO/EN cần dịch lại" in the report so they can be
  matched. Don't translate KO/EN inside this skill.
- **Every finding needs a rewrite.** "This sentence feels AI" with no
  replacement is useless. Always attach a rewrite in the deck's voice.

---

## 4. Report format

Open with status frontmatter (CLAUDE.md §5), then a table per slide. The report
prose is **Vietnamese**.

```markdown
---
title: Rà soát ngôn ngữ deck Pebble Vina
status: proposed
owner: GM
updated: YYYY-MM-DD
links: [projects/thuyet-trinh-ra-mat-pebble-vina/deck/lib/slides.ts]
---

## Tóm tắt
- N phát hiện · 🔴 a (cần xử ngay) · 🟡 b · 🔵 c
- Điểm nóng: <slide nhiều / nặng lỗi nhất>

## Slide 02 — Nỗi đau
| # | Trường | Nhóm | Mức | Nguyên văn | Đề xuất | Vì sao |
|---|--------|------|-----|-----------|---------|--------|
| 1 | headline | ngữ nghĩa | 🟡 | "…kèm rủi ro cháy do hồ quang và ngừng phát." | "…kéo theo rủi ro cháy hồ quang và ngừng phát điện." | "kèm" lỏng; "ngừng phát" thiếu tân ngữ, dễ mơ hồ |
| 2 | bullet 1 | lặp cụm | 🔵 | "mất tài sản … mất uy tín … mất doanh thu" | (giữ — điệp ngữ tu từ cố ý) | đánh dấu để GM xác nhận là cố ý |
```

**Severity scale:**
- 🔴 **Must fix** — blatant spelling error, wrong meaning, over-claim, a sentence
  the audience will misread.
- 🟡 **Should fix** — clumsy, accidental repetition, clear AI slop, a long
  sentence to split.
- 🔵 **Polish** — optional, sharpens the line; includes "confirm this is
  intentional" notes.

End the report with a **"Cần GM quyết"** section listing the calls that sit
between "error" and "style", so the GM can decide quickly.

---

## 5. The five defect classes — summary (details: `references/criteria.md`)

1. **Repeated words / phrases** — the same word/phrase repeating close together
   in one slide, or a crutch phrase worn thin across the deck (e.g. "ngay tại
   chỗ", "phát hiện sớm", "không cần cloud"). Except deliberate rhetoric / the
   bookend.
2. **Spelling** — tone marks, easily-confused pairs (sát/xát, dày/giày,
   dãn/giãn…), proper nouns & terms spelled correctly and consistently,
   Vietnamese number convention.
3. **Imprecise semantics** — loose / wrong-register words, broken cause-effect,
   missing object, a claim that outruns its evidence, over-claim.
4. **Too "AI slop" / no human voice** — empty inflated words, stacked buzzwords,
   perfectly parallel triplets, "không chỉ… mà còn", em-dash flooding, generic
   marketing voice. Target: concrete, restrained, quietly confident.
5. **Long-winded confusing sentences** — SHOW sentences too long / too many
   nested clauses; split them, cut filler, front-load the main point.
