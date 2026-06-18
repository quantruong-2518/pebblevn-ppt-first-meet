---
title: Hồ sơ công ty mẹ — Pebble Square Inc.
status: in-progress
owner: GM
updated: 2026-06-18
links: [company/profile.md, company/sources/README.md, company/decisions/0002-pebble-vina-thanh-vien-pebble-square.md, planning/2026-06-09-co-hoi-thi-truong-viet.md, market/_phap-ly-phan-phoi-vn.md, projects/thuyet-trinh-ra-mat-pebble-vina/slides/_research-pebble-square-services.md]
---

# Pebble Square Inc. — Công ty mẹ

> **Pebble Square là công ty mẹ của Pebble Vina** (ADR 0002, 2026-06-16): Pebble Vina là **thành viên / cánh tay
> Việt Nam** của nhóm Pebble Square, đưa nền tảng công nghệ của công ty mẹ vào vận hành thật tại VN (sau là Đông
> Nam Á). *(Trước 2026-06-16 quan hệ được mô tả là phân phối độc quyền — nay đã chuyển sang mô hình công ty
> con–thành viên; cấu trúc pháp nhân chính xác `[CẦN ĐIỀN]`.)* Mọi agent cần hiểu rõ công nghệ & lịch sử của công
> ty mẹ để định vị/bán đúng — **lịch sử Pebble Square là xương sống marketing của Pebble Vina.** *Dữ kiện từ web
> (xem Nguồn cuối file); phần suy luận có gắn nhãn.*

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
**양산 hàng loạt 5/2023**) → **PAPAYA / PAPAYA FLEX** (gen-3) → **ESPRESSO** (AI SoC, SRAM Digital-PIM).
*(**Cập nhật 2026-06-18:** PAPAYA **đã được xác nhận** — xuất hiện trong **IR Deck chính thức 05/01/2026**
ở bảng benchmark ("PAPAYA FLEX") và trang 5G base station; ESPRESSO là SoC mới nhất. Trước đó PAPAYA bị
gắn nhãn 🟡 vì chỉ thấy ở báo etnews. Nay nguồn cấp 1 là IR Deck — xem mục "Bổ sung từ IR Deck" cuối file.)*

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

## Bổ sung từ IR Deck (nguồn cấp 1 — `company/sources/`, tài liệu 05/01/2026)

> IR Deck gọi vốn 33 trang. Đây là **nguồn chính thức mới nhất** — bổ sung & đính chính phần trên. Lưu ý
> đây là tài liệu IR → một số mục là **lộ trình/hướng tới tương lai**, đã gắn nhãn rõ. Bản gốc + trích text:
> `company/sources/2026-01-05-pebble-square-ir-deck.*`.

**🆕 ESPRESSO — AI SoC (sản phẩm trọng tâm mới, "Engine for Local AI Intelligence")**
- Kiến trúc: **SRAM-based Digital-PIM** (khác dòng Analog-PIM của MINT/PAPAYA → PS có **cả 2 nhánh PIM**).
- Hiệu năng: **160 TOPS @INT8 / 100 TFLOPS @bFP16**; điện năng **10W**; hiệu suất **16 TOPS/W**.
- Đóng gói **20,5 × 23 mm, 1799-pin FCBGA**; có **M.2 (22×80mm)** và **AI Accelerator Card (4× ESPRESSO =
  640 TOPS@INT8 / 400 TFLOPS@bFP16)**. Giao tiếp host **PCIe Gen4 ×4**. Hỗ trợ INT8/16, FP16/32, bFP16/24.
- **LLM nội bộ tới 120 tỷ tham số**; chạy được DeepSeek, OpenAI, Google… (model open-weight).
- Đích nhắm: **AI PC, private LLM appliance, robotics, industrial edge, multimodal AI**.
- Trạng thái (theo deck): **"Available from Sep. 2026"** → 🟡 lộ trình, chưa ship lúc lập deck.

**🆕 Nền tảng LLM On-Premise (dòng kinh doanh mới — vượt khỏi "chỉ bán chip edge")**
- Bán **server suy luận LLM đặt tại chỗ** cho doanh nghiệp: chạy LLM tùy biến (RAG/fine-tune) trên dữ liệu
  riêng, **không phụ thuộc cloud** → riêng tư, giảm chi phí API, độ trễ thấp, dễ tuân thủ (chính phủ, tài
  chính, y tế, sản xuất). Cấu hình mẫu: chassis 4U, CPU **Epyc 9355**, GPU/AI SoC = **NVIDIA hoặc ESPRESSO**.
