---
title: Bằng chứng kỹ thuật PIM — số thật & "nguồn ma" MDPI cần tránh
type: learning
importance: high
tags: [pebble-square, pim, mint, arc-fault, bang-chung, thuyet-trinh]
source: web (kiểm chứng 2026-06-14)
created: 2026-06-14
updated: 2026-06-14
links: [company/parent-pebble-square.md, projects/thuyet-trinh-ra-mat-pebble-vina/slides/_research-proof.md]
---

Kiểm chứng web 2026-06-14 cho slide bằng chứng (slide 04 / phụ lục 99):

**✅ Số THẬT, dùng được:** chip **MINT** của Pebble Square — ~4M synapse, ~30 GOPS, **17,6 TOPS/W**,
Analog-PIM (đo được). Chuẩn arc-fault: **UL 1699B · IEC 63027:2023 · TCVN 11855-1:2017**. Nguyên lý PIM
tiết kiệm điện có nguồn học thuật.

**❌ HAI điều KHÔNG được nói trên sân khấu (kẻo kỹ sư bắt lỗi):**
1. Bài **"MDPI Electronics 2024 — Electrical Anomaly Detection Based on PIM Chip" KHÔNG TỒN TẠI** đúng tên đó.
   Đã gỡ khỏi mọi file trong repo. **Đừng để agent nào trích lại.**
2. Pebble Square **chưa công khai** gắn MINT với arc-fault, và **không có benchmark "MINT vs ST/TI" công khai**.
   Đó là góc tiếp cận của Pebble Vina, không phải claim của nhà cung cấp.

**Khung trình đúng = 3 lớp tách bạch:** (1) nguyên lý PIM [học thuật] + (2) chip MINT 17,6 TOPS/W [để CEO tự nói]
+ (3) arc-fault có chuẩn UL/IEC. KHÔNG ghép thành "Pebble Square đã làm arc-fault trên PIM".

**Vì sao quan trọng:** trích nguồn ma hoặc claim benchmark không có thật = mất uy tín tức thì trước phòng kỹ sư.

**Dùng khi nào:** mọi lần soạn/sửa slide kỹ thuật, datasheet, one-pager; trước khi đòi số thật từ Pebble Square.
