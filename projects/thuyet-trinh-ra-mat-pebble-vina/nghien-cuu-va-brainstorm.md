---
title: Nghiên cứu & brainstorm — thuyết trình ra mắt Pebble Vina
status: in-progress
owner: GM
updated: 2026-06-13
links: [projects/thuyet-trinh-ra-mat-pebble-vina/README.md, planning/2026-06-13-khung-thuyet-trinh-pebble-vina.md]
---

# Nghiên cứu & brainstorm — bài thuyết trình

> Nhật ký **câu hỏi mở · ý tưởng · quyết định phát sinh** khi làm bài. Mục đích: **truy vết** — sau này mở lại
> hiểu *vì sao chọn cách này thay vì cách kia*. Ghi theo ngày, đừng xóa, chỉ gạch/đánh dấu khi đã chốt.

## Câu hỏi mở (chờ trả lời)

- [ ] **Ngày & loại sự kiện?** ra mắt riêng / bên lề triển lãm (Vietnam ETE 15–17/7? Solar & Storage Live 8–9/7?) / gặp nhà đầu tư? → định đoạt độ trang trọng & độ dài.
- [x] **Slide 04 — ta có bằng chứng gì thật?** *(2026-06-14, đã research web)* — **KHÔNG** có benchmark "MINT vs
  ST/TI" công khai, **KHÔNG** có pilot VN, bài "MDPI 2024" **không tồn tại**. ✅ Bằng chứng dùng được = nguyên lý
  PIM (học thuật) + chip MINT thật **17,6 TOPS/W** + chuẩn arc-fault UL 1699B/IEC 63027. Khung 3 lớp tách bạch.
  Chi tiết: `slides/_research-proof.md`.
- [ ] **Trình bằng tiếng gì?** Việt / Hàn / song ngữ? (CEO Hàn + quan khách Việt) → có thể cần slide song ngữ hoặc phiên dịch.
- [ ] **Câu định vị 1 dòng cuối cùng** — giữ tagline làm việc hay biến thể cho sự kiện?
- [ ] **Có demo/hiện vật không?** (chip, bo mạch, video phát hiện hồ quang) — sức nặng hơn slide với phòng hỗn hợp.

## Ý tưởng (chưa chốt)

- 💡 **Mở bằng một con số gây sốc** về cháy điện mặt trời (nếu tìm được số VN đáng tin) thay vì mở bằng giới thiệu công ty.
- 💡 **Khoảnh khắc honor:** mời CEO Pebble Square nói 1–2 phút về công nghệ → vừa tôn vinh, vừa để phần "bằng chứng" do chính principal khẳng định (uy tín hơn ta tự nói).
- 💡 **Đóng vòng (bookend):** câu định vị xuất hiện slide 01, lặp lại slide 09 → cả phòng nhớ một câu.
- 💡 Bản đồ "VN → ĐNÁ" ở slide 07 vẽ như **cầu nối Hàn–Việt** (chạm cả CEO lẫn quan khách).

## Quyết định đã chốt (có lý do)

- ✅ **2026-06-14 (v2) — Pebble Square = NỀN TẢNG đa năng; arc-fault = ứng dụng beachhead của Pebble Vina.**
  *Vì:* nghiên cứu sâu (`slides/_research-pebble-square-services.md`, gồm báo Hàn) cho thấy bản v1 vẫn khóa quá
  hẹp vào arc-fault, mà arc-fault **không hề là sản phẩm của Pebble Square** (không có ở bất kỳ nguồn nào của họ).
  PS thực ra có **họ chip MOCHA→MINT→PAPAYA** + 3 trụ Sound/Vision/Security + Failure Analysis ("all-weather
  chip"). *Quyết:* slide 04 trình PS là nền tảng đa năng; arc-fault chuyển sang slide 07 như ứng dụng beachhead;
  trục sản phẩm của lộ trình mở rộng sang vertical thật của PS. **Beachhead cụ thể đang để ngỏ** (ô dù "an toàn +
  sức khỏe thiết bị nhà máy Hàn" — arc-fault cờ đầu + bảo trì dự đoán lõi — là đề xuất, GM chưa chốt). Khung v1
  đã archive. *Đính chính chờ xác nhận PS:* CEO có thể là Lee Choong-hyun (không phải Bae); tránh số doanh thu.
- ✅ **2026-06-14 — Đổi xương sống sang "Cây cầu: 2 trụ + 1 con đường".** *Vì:* GM phê bình bản cũ quá tập trung
  vào "cái Pebble Square CÓ" (chip/tech ở vị trí cao trào nhịp 3) và thiếu **lộ trình riêng của Pebble Vina + sự
  cộng sinh**. Reframe: nén tech thành **Trụ 1**, nâng năng lực bản địa thành **Trụ 2**, **thêm nhịp Cộng sinh
  (slide 06)**, biến "đích đến" thành **lộ trình 3 chân trời VN→ĐNÁ** (slide 07). Lộ trình **định hướng**, không
  cam kết ngày/số cứng trên sân khấu (chưa ký độc quyền, chưa có pilot tên). Arc 9→10 nhịp. Bìa + UI/figure giữ
  nguyên. (Nguồn: khung luận §2 đã cập nhật; README §3; ADR 0001; dinh-vi §2.)
- ✅ **2026-06-13 — Thể loại = ra mắt/giới thiệu, ask cứng để gặp riêng.** *Vì:* phòng có CEO đối tác + quan
  khách, không phù hợp ép một quyết định giao dịch tại chỗ. (Nguồn: khung luận §0.)
- ✅ **2026-06-13 — Rủi ro principal KHÔNG lên sân khấu.** *Vì:* CEO Pebble Square hiện diện; nói "họ có thể bị
  M&A" là phạm thể diện. Để cuộc gặp riêng với nhà đầu tư. (Nguồn: khung luận §4.)
- ✅ **2026-06-13 — Bằng chứng kỹ thuật: 1 điểm trong luồng + phụ lục sâu.** *Vì:* phòng trộn tech/non-tech;
  giải bài bằng "chiều sâu theo yêu cầu". (Nguồn: khung luận §1, §3.)

## Nguồn cần tìm / kiểm chứng

- Số liệu cháy do hồ quang ở hệ PV tại VN (cho slide 02) — *chưa có nguồn đáng tin trong repo.*
- Benchmark PIM vs ST/TI/Microchip (slide 04/99) — ⚠️ KHÔNG có số công khai từ Pebble Square; bài "MDPI 2024"
  KHÔNG tồn tại. Chỉ dùng **so sánh lớp công nghệ PIM vs MCU/edge-GPU (nguồn học thuật)**. Cần đòi số thật từ Pebble Square.
- Quy mô PV mái/trang trại VN & số DN Hàn có hệ PV (slide 03) — `analyst` (đã có một phần ở `2026-06-09`).
