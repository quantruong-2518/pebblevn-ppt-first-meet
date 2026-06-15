---
title: Hồ sơ công ty mẹ — Pebble Square Inc. (nhà cung cấp / principal)
status: in-progress
owner: GM
updated: 2026-06-15
links: [company/profile.md, planning/2026-06-09-co-hoi-thi-truong-viet.md, market/_phap-ly-phan-phoi-vn.md, projects/thuyet-trinh-ra-mat-pebble-vina/slides/_research-pebble-square-services.md]
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
- **CEO / 대표이사 (hiện tại):** **Lee Choong-hyun (이충현)** — cũng là người phát triển chip **MINT**
  (chip Edge AI nền Analog-PIM: ~4 triệu khớp thần kinh nhân tạo, ~30 GOPS, **~17,6 TOPS/W**). Nguồn
  2024–2025 (ABOUT chính thức, theBell, KAIST seminar "President Lee") ghi Lee là 대표.
- **Đồng sáng lập học thuật:** **GS. Bae Hak-yeol (배학열)** — Khoa Kỹ thuật Điện tử, **Đại học Quốc gia
  Jeonbuk (JBNU / 전북대학교)**; là đại diện trong các tin **2023**. Pebble Square có liên hệ ĐH Tokyo
  (theo JETRO) → đã lập công ty con Tokyo 2025.
- *(**Đính chính 2026-06-15:** trước đây ghi ngược Bae=CEO; GM chốt **Lee = CEO** cho slide 03 sau đối chiếu
  research. **Vẫn cần xác nhận chính tả KO + chức danh trực tiếp với Pebble Square trước 19/6.**)*
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

## Danh mục sản phẩm & dịch vụ (CHÍNH THỨC — pebble-square.com/en/page/21, xác minh 2026-06-15)

Trang chính thức cấu trúc theo **3 tầng** (wording gốc giữ trong ngoặc kép):

**① Tầng nền — chip & công cụ phát triển**
- **Chip AI nền Analog-PIM** ("Pebble Square's AI Chip Family"): "Crossbar Array for Analog Computing" ·
  **"256-State Synaptic Cell (8-bit)"** · lợi thế lõi: **"Ultra-Low Power · Low Latency · Compact"**.
- **Pebble AI Studio** — "Integrated SDK": deploy & tối ưu mô hình AI lên chip PIM "nhanh và liền mạch".
- **AI Accelerator** — công cụ hỗ trợ nhà phát triển.

**② Tầng ứng dụng On-Device AI** (3 trụ chính thức)
- **Sound** — "real-time voice recognition" nhanh & chính xác.
- **Vision** — xử lý ảnh đa dạng, "high-speed, low-power AI vision".
- **Security** — xử lý an ninh **"without reliance on internet or network"** (hoàn toàn on-device).

**③ Tầng AI-Driven Failure Analysis**
- **Risk Management** — "analyzes real-time data to detect irregularities" (phát hiện bất thường/anomaly).
- **Fault Analysis / Predictive Maintenance** — "real-time diagnostics for automated robots and machinery".

**Họ chip (chip family):** **MOCHA** (gen-1, phát triển 11/2021) → **MINT** (gen-2, phát triển 12/2022,
**양산 hàng loạt 5/2023**). *(PAPAYA gen-3 có ở báo etnews 11/2024 nhưng **KHÔNG có trong Company History
chính thức** → nhãn 🟡 chưa xác nhận; KHÔNG khẳng định trên tài liệu đối ngoại cho tới khi PS xác nhận.)*

**Trang sản phẩm:** https://www.pebble-square.com/en/page/21

