---
title: Bằng chứng kỹ thuật cho Slide 04 — "nó CHẠY" (arc-fault trên PIM)
status: in-progress
owner: product-lead
updated: 2026-06-14
links: [projects/thuyet-trinh-ra-mat-pebble-vina/slides/04-giai-phap-bang-chung.md, company/parent-pebble-square.md, memory/pebble-square-leadership.md]
---

# Bằng chứng kỹ thuật cho Slide 04

> Mục tiêu: tìm bằng chứng **CÔNG KHAI, KIỂM CHỨNG ĐƯỢC, có nguồn + ngày** cho các tuyên bố mà
> Slide 04 ("nó CHẠY") định đưa ra. Phân loại: ✅ VERIFIED (có link nguồn) / 🟡 CLAIMED (có nhắc
> nhưng không có số liệu công khai) / ❌ NOT FOUND.
>
> **Quy tắc tuyệt đối:** không bịa số. Không có nguồn → ❌ NOT FOUND.
>
> Nghiên cứu thực hiện 2026-06-14 (WebSearch + WebFetch qua subagent). *Lưu ý phương pháp:* phần
> lớn con số lấy từ **snippet WebSearch** (WebFetch bị giới hạn quyền trong phiên), nên với mọi con
> số đưa lên sân khấu, **mở trực tiếp link gốc xác minh lại lần cuối** trước 19/6.

---

## ⚠️ HAI CẢNH BÁO LỚN NHẤT (đọc trước khi làm slide)

1. **Pebble Square KHÔNG công khai gắn chip MINT với arc-fault / phát hiện hồ quang / điện mặt trời.**
   Không một nguồn báo chí nào (SmartTimes, JBNU, JETRO) hay tìm kiếm chuyên đề nào xác nhận. Ứng dụng
   arc-fault là **góc tiếp cận thị trường của Pebble Vina** (suy luận của analyst trong
   `parent-pebble-square.md`), **không phải tuyên bố của nhà cung cấp**. → Trên sân khấu, KHÔNG được
   nói "Pebble Square làm chip cho arc-fault" như một sự thật đã công bố.

2. **Bài "MDPI Electronics 2024 — Edge AI for Electrical Anomaly Detection Based on Process-In-Memory
   Chip" mà file nội bộ đang dẫn → ❌ KHÔNG TỒN TẠI đúng tên đó.** Tìm ~10 truy vấn nhiều hướng, không
   ra DOI nào khớp. **Trích một bài không tồn tại trước khán giả kỹ thuật = tự sát uy tín.** Gỡ khỏi
   slide cho tới khi có DOI thật (xin Pebble Square / bác Kim).

---

## Mục 1 — Pebble Square Inc. & chip MINT

| Tuyên bố | Phân loại | Trích/cơ sở | Nguồn |
|---|---|---|---|
| Pebble Square Inc. (페블스퀘어) có thật, fabless Edge AI, Hàn Quốc | ✅ VERIFIED | "develops ultra-low power and high-performance edge AI chips" | SmartTimes 4109; JETRO 158789; CB Insights |
| Thành lập **2021** (tháng 9/2021) | ✅ VERIFIED | "established in September 2021" / "Since its founding in 2021" | JETRO 158789; Saramin/Jobkorea |
| Chip tên **MINT**, neuromorphic, nền PIM | ✅ VERIFIED | "neuromorphic semiconductor chip (code name MINT)... PIM" | SmartTimes 4109; JBNU 503129 |
| **~4 triệu synapse** | ✅ VERIFIED | "artificial neural network contains 4 million synapses" | SmartTimes 4109 |
| **~30 GOPS** | ✅ VERIFIED | "supports 30 GOPS (Giga Operation Per Second)" | SmartTimes 4109 |
| **17.6 TOPS/W** (hiệu suất năng lượng) | ✅ VERIFIED | "17.6 TOPS/W energy efficiency" | SmartTimes 4109 |
| **Analog-PIM** (tính toán analog trong flash nhúng) | ✅ VERIFIED | "proprietary Analog-PIM... analog computation directly from flash memory embedded" | JETRO 158789 |
| Vốn gọi **~15 tỷ KRW** | ✅ VERIFIED | "raised a total of 15 billion KRW" | JETRO 158789 |
| **UTC Investment ~2 tỷ KRW** | ✅ VERIFIED | "UTC인베스트먼트... 20억원 투자" | News1; Platum; Topdaily |
| Công ty con **Pebble Square Japan** (Tokyo, 5/2025) | ✅ VERIFIED | "In May 2025, established Pebble Square Japan Co.,Ltd." | JETRO 158789 |
| Tiến trình **nm** của MINT | ❌ NOT FOUND | Không nguồn nào nêu | — |
| **Arc-fault / hồ quang / điện mặt trời / failure analysis** gắn với MINT | ❌ NOT FOUND | Không nguồn công khai nào | (xác nhận vắng mặt qua 2 search chuyên đề) |
| CEO hiện tại = **Bae Hak-yeol (배학열)** | 🟡 CLAIMED (mâu thuẫn) | Bae là sáng lập/đại diện (tin 1/2023); nguồn 2025 nêu **Lee Chung-hyun (이충현)** là 대표. Khả năng đồng đại diện / đã đổi | LecturerNews 116052 (Bae) ↔ theBell (Lee) |

