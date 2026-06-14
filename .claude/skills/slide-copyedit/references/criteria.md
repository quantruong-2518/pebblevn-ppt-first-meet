# Review criteria — 5 classes of expression defects (Vietnamese copy)

Reference for `slide-copyedit`. Read when you need the detailed rubric,
wordlists, examples. The deck's target voice: **"engineer talking to engineer,
not flashy"** ("kỹ sư nói với kỹ sư, không hào nhoáng") — concrete, restrained,
quietly confident; short sentences you can scan on a projector.

Note: the rubric prose is English, but the **data tokens stay Vietnamese** —
wordlists, examples, and proper nouns are the target-language material being
reviewed.

---

## Class 1 — Repeated words / phrases

**Flag:**
- The same content word (noun/verb/adjective) appearing ≥2 times within **one
  slide** at close range with no rhetorical purpose. E.g. headline + bullet both
  leaning on "rủi ro … rủi ro … rủi ro".
- A worn-thin crutch phrase **across the deck**: "ngay tại chỗ / on-device",
  "phát hiện sớm", "không cần cloud", "công nghệ Hàn", "giải pháp". Twice or
  thrice is rhythm; appearing on nearly every slide is wear → vary it where it
  isn't the core message.
- Repeated sentence shape: many slides opening with the same template ("X — Y, Z.").

**Skip (INTENTIONAL repetition — keep as-is, only mark for GM confirmation):**
- **Bookend** slide 01 ↔ 09: the positioning line repeats on purpose.
- **Rhetorical anaphora**: "đừng để cháy, đừng dừng máy, đừng trượt kiểm định";
  "mất tài sản, mất uy tín". The deliberate triple — the weight is in the repeat.
- **Forced-repeat terms**: arc-fault, PIM, MINT — no standard synonym.

**How to fix:** swap for a close synonym, cut the redundant word outright, or
recast the sentence. Don't swap for a "louder" word that shifts the nuance.

---

## Class 2 — Spelling

**Common Vietnamese traps:**
- `sát` (close, tight — "ngữ nghĩa không **sát**") ≠ `xát` (rub — "cọ xát").
- `dày` (density — "mạng lưới dày") ≠ `giày` (shoe). `dãn` ≠ `giãn`. `chuyền`
  (assembly line) ≠ `truyền`. `sửa` (fix) ≠ `sữa` (milk). `chuẩn` ≠ `chẩn`.
  `trải` ≠ `chải`.
- hỏi/ngã tone marks: "rủi ro", "bảo hành", "đảm bảo", "mỗi", "kỹ thuật",
  "hiểu", "dẫn".
- Dropped/wrong tone marks from fast typing; "i" vs "y" (kỹ vs kĩ — pick **kỹ**,
  keep consistent).
- Capitalization & spacing around symbols: `17,6 TOPS/W`, `IEC 63027`, `UL 1699B`.

**Proper nouns / terms — spell CORRECTLY and CONSISTENTLY (whitelist, don't
"fix"):**
`Pebble Vina` · `Pebble Square` · `MINT` · `Analog-PIM` (not "PIM Analog") ·
`Edge AI` · `KOCHAM` · `bác Kim` · `Bae Hak-yeol` · `Lee Choong-hyun` ·
`arc-fault` (hồ quang) · `inverter` · `pilot` · `case study` · `FAE` ·
`TCVN/QCVN` · `TÜV Rheinland` · `Fraunhofer ISE`.
Catch **inconsistency**: the same thing as "hồ quang" here, "arc-fault" there,
"hồ-quang" elsewhere → pick one, propose unifying.

