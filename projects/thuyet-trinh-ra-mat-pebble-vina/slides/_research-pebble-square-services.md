---
title: Nghiên cứu — TOÀN BỘ sản phẩm & ứng dụng của Pebble Square (không chỉ arc-fault)
status: in-progress
owner: analyst
updated: 2026-06-14
links: [company/parent-pebble-square.md, projects/thuyet-trinh-ra-mat-pebble-vina/slides/_research-proof.md, projects/thuyet-trinh-ra-mat-pebble-vina/README.md]
---

# Pebble Square — bức tranh đầy đủ (nguồn chính thức + báo Hàn + quốc tế)

> Lý do: deck đang khóa quá hẹp vào **một** ứng dụng (arc-fault điện mặt trời). GM yêu cầu nghiên cứu kỹ
> **tất cả** dịch vụ của Pebble Square trước khi mở rộng định vị. Thực hiện 2026-06-14 (3 analyst fan-out:
> trang chính thức · báo Hàn · nguồn quốc tế + bản đồ ứng dụng PIM). Phân loại ✅ VERIFIED / 🟡 CLAIMED / ❌ NOT FOUND.

---

## ⚠️ 5 PHÁT HIỆN LỚN NHẤT (đọc trước)

1. **arc-fault / hồ quang / điện mặt trời / an toàn điện = KHÔNG xuất hiện ở BẤT KỲ nguồn nào của Pebble
   Square** (trang chính thức EN, Company History, lẫn toàn bộ báo Hàn). Mục "AI-driven Failure Analysis"
   của họ chỉ nói **robot/máy móc tự động + phát hiện bất thường thời gian thực**, không có chữ "arc/solar".
   → **arc-fault là GÓC TIẾP CẬN THỊ TRƯỜNG của Pebble Vina, KHÔNG phải sản phẩm của nhà cung cấp.** Trên sân
   khấu (có CEO họ ngồi dưới) KHÔNG được nói "Pebble Square làm chip arc-fault" như sự thật đã công bố.

2. **Pebble Square là NỀN TẢNG Edge-AI ĐA NĂNG, không phải công ty một-ứng-dụng.** Định vị chính thức:
   **3 trụ On-Device** = Sound (giọng nói) · Vision (ảnh) · Security (an ninh) **+** dòng **Failure Analysis**
   (bảo trì dự đoán/anomaly). Trang ABOUT liệt kê **6 Business Sectors:** Fault Analysis · Home IoT · Risk
   Management · Security · Healthcare · Vision. Báo Hàn gọi là **"전천후 반도체" = chip "all-weather"/đa dụng**.

3. **Có HỌ CHIP, không phải một chip:** **MOCHA** (gen-1, 2021) → **MINT** (gen-2, dev 2022, 양산 2023, ~500k
   chip) → **PAPAYA / PAPAYA FLEX** (gen-3, dev xong 12/2023, **0.5 TOPS, 30 TOPS/W**, ~10mm). Hồ sơ nội bộ
   mới chỉ ghi MINT. PAPAYA là vũ khí marketing mạnh ("hiệu năng ngang Jetson Nano, rẻ ~10×, điện thấp ~200×"
   — *claim của Pebble Square, chưa benchmark độc lập*).

4. **MÂU THUẪN CEO (phải xác nhận trước 19/6):** trang ABOUT chính thức HIỆN TẠI + mọi nguồn 2024–2025 ghi
   **CEO = Lee Choong-hyun (이충현)**; báo 2023 ghi **Bae Hak-yeol (배학열, GS Đại học Jeonbuk)**. **Suy luận:
   đã chuyển giao — CEO hiện tại là Lee Choong-hyun; Bae là đồng sáng lập học thuật.** Hồ sơ nội bộ đang ghi
   **NGƯỢC** (Bae=CEO, Lee=CTO) → cần sửa sau khi hỏi Pebble Square.

5. **CỜ ĐỎ tài chính:** hồ sơ DN (JobKorea) ghi **doanh thu 2025 ~54,39 triệu KRW, -86% YoY** — mâu thuẫn gắt
   với narrative "hướng 300 tỷ KRW vào 2029" (theBell). Công ty ~15–19 người, pre-Series A. **KHÔNG đưa con số
   doanh thu lên deck.**

---

## 1. Danh mục đầy đủ (chính thức từ Pebble Square — dùng để định vị sản phẩm)

