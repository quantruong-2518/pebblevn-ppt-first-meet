---
title: Slide 05 — Một nền tảng, nhiều bài toán (menu + beachhead)
slide: 5
nhip: 3 (nền tảng đa năng slide 03 → hạ xuống bài toán Việt Nam cụ thể)
status: drafting
owner: GM + analyst
tech: nhẹ
gat-dau: Cả phòng (đặc biệt khách có nhà máy)
updated: 2026-06-15
links: [slides/03-pebble-square.md, slides/02-dinh-vi-pebble-vina.md, slides/_research-pebble-square-services.md, slides/_research-proof.md]
---

# Slide 05 — Một nền tảng, nhiều bài toán Việt Nam

> Slide 03 cho thấy nền tảng **đa năng**. Slide này hiện thực hóa câu *"chọn đúng bài toán Việt Nam cần nhất
> để bắt đầu"* (slide 02): bày **menu** bài toán VN nền tảng giải được, rồi **chỉ mũi nhọn** ta khởi đầu.

## 🎯 Thông điệp chính
> Một nền tảng Edge-AI — **nhiều bài toán Việt Nam** giải được. Pebble Vina **bắt đầu từ bài toán cấp thiết
> nhất: an toàn & sức khỏe thiết bị trong nhà máy.**

## 🖼 Nội dung slide — figure `forces`: 3 nhóm bài toán VN
- **❶ An toàn điện & năng lượng** — giám sát **hồ quang/arc-fault** · điện mặt trời · tủ điện. *(Ứng dụng do
  Pebble Vina khởi xướng cho thị trường VN — KHÔNG phải sản phẩm có sẵn của Pebble Square.)*
- **❷ Sản xuất & bảo trì dự đoán** — anomaly / **Failure Analysis** (năng lực **lõi** Pebble Square tự claim).
- **❸ Giọng nói · IoT · an ninh dân dụng** — **Sound · Security** On-Device (Pebble Square đã có PoC: đèn nhận
  diện giọng nói, Home-IoT MEISEI).
- **Bullet — cờ đầu:** beachhead = **an toàn & sức khỏe thiết bị cho nhà máy** (vào qua mạng **KOCHAM**) —
  arc-fault là **mũi nhọn kéo quy định**, bảo trì dự đoán là **lõi khớp năng lực thật** của Pebble Square.

## 🎤 Lời thoại
- *"Một nền tảng — nhiều bài toán; ta chọn bài toán Việt Nam cần nhất để bắt đầu."* (nối lại câu slide 02).
- Đóng khung beachhead = **đuôi rủi ro hậu quả cao** (hiếm nhưng mất nhà máy), KHÔNG "PV dễ cháy".
- Mở đường lên lộ trình (slide 06): từ một mũi nhọn → mở thêm các trụ ứng dụng thật của Pebble Square.

## 🧭 Vì sao slide này (truy vết)
- **Vai trò trong mạch:** cầu nối giữa **bề rộng nền tảng** (slide 03) và **đích/lộ trình** (slide 06) — biến
  "đa năng" trừu tượng thành **bài toán VN cụ thể**, và là nơi **beachhead** sống (không còn khóa toàn deck vào arc-fault).
- **Nguồn:** `_research-pebble-square-services.md` (Mục 1–2 vertical thật PS; Mục 4 không gian ứng dụng) ·
  `_research-proof.md` (chuẩn arc-fault UL 1699B / IEC 63027) · archived `07-dich-den.md` (beachhead).

## 📥 Cần gì để hoàn thiện
- [ ] **GM CHỐT BEACHHEAD** (đang để mặc định "an toàn & sức khỏe thiết bị nhà máy"): ô dù này? hay arc-fault
  đơn? hay thêm beachhead thứ 2 (voice/Home-IoT PS đã PoC)? — *research đề xuất ô dù; GM quyết.*
- [ ] `legal-counsel` đọc bản gốc **TCVN 7447-7-712:2019 + QCVN 01:2020/BCT** → có/không điều khoản AFCI/hồ quang.
- [ ] Native proofread KO/EN.

## ⚠️ Lưu ý (LẰN RANH AN TOÀN)
- **arc-fault = ứng dụng Pebble Vina khởi xướng**, KHÔNG gán cho Pebble Square (CEO PS ngồi dưới). Ô ❷❸ mới là
  vertical **PS tự claim** — nói đúng vai.
- **KHÔNG** tuyên bố *"luật VN bắt buộc arc-fault/AFCI"* — chuẩn VN **chưa có** mục này (cơ hội đón đầu, không phải nghĩa vụ đã có).
- **KHÔNG** trình arc-fault như "phát minh" — Huawei/Solis/SolarEdge đã thương mại hóa; khác biệt của ta là
  **on-device, siêu tiết kiệm điện nhờ Analog-PIM, chạy ngay trong tủ/inverter**.
