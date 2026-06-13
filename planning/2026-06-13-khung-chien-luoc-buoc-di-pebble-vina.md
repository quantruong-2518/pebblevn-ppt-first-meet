---
title: Khung chiến lược bước đi của Pebble Vina — Nhu cầu → Thế → Người → Tri giác (→ Business Plan)
status: idea
owner: GM
updated: 2026-06-13
links: [company/profile.md, company/parent-pebble-square.md, company/okrs.md, company/decisions/0001-huong-kien-truc-thuong-hieu.md, planning/2026-06-09-co-hoi-thi-truong-viet.md, planning/2026-06-10-yeu-to-marketing-pebble-vina.md, planning/2026-06-13-dinh-vi-thuong-hieu-pebble-vina.md, memory/beachhead-arc-fault-dien-mat-troi.md, memory/huong-kien-truc-thuong-hieu-c.md, memory/investor-bac-kim-kocham.md, memory/mandate-phan-phoi-doc-quyen.md]
---

# Khung chiến lược bước đi của Pebble Vina

> **Đây là cái gì:** **bộ khung (skeleton) cấp công ty** cho câu hỏi *"Pebble Vina sẽ đi như thế nào?"* — một
> **cỗ máy suy luận**: mỗi tầng đẻ ra **một bó luận cứ (tiền đề)** → từ tiền đề **suy ra quyết định / next
> action** → các quyết định **gom lại thành Business Plan**.
>
> **Bốn tầng:** **Nhu cầu → Thế → Người → Tri giác**, cộng **một trục tài chính xuyên suốt** (kinh tế của
> chính ta). Mỗi tầng = **1 câu hỏi sắc + 1 phương pháp hiện đại + 1 chuẩn bằng chứng + 1 giả định bác-bỏ-được**.
>
> **Logic nền:** *Business Plan là **kết luận**; bốn tầng là **tiền đề**.* Một kết luận chỉ vững bằng **tiền đề
> yếu nhất** → tiền đề phải **được kiểm chứng** trước khi viết plan, nếu không là **plan trên cát**.
>
> **Đây KHÔNG phải:** bản kế hoạch đã điền đầy. Khung này định nghĩa **cách mỗi tầng được trả lời có kỷ luật**
> và chỉ ra tầng nào trong repo đã chín, tầng nào còn trống. Các file định vị (`2026-06-13`) & cơ hội
> (`2026-06-09`) là những **mảnh đã điền** cắm vào khung này.
>
> *Mọi suy luận chưa kiểm chứng gắn nhãn "(giả định)". Không bịa số tài chính/pháp lý/kỹ thuật.*

---

## 0. Cách đọc khung này (phương pháp luận — phần GM yêu cầu)

**Vì sao là một CHUỖI SUY LUẬN, không phải một DANH SÁCH.** Bốn tầng là một **phép chứng minh** dẫn tới
business plan. Mỗi mắt xích phải vững mới sang mắt kế: *Có nhu cầu nhưng không có thế = làm hộ người khác. Có
thế nhưng sai người = thế chết. Đúng cả ba nhưng sai tri giác = bị xếp nhầm rổ, so sai tiêu chí, thua.*

**Phép ẩn dụ xuyên suốt (Tôn Tử + dòng nước):**

| Tầng | Câu hỏi nước |
|---|---|
| **Nhu cầu** | Có nước không, và nước đó **nuôi được ai, nuôi lâu không**? (cầu thật + lợi nhuận dài hạn cho họ) |
| **Thế** | Ta có đứng ở **chỗ trũng** không, **nước có đang dâng** không, **nhà nước có khơi mương giúp** không? |
| **Người** | Ai **khơi dòng, đắp bờ**? (năng lực lõi tối thiểu để khả tín) |
| **Tri giác** | Người ta **gọi dòng nước đó là gì** khi nhắc tới ta? (hệ quả của 3 tầng trên) |

**Phương pháp học hiện đại bao trùm — Discovery-Driven Planning** (McGrath & MacMillan, HBR): với startup bất
định cao, **lập kế hoạch theo *giả định*, không theo *con số***. Ta **liệt kê các giả định sống-còn, xếp hạng
theo (tác động × bất định), biến chúng thành tri thức ở chi phí rẻ nhất** *trước* khi cam kết lớn. Mỗi tầng
mang **một "giả định sống-còn"** + **một phép thử rẻ nhất**. Đây là cách "tìm luận cứ đúng đắn": **coi mọi niềm
tin là giả thuyết** cho tới khi có bằng chứng.