| Hạng mục | Nội dung (trích) | Nhãn | Nguồn |
|---|---|---|---|
| **Chip MINT** (gen-2) | 4M synapse · 30 GOPS · **17,6 TOPS/W** · Analog-PIM · synaptic cell 256-state (8-bit) · event-driven không clock · đã 양산 ~500k | ✅ | smarttimes 4109; edaily; ABOUT |
| **Chip MOCHA** (gen-1) | "PIM architecture Edge AI semiconductor (MOCHA)" 2021 — spec không công khai | ✅ tồn tại / ❌ spec | pebble-square /page/11 |
| **Chip PAPAYA / FLEX** (gen-3) | multicore PIM đầu tiên HQ; **0.5 TOPS, 30 TOPS/W**; FLEX ~10mm; "100× GPU" | 🟡 (claim của họ) | etnews 20241107; KGCCI |
| **3 trụ On-Device** | **Sound** (real-time voice → smart home/wearable/mobile) · **Vision** (ảnh → healthcare, manufacturing) · **Security** (xử lý an ninh on-device, không cloud) | ✅ | pebble-square /page/21 |
| **Failure Analysis** | "real-time diagnostics for automated robots & machinery, detect failures in advance"; risk mitigation | ✅ | pebble-square /page/21 |
| **Video** | nhận diện & phân tích video | ✅ | CB Insights / JETRO |
| **Pebble AI Studio** | SDK tích hợp, deploy model nhanh | ✅ | /page/21, /31 |
| **AI Accelerator** | developer tool (hub, không spec chi tiết) | ✅ tồn tại | /page/31 |
| **Thuật toán deep learning tùy biến** | "맞춤형 딥러닝 알고리즘 솔루션" | ✅ | edaily |
| **6 Business Sectors** | Fault Analysis · Home IoT · Risk Management · Security · Healthcare · Vision | ✅ (nhãn) | /page/11 |
| Mixed-signal processor; FCNN/CNN/DNN/RNN cụ thể; IP-license/custom-design | có nhắc, chưa xác minh lại trên trang hiện tại | 🟡 | hồ sơ nội bộ cũ |
| Node nm; công suất tuyệt đối (mW/W); spec MOCHA/PAPAYA đầy đủ | — | ❌ | — |

## 2. PoC / khách hàng / đối tác THẬT (✅ — an toàn để minh họa, mạnh hơn arc-fault)

- **02/2024 — PoC bằng MINT:** "**Voice recognition lighting + emergency bell system**" (đèn nhận diện giọng
  nói + hệ chuông khẩn cấp) — smart home/an toàn dân dụng. ✅ (Company History)
- **03/2024 — Conditional purchase NDA (nước ngoài):** **MEISEI ELECTRIC Co., Ltd. (Nhật)** — Home IoT dùng MINT. ✅
- **JV Saudi "Cluster AI Labs":** ~**100 tỷ KRW** huy động, định giá ~400 tỷ KRW, nhắm **NEOM City**; Pebble
  Square giữ **25%** (góp công nghệ); đối tác Cluster + Tatimah Capital. ✅ (MoneyToday, unicornfactory)
- **NDA với SK hynix** về analog computing-in-memory. ✅ (Company History)
- **ETRI** (Viện ETRI HQ) — hợp tác mảng truyền thông di động. ✅ (etnews 20241107)
- **JBNU + KAIST** — MOU R&D bán dẫn thông minh. ✅
- **Giải thưởng:** **KGCCI (Phòng TM Hàn-Đức) Innovation Award** 11/2024 cho MINT & PAPAYA; **KPAS 2025**
  (Korea Promising AI Startups); mời thuyết trình tại diễn đàn bán dẫn của Bộ KH&CN Saudi. ✅
- 🟡 Một **tập đoàn xây dựng lớn HQ** thí điểm MINT vào sản phẩm Home-IoT (chưa rõ tên — CLAIMED).
- **Nhà đầu tư:** UTC Investment (2 tỷ KRW, 3/2025) · STIC Ventures (2,5 tỷ KRW, 8/2025) · Pre-Series A ~10 tỷ KRW.

## 3. Lộ trình thị trường (theo trang chính thức của họ)

✅ trên trang chủ Pebble Square: **Smart home/IoT (2021) → Image/Vision (2022) → Auto pilot/xe tự hành (2025)
→ Data center (2026)**. *Lưu ý: đây là LỘ TRÌNH họ công bố, không phải sản phẩm đã ship; automotive/datacenter
không thấy trong báo Hàn → trình như "định hướng của Pebble Square", không phải "đã có".*
Công ty con **Pebble Square Japan** (Tokyo, 5/2025) — mô hình lập pháp nhân địa phương (khớp luận điểm Pebble Vina).

## 4. Không gian ứng dụng Analog-PIM (NĂNG LỰC NGÀNH — chỉ để nói "loại công nghệ này làm được gì")

> ⚠️ Đây là năng lực CHUNG của công nghệ PIM/IMC + ví dụ ĐỐI THỦ. **KHÔNG** trình bày như sản phẩm Pebble
> Square. Pebble Square chỉ tự claim các vertical ở Mục 1.

