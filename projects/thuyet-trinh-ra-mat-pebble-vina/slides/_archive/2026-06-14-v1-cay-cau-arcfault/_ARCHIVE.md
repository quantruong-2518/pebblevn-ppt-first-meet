---
title: ARCHIVE — Khung deck v1 "Cây cầu" (còn khóa vào arc-fault)
status: archived
owner: GM
updated: 2026-06-14
---

# Khung deck v1 — "Cây cầu: 2 trụ + 1 con đường" (snapshot 2026-06-14)

> **Đây là gì:** bản chụp toàn bộ khung slide (00–10 + 99) tại thời điểm 2026-06-14, **trước khi** dựng lại
> theo định vị "Pebble Square = nền tảng đa năng". Giữ để truy vết, KHÔNG dùng để render.

## Vì sao archive (lý do thay khung)

Khung v1 (dựng cùng ngày) đã sửa được lỗi "quá tập trung vào cái Pebble Square CÓ" bằng xương sống
**2 trụ + 1 con đường + cộng sinh + lộ trình 3 chân trời**. Nhưng nghiên cứu sâu sản phẩm Pebble Square
(`../_research-pebble-square-services.md`, 2026-06-14) phát hiện khung v1 **vẫn lệch**:

1. **Vẫn khóa vào MỘT ứng dụng (arc-fault điện mặt trời)** — trong khi Pebble Square là **nền tảng Edge-AI
   đa năng** (3 trụ Sound/Vision/Security + Failure Analysis; họ chip MOCHA→MINT→PAPAYA; "all-weather chip").
2. **Trình arc-fault như sản phẩm của Pebble Square** — SAI: arc-fault KHÔNG có ở bất kỳ nguồn nào của họ;
   đó là **góc tiếp cận của Pebble Vina**, không phải sản phẩm nhà cung cấp.
3. Thiếu họ chip (MOCHA/PAPAYA), thiếu các "honor hook" mạnh (JV Saudi/NEOM, KGCCI, SK hynix, ETRI, PoC thật),
   và ghi sai CEO (Bae↔Lee).

→ Khung **v2** (live ở `../`): Pebble Square = **nền tảng đa năng**; arc-fault = **ứng dụng beachhead do Pebble
Vina khởi xướng** cho thị trường VN (dưới ô dù "an toàn & sức khỏe thiết bị cho nhà máy Hàn"); trục sản phẩm
của lộ trình mở rộng sang các vertical thật của Pebble Square.

Quyết định ghi tại `../../nghien-cuu-va-brainstorm.md` (2026-06-14).