**Chuẩn "luận cứ đúng đắn" (áp cho mọi tầng) — 3 lằn ranh:**
1. **Hành vi đã xảy ra > lời nói sẽ làm** (*The Mom Test*). Khách *đã chi tiền / đã có sự cố / bị quy định ép* =
   bằng chứng; "nghe hay đấy" thì không.
2. **Dựng từ dưới lên > báo cáo từ trên xuống.** "Thị trường X tỷ USD" là **ngữ cảnh**; luận cứ là *bao nhiêu
   tài khoản thật × quy mô deal × tỷ lệ thắng*.
3. **Bác bỏ được > không bác bỏ được.** Mệnh đề chiến lược không nói được "điều gì chứng minh tôi sai" = khẩu
   hiệu, không phải luận cứ.

---

## 1. Bản đồ khung (toàn cảnh một màn hình)

| Tầng | Câu hỏi sắc (theo lời GM) | Phương pháp hiện đại | Giả định sống-còn (sai → sập) | Trạng thái repo |
|---|---|---|---|---|
| **1. Nhu cầu** | Ai đang cần ta? Giải pháp của ta là cho ai, và mang **lợi nhuận dài hạn gì cho HỌ**? | JTBD · The Mom Test · cầu *capture* vs *shape* · **mô hình ROI-khách** · TAM bottom-up | Nhà máy Hàn/EPC mua **phòng ngừa** arc-fault **trước** khi cháy | 🟡 có giả thuyết, **chưa phỏng vấn** |
| **2. Thế** | Ta **đã có gì**, **sẵn sàng tới đâu**, **nhà nước/thị trường hậu thuẫn** ra sao (& cửa sổ tới khi nào)? | Tôn Tử **形/勢** · **7 Powers** · counter-positioning · Crossing the Chasm · Wardley · bánh đà | Độc quyền+KOCHAM+bản địa là **hào** (tự dày lên), không phải head-start; cửa sổ **đang mở** | 🟡 có liệt kê + 🔴 thiếu luận đề "vì sao bây giờ" & kiểm định hào |
| **3. Người** | Ta có **lợi thế gì** về con người, và **sẽ làm như thế nào**? | "First who then what" · bản đồ **năng lực × khoảng trống** · tổ chức theo giai đoạn | Tuyển/giữ được **1 FAE / người-tạo-niềm-tin-kỹ-thuật** ở kinh tế pre-revenue | 🔴 **trống** |
| **4. Tri giác** | Khách kể về ta bằng **một câu** gì? Ta bị xếp **cùng rổ** với ai? | Positioning (Dunford) · Category Design · nhà thông điệp | Khách xếp ta là "**đối tác an toàn điện đáng tin**", không phải "AI startup / dân buôn chip" | 🟢 **chín** (file `2026-06-13` + ADR 0001) |
| **⟂ Trục tài chính** | **Lợi nhuận cho TA** = giá − chi phí; biên, đơn vị kinh tế, runway? | Unit economics (CAC/LTV/biên) · runway · kịch bản | Biên phân phối + nhịp pilot đủ nuôi công ty tới hòa vốn trong runway | 🔴 **trống** (chờ giá nhập từ HĐ) |

> **Đọc cột cuối là thấy đề bài:** chuỗi mạnh ngang mắt xích yếu nhất. **Thế** (nửa trống), **Người** và **Trục
> tài chính** đang là chỗ yếu. Đầu tư trí lực tiếp theo dồn vào đó — **không** tô thêm cho Tri giác vốn đã chín.

---

## 2. Cỗ máy suy luận: LUẬN CỨ → QUYẾT ĐỊNH → BUSINESS PLAN

> Đây là **mục đích của cả khung** (GM nêu): bốn tầng không phải để phân tích cho vui — chúng **đẻ ra luận cứ**,
> từ đó **suy ra next action**, rồi **gom thành Business Plan**. Plan là kết luận; tầng là tiền đề.