> ⚠️ **ĐÍNH CHÍNH QUAN TRỌNG (2026-06-15):** trang chính thức **KHÔNG** liệt kê *"phát hiện hồ quang điện
> (arc-fault) / điện mặt trời"* như sản phẩm Pebble Square. Failure Analysis của họ là **robot/máy móc tự động
> + anomaly thời gian thực**, không có chữ arc/solar. → **arc-fault & an toàn điện là GÓC TIẾP CẬN THỊ TRƯỜNG
> do Pebble Vina khởi xướng cho VN**, KHÔNG gán cho principal (nhất là khi CEO PS có mặt). Lõi năng lực PS
> khớp được là **bảo trì dự đoán / anomaly**, còn arc-fault là lớp ứng dụng ta tự dựng phía trên. Chi tiết:
> `projects/thuyet-trinh-ra-mat-pebble-vina/slides/_research-pebble-square-services.md`.

## Lộ trình thị trường của Pebble Square

Smart home/IoT (2021) → Xử lý ảnh/thị giác (2022) → Xe tự hành (2025) → Trung tâm dữ liệu (2026).
*(Đây là lộ trình thị trường họ công bố — automotive/datacenter là định hướng, chưa thấy sản phẩm đã ship.)*

## Cột mốc chính thức (Company History — nguồn: trang Pebble Square, xác minh 2026-06-15)

**2021**
- **09** — Thành lập **Pebble Square Inc.**
- **11** — Lập **trung tâm nghiên cứu** doanh nghiệp
- **11** — Phát triển chip Edge AI kiến trúc PIM (**MOCHA** — gen-1)

**2022**
- **07** — MOU nghiên cứu chung bán dẫn thông minh: **KAIST – ĐH Quốc gia Jeonbuk (Chonbuk) – Pebble Square**
- **10** — Chứng nhận **doanh nghiệp mạo hiểm** (venture company)
- **12** — Phát triển chip PIM AI **gen-2 (MINT)**

**2023**
- **03** — Ký **NDA với SK hynix**: công nghệ Analog Computing-in-Memory + AI accelerator
- **05** — **Sản xuất hàng loạt (양산)** chip PIM AI gen-2 (**MINT**)

**2024**
- **01** — Đăng ký **bằng sáng chế**: thiết bị neuromorphic hiện thực mạng nơ-ron & phương pháp vận hành
- **02** — **PoC thành công bằng MINT**: hệ đèn nhận diện giọng nói + chuông khẩn cấp
- **03** — **NDA mua có điều kiện (nước ngoài): MEISEI ELECTRIC Co., Ltd.** — hệ Home IoT dùng MINT
- **03** — **JV Saudi "Cluster AI Lab"** — thỏa thuận đầu tư liên doanh

**2025**
- **05** — Lập **Pebble Square Japan, Inc.** (Tokyo)
- **08** — Gọi vốn **Pre-A**
- **10** — Được chọn **KPAS 2025** (Korea Promising AI Startups)

> Dùng cho honor (slide 03) & cộng sinh (slide 04): các mốc ✅ từ chính history của họ — **NDA SK hynix · JV
> Saudi · MEISEI · PoC giọng nói · 양산 MINT · KPAS 2025 · PS Japan**. *Tránh* số doanh thu (hồ sơ DN ghi −86% YoY).

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
- Web: pebble-square.com/en (trang chủ) · **/en/page/21** (sản phẩm/dịch vụ — WebFetch verbatim 2026-06-15)
- **Company History chính thức** (timeline 2021–2025) — Pebble Square (GM cung cấp + đối chiếu trang, 2026-06-15)
- JETRO — "Pebble Square Inc. Establishes Japanese Subsidiary in Tokyo" (2025)
- CB Insights / PitchBook — hồ sơ công ty Pebble Square
- SmartTimes / JBNU — chip MINT (~30 GOPS, 17,6 TOPS/W, Analog-PIM)
- ⚠️ **ĐÃ GỠ:** "MDPI Electronics 2024 — Electrical Anomaly Detection Based on PIM Chip" — **bài này KHÔNG
  tồn tại đúng tên đó** (kiểm chứng web 2026-06-14). KHÔNG trích trong bất kỳ tài liệu đối ngoại nào.
  Chi tiết: `projects/thuyet-trinh-ra-mat-pebble-vina/slides/_research-proof.md`.
