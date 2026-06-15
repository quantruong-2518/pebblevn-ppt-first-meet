---
title: Bản đồ phân khúc thị trường VN → ánh xạ vào nhóm service Pebble Square (cho slide 5)
status: in-progress
owner: analyst
updated: 2026-06-15
links: [projects/thuyet-trinh-ra-mat-pebble-vina/slides/_research-pebble-square-services.md, projects/thuyet-trinh-ra-mat-pebble-vina/slides/_research-market.md, planning/2026-06-09-co-hoi-thi-truong-viet.md, company/profile.md]
---

# Bản đồ "service Pebble Square → phân khúc nhu cầu Việt Nam"

> **Mục đích:** cung cấp **ĐẦU B** (phân khúc/nhu cầu thị trường VN) để map vào **ĐẦU A** (4 nhóm service PS đã verify),
> phục vụ slide 5 deck ra mắt. Thông điệp slide 5: "một nền tảng Edge-AI của PS → ưu tiên hóa & map với phân khúc VN".
> **Slide CHƯA công bố thứ tự ưu tiên** — file này CHỈ map & nêu bằng chứng. GM quyết thứ tự sau (roadmap/nội bộ).
>
> **Kỷ luật (CLAUDE.md §8):**
> - KHÔNG xếp hạng, KHÔNG chọn beachhead trong file này.
> - Nhãn: ✅ VERIFIED (link gốc) · 🟡 ƯỚC TÍNH (nguồn gián tiếp/báo phái sinh/báo cáo trả phí) · ❌ NOT FOUND.
> - **arc-fault / điện mặt trời = ứng dụng Pebble Vina KHỞI XƯỚNG**, KHÔNG gán cho PS như sản phẩm đã công bố (CEO PS ngồi dưới khán phòng).
> - KHÔNG bịa số. Số "có mùi sai" được đánh dấu ⛔ và KHÔNG dùng cho slide.

---

## 0. BLUF (kết luận trước)

- **Cả 4 nhóm service PS đều có phân khúc VN có cầu thật + có người trả tiền + có driver tăng trưởng hai chữ số.**
  Không có nhóm nào "trống" thị trường.
- **Số mạnh & sạch nhất (✅/🟡 có link):** an ninh/giám sát video VN (CCTV ~615 triệu USD 2025, CAGR ~17–19%),
  công nghiệp IoT/bảo trì dự đoán VN (~1,6 tỷ USD 2025, CAGR ~13%), bán dẫn VN (7,03 tỷ USD 2024 → 16,64 tỷ 2033),
  thị giác máy/QC dựa trên cứ điểm điện tử (Amkor Bắc Ninh ×3, Apple smart-home tại VN).
- **Đòn bẩy Pebble Vina xuyên suốt:** mạng lưới KOCHAM / **~10.000 DN Hàn** (Samsung, LG + chuỗi cung ứng Bắc Ninh/
  Bắc Giang/Đồng Nai) → cửa B2B vào đúng các nhà máy điện tử/Home-IoT/QC — nơi 4 nhóm service này được mua.
- **Khoảng trống dữ liệu lớn nhất:** (a) chưa có TAM Edge-AI/“tinyML” riêng VN (chỉ có proxy bán dẫn/IoT);
  (b) số wearable y tế VN tìm được **sai đơn vị/không tin được** (⛔ — xem §6); (c) chưa có số cầu arc-fault/AFCI riêng VN.

---

## 1. Bảng map chính (service PS → phân khúc VN → bằng chứng → người trả tiền → đòn bẩy)

### NHÓM 1 — Sound / Voice (On-Device): nhận diện giọng nói, keyword, sự kiện âm thanh

| Phân khúc VN khớp | Bằng chứng nhu cầu VN (nhãn) | Ai trả tiền (B2B/B2C) | Khớp Analog-PIM | Đòn bẩy Pebble Vina |
|---|---|---|---|---|
| **Smart home / smart speaker tiếng Việt** | Smart speaker VN **47,2 triệu USD (2025)**, CAGR ~15,8% → ~176 triệu USD 2034 🟡 (IMARC). Smart home VN **692 triệu USD 2024 → 1,71 tỷ 2033**, CAGR 9,2% ✅ (IMARC, đã dùng repo) | OEM/ODM thiết bị gia dụng & loa (đặc biệt hãng Hàn sản xuất tại VN); nhà phát triển thiết bị IoT | Voice always-on <1 mW, không gửi giọng lên cloud (riêng tư) — đúng điểm đau giọng nói tiếng Việt cần xử lý on-device | KOCHAM → OEM Hàn làm thiết bị gia dụng/loa tại VN; PoC PS thật "đèn nhận giọng nói + chuông khẩn" (02/2024) dễ chuyển thể |
| **Sự kiện âm thanh an toàn (vỡ kính, máy lỗi, chuông khẩn)** | Cùng driver smart home + an ninh dân dụng (xem nhóm 3). Số riêng cho acoustic-event VN ❌ NOT FOUND | Chủ nhà/chung cư cao cấp; nhà tích hợp an ninh; chủ nhà máy (máy lỗi qua âm thanh) | Xử lý âm thanh analog liên tục, phần digital ngủ → pin lâu, không cloud | Ghép với gói an ninh/Home-IoT bán qua OEM Hàn |

