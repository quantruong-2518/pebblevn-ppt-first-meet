---
title: Slide 99 — Phụ lục kỹ thuật (chiều sâu theo yêu cầu)
slide: 99
nhip: phụ lục
status: skeleton
owner: product-lead
tech: sâu
gat-dau: Kỹ sư / người hỏi sâu sau bài
updated: 2026-06-13
links: [company/parent-pebble-square.md, projects/thuyet-trinh-ra-mat-pebble-vina/slides/04-giai-phap-bang-chung.md]
---

# Slide 99 — Phụ lục kỹ thuật (depth-on-demand)

## 🎯 Mục đích
> Thỏa người **có tech** mà không làm loãng luồng chính. **Không trình mặc định** — chỉ mở khi được hỏi, hoặc
> in thành handout. Đây là nơi để chi tiết mà slide 04 cố ý lược bớt.

## 🖼 Nội dung (skeleton — để dành chiều sâu)
- **So sánh lớp công nghệ:** PIM / analog-IMC vs MCU & edge-GPU — điện năng & TOPS/W (nguồn **học thuật**).
  ⚠️ KHÔNG có benchmark "MINT vs ST/TI" công khai từ Pebble Square → KHÔNG trình như số của riêng họ. `[đòi số thật từ Pebble Square]`.
- **Kiến trúc Analog-PIM:** tính toán analog trong bộ nhớ flash nhúng; chip MINT ~4 triệu khớp, ~30 GOPS, **~17,6 TOPS/W**.
- **Reference design:** cách lắp vào tủ điện/inverter PV; giao tiếp; tiêu thụ điện.
- **Tuân thủ:** ánh xạ với TCVN 7447-7-712:2019 & QCVN 01:2020/BCT; chuẩn arc-fault **UL 1699B · IEC 63027 · TCVN 11855-1:2017**.
- **Tham chiếu học thuật:** nguyên lý PIM / analog-IMC; liên hệ JBNU/KAIST. ⚠️ KHÔNG trích "MDPI 2024" — bài không tồn tại (xem `_research-proof.md`).

## 🧭 Vì sao slide này (truy vết)
- **Nguyên tắc:** NT1 "một xương sống + chiều sâu theo yêu cầu" (khung luận §1, §3) — giải bài toán tech vs non-tech.
- **Nguồn:** `parent-pebble-square.md` (PIM, MINT, danh mục sản phẩm); slide 04.

## 📥 Cần gì để hoàn thiện
- [ ] Toàn bộ số kỹ thuật — `product-lead` lấy/xác minh với Pebble Square.
- [ ] Bản handout in (song ngữ nếu cần).

## ⚠️ Lưu ý
- Mọi số ở đây phải **kiểm chứng được** — kỹ sư sẽ soi. Sai một số = mất uy tín cả bài.