**Kết luận Mục 1:** bộ thông số kỹ thuật MINT (4M synapse / 30 GOPS / 17.6 TOPS/W / Analog-PIM) là
**bằng chứng thật, dùng được**. Điểm cần kiểm thêm: ai là CEO hiện tại (Bae vs Lee), và Pebble Square
có từng làm arc-fault chưa (cả hai → hỏi thẳng họ).

---

## Mục 2 — Arc-fault detection bằng PIM / analog IMC / neuromorphic + bài MDPI

| Tuyên bố | Phân loại | Ghi chú | Nguồn |
|---|---|---|---|
| Bài MDPI 2024 "...Electrical Anomaly Detection Based on Process-In-Memory Chip" | ❌ NOT FOUND | Không tồn tại đúng tên này. ~10 truy vấn không ra DOI khớp | — |
| Arc-fault detection chạy **trên chip PIM cụ thể** + số liệu công khai | ❌ NOT FOUND | Không có bài nào ghép đúng "arc-fault + PIM chip + accuracy/latency/power" | — |
| PIM/in-memory giúp **anomaly detection ở edge** cực tiết kiệm điện | ✅ VERIFIED (nhưng SAI ứng dụng) | *Memristor-Based Neuromorphic System for Unsupervised Online Learning and Network Anomaly Detection* — Info 2025, 16, 222. Acc 87%, 783 GOPS/W, **20.5 mW**. **NHƯNG là network-intrusion, KHÔNG phải arc-fault; tác giả Mỹ (U. Dayton), KHÔNG phải Pebble Square** | DOI 10.3390/info16030222 |
| Arc-fault detection bằng **deep/edge ML** (không PIM) là hướng nghiên cứu thật, nhiều bài 2024 | ✅ VERIFIED | Xem danh sách dưới | MDPI nhiều bài |

**Các bài arc-fault 2024 dùng được làm "nguyên lý đã chứng minh" (KHÔNG bài nào của Pebble Square, KHÔNG bài nào chạy trên PIM):**

- *Lightweight Arc Fault Detection Based on Adam-Optimized NN and Hardware Feature Algorithm* —
  **Energies 2024, 17(6), 1412** — DOI 10.3390/en17061412 (NN nhẹ cho MCU; accuracy/latency cần mở link xác minh).
- *Low-Voltage Series Arc Fault Detection Based on Multi-Feature Fusion and Improved Residual Network* —
  Electronics 2025, 14(7), 1325 — https://www.mdpi.com/2079-9292/14/7/1325 (deep learning, không PIM).
- *CNN–Transformer Parallel Neural Network with Threshold-Moving Optimization* — Sensors 2024 — PMC11511016.
- *A Series Arc Fault Diagnosis Method Based on an Extreme Learning Machine Model* — Processes 2024, 12(12), 2947.
- *Heterogeneous Processing-in-Memory for AI Applications on Edge Devices* — PMC11509660 (nhóm Hàn,
  Chung-Ang Univ.) — về **PIM cho edge AI nói chung**, KHÔNG arc-fault. Dùng để chứng minh "Hàn Quốc dẫn đầu PIM".

**Kết luận Mục 2:** không có bằng chứng "arc-fault chạy trên PIM". Phương án dự phòng = ghép 2 mảnh
RIÊNG BIỆT (nói rõ là 2 thứ): (a) "arc-fault bằng ML là hướng thật" [Energies 2024] + (b) "PIM/in-memory
chạy anomaly detection ở edge cực tiết kiệm điện" [Info 2025 — nhưng phải nói rõ đó là network anomaly].
Tuyệt đối không gán hai mảnh này thành "Pebble Square đã làm arc-fault trên PIM".