| Tầng | Luận cứ cốt lõi (tiền đề) | Quyết định / next action suy ra | Mục trong Business Plan |
|---|---|---|---|
| **Nhu cầu** | Khách X, "việc" Y, **ROI dài hạn Z cho họ** (tránh cháy/downtime/tuân thủ tính qua nhiều năm) | Chốt beachhead + ICP; value prop bán ROI; **định giá theo giá-trị** (value-based) | Thị trường mục tiêu · Tuyên bố giá trị · (đầu vào) Doanh thu |
| **Thế** | Ta có độc quyền+KOCHAM+bản địa; nhà nước hậu thuẫn (quy định); cửa sổ mở—đóng khi… | Trình tự go-to-market khai thác cửa sổ; **hào nào dựng + bánh đà**; build/borrow/partner | Lợi thế cạnh tranh/Hào · Thời điểm thị trường · Go-to-market |
| **Người** | Năng lực lõi = FAE; ta có/thiếu gì; làm theo cách nào | Kế hoạch nhân sự (hire/partner); đội hình tối thiểu; mô hình vận hành | Đội ngũ & Vận hành · Kế hoạch thực thi |
| **Tri giác** | Khách gọi ta là "đối tác an toàn điện đáng tin" (Hướng C) | Định vị, thông điệp, kiến trúc thương hiệu (đã chốt C) | Định vị/Thương hiệu · Marketing |
| **⟂ Tài chính** | **Giá** (từ Nhu cầu) − **chi phí** (từ Người/vận hành) = biên & đơn vị kinh tế; runway | Mô hình tài chính; ngân sách; mốc hòa vốn; nhu cầu vốn | Mô hình tài chính · Dự báo · Nhu cầu vốn |

**Hai chỗ dễ tuột mất khi gom thành plan — phải giữ:**
1. **"Đồng hồ cửa sổ" bên trong Thế.** Vì "thời" đã gộp vào "thế", đừng để mất câu hỏi *nhà nước hậu thuẫn tới
   khi nào / lợi thế của ta phai khi nào / đối thủ khóa kênh EPC khi nào*. Một cái thế không có thời hạn là ảo
   tưởng → quyết định go-to-market phải có **nhịp** bám cửa sổ đó.
2. **Phân biệt "lợi nhuận cho HỌ" vs "lợi nhuận cho TA".** Tầng Nhu cầu cho **ROI của khách** (vì sao họ trả
   tiền). Trục tài chính cho **biên của ta** (vì sao công ty sống được). Plan cần **cả hai**: thiếu cái đầu thì
   không bán được; thiếu cái sau thì không gọi vốn được (bác Kim).

---

## 3. Tầng 1 — NHU CẦU: "Có nước không, và nước nuôi được ai, nuôi lâu không?"

**Câu hỏi sắc (theo GM):** **Ai đang cần ta**? Câu chuyện của ta là **giải pháp cho ai**? Và giải pháp đó mang
**lợi nhuận dài hạn gì cho HỌ**?

**Vì sao GM dùng "định hình" & "lợi nhuận dài hạn cho họ".**
- **"Định hình" — cầu có hai loại, đánh khác nhau:** **capture** (đã có ngân sách / bị quy định-tập đoàn ép →
  ta *giành*, nhanh) vs **shape** (tiềm ẩn, chưa thấy đau tới khi có cháy → ta phải *định hình*: dùng quy định
  ép, một case study cháy-được-ngăn có số liệu, đóng khung lại từ "chi phí" thành "bảo hiểm có ROI").
- **"Lợi nhuận dài hạn cho HỌ" = bán ROI của khách, không bán chip.** Luận cứ tầng này phải **lượng hóa kinh tế
  *phía khách* qua nhiều năm**: tránh tổn thất cháy + giảm downtime PV + né phạt tuân thủ + kéo dài tuổi thọ tài
  sản. Đây là **đầu vào để định giá theo giá-trị** (value-based pricing) — và là số liệu `cfo` dựng *mô hình ROI
  cho khách* (khác mô hình biên của ta).