> **Lưu ý slide:** PoC "đèn nhận giọng nói + hệ chuông khẩn cấp" (MINT, 02/2024) là **sản phẩm PS THẬT** → minh họa nhóm Sound an toàn, mạnh hơn ví dụ tự nghĩ.

### NHÓM 2 — Vision / Image (On-Device): nhận diện ảnh, thị giác máy → healthcare, manufacturing/QC

| Phân khúc VN khớp | Bằng chứng nhu cầu VN (nhãn) | Ai trả tiền (B2B/B2C) | Khớp Analog-PIM | Đòn bẩy Pebble Vina |
|---|---|---|---|---|
| **Thị giác máy / QC kiểm tra lỗi trong sản xuất điện tử** | Machine vision toàn cầu **21,12 tỷ USD 2025 → 35,43 tỷ 2030**, CAGR 10,8%; **APAC là vùng lớn nhất**; máy chấm ngày càng phổ ở "mid-tier manufacturers ở **Việt Nam**, Thái, Indo, Malaysia" 🟡 (TBRC/GVM, qua tổng hợp — số VN riêng ❌). Bệ đỡ: **Amkor Bắc Ninh ×3 sản lượng đóng gói bán dẫn (10/2025)**, bán dẫn VN 7,03 tỷ→16,64 tỷ USD ✅ (repo) | Nhà máy điện tử/bán dẫn (Samsung, Amkor, chuỗi cung ứng); nhà máy EV/ô tô; system integrator QC | Suy luận thị giác full-res tại edge, độ trễ thấp trên dây chuyền, không cần backhaul ảnh về cloud, điện thấp | **Mạnh nhất ở đây:** KOCHAM = trực tiếp các nhà máy điện tử Hàn cần QC; PS tự claim Vision cho "manufacturing" |
| **Healthcare / chẩn đoán hình ảnh tại điểm chăm sóc** | PS tự claim Vision→healthcare ✅. Cầu VN: thiết bị y tế VN tăng mạnh, nhưng **>90% thiết bị y tế VN là nhập khẩu (2023)** 🟡 (Vietnam Briefing/Ken) → cửa cho thiết bị/chip nhập | Bệnh viện, phòng khám, nhà sản xuất thiết bị y tế; startup medtech | Xử lý ảnh y tế tại chỗ → riêng tư dữ liệu bệnh nhân, không phụ thuộc đường truyền | Yếu hơn (chưa có mạng lưới y tế); cần đối tác phân phối thiết bị y tế |

### NHÓM 3 — Security (On-Device): xử lý an ninh tại chỗ, không cloud, bảo mật dữ liệu

| Phân khúc VN khớp | Bằng chứng nhu cầu VN (nhãn) | Ai trả tiền (B2B/B2C) | Khớp Analog-PIM | Đòn bẩy Pebble Vina |
|---|---|---|---|---|
| **Giám sát video / CCTV / IP camera thông minh** | CCTV VN **615,2 triệu USD (2025) → 2.762,9 triệu 2034**, CAGR **17,62%** ✅ (IMARC, fetch 2026-06-15). Video surveillance VN ~**1,2 tỷ USD** 🟡 (research báo phái sinh). IP camera VN **203,79 triệu USD 2024 → 575,06 triệu 2032**, CAGR 13,84% 🟡 (MarketsandData) | Khu công nghiệp, tòa nhà, đô thị/smart city, hộ gia đình & SMB; nhà tích hợp an ninh | Phân tích người/vật ngay trên camera, **không stream video lên cloud** → giảm băng thông + bảo mật dữ liệu (đúng xu hướng "Nghị định bảo vệ dữ liệu cá nhân" VN) | KOCHAM: KCN/nhà máy Hàn là khách giám sát quy mô lớn; câu chuyện "an ninh không-cloud" hợp lo ngại dữ liệu |
| **Smart-city / giám sát giao thông AI** | **7/2025 VN triển khai camera AI tự nhận diện vi phạm giao thông** ✅ (driver chính sách, qua research) | Cơ quan nhà nước/thành phố; nhà thầu hạ tầng giao thông | Suy luận tại biên giảm tải trung tâm, realtime | Trung lập (kênh nhà nước, không phải sở trường KOCHAM) — ghi nhận là driver vĩ mô |

