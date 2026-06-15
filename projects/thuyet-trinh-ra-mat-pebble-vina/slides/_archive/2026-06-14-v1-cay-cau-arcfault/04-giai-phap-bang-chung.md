---
title: Slide 04 — Trụ 1: Năng lực công nghệ (Pebble Square)
slide: 4
nhip: 3
status: skeleton
owner: product-lead
tech: 1 điểm tech (sâu ở phụ lục 99)
gat-dau: CEO Pebble Square
updated: 2026-06-14
links: [company/parent-pebble-square.md, planning/2026-06-13-khung-thuyet-trinh-pebble-vina.md, projects/thuyet-trinh-ra-mat-pebble-vina/slides/99-phu-luc-ky-thuat.md]
---

# Slide 04 — Trụ 1: Năng lực công nghệ Pebble Square

## 🎯 Thông điệp chính
> **Trụ thứ nhất của cây cầu** là công nghệ: chip **Analog-PIM (MINT)** của Pebble Square phát hiện sự cố hồ
> quang **ngay tại thiết bị** — điện thấp, độ trễ thấp, không cần cloud. Một nền tảng thật, có chuẩn rõ ràng.

## 🖼 Nội dung slide (skeleton — figure: flow)
- 1 sơ đồ đơn giản: cảm biến → chip PIM tại tủ điện/inverter → cảnh báo sớm (không gửi dữ liệu lên cloud).
- 2 bullet **lý-do-tin** (khung 3 lớp tách bạch, *không* ghép thành claim chưa kiểm chứng):
  1. Nền tảng thật: chip **MINT 17,6 TOPS/W**, Analog-PIM (đo được).
  2. Bài toán có chuẩn rõ ràng: arc-fault PV theo **UL 1699B / IEC 63027**.
- Đóng khung theo **kết quả** ("phát hiện sớm hơn, tốn điện ít hơn"), không sa vào thông số.

## 🎤 Lời thoại
- Vinh danh công nghệ: PIM — tính toán analog trong bộ nhớ, cảm hứng từ não người; gốc học thuật **GS JBNU,
  chip MINT, liên hệ KAIST**. *(gật đầu cho CEO Pebble Square)*
- **Mời CEO nói 1–2 phút ở đây** — principal tự khẳng định công nghệ, uy tín hơn ta tự nói. Đây là **podium
  honor** cho đối tác; nhưng về cấu trúc, đây chỉ là **một trong hai trụ** (trụ kia là năng lực bản địa, slide 05).

## 🧭 Vì sao slide này (truy vết)
- **Luận cứ gốc:** *Năng lực công nghệ* = **Trụ 1**. **Nhịp 3.**
- **Reframe (2026-06-14):** trước đây slide này là **cao trào** ("Nó CHẠY — bằng chứng"), khiến *con chip* thành
  nhân vật chính. Nay **nén lại** thành 1 trụ ngang hàng trụ bản địa (05) → trọng tâm bài dời về **cộng sinh +
  lộ trình của ta**. Vẫn giữ honor + CEO nói.
- **Nguồn:** `parent-pebble-square.md` (PIM, 4 lợi thế, MINT); khung luận §1 (NT1), §3.

## 📥 Cần gì để hoàn thiện
- [ ] **Bằng chứng thật** — `product-lead` kiểm: Pebble Square có benchmark vs ST/TI? có pilot/PoC nào? (nếu có thì mạnh hơn)
- [ ] **Khung 3 lớp tách bạch** (mặc định khi chưa có pilot VN): nguyên lý PIM tiết kiệm điện (nguồn học thuật) +
  chip **MINT 17,6 TOPS/W** (để CEO Pebble Square tự nói) + chuẩn **UL 1699B / IEC 63027**.
  ⚠️ **KHÔNG** trích "MDPI 2024" (bài không tồn tại); **KHÔNG** claim "benchmark MINT vs ST/TI" (không có số công khai).
  Xem `_research-proof.md`.
- [ ] Sơ đồ tích hợp tủ điện/inverter (đặt chi tiết ở slide 99).

## ⚠️ Lưu ý
- **Mọi số phải `product-lead`/Pebble Square xác nhận** trước khi lên sân khấu — growth không tự khẳng định.
- Chỉ **1 điểm tech** ở đây; ai muốn sâu → slide 99 / handout. Đừng để slide này "phình" lại thành cao trào cũ.
