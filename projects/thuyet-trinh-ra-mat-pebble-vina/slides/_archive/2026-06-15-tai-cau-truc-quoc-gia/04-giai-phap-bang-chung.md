---
title: Slide 04 — Trụ 1: Nền tảng công nghệ đa năng (Pebble Square)
slide: 4
nhip: 3
status: skeleton
owner: product-lead
tech: 1 điểm tech (sâu ở phụ lục 99)
gat-dau: CEO Pebble Square
updated: 2026-06-14
links: [company/parent-pebble-square.md, projects/thuyet-trinh-ra-mat-pebble-vina/slides/_research-pebble-square-services.md, projects/thuyet-trinh-ra-mat-pebble-vina/slides/99-phu-luc-ky-thuat.md]
---

# Slide 04 — Trụ 1: Nền tảng công nghệ đa năng

## 🎯 Thông điệp chính
> **Trụ thứ nhất là một NỀN TẢNG, không phải một con chip một-việc.** Pebble Square có cả **họ chip Analog-PIM**
> chạy AI ngay tại thiết bị — điện thấp, độ trễ thấp, không cloud — phục vụ **nhiều trụ ứng dụng**: giọng nói,
> thị giác, an ninh, phân tích sự cố. Báo Hàn gọi là **"chip all-weather" (전천후 반도체)**.

## 🖼 Nội dung slide (skeleton — figure đề xuất: họ chip + 4 trụ ứng dụng, KHÔNG phải flow arc-fault)
- **Nền tảng Analog-PIM:** tính toán analog ngay trong bộ nhớ. 4 lợi thế: **điện cực thấp · on-device/riêng tư ·
  suy luận nhanh · chi phí thấp**.
- **Họ chip (chiều sâu thật):** **MOCHA** (gen-1, 2021) → **MINT** (gen-2, đã sản xuất ~500k chip, **17,6 TOPS/W**)
  → **PAPAYA / FLEX** (gen-3, **0,5 TOPS · 30 TOPS/W**, ~10mm).
- **Đa trụ ứng dụng (chính thức của Pebble Square):** **Sound** (giọng nói) · **Vision** (ảnh — y tế, sản xuất) ·
  **Security** (an ninh on-device) · **Failure Analysis** (bảo trì dự đoán / phát hiện bất thường cho máy móc).
- **1 điểm proof (giữ trung thực):** MINT 17,6 TOPS/W *đo được*; nguyên lý PIM tiết kiệm điện nhiều bậc vs GPU/MCU.

## 🎤 Lời thoại
- Vinh danh công nghệ + **uy tín thật** (để CEO tự nói càng mạnh): **JV Saudi "Cluster AI Labs" (~100 tỷ KRW, nhắm
  NEOM City)** · giải **KGCCI (Phòng TM Hàn–Đức)** · **NDA với SK hynix** · hợp tác **ETRI** · PoC thật (đèn nhận
  diện giọng nói + chuông khẩn cấp; Home-IoT với MEISEI, Nhật).
- **Mời CEO nói 1–2 phút** — podium honor. Đây là **một trong hai trụ** (trụ kia: năng lực bản địa, slide 05).

## 🧭 Vì sao slide này (truy vết)
- **Luận cứ gốc:** *Năng lực công nghệ = Trụ 1*, nay trình là **NỀN TẢNG ĐA NĂNG**. **Nhịp 3.**
- **Reframe v2 (2026-06-14):** bản trước vẫn trình arc-fault như giải pháp của Pebble Square → **SAI** (arc-fault
  không có ở bất kỳ nguồn nào của họ). Nay trình đúng: PS = nền tảng đa năng (3 trụ + Failure Analysis, họ chip
  MOCHA/MINT/PAPAYA). arc-fault chuyển sang slide 07 như **ứng dụng beachhead của Pebble Vina**.
- **Nguồn:** `_research-pebble-square-services.md` (toàn bộ, có nguồn báo Hàn + chính thức); `parent-pebble-square.md`.

## 📥 Cần gì để hoàn thiện
- [ ] **Xác nhận với Pebble Square:** CEO hiện tại = **Lee Choong-hyun (이충현)**? (nguồn 2024–25 ghi Lee, không phải Bae). Spec PAPAYA chính thức? MOCHA còn bán?
- [ ] Chọn 3–4 "honor hook" mạnh nhất để CEO nói (tránh số doanh thu — hồ sơ DN cho thấy doanh thu nhỏ).
- [ ] Chốt hình minh họa: họ chip + 4 trụ ứng dụng (thay sơ đồ flow arc-fault cũ).

## ⚠️ Lưu ý
- **TUYỆT ĐỐI KHÔNG** trình arc-fault/điện mặt trời như sản phẩm của Pebble Square (không có nguồn). Đó là ứng
  dụng Pebble Vina khởi xướng — nói ở slide 07.
- **KHÔNG** trích "MDPI 2024" (bài không tồn tại); **KHÔNG** trình "100× GPU" như sự thật độc lập (là claim PS).
- Mọi số phải `product-lead`/Pebble Square xác nhận. Chỉ **1 điểm tech** ở đây; sâu → slide 99.