### NHÓM 4 — Failure Analysis / Predictive Maintenance: chẩn đoán robot & máy móc realtime, anomaly, an toàn điện

> arc-fault/PV ở dòng cuối = **ứng dụng Pebble Vina khởi xướng**, KHÔNG phải sản phẩm PS công bố.

| Phân khúc VN khớp | Bằng chứng nhu cầu VN (nhãn) | Ai trả tiền (B2B/B2C) | Khớp Analog-PIM | Đòn bẩy Pebble Vina |
|---|---|---|---|---|
| **Bảo trì dự đoán công nghiệp (KCN, nhà máy, robot)** | Công nghiệp IoT VN **~1,6 tỷ USD (2025) → 5,2 tỷ 2034**, CAGR **13,15%** ✅ (IMARC, fetch 2026-06-15). APAC là vùng tăng nhanh nhất cho predictive maintenance, VN nêu tên 🟡 (tổng hợp) | Nhà máy/KCN (đặc biệt FDI Hàn); OEM máy móc; nhà cung cấp O&M | Phân tích rung động/âm thanh máy ngay tại thiết bị, liên tục, low-power — không cần kết nối ổn định | **Rất mạnh:** KOCHAM = hàng nghìn nhà máy Hàn có động cơ/robot; khớp PS claim "diagnostics for robots & machinery" |
| **An toàn điện: arc-fault / bảo trì dự đoán điện mặt trời** *(Pebble Vina khởi xướng)* | **9,58 GW ĐMT mái nhà / ~102.000 hệ** đầu 2021, nay 5–6 tuổi ✅ (EVN, repo). Hồ quang DC là nguyên nhân cháy PV #1; **38% vụ cháy PV do lỗi lắp đặt** ✅ (TÜV/Fraunhofer). Khung TCVN 7447-7-712:2019 & QCVN 01:2020/BCT **tồn tại** nhưng **chưa xác minh có bắt buộc AFCI** ⚠️ (legal đọc bản gốc). Số cầu arc-fault riêng VN ❌ | Chủ đầu tư ĐMT, EPC, nhà máy/KCN, công ty O&M, tòa nhà | Phát hiện hồ quang realtime tại tủ điện, edge, không cloud, chi phí thấp/điểm | KOCHAM (nhà máy Hàn có mái PV); câu chuyện ROI tránh cháy/downtime. **Trên sân khấu: trình như sáng kiến Pebble Vina, không gán PS** |

---

## 2. Đòn bẩy xuyên suốt (áp dụng cả 4 nhóm)