- Định hướng chiến lược: **GPU-centric → NPU/AI SoC; Cloud AI → Private AI**. → mở rộng từ edge chip sang
  **hạ tầng AI doanh nghiệp**; trùng khớp mạnh use case "AI chủ quyền / dữ liệu không rời lãnh thổ" tại VN/GCC.

**Lộ trình chip có số liệu (deck trang 21) — chính xác hơn lộ trình thị trường ở trên:**

| Năm | Hiệu năng | Hiệu suất | Kích thước | Mốc | Ứng dụng |
|-----|-----------|-----------|-----------|-----|----------|
| 2021 | 25 GOPS | 10 TOPS/W | 5×5 mm² | Proof of Concept | Smart Home, IoT, Failure Analysis |
| 2022 | 30 GOPS | 17 TOPS/W | 5×5 mm² | **Mass Production** (MINT) | — |
| 2024 | 0,5 TOPS | 30 TOPS/W | 5×5 mm² | PoC với khách hàng | Image/Vision, Security System |
| 2026 | 160 TOPS (640) | 16 TOPS/W | 20×23 mm² | High-end (ESPRESSO) — "ready Q3/2026" | AI PC, Robotics, ChatBot, Auto Pilot, Data Center |

**Benchmark chính thức (dùng được khi pitch — đều từ deck):**
- **PAPAYA FLEX vs NVIDIA Jetson Nano:** ~**50× giảm điện** (0,1–0,15W vs 5–10W), ~**100× hiệu suất tính
  toán** (Resnet-50: 333–500 vs 3,6–7,2 FPS/W), ~**25× nhỏ hơn** (10×10mm vs 70×45mm), chi phí thấp hơn nhiều.
- **Trạm gốc 5G — PAPAYA vs NVIDIA L4:** tác vụ AI tốn **320–332W (L4) → 0,03W (PAPAYA)** → "giảm tới
  **10.000×** điện cho tác vụ AI ở base station" (góc "trung hòa carbon số").
- Bối cảnh deck nhấn: data center ngốn **~2% điện toàn cầu** + 300.000 gallon nước/ngày → bài toán năng lượng.

**Team / năng lực (deck trang 20):** **ChoongHyun Lee, Ph.D. — CEO** *(khớp đính chính 2026-06-15)*;
SangHyeon Kim, Ph.D.; Cimang Lu, Ph.D.; Yi Xu, M.S. — *Master Inventor Certificate*. Tổng năng lực lãnh
đạo PS: **>200 bài báo SCI, >800 bằng sáng chế Mỹ**. *(Lưu ý: GS Bae Hak-yeol không xuất hiện ở trang team
IR Deck — cần xác nhận vai trò hiện tại của Bae trước khi dùng đối ngoại.)*

**Mở rộng quốc tế (deck trang 19):** Pebble Square Japan, Inc. (5/2025) — được chọn "Tokyo's Overseas
Company Project" (hỗ trợ hành chính + tài chính); **chủ trương dùng Nhật làm hub khởi động mở rộng Đông Nam
Á.** → củng cố vai trò Pebble Vina là mũi ĐNÁ.

## Nguồn
- **IR Deck Pebble Square 05/01/2026** (33 trang) — `company/sources/2026-01-05-pebble-square-ir-deck.pdf`
  (nguồn cấp 1; GM cung cấp 2026-06-18). Bản trích text kèm theo.
- **Prospect & Partner Strategy 2026–2027** (Pebble Square, MẬT) —
  `company/sources/2026-06-pebble-square-prospect-strategy.docx` → tóm tắt: `market/2026-06-chien-luoc-tiep-can-prospect.md`.
- Web: pebble-square.com/en (trang chủ) · **/en/page/21** (sản phẩm/dịch vụ — WebFetch verbatim 2026-06-15)
- **Company History chính thức** (timeline 2021–2025) — Pebble Square (GM cung cấp + đối chiếu trang, 2026-06-15)
- JETRO — "Pebble Square Inc. Establishes Japanese Subsidiary in Tokyo" (2025)
- CB Insights / PitchBook — hồ sơ công ty Pebble Square
- SmartTimes / JBNU — chip MINT (~30 GOPS, 17,6 TOPS/W, Analog-PIM)
- ⚠️ **ĐÃ GỠ:** "MDPI Electronics 2024 — Electrical Anomaly Detection Based on PIM Chip" — **bài này KHÔNG
  tồn tại đúng tên đó** (kiểm chứng web 2026-06-14). KHÔNG trích trong bất kỳ tài liệu đối ngoại nào.
  Chi tiết: `projects/thuyet-trinh-ra-mat-pebble-vina/slides/_research-proof.md`.
