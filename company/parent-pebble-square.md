---
title: Hồ sơ công ty mẹ — Pebble Square Inc. (nhà cung cấp / principal)
status: in-progress
owner: GM
updated: 2026-06-09
links: [company/profile.md, planning/2026-06-09-co-hoi-thi-truong-viet.md, market/_phap-ly-phan-phoi-vn.md]
---

# Pebble Square Inc. — Công ty mẹ / Nhà cung cấp độc quyền

> Đây là **principal** (bên giao hàng) trong quan hệ phân phối. Pebble Vina là nhà phân phối
> độc quyền các sản phẩm của họ tại Việt Nam (sau là Đông Nam Á). Mọi agent cần hiểu rõ
> sản phẩm của họ để bán/định vị đúng. *Dữ kiện từ web (xem Nguồn cuối file); phần suy luận có gắn nhãn.*

## Nhận diện

- **Tên pháp lý:** Pebble Square Inc. (페블스퀘어)
- **Loại hình:** Công ty bán dẫn AI **fabless** (thiết kế chip, không tự sản xuất wafer) — chuyên **Edge AI**
- **Trụ sở:** Seongnam, Gyeonggi-do, Hàn Quốc
- **Thành lập:** 2021
- **CEO / 대표이사 (nhà sáng lập):** **Bae Hak-yeol (배학열)** — Giáo sư Khoa Kỹ thuật Điện tử,
  **Đại học Quốc gia Jeonbuk (JBNU / 전북대학교)**. Pebble Square có liên hệ ĐH Tokyo (theo JETRO,
  CEO làm tiến sĩ tại đây) → đã lập công ty con Tokyo 2025.
- **Đồng sáng lập / Trưởng kỹ thuật:** **TS. Lee Choong-hyun (이충현)** — người phát triển chip **MINT**
  (chip Edge AI nền PIM đầu tiên: ~4 triệu khớp thần kinh nhân tạo, ~30 GOPS, **~17,6 TOPS/W**).
  *(Nguồn CEO mâu thuẫn giữa Bae/Lee — cần xác nhận lại với Pebble Square trước khi dùng đối ngoại.)*
- **Vốn đã gọi:** ~15 tỷ KRW (gồm khoản đầu tư 2 tỷ KRW từ UTC Investment)
- **Hợp tác R&D:** MOU với JBNU + nhóm nghiên cứu KAIST (7/2022) về bán dẫn thông minh.
- **Website:** https://www.pebble-square.com — **Liên hệ:** +82-31-702-7378 · info@pebble-square.com

## Công nghệ lõi: Analog-PIM (Processing-In-Memory)

Chip AI thực hiện **tính toán analog ngay trong bộ nhớ flash nhúng** — không tách rời bộ nhớ và
bộ xử lý như kiến trúc truyền thống. Lấy cảm hứng từ não người. Bốn lợi thế công ty nhấn mạnh:

1. **Điện năng cực thấp** (low power) — chạy AI ngay trên thiết bị pin nhỏ.
2. **Bảo mật / riêng tư** — xử lý on-device, **không phụ thuộc đám mây** (dữ liệu không rời thiết bị).
3. **Tốc độ suy luận nhanh** (fast inference) — độ trễ thấp, thời gian thực.
4. **Chi phí hiệu quả** (cost efficiency).

→ *Đây chính là "câu chuyện bán hàng" cốt lõi của Pebble Vina:* AI chạy tại chỗ, tiết kiệm điện,
riêng tư, rẻ — phù hợp thiết bị IoT/edge và các ứng dụng an toàn thời gian thực.

## Danh mục sản phẩm (cái mà nhà phân phối thực sự bán)

| # | Dòng sản phẩm | Nội dung | Ngành ứng dụng |
|---|---------------|----------|----------------|
| 1 | **Chip AI PIM + Mixed-Signal Processor** | Chip suy luận AI siêu tiết kiệm điện | Nền tảng cho mọi ứng dụng dưới đây |
| 2 | **Thuật toán AI / Deep Learning** | FCNN, CNN, DNN, RNN… tùy biến theo khách | Tối ưu cho chip Pebble |
| 3 | **Giải pháp On-Device AI** | Nhận diện giọng nói/ảnh/video tại chỗ | Wearable, smart home/IoT, drone/robot, y tế, an ninh |
| 4 | **Giải pháp Phân tích sự cố (Failure Analysis)** | **Phát hiện hồ quang điện (arc-fault)**, chẩn đoán lỗi, **bảo trì dự đoán** | An toàn điện, hạ tầng, năng lượng (điện mặt trời) |
| 5 | **Công cụ phát triển** | AI Accelerator, AI Studio, tài liệu | Hỗ trợ khách tích hợp |
| 6 | **Cấp phép IP + Thiết kế chip tùy biến** | License IP, thiết kế chip riêng | OEM/khách lớn |

**Trang sản phẩm:** https://www.pebble-square.com/en/page/21

> 🎯 **Sản phẩm "mũi nhọn" dễ bán nhất tại VN (suy luận của analyst):** *Phát hiện hồ quang điện /
> bảo trì dự đoán cho hệ thống điện & điện mặt trời* — sản phẩm cụ thể, có khách trả tiền rõ ràng,
> lại trùng với làn sóng quy định an toàn điện & bùng nổ điện mặt trời ở VN. Xem file cơ hội thị trường.

## Lộ trình thị trường của Pebble Square

Smart home/IoT (2021) → Xử lý ảnh/thị giác (2022) → Xe tự hành (2025) → Trung tâm dữ liệu (2026).

## Mô hình mở rộng quốc tế (rất quan trọng cho Pebble Vina)

- **Tháng 5/2025:** lập công ty con **Pebble Square Japan Co., Ltd.** tại Tokyo — gần hệ sinh thái
  startup AI & Đại học Tokyo (nơi CEO làm tiến sĩ), để hợp tác tối ưu thuật toán cho chip của họ.
- **Suy luận:** Pebble Square mở rộng bằng cách **lập pháp nhân địa phương dựa vào hệ sinh thái/đối tác
  bản địa**, không tự đánh đơn lẻ. Pebble Vina khớp đúng chiến lược này: pháp nhân Việt + nhà đầu tư
  có mạng lưới (bác Kim/KOCHAM) = cửa ngõ phân phối & thị trường cho cả Đông Nam Á. Đây là lập luận
  mạnh khi đàm phán quyền phân phối độc quyền.

## Hàm ý cho Pebble Vina
- Bán B2B kỹ thuật (không phải hàng tiêu dùng) → cần năng lực hỗ trợ kỹ thuật khách hàng (FAE/design-in).
- Câu chuyện "Made-in-Korea, công nghệ độc quyền PIM" + hậu thuẫn KOCHAM = uy tín với khách Hàn tại VN.

## Nguồn
- Web: pebble-square.com/en (trang chủ & /page/21)
- JETRO — "Pebble Square Inc. Establishes Japanese Subsidiary in Tokyo" (2025)
- CB Insights / PitchBook — hồ sơ công ty Pebble Square
- SmartTimes / JBNU — chip MINT (~30 GOPS, 17,6 TOPS/W, Analog-PIM)
- ⚠️ **ĐÃ GỠ:** "MDPI Electronics 2024 — Electrical Anomaly Detection Based on PIM Chip" — **bài này KHÔNG
  tồn tại đúng tên đó** (kiểm chứng web 2026-06-14). KHÔNG trích trong bất kỳ tài liệu đối ngoại nào.
  Chi tiết: `projects/thuyet-trinh-ra-mat-pebble-vina/slides/_research-proof.md`.