---

## Mục 3 — Benchmark PIM/analog-IMC vs chip thường

### 3a. Benchmark CỦA CHÍNH Pebble Square (công khai)
| Tuyên bố | Phân loại | Nguồn |
|---|---|---|
| Pebble Square benchmark MINT vs ST/TI/Microchip/NVIDIA cho arc-fault hoặc edge AI | ❌ NOT FOUND | Không công khai |
| Con số duy nhất công khai của MINT: **17.6 TOPS/W, 30 GOPS, 4M synapse** | ✅ VERIFIED | SmartTimes 4109 |

### 3b. Benchmark CHUNG của công nghệ analog-IMC/PIM (học thuật — KHÔNG phải của Pebble Square)
| Số liệu | Phân loại | Nguồn |
|---|---|---|
| Analog matrix computing ~**80 µW** đỉnh AI vs **~6 W** edge GPU (chênh nhiều bậc) | ✅ VERIFIED | Embedded Computing Design (analog matrix computing) |
| ReDCIM **36.5 TOPS/W @INT8**; DynaPlasia **30–40 TOPS/W** trên CNN | ✅ VERIFIED | arXiv review IMC |
| EnCharge AI EN100: **200 TOPS, 40 TOPS/W** (analog CIM thương mại) | ✅ VERIFIED | EDN / EnCharge |
| Memristor anomaly-detection edge: **20.5 mW, 783 GOPS/W** | ✅ VERIFIED | Info 2025 16:222 (network anomaly) |

**Kết luận Mục 3:** Có thể nói "công nghệ analog-IMC/PIM tiết kiệm điện hơn GPU/MCU nhiều bậc" (có
nguồn học thuật). **Không** được trình bày như benchmark riêng của Pebble Square cho arc-fault.

---

## Mục 4 — Chuẩn arc-fault PV (UL 1699B / IEC 63027 / VN)

| Tuyên bố | Phân loại | Yêu cầu kỹ thuật | Nguồn |
|---|---|---|---|
| **UL 1699B** (Mỹ, 2011) — chuẩn AFCI cho PV | ✅ VERIFIED | Phát hiện & ngắt hồ quang **300–900 W**; ngắt trong **≤2 giây** (series arc). Reset: tự động sau 5 phút HOẶC tay | NREL 60660; testinglab; SMA |
| **IEC 63027:2023** — DC arc detection & interruption cho PV (≤1500 V DC) | ✅ VERIFIED | Vượt test với năng lượng hồ quang **200–750 joule**, **ngắt trong ≤2.5 giây**. Tự nối lại tối đa 4 lần/24h, lần 5 phải bằng tay | ANSI/IEC webstore; pv-magazine 2023; Fraunhofer ISE |
| IEC 63027 thay/khắc phục điểm yếu UL 1699B (test sát thực tế hơn, ít báo giả) | ✅ VERIFIED | — | pv-magazine 2023; Fraunhofer ISE |
| **VN: QCVN 01:2020/BCT** — an toàn điện, áp dụng hệ điện mặt trời nối lưới | ✅ VERIFIED | Quy chuẩn an toàn điện (Bộ Công Thương) | tcvn.gov.vn; DaiDung |
| **VN: TCVN 11855-1:2017** — kiểm tra/tài liệu/bảo trì hệ PV nối lưới | ✅ VERIFIED | — | tcvn.gov.vn |
| **VN có yêu cầu arc-fault detection riêng (TCVN/QCVN)?** | ❌ NOT FOUND | Chưa thấy điều khoản arc-fault cụ thể trong chuẩn VN; dự án (nhất là vốn ngoại) thường tham chiếu chuẩn quốc tế | — |

**Kết luận Mục 4:** Ngưỡng dùng được trên slide: **UL 1699B = 300–900 W, ngắt ≤2 s**; **IEC 63027 =
200–750 J, ngắt ≤2.5 s**. VN: có QCVN 01:2020/BCT + TCVN 11855-1:2017 cho an toàn/PV nhưng **chưa có
mục arc-fault riêng** → cơ hội "đón đầu quy định", KHÔNG nói "luật VN bắt buộc arc-fault" (chưa đúng).

---