**Vietnamese NUMBER convention (do NOT switch the `vi` copy to English style):**
- Decimal = **comma**: `17,6` · `9,58`. Thousands = **dot**: `102.000`.
- Units unchanged: `TOPS/W`, `GW`, `tỷ USD`, `%`.
- (KO/EN use a dot decimal `17.6` — that is **correct**, don't touch it.)

**Note:** only fix clear spelling/convention errors. Suspected dialect / deliberate
choice → ask, don't change it yourself.

---

## Class 3 — Imprecise semantics

A "close-enough" word that doesn't fit the meaning tightly, or loose sentence
logic. Flag:
- **Loose verbs/prepositions:** "kèm / cùng với / liên quan đến" when the real
  relation is causal ("kéo theo / dẫn đến"). "Giúp / hỗ trợ" when it's actually
  "làm / phát hiện".
- **Missing / vague object:** "ngừng phát" (phát what?) → "ngừng phát điện".
  A dangling "đo được" → attach what is measured.
- **Broken cause-effect:** the second clause isn't truly a consequence of the
  first.
- **Claim outruns evidence / over-claim:** "đảm bảo", "loại bỏ hoàn toàn",
  "tuyệt đối an toàn", "nhanh nhất" → bring down to what the evidence supports
  ("phát hiện sớm", "giảm rủi ro", "thấp hơn"). This is both a language defect
  and a legal risk → severity 🔴.
- **Wrong register:** formal/casual/technical word mismatched to a mixed audience
  (investor + engineer + Korean guests).
- **Ambiguous reference:** "điều này / nó / họ" with no clear antecedent.

If you suspect a **factual error** (not a wording error) → don't fix it, flag for
`analyst`/`product-lead`.

---

## Class 4 — Too "AI slop" / no human voice

Markers of generic AI prose (make it more **human** = more concrete, more
restrained):

**Empty inflated words/phrases — flag, replace with something concrete &
measurable:**
"đột phá", "tối ưu (hoá) toàn diện", "giải pháp toàn diện", "vượt trội",
"đẳng cấp", "tiên phong", "cách mạng (hoá)", "mạnh mẽ", "vô cùng / cực kỳ / hết
sức", "đáng kinh ngạc", "thay đổi cuộc chơi", "nâng tầm", "kiến tạo", "trao
quyền", "khai phá tiềm năng", "hành trình", "hệ sinh thái" (when there is no real
ecosystem), "liền mạch / mượt mà" (cliché), "thông minh" (when it's just for show).

**Mechanical sentence templates:**
- A triple of parallel adjectives just for sound ("nhanh chóng, hiệu quả, bền
  vững") — keep the triple **only when** each member carries real information.
- "Không chỉ … mà còn …", "Trong thế giới … ngày nay", "Hãy tưởng tượng…",
  "Đã đến lúc…".
- Em-dash (—) sprinkled too often in one sentence/slide; every sentence on the
  same "clause — aside — clause" beat.
- Over-perfect symmetry, every bullet the same length/template → sounds machine-
  generated.
- Marketing adjectives standing in for a number: "hiệu năng vượt trội" instead
  of "17,6 TOPS/W".

**The deck's "human" target:** the sentence a confident Vietnamese engineer
would actually say to the room — concrete, with a real number/noun, willing to be
short, not self-praising. When something feels "too AI", try: *strip every
inflated adjective — what fact is left?* — rewrite around that fact.

(Careful: a few phrases in the deck are **deliberate rhetoric** and were
considered — don't flag mechanically; if the line is blurry, put it in the "Cần
GM quyết" section.)

---

## Class 5 — Long-winded confusing sentences

A slide must be **scanned**, not **studied**. Flag:
- **A SHOW sentence too long.** Warning thresholds: headline > ~22–25 words, or a
  bullet > ~18 words, or ≥3 nested clauses, or ≥2 commas + 1 em-dash in one
  sentence. (Thresholds are guidance, not hard rules — a clear 26-word sentence
  stays; a tangled 16-word one gets split.)
- **Nested clauses / stacked modifiers** that lose the subject–verb: split into
  two sentences, or push the secondary idea down to a bullet/figure.
- **Filler:** "việc / nhằm mục đích / có thể / một cách / quá trình / đối với
  việc" → cut. "nhằm mục đích phát hiện" → "để phát hiện".
- **Buried lead:** the message sits at the end after a string of hedges → move it
  to the front.

**How to split:** one idea / one sentence. Front-load the main noun–verb, push
conditions & asides to the back or down to the figure. Keep total meaning, cut
length.

---

## Operating tips

- Review **one field at a time** (eyebrow → title → headline → each bullet →
  each figure label), don't skim the whole slide — repetition/spelling errors
  slip past a fast read.
- One fragment can hit **multiple classes**; record the worst class, mention the
  rest in "why".
- Always attach a **concrete rewrite**. The rewrite must keep numbers & proper
  nouns intact (Class 2 whitelist) and add no new meaning.
- When a `vi` sentence changes meaning → write "⚠️ KO/EN cần dịch lại" in the
  "why" column.