**Phương pháp hiện đại:** **JTBD** (việc khách *thuê* sản phẩm: "đừng để nhà máy cháy / chuyền dừng / trượt
kiểm định") · **The Mom Test** (hỏi quá khứ & hành vi, không mớm lời) · **mô hình ROI-khách** (`cfo`) ·
**TAM/SAM/SOM bottom-up** (số nhà máy Hàn có PV × giá trị HĐ × tỷ lệ thắng — không lấy "16 tỷ USD").

**Chuẩn bằng chứng:** *revealed preference* — khách **đã** chi cho an toàn điện / **đã** có sự cố / **đang** bị
ép. "Giải pháp hay đấy" không tính.

**Giả định sống-còn (A1):** *Nhà máy Hàn & EPC thấy rủi ro arc-fault đủ đau để mua **phòng ngừa**, trước khi
cháy.* Nếu sai (chỉ phản ứng **sau** sự cố) → beachhead đúng nhưng **nhịp bán sai**.
**Phép thử rẻ nhất:** **5–10 phỏng vấn vấn-đề** (Mom Test) với trưởng kỹ thuật/EHS nhà máy Hàn qua KOCHAM — có
dòng ngân sách / bị mandate không, hay chỉ "để tâm". *Rẻ & sống-còn nhất cả khung → làm trước tiên.*

**Repo:** 🟡 `2026-06-09` (beachhead, phân khúc) + `2026-06-13 §4`. **Thiếu:** chính các cuộc phỏng vấn + mô
hình ROI-khách.

---

## 4. Tầng 2 — THẾ: "Ta đứng chỗ trũng chưa, nước có dâng, nhà nước có khơi mương?"

> Tầng GM nhấn mạnh, và là tầng đã **gộp "thời" vào trong**. Cần tách bạch hai khái niệm Tôn Tử + giữ "đồng hồ cửa sổ".

**Ba câu hỏi con (theo GM) + một câu giữ-rigor:**
- **(a) Ta đã có gì?** → tài sản tĩnh: độc quyền phân phối, KOCHAM/bác Kim, Made-in-Korea/PIM, hiểu thị trường.
- **(b) Sẵn sàng tới đâu?** → mức sẵn sàng thật: hợp đồng (`[CẦN ĐIỀN]`), năng lực FAE (chưa có), tài sản bán
  hàng, pháp nhân/giấy phép.
- **(c) Nhà nước/thị trường hậu thuẫn ra sao?** → quy định TCVN 7447-7-712:2019 / QCVN 01:2020/BCT, bùng nổ PV,
  China+1 dày mật độ KOCHAM, áp lực chủ quyền dữ liệu.
- **(d) [giữ rigor] Cửa sổ tới khi nào?** → *lợi thế phai khi: ST/TI bản địa hóa arc-fault tại VN · đối thủ khóa
  kênh EPC · thời gian ân hạn quy định hết · Pebble Square đổi chính sách độc quyền.*

**形 (Hình) vs 勢 (Thế) — đừng lẫn (điểm tinh vi nhất).**
- **形 (Hình) = tài sản tĩnh ta nắm** [câu (a)+(c)]: bản thân **không tự thắng**.
- **勢 (Thế) = động năng cách bố trí Hình tạo ra:** "thế như giương cung", "nước cuốn đá tảng". Thế = khi ta xếp
  Hình thành **bánh đà tự quay**: *mỗi pilot làm dày niềm tin → mỗi case study mở phân khúc EPC → mỗi design-in
  tạo chi phí chuyển đổi khóa khách → biên nuôi FAE sâu hơn → thắng pilot kế dễ hơn.* Thế = **thắng đã định
  đoạt trước khi đánh**. Chính vì vậy **"vay uy tín Hàn, xây tài sản Việt"** (ADR 0001) **là chiến lược dựng
  thế** — chuyển Hình-mượn (uy tín Hàn) thành Thế-sở-hữu (tài sản Việt khó sao chép).

**Phương pháp hiện đại:** **7 Powers** (Helmer) — ứng viên hào: *Cornered Resource* (độc quyền+KOCHAM),
*Counter-Positioning* (đối thủ bán chip rời/cloud không thể copy "FAE bản địa + tuân thủ + niềm tin Hàn" mà
không biến thành công ty khác), *Switching Costs* (sau design-in) · **kiểm định VRIN** · **Crossing the Chasm**
(nhà máy Hàn = early adopter, EPC = đa số sớm — bán khác nhau) · **Wardley Mapping** (vào sớm thành phần *sắp*
thành sản phẩm) · **thiết kế bánh đà**.

**Chuẩn bằng chứng:** nguồn lực **VRIN** *và* có **cơ chế bồi đắp**. Câu hỏi thử thẳng tay: *"Điều gì ngăn ST
thuê một nhà phân phối VN dựng lại thế của ta trong 18 tháng?"* — không trả lời được = chưa có hào, chỉ có đầu
đi sớm.

**Giả định sống-còn (A2+A3):** *Cửa sổ đang mở & ta vào trước (A2); bộ ba độc quyền+KOCHAM+bản địa là **hào tích
lũy**, không phải head-start (A3).*
**Phép thử rẻ nhất:** (A2) tra **thực thi** quy định + quét **design-in đối thủ tại VN** + hỏi 2–3 EPC đã chuẩn
hóa giải pháp nào chưa; (A3) **audit 7 Powers** (1 buổi) + xác minh **điều khoản độc quyền & thời hạn HĐ**.

**Repo:** 🟡 `2026-06-09 §5` (3 lợi thế) + ADR 0001. **Thiếu:** luận đề "vì sao bây giờ" viết thành câu + kiểm
định hào (7 Powers/VRIN) + vẽ bánh đà.

---

## 5. Tầng 3 — NGƯỜI: "Ai khơi dòng, đắp bờ — và ta có lợi thế gì?"

**Câu hỏi sắc (theo GM):** Ta có **lợi thế gì** về con người, và **sẽ làm như thế nào**? Đâu là người
**không-thể-thiếu** — bỏ ra thì cả thế sụp?

**Vì sao tầng này sau Thế (không trước).** **Người đi theo chiến lược.** Tầng Thế nói "**năng lực bản địa là
hào**" → người không-thể-thiếu gần như chắc chắn là **FAE / kỹ sư-tạo-niềm-tin** làm design-in khả tín, *không
phải* một giám đốc bán hàng. Xác định sai người lõi = **xây nhầm hào**.

**"Lợi thế về người" của ta (luận cứ ứng viên — chờ kiểm):** mạng lưới **bác Kim/KOCHAM** (cửa quan hệ + uy
tín), **GM** vận hành, và **đào tạo/hỗ trợ từ Pebble Square** (FAE có thể mượn năng lực principal giai đoạn
đầu). "Sẽ làm như thế nào" = **đội hình tối thiểu** + build/buy/partner cho từng năng lực.

**Phương pháp hiện đại:** **"First who, then what"** (Collins) · **bản đồ năng lực × khoảng trống** (FAE/design-in
· tuân thủ TCVN/QCVN · bán-quan hệ Hàn · vận hành/nhập khẩu · tài chính × hiện có × build/buy/partner) · **tổ
chức theo giai đoạn** (pre-revenue: *GM + 1 FAE + chuyên gia khoán việc + tầng agent ảo*).

**Chuẩn bằng chứng:** bản đồ năng lực **thật** (không mơ ước), neo vào cái mà Nhu cầu & Thế **đòi hỏi**.

**Giả định sống-còn (A4):** *Tuyển/giữ được FAE khả tín ở VN với kinh tế pre-revenue.* Nếu sai → "năng lực bản
địa = hào" **rỗng**, Hướng C trượt về A (làm cái bóng principal).
**Phép thử rẻ nhất:** `operations` viết **JD + khung năng lực FAE** (1 trang) + thăm dò 1–2 ứng viên; `cfo` ướm
chi phí.

**Repo:** 🔴 *không có gì* — khoảng trống lớn nhất, **chặn** việc hiện thực hóa Thế.

---

## 6. Tầng 4 — TRI GIÁC: "Người ta gọi dòng nước đó là gì?" *(tự luận)*

**Câu hỏi sắc:** Khi khách kể về Pebble Vina cho người khác, họ nói **một câu** gì? Ta bị xếp **cùng rổ** với ai?

**Vì sao *tự luận* (đứng cuối).** Tri giác là **hệ quả** của ba tầng trên + một lựa chọn có chủ đích — **rút ra
được**, không phải dán khẩu hiệu. GM đã *tự luận* xong phần lớn ở ADR 0001:

> **Kết luận đã chốt (Hướng C):** khách nhìn ta là *"đối tác chính hãng đưa giải pháp an toàn điện / Edge AI
> công nghệ Hàn (PIM) vào vận hành thật tại VN"* — **vay uy tín Hàn, xây tài sản Việt**. Khác rổ "AI startup"
> và khác rổ "dân buôn chip nhập".

**Phương pháp hiện đại:** **Positioning** (Dunford — đối thủ thay thế → thuộc tính độc nhất → giá trị → ai quan
tâm nhất → hạng mục) · **Category Design** (*Play Bigger* — hạng mục ta bị xếp vào **quyết định ta bị so với
ai**) · **nhà thông điệp** (4 tính từ + cặp X-không-phải-Y, đã có ở `2026-06-13 §5`).

**Chuẩn bằng chứng:** **Đúng** (giao được) × **Khác** (đối thủ không nói được câu đó) × **Đáng** (khách quan tâm).

**Giả định sống-còn (A5):** *Thị trường xếp ta vào "đối tác an toàn điện đáng tin", không phải "AI startup".*
**Phép thử rẻ nhất:** **pitch định vị cho 3–5 khách mục tiêu**, nghe họ **kể lại** ta là ai & **so ta với ai**.

**Repo:** 🟢 chín nhất — `2026-06-13` + ADR 0001. **Việc còn lại:** (a) cắm nó lên chuỗi này; (b) kiểm định bằng
phản hồi khách thật. **Không làm lại.**

---

## 7. Sổ giả định (assumption register) — xếp theo (tác động × bất định), thử rẻ-trước

> Trái tim Discovery-Driven Planning: **biến giả định sống-còn thành tri thức theo thứ tự rẻ-trước**, sẵn sàng
> đổi hướng sau mỗi phép thử. *Đây là "luận cứ đúng đắn" được tạo ra một cách có kỷ luật.*

| # | Giả định sống-còn | Tầng | Tác động | Bất định | Phép thử rẻ nhất | Ai làm |
|---|---|---|---|---|---|---|
| **A1** | Nhà máy Hàn/EPC mua phòng ngừa arc-fault **trước** khi cháy | Nhu cầu | 🔴 Cao | 🔴 Cao | 5–10 phỏng vấn vấn-đề (Mom Test) qua KOCHAM | `analyst` + GM |
| **A2** | Cửa sổ "thời" đang mở & ta vào trước đối thủ/khóa-kênh | Thế | 🔴 Cao | 🟡 Vừa | Tra thực thi quy định + quét design-in đối thủ + hỏi 2–3 EPC | `analyst` |
| **A3** | Độc quyền+KOCHAM+bản địa là **hào**, không phải head-start | Thế | 🔴 Cao | 🟡 Vừa | Audit 7 Powers + xác minh điều khoản độc quyền/thời hạn HĐ | `chief-of-staff` + `legal-counsel` |
| **A4** | Tuyển/giữ được FAE khả tín ở kinh tế pre-revenue | Người | 🔴 Cao | 🟡 Vừa | JD + khung năng lực + thăm dò 1–2 ứng viên + ướm chi phí | `operations` + `cfo` |
| **A5** | Khách xếp ta vào "đối tác an toàn điện", không phải "AI startup" | Tri giác | 🟡 Vừa | 🟡 Vừa | Pitch định vị cho 3–5 khách, nghe họ kể lại | `growth` |
| **A6** | HĐ phân phối cho co-brand **và** không cấm xây brand riêng | Thế/Tri giác | 🔴 Cao | 🔴 Cao | `legal-counsel` rà mục IP/nhãn hiệu (đã gắn cờ ADR 0001) | `legal-counsel` + GM |
| **A7** | Biên phân phối + nhịp pilot đủ nuôi công ty tới hòa vốn trong runway | Tài chính | 🔴 Cao | 🔴 Cao | `cfo` dựng mô hình biên (cần giá nhập từ HĐ) + ROI-khách | `cfo` |

> **Thứ tự đề xuất (rẻ & sống-còn trước):** **A1 → A2 → A6 → A3 → A4 → A7 → A5.** A1 là nền của cả chuỗi (sai A1
> → 4 tầng sau xây trên cát). A6 là lock cứng ADR 0001. A7 cần giá nhập từ hợp đồng nên chạy khi có dữ kiện.

---

## 8. Từ khung → Business Plan: tầng nào ai làm

| Tầng / trục | Việc cần làm để "điền" (đẻ ra luận cứ) | Agent chủ trì | Hỗ trợ | → Mục Business Plan |
|---|---|---|---|---|
| Nhu cầu | Phỏng vấn JTBD + mô hình ROI-khách + TAM bottom-up | `analyst` | `cfo`, GM (cửa KOCHAM) | Thị trường · Giá trị · Doanh thu |
| Thế | Luận đề "vì sao bây giờ" + audit 7 Powers/VRIN + bánh đà + đồng hồ cửa sổ | `chief-of-staff` | `analyst`, `legal-counsel` | Lợi thế cạnh tranh · Thời điểm · GTM |
| Người | Bản đồ năng lực × khoảng trống + JD FAE + đội hình | `operations` | `cfo` | Đội ngũ & Vận hành · Thực thi |
| Tri giác | Cắm định vị lên chuỗi + kiểm định bằng khách thật | `growth` | — (đã chín) | Định vị/Thương hiệu · Marketing |
| ⟂ Tài chính | Mô hình biên/đơn vị kinh tế/runway/nhu cầu vốn | `cfo` | `analyst`, `legal-counsel` | Mô hình tài chính · Dự báo · Vốn |
| Bao trùm | Giữ sổ giả định, điều phối thứ tự thử, **biên tập Business Plan** | `chief-of-staff` | tất cả | (toàn bộ) |

---

## 9. Quyết định cần GM

> (★) = quyết định nền, chặn các bước sau nếu chưa chốt.

- [ ] ★ **Duyệt khung 4 tầng + trục tài chính** (Nhu cầu→Thế→Người→Tri giác, ⟂ Tài chính) làm xương sống suy ra
  Business Plan? (y/n / chỉnh)
- [ ] ★ **Đồng ý phương pháp = Discovery-Driven Planning** (lập theo giả định, thử rẻ-trước; viết plan **sau**
  khi kiểm tiền đề sống-còn) thay vì viết một bản plan tĩnh ngay? (y/n)
- [ ] **Chốt thứ tự thử giả định:** A1 (phỏng vấn nhu cầu) làm **trước tiên**? (y/n / đổi thứ tự)
- [ ] **Cho phép mở cửa KOCHAM** cho `analyst` đặt 5–10 phỏng vấn vấn-đề với nhà máy Hàn (cần GM/bác Kim giới thiệu).
- [ ] **Giao tầng cho agent** theo §8 — bắt đầu từ tầng nào? (đề xuất: chạy **A1 + A2** song song trước)
- [ ] Sau khi GM duyệt: nâng khung `planning/` → mục `roadmap/`, gắn OKR (`company/okrs.md` đang `[CẦN ĐIỀN]`
  — khung cho sẵn Objective ứng viên: *chứng minh nhu cầu* · *dựng thế* · *ra pilot đầu* · *đạt biên mục tiêu*).

---

## 10. Giả định & giới hạn

- Khung là **cỗ máy tư duy & suy luận**, không phải câu trả lời. Giá trị: đặt **đúng câu hỏi + đúng phương pháp
  + đúng chuẩn bằng chứng** cho mỗi tầng, rồi **suy ra quyết định → gom thành plan**. Phần "điền" thuộc agent +
  bằng chứng thực địa.
- Mọi "giả định sống-còn" là **giả thuyết chờ kiểm**, không phải sự thật (chủ ý của DDP).
- Business Plan **chỉ nên viết sau khi** các tiền đề sống-còn (đặc biệt A1, A2, A6) đã qua phép thử — viết sớm =
  plan trên cát.
- Không mâu thuẫn ADR 0001; tầng Tri giác **kế thừa** Hướng C, không xét lại.
- Không có số tài chính/kỹ thuật mới ở đây — số đến từ `cfo`/`analyst`/`product-lead` khi điền tầng.