| Vertical | Vì sao PIM hợp | Ví dụ thương mại (đối thủ) | PS tự claim? |
|---|---|---|---|
| Always-on voice/keyword | <1 mW, không cloud | Syntiant NDP115; AnalogNets | ✅ (Sound) |
| Acoustic event (vỡ kính, máy lỗi) | xử lý analog, hệ digital ngủ | Aspinity AML100; Syntiant | 🟡 (security/fire) |
| Rung động / bảo trì dự đoán CN | phân tích tại chỗ liên tục | BrainChip Akida; ADI | ✅ (PdM/machinery) |
| Thị giác / người-vật | full-res tại edge, riêng tư | Mythic M1076; Akida | ✅ (Vision) |
| Wearable & y tế (ECG/PPG) | pin nhỏ, dữ liệu nhạy cảm | GreenWaves GAP9 | ✅ (healthcare/wearable) |
| An ninh / giám sát | không stream cloud | Mythic; Akida | ✅ (Security) |
| Ô tô / ADAS | event-driven, độ trễ thấp | BrainChip Akida | 🟡 (lộ trình 2025) |
| Robot / drone | suy luận tại chỗ | Mythic; Syntiant | ✅ (drone/robot) |
| Anomaly CN/mạng | giám sát luồng liên tục low-power | TinyML IDS | 🟡 (fault diagnosis) |

Cơ sở định lượng (✅ học thuật): analog CIM giảm năng lượng **10–100×** kịch bản always-on; AnalogNets 14nm
**8,58→57,39 TOPS/W** (KWS) → bối cảnh hóa MINT 17,6 TOPS/W (khác node/workload, **không so 1-1**).

## 5. Hàm ý cho deck (đề xuất — GM quyết)

- **Định vị 2 tầng:** (a) Pebble Square = **nền tảng Analog-PIM đa năng** (3 trụ Sound/Vision/Security +
  Failure Analysis; họ chip MOCHA→MINT→PAPAYA; "all-weather chip") — *claim hợp lệ, có nguồn*; (b) **arc-fault
  /an toàn điện = ứng dụng beachhead do Pebble Vina khởi xướng cho thị trường VN** — KHÔNG gán cho nhà cung cấp.
- **Mở rộng "trục sản phẩm" của lộ trình 3 chân trời (slide 07):** từ arc-fault → các vertical THẬT của PS
  (voice/Home-IoT, vision, bảo trì dự đoán) → khiến "phân phối → công ty giải pháp" + mở ĐNÁ khả tín hơn nhiều.
- **Honor an toàn, mạnh:** dùng JV Saudi/NEOM + giải KGCCI + NDA SK hynix + ETRI + 500k chip MINT 양산 + PoC
  thật (đèn giọng nói, Home-IoT MEISEI). **Tránh** số doanh thu; **tránh** trình "100× GPU" như sự thật độc lập.
- **Minh họa năng lực** bằng vertical PS tự claim, KHÔNG mượn Syntiant/Mythic/Akida làm sản phẩm PS.

## 6. Cần xác nhận với Pebble Square trước 19/6
- (a) CEO hiện tại = Lee Choong-hyun? vai trò Bae Hak-yeol?
- (b) MOCHA còn bán không; spec PAPAYA chính thức?
- (c) Pebble Square CHO PHÉP Pebble Vina định vị arc-fault/solar không, hay đó hoàn toàn là sáng kiến của ta?
- (d) Có PoC/benchmark nào dùng được cho arc-fault, hay ta tự dựng?

## 7. Nguồn (URL chính)
- Chính thức: pebble-square.com/en · /en/page/21 (sản phẩm) · /en/page/11 (ABOUT: history, lãnh đạo, sectors) · /en/page/31
- KGCCI award: pebble-square.com/en/41_en/15 · KAIST seminar (Lee là President): ee.kaist.ac.kr/en/seminars/pim-powered-edge-ai-...
- Báo Hàn: etnews.com/20230112000238 · etnews.com/20241107000254 · seoul.co.kr (2023/01/12) · mt.co.kr/future/2024/03/12 (JV Saudi) · unicornfactory.co.kr/article/2024032017463075258 ("전천후 반도체") · thebell (2025, Series A/매출 — bị chặn JS, chỉ snippet) · jobkorea (hồ sơ DN)
- Quốc tế: jetro.go.jp/.../158789... (Japan subsidiary) · cbinsights.com/company/pebble-square · tracxn
- Đối thủ/ngành: Syntiant · BrainChip Akida · Aspinity AML100 · Mythic M1076 · GreenWaves GAP9 · EnCharge EN100 (xem _research-proof.md có link đầy đủ)