## Mục 5 — Bối cảnh: ai đã thương mại hóa arc-fault bằng AI/edge?

| Công ty / giải pháp | Phân loại | Ghi chú | Nguồn |
|---|---|---|---|
| **Huawei** — AFCI dùng ML, ngắt **<0.5 s** khi có hồ quang | ✅ VERIFIED | Đã thương mại hóa, học từ dữ liệu lỗi qua mạng inverter | Solargain (Huawei AI AFCI) |
| **Ginlong Solis** (+ ĐH Thiên Tân) — DC arc detection dùng FFT + BPNN | ✅ VERIFIED | Phương pháp AI mới cho PV | pv-magazine 2024-01-26 |
| **SolarEdge / SMA** — AFCI tích hợp inverter (chuẩn hóa) | ✅ VERIFIED | Có app note kỹ thuật | SolarEdge KC; SMA America |
| **iStore** — "AI-Powered Active Arcing Protection" | 🟡 CLAIMED | Sản phẩm thương mại, ít số liệu công khai | iStore |

**Kết luận Mục 5:** Arc-fault bằng AI/edge **đã có người thương mại hóa** (Huawei, Solis, SolarEdge,
SMA). Hệ quả định vị cho Pebble Vina: **không phải "phát minh"** — điểm khác biệt phải đóng khung là
*on-device không cần cloud + siêu tiết kiệm điện nhờ Analog-PIM + chạy ngay trong tủ/inverter*, KHÔNG
phải "lần đầu có arc-fault bằng AI". Người trong phòng có thể biết Huawei đã làm.

---

## TÓM TẮT PHÂN LOẠI (dùng nhanh)

- ✅ **VERIFIED, dùng được:** Pebble Square có thật + thành lập 2021; MINT = 4M synapse, 30 GOPS,
  17.6 TOPS/W, Analog-PIM; vốn ~15 tỷ KRW (UTC 2 tỷ); Pebble Square Japan 5/2025; analog-IMC tiết kiệm
  điện nhiều bậc vs GPU/MCU (nguyên lý); UL 1699B (300–900 W, ≤2 s); IEC 63027 (200–750 J, ≤2.5 s);
  QCVN 01:2020/BCT + TCVN 11855-1:2017; Huawei/Solis/SolarEdge đã thương mại hóa arc-fault AI.
- 🟡 **CLAIMED:** CEO hiện tại (Bae vs Lee — mâu thuẫn nguồn); iStore "AI arcing protection".
- ❌ **NOT FOUND (KHÔNG được tự khẳng định):** Pebble Square làm arc-fault; bài MDPI "...PIM Chip";
  benchmark riêng của Pebble Square vs ST/TI; arc-fault chạy trên chip PIM cụ thể; node nm của MINT;
  yêu cầu arc-fault riêng trong chuẩn VN.

---

## NGUỒN (link đầy đủ)

**Pebble Square / MINT**
- SmartTimes 4109: http://www.smarttimes.co.kr/news/articleView.html?idxno=4109
- JBNU Press 503129: https://www.jbpresscenter.com/news/articleView.html?idxno=503129
- JETRO (Pebble Square Japan): https://www.jetro.go.jp/en/invest/newsroom/2025/158789d08ff7dd07.html
- CB Insights: https://www.cbinsights.com/company/pebble-square
- News1 (UTC 20억): https://www.news1.kr/industry/sb-founded/5713656
- Platum (UTC 20억): https://platum.kr/archives/254257
- theBell (대표 이충현): https://www.thebell.co.kr/free/content/ArticleView.asp?key=202510151545473160102656
- etnews (ngày bài MINT): https://www.etnews.com/20230112000238

**Arc-fault + PIM / IMC**
- Info 2025 16:222 (memristor anomaly, network): https://www.mdpi.com/2078-2489/16/3/222
- Energies 2024 17(6):1412 (lightweight arc-fault NN): https://www.mdpi.com/1996-1073/17/6/1412
- Electronics 2025 14(7):1325: https://www.mdpi.com/2079-9292/14/7/1325
- Processes 2024 12(12):2947: https://www.mdpi.com/2227-9117/12/12/2947
- CNN–Transformer arc-fault: https://pmc.ncbi.nlm.nih.gov/articles/PMC11511016/
- Heterogeneous PIM for Edge AI (Korea): https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11509660/

