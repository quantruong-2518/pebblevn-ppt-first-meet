---
title: Slide 04 — Giải pháp + bằng chứng nó CHẠY
slide: 4
nhip: 3
status: skeleton
owner: product-lead
tech: 1 điểm tech (sâu ở phụ lục 99)
gat-dau: CEO Pebble Square
updated: 2026-06-13
links: [company/parent-pebble-square.md, planning/2026-06-13-khung-thuyet-trinh-pebble-vina.md, projects/thuyet-trinh-ra-mat-pebble-vina/slides/99-phu-luc-ky-thuat.md]
---

# Slide 04 — Giải pháp & bằng chứng ⚠️ (slide quan trọng nhất)

## 🎯 Thông điệp chính
> Giải pháp phát hiện sự cố hồ quang **ngay tại thiết bị** — điện thấp, độ trễ thấp, **không cần cloud** —
> chạy trên chip **Analog-PIM của Pebble Square**. *Và đây là bằng chứng nó hoạt động.*

## 🖼 Nội dung slide (skeleton)
- 1 sơ đồ đơn giản: cảm biến → chip PIM tại tủ điện/inverter → cảnh báo sớm (không gửi dữ liệu lên cloud).
- **[HÌNH BẰNG CHỨNG — đúng 1 cái]:** benchmark PIM vs ST/TI (điện năng / độ chính xác arc-fault) **HOẶC**
  số liệu 1 pilot. `[CẦN data từ product-lead / Pebble Square]`.
- Đóng khung theo **kết quả**, không theo thông số: "phát hiện sớm hơn, tốn điện ít hơn".

## 🎤 Lời thoại
- Vinh danh công nghệ: PIM — tính toán analog trong bộ nhớ, cảm hứng từ não người; gốc học thuật **GS JBNU,
  chip MINT, liên hệ KAIST** → chiều sâu thật, không phải hàng chợ. *(gật đầu cho CEO Pebble Square)*
- (Ý tưởng: mời CEO nói 1–2 phút ở đây — principal tự khẳng định bằng chứng, uy tín hơn ta tự nói.)

## 🧭 Vì sao slide này (truy vết)
- **Luận cứ gốc:** *Bằng chứng giải pháp* — **mảnh bị thiếu** mà khung luận bổ sung (cầu nối "họ cần" → "ta
  giải được"). **Nhịp 3.**
- **Vì sao tối quan trọng:** phòng có kỹ sư + CEO; thiếu bằng chứng = hụt "lý-do-tin", người tech nhận ra ngay.
- **Nguồn:** `parent-pebble-square.md` (PIM, 4 lợi thế, MINT); khung luận §1 (NT1), §3, §8 (điểm yếu nguy hiểm nhất).

## 📥 Cần gì để hoàn thiện
- [ ] **Bằng chứng thật** — `product-lead` kiểm: Pebble Square có benchmark vs ST/TI? có pilot/PoC nào? (CHẶN cả bài)
- [ ] Nếu chưa có pilot VN → **khung 3 lớp tách bạch:** nguyên lý PIM tiết kiệm điện (nguồn học thuật) + chip
  **MINT 17,6 TOPS/W** (để CEO Pebble Square tự nói) + bài toán arc-fault có chuẩn **UL 1699B / IEC 63027**.
  ⚠️ **KHÔNG** trích "MDPI 2024" (bài không tồn tại); **KHÔNG** claim "benchmark MINT vs ST/TI" (không có số công khai).
  Xem `_research-proof.md`.
- [ ] Sơ đồ tích hợp tủ điện/inverter (đặt chi tiết ở slide 99).

## ⚠️ Lưu ý
- **Mọi số phải `product-lead`/Pebble Square xác nhận** trước khi lên sân khấu — growth không tự khẳng định.
- Chỉ **1 điểm tech** ở đây; ai muốn sâu → slide 99 / handout.
