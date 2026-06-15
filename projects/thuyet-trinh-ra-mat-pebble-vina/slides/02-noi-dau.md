---
title: Slide 02 — Nỗi đau: an toàn & gián đoạn vận hành ở nhà máy
slide: 2
nhip: 1
status: skeleton
owner: growth
tech: non
gat-dau: Cả phòng
updated: 2026-06-14
links: [planning/2026-06-09-co-hoi-thi-truong-viet.md, projects/thuyet-trinh-ra-mat-pebble-vina/slides/_research-market.md]
---

# Slide 02 — Nỗi đau

## 🎯 Thông điệp chính
> Nhà máy tại Việt Nam đối mặt hai nỗi đau đắt giá và CÙNG GỐC: **sự cố an toàn** (cháy do hồ quang điện) và
> **dừng máy ngoài kế hoạch** (thiết bị hỏng không báo trước). Một sự cố = dừng sản xuất, mất tài sản, mất uy tín.

## 🖼 Nội dung slide (skeleton)
- **Hook sắc nhất (ví dụ):** điện mặt trời bùng nổ → rủi ro **cháy do hồ quang DC**. Stat **38%** vụ cháy PV đến
  từ lỗi lắp đặt/đấu nối (TÜV Rheinland + Fraunhofer ISE).
- **Mở rộng cùng gốc:** thiết bị/máy móc hỏng đột ngột → **dừng chuyền**; cả hai đều là **bất thường phát hiện
  được sớm tại chỗ** trước khi thành thảm họa.
- **Điều khách cần (JTBD):** đừng để cháy, **đừng dừng máy**, đừng trượt kiểm định.

## 🎤 Lời thoại
- Dẫn bằng VẤN ĐỀ KINH DOANH (tiền & rủi ro), chưa nhắc chip. Arc-fault là **ví dụ mở màn**, nhưng gợi rằng nỗi
  đau rộng hơn: an toàn + sức khỏe thiết bị → bắc cầu cho beachhead "giám sát an toàn & thiết bị nhà máy" (slide 07).

## 🧭 Vì sao slide này (truy vết)
- **Luận cứ gốc:** Nhu cầu. **Nhịp 1.** "Bán kết quả không bán chip."
- **Reframe v2 (2026-06-14):** mở nỗi đau từ riêng arc-fault → **ô dù "an toàn + gián đoạn vận hành"** (khớp năng
  lực Failure Analysis thật của Pebble Square), nhưng giữ arc-fault làm ví dụ trực quan nhất.
- **Nguồn:** `2026-06-09 §3`; `_research-market.md` (stat 38%).

## 📥 Cần gì để hoàn thiện
- [ ] legal-counsel đọc bản gốc TCVN/QCVN (gỡ giả định A2).
- [ ] (tùy beachhead) số/ví dụ chi phí dừng máy ở nhà máy Hàn tại VN — `analyst`.

## ⚠️ Lưu ý
- KHÔNG over-claim "đảm bảo không cháy". Số quốc tế (chưa có thống kê cháy PV riêng VN).
- Mức "mở rộng nỗi đau" phụ thuộc beachhead GM chốt (slide 07) — nếu beachhead = arc-fault đơn thì giữ arc-fault là hook chính.