**Benchmark IMC**
- Analog matrix computing (80µW vs 6W GPU): https://embeddedcomputing.com/technology/ai-machine-learning/analog-matrix-computing-a-breakthrough-for-high-performance-edge-ai-on-battery-power
- Top 10 edge AI chips (EnCharge EN100): https://www.edn.com/top-10-edge-ai-chips-2/

**Chuẩn arc-fault**
- IEC 63027:2023 (ANSI store): https://webstore.ansi.org/standards/iec/iec63027ed2023
- pv-magazine (Fraunhofer ISE, 2.5s/200–750J): https://www.pv-magazine.com/2023/05/15/fraunhofer-ise-sets-inverter-standard-with-arc-fault-detectors/
- UL 1699B testing (300–900W, ≤2s): https://www.testinglab.com/ul-1699b-arc-fault-detection-certification-testing-for-pv-inverters
- NREL low-cost arc-fault: https://docs.nrel.gov/docs/fy14osti/60660.pdf
- SMA PV AFCI: https://www.sma-america.com/partners/knowledge-base/pv-arc-fault-circuit-interrupter
- VN tiêu chuẩn (QCVN 01:2020/BCT, TCVN 11855-1): https://daidung.com/en/solar-farm-safety-standards-in-vietnam-a-strategic-move-towards-a-greener-future/

**Bối cảnh thương mại hóa**
- Huawei AI AFCI (<0.5s): https://www.solargain.com.au/blog/huawei-ai-powered-arc-fault-detection
- Ginlong Solis (FFT+BPNN): https://www.pv-magazine.com/2024/01/26/ai-tech-for-dc-arc-detection-in-pv-systems/
- SolarEdge AFCI app note: https://knowledge-center.solaredge.com/sites/kc/files/arc_fault_detection_commercial_three_phase_application_note_na.pdf
- iStore AI arcing protection: https://istore.net.au/ai-powered-active-arcing-protection/

---

## KHUYẾN NGHỊ KHUNG DỰ PHÒNG CHO SLIDE 04 (suy luận của product-lead)

Vì **không có benchmark riêng của Pebble Square** và **không có bài MDPI arc-fault trên PIM**, slide 04
nên dựng "bằng chứng" theo 3 lớp, tách bạch rõ ràng:

1. **Nguyên lý đã chứng minh (học thuật, có nguồn):** analog-IMC/PIM chạy AI ở edge với điện năng thấp
   hơn GPU/MCU nhiều bậc (80 µW vs 6 W; 20.5 mW cho anomaly detection). → "công nghệ nền là thật".
2. **Sản phẩm thật của principal (có nguồn):** MINT — 4M synapse, 30 GOPS, **17.6 TOPS/W**, Analog-PIM.
   → "Pebble Square có chip thật, đo được". *Để CEO Pebble Square tự nói đoạn này (uy tín hơn ta nói).*
3. **Bài toán & chuẩn rõ ràng (có nguồn):** UL 1699B / IEC 63027 quy định ngưỡng + thời gian ngắt cụ
   thể → "đây là bài toán kỹ thuật xác định, không mơ hồ".

**Điều KHÔNG được tự khẳng định trên sân khấu** (kẻo kỹ sư bắt lỗi):
- ❌ "Pebble Square đã làm/đã kiểm chứng arc-fault" — chưa có nguồn; phải nói rõ đây là ứng dụng
  Pebble Vina ĐỀ XUẤT, hoặc xin Pebble Square xác nhận PoC bằng văn bản trước.
- ❌ Trích bài MDPI "...Process-In-Memory Chip" — bài không tồn tại.
- ❌ Bất kỳ con số benchmark "MINT vs ST/TI cho arc-fault" — không tồn tại công khai.
- ❌ "Luật VN bắt buộc arc-fault" — chưa đúng (chuẩn VN chưa có mục này).
- ❌ "Chúng tôi là đầu tiên làm arc-fault bằng AI" — Huawei/Solis/SolarEdge đã có.

**Việc rẻ nhất để biến 🟡/❌ thành ✅ trước 19/6:** một email cho Pebble Square / bác Kim hỏi đúng 3
thứ — (a) Pebble Square đã có PoC/benchmark arc-fault chưa? xin số liệu + cho phép trích; (b) có DOI/PDF
bài "anomaly detection trên PIM" không? (c) CEO/đại diện hiện tại là ai. Nếu họ đưa được → slide 04
mạnh hẳn; nếu không → giữ khung 3 lớp ở trên và KHÔNG vượt quá nó.