- **KOCHAM / ~10.000 DN Hàn tại VN** ✅ (TheInvestor/Báo Chính phủ, repo) + FDI Hàn cộng dồn **>92 tỷ USD** (cuối 2024, #1 tại VN) ✅.
  → Một mạng lưới khách hàng B2B duy nhất "ăn" được cả 4 nhóm: nhà máy điện tử Hàn cần **QC vision** + **PdM** + **an ninh** + **Home-IoT giọng nói**.
- **VN = cứ điểm sản xuất điện tử/bán dẫn:** Amkor Bắc Ninh ×3 (10/2025) ✅; Apple sản xuất dòng smart home tại VN 🟡 (repo).
- **Mô hình "lập pháp nhân địa phương" của PS** (Pebble Square Japan, 5/2025) ✅ — khớp luận điểm Pebble Vina là cánh tay VN.

## 3. Độ tin cậy số (đọc kèm bảng)

| Số dùng được | Nhãn | Vì sao tin / cảnh báo |
|---|---|---|
| CCTV VN 615,2 triệu USD 2025, CAGR 17,62% | ✅ | Fetch trực tiếp IMARC 2026-06-15 |
| Công nghiệp IoT VN 1,6 tỷ USD 2025, CAGR 13,15% | ✅ | Fetch trực tiếp IMARC 2026-06-15 |
| Smart home VN 692 triệu→1,71 tỷ USD, CAGR 9,2% | ✅ | IMARC, đã dùng trong repo |
| Bán dẫn VN 7,03→16,64 tỷ USD, CAGR 9,3% | ✅ | IMARC, repo |
| Smart speaker VN 47,2 triệu USD 2025, CAGR 15,8% | 🟡 | IMARC qua snippet; số base-year hợp lý, chưa fetch trang gốc |
| Machine vision toàn cầu 21,12→35,43 tỷ, CAGR 10,8% | 🟡 | Số TOÀN CẦU, không phải VN — dùng làm bối cảnh + APAC dẫn dắt + VN nêu tên |
| IP camera VN 203,79 triệu→575 triệu USD | 🟡 | MarketsandData qua snippet |
| Video surveillance VN ~1,2 tỷ USD | 🟡 | báo phái sinh, không khớp hoàn toàn với số CCTV → trình số CCTV ✅ thay vì số này |
| 7/2025 VN dùng camera AI phạt giao thông | ✅ (sự kiện) | qua research; là driver chính sách |

## 4. Khoảng trống dữ liệu cần lấp (trước khi đưa lên slide đối ngoại lớn)

1. **TAM Edge-AI / tinyML riêng Việt Nam** — ❌ NOT FOUND. Hiện chỉ có proxy (bán dẫn, IoT công nghiệp, smart home).
   *Việc:* nếu trình nhà đầu tư lớn, cần báo cáo gốc hoặc tự dựng bottom-up (số nhà máy × thiết bị/nhà máy).
2. **Cầu arc-fault/AFCI riêng VN + có quy định BẮT BUỘC không** — ❌/⚠️. *Việc → legal-counsel:* đọc bản gốc TCVN 7447-7-712:2019 + QCVN 01:2020/BCT.
3. **Số thị giác máy / QC riêng VN** — ❌ (chỉ có toàn cầu + APAC). *Việc:* tìm báo cáo VN hoặc proxy số nhà máy điện tử FDI.
4. **Wearable y tế VN** — ⛔ **số tìm được KHÔNG TIN ĐƯỢC** (xem §6) → KHÔNG dùng cho healthcare/wearable; cần nguồn khác.
5. **Số hội viên KOCHAM chính xác** — ❌ (repo đã ghi). Dùng "~10.000 DN Hàn", KHÔNG ghi "10.000 hội viên KOCHAM".

## 5. Hàm ý cho slide 5 (đề xuất — GM/growth quyết trình bày)

- Slide 5 nên hiện **ma trận 4 cột = 4 nhóm service PS**, mỗi cột gắn 1–2 phân khúc VN + 1 con số bằng chứng (nhãn ✅/🟡).
- KHÔNG đánh số thứ tự/không tô đậm cột nào "trước" — giữ đúng thông điệp "ta sẽ ưu tiên hóa & map" (thứ tự là chuyện sau).
- Đặt đòn bẩy KOCHAM làm **thanh ngang xuyên 4 cột** (một mạng lưới khách, bốn nhóm nhu cầu) — đây là khác biệt của Pebble Vina.

## 6. ⛔ Số bị loại (ghi lại để khỏi vô tình dùng)

- **"Wearable health devices VN: 42,6 tỷ USD (2025) → 112,5 tỷ (2031)"** — ⛔ KHÔNG TIN ĐƯỢC.
  Lý do (suy luận analyst): con số này LỚN hơn cả thị trường thiết bị y tế nhiều nước phát triển và vô lý so với GDP/chi y tế VN;
  gần như chắc chắn nhầm đơn vị hoặc lỗi nguồn (mobilityforesights, không có trang gốc xác thực). **KHÔNG đưa lên slide.**
- **"Industrial IoT Platforms VN 5,8 tỷ→9,4 tỷ USD"** — 🟡 nghi cao, lệch mạnh với số IMARC 1,6 tỷ; KHÔNG dùng, dùng số IMARC ✅.

## 7. Nguồn (URL)
- CCTV VN (✅ fetch): https://www.imarcgroup.com/vietnam-cctv-camera-market
- Industrial IoT VN (✅ fetch): https://www.imarcgroup.com/vietnam-industrial-iot-market
- Smart home VN (✅, repo): https://www.imarcgroup.com/vietnam-smart-homes-market
- Smart speaker VN (🟡): https://www.imarcgroup.com/vietnam-smart-speaker-market ; https://www.openpr.com/news/4268333/
- Machine vision (🟡 toàn cầu/APAC): https://www.thebusinessresearchcompany.com/report/machine-vision-global-market-report ; https://www.grandviewresearch.com/industry-analysis/machine-vision-market ; https://www.vietnam-briefing.com/news/vietnam-manufacturing-tracker.html/
- Video surveillance / IP camera VN (🟡): https://www.researchandmarkets.com/reports/6204609/ ; https://www.marketsandata.com/industry-reports/vietnam-ip-camera-market
- Predictive maintenance / Industrial IoT (🟡 ngữ cảnh): https://www.grandviewresearch.com/industry-analysis/predictive-maintenance-market
- Thiết bị y tế VN >90% nhập khẩu (🟡): https://www.vietnam-briefing.com/news/vietnam-medical-devices-market-outlook-projections-insights.html/
- ⛔ wearable (loại): https://mobilityforesights.com/product/vietnam-wearable-health-devices-market
- Số sẵn trong repo (✅): planning/2026-06-09-co-hoi-thi-truong-viet.md ; slides/_research-market.md (EVN PV, Amkor, FDI Hàn, TÜV/Fraunhofer 38%)
