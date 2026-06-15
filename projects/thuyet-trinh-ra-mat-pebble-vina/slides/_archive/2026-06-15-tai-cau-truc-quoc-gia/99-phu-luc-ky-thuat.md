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
- **Họ chip Pebble Square:** **MOCHA** (gen-1, 2021) · **MINT** (gen-2, ~500k chip đã sản xuất, ~4M khớp · ~30 GOPS ·
  **17,6 TOPS/W**) · **PAPAYA/FLEX** (gen-3, **0,5 TOPS · 30 TOPS/W**, ~10mm). ⚠️ "100× GPU" là claim của PS, không phải benchmark độc lập.
- **Đa trụ ứng dụng (chính thức PS):** Sound (giọng nói) · Vision (ảnh: y tế, sản xuất) · Security (an ninh) ·
  Failure Analysis (bảo trì dự đoán/anomaly cho robot & máy móc). 6 Business Sectors: Fault Analysis · Home IoT · Risk Mgmt · Security · Healthcare · Vision.
- **So sánh lớp công nghệ:** PIM / analog-IMC vs MCU & edge-GPU — điện năng & TOPS/W (nguồn **học thuật**).
  ⚠️ KHÔNG có benchmark "MINT vs ST/TI" công khai từ Pebble Square → KHÔNG trình như số của riêng họ. `[đòi số thật từ Pebble Square]`.
- **Kiến trúc Analog-PIM:** tính toán analog trong bộ nhớ flash nhúng; synaptic cell 256-state (8-bit), event-driven không clock.
- **Reference design (ứng dụng beachhead arc-fault — của Pebble Vina):** cách lắp vào tủ điện/inverter PV; giao tiếp; tiêu thụ điện. ⚠️ arc-fault là ứng dụng **Pebble Vina** dựng trên nền tảng PS, KHÔNG phải sản phẩm có sẵn của PS.
- **Tuân thủ:** ánh xạ với TCVN 7447-7-712:2019 & QCVN 01:2020/BCT; chuẩn arc-fault **UL 1699B · IEC 63027 · TCVN 11855-1:2017**.
- **Tham chiếu học thuật:** nguyên lý PIM / analog-IMC; liên hệ JBNU/KAIST. ⚠️ KHÔNG trích "MDPI 2024" — bài không tồn tại (xem `_research-proof.md`).
- **Số sâu của lộ trình (cho gặp riêng / handout, KHÔNG lên sân khấu):** mốc theo quý cho 3 chân trời (slide 07);
  đơn vị kinh tế & đường hòa vốn (slide 08); thứ tự & lý do chọn nước ĐNÁ; cơ chế căn chỉnh lợi ích trong hợp
  đồng độc quyền (slide 06/09). `[CẦN cfo + legal + analyst điền — đây là tầng số liệu, không phải tầng sân khấu]`.

## 🧭 Vì sao slide này (truy vết)
- **Nguyên tắc:** NT1 "một xương sống + chiều sâu theo yêu cầu" (khung luận §1, §3) — giải bài toán tech vs non-tech.
- **Nguồn:** `_research-pebble-square-services.md` (họ chip, vertical, honor hooks — có nguồn báo Hàn); `parent-pebble-square.md`; slide 04.

## 📥 Cần gì để hoàn thiện
- [ ] Toàn bộ số kỹ thuật — `product-lead` lấy/xác minh với Pebble Square.
- [ ] Bản handout in (song ngữ nếu cần).

## ⚠️ Lưu ý
- Mọi số ở đây phải **kiểm chứng được** — kỹ sư sẽ soi. Sai một số = mất uy tín cả bài.
- **CEO hiện tại có thể là Lee Choong-hyun (이충현)**, không phải Bae Hak-yeol — xác nhận với Pebble Square trước khi in (xem `_research-pebble-square-services.md §4`).
