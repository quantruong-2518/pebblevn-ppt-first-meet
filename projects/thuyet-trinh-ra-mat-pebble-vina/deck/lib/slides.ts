// NGUỒN DỮ LIỆU slide (meta + nội dung) — mirror từ ../slides/*.md.
//
// HAI TẦNG TÁCH BẠCH (đừng trộn):
//   • TẦNG SHOW   = eyebrow/title/headline/bullets/figure  → HIỂN THỊ cho khán giả. Tam ngữ {vi,ko,en}.
//   • WORKING-DOC = why/notes/need + meta (owner/status/…)  → CHỈ panel meta (phím "m"). Tiếng Việt nội bộ.
// need/why/notes KHÔNG bao giờ render lên slide.
//
// Tam ngữ: tiếng Việt là gốc; KO trang trọng (존댓말); EN chỉ cho khái niệm/thuật ngữ chuẩn.
// KO/EN của slide 01–04 là BẢN DRAFT — cần native proofread trước sự kiện.
//
// XƯƠNG SỐNG (2026-06-15): tái cấu trúc theo "kỷ nguyên vươn mình" (mạch diễn dịch).
//   00 bìa → 01 đại cục quốc gia (suy ra cần đơn vị tiên phong) → 02 Pebble Vina là ai (định vị hai thì)
//   → 03 Pebble Square (đối tác/nền tảng) → 04 thang độ chín thị trường VN → 05 map hai đầu (matrix)
//   → 06 cộng sinh PV+PS → 07 lộ trình → 08 lời mời.
//   Khung arc-fault cũ đã archive ở ../slides/_archive/2026-06-15-tai-cau-truc-quoc-gia/.
//   slides.ts đã đủ 00–08 (arc khép). Bìa (n:0) & tầng UI/figure GIỮ NGUYÊN. CEO PS = Lee Choong-hyun.
//   Figure: 01 flow · 02 twocol · 03 forces · 04 ladder(thang độ chín) · 05 matrix(map hai đầu) · 06 flow(vòng lặp cộng sinh) · 07 flow(lộ trình) · 08 bridge (bookend cây cầu).
//   ⚠️ Mở: slide 05 (2026-06-15) đổi sang MAP hai đầu (năng lực PS ↔ phân khúc VN) + HOÃN priority — KHÔNG còn chốt beachhead ở 05.
//      slide 04 (thang độ chín) xếp theo ĐỘ CHÍN THỊ TRƯỜNG (khách quan), KHÔNG phải thứ tự ưu tiên của ta → không đụng stance hoãn-priority của 05.
//      → slide 07 Chân trời 1 vẫn gọi tên beachhead 'an toàn & sức khỏe thiết bị' → CẦN làm mềm cho nhất quán (GM xác nhận).

export type Lang = "vi" | "ko" | "en";
export const LANGS: Lang[] = ["vi", "ko", "en"];
export const LANG_LABEL: Record<Lang, string> = { vi: "VI", ko: "KO", en: "EN" };

/** Văn bản đa ngữ. */
export type LText = Record<Lang, string>;
/** Danh sách bullet đa ngữ. */
export type LList = Record<Lang, string[]>;

/** Khung hình — biến điệu thị giác để bài không phải cùng một khuôn. */
export type Figure =
  | { kind: "forces"; items: { label: LText; sub: LText }[] }
  | { kind: "flow"; steps: { label: LText; sub?: LText }[]; foot: LText }
  | { kind: "twocol"; left: { head: LText; items: LText[] }; right: { head: LText; items: LText[] } }
  | { kind: "bridge"; nodes: LText[]; foot: LText; gold?: number }
  // matrix = "map hai đầu": cap (năng lực PS) ↔ seg (phân khúc VN) + stat (số bằng chứng, ASCII).
  // bar = đòn bẩy xuyên suốt (KOCHAM); foot = câu kết. KHÔNG xếp hạng cột nào.
  | { kind: "matrix"; cols: { cap: LText; seg: LText; stat: string }[]; bar: LText; foot: LText }
  // ladder = "thang độ chín": xếp từ trên (chín nhất) xuống. Mỗi rung = cap (mảng dịch vụ PS) +
  // seg (phân khúc VN) + stat (số bằng chứng, ASCII) + tier (nhãn độ chín). foot = câu kết khung.
  | { kind: "ladder"; rungs: { cap: LText; seg: LText; stat: string; tier: LText }[]; foot: LText }
  | { kind: "stat"; value: LText; caption: LText; source?: LText };

export type SlideStatus = "skeleton" | "drafting" | "review" | "done";

export type SlideData = {
  // ----- meta (truy vết — chỉ panel meta) -----
  n: number | string;
  file: string;
  nhip: number | string;
  owner: string;
  status: SlideStatus;
  tech: string;
  gatDau: string;
  // ----- cờ trình chiếu -----
  cover?: boolean;
  appendix?: boolean; // true = KHÔNG nằm trong luồng chính (mở bằng phím "a")
  cobrand?: boolean;
  // ----- TẦNG SHOW (tam ngữ) -----
  eyebrow: LText;
  title: LText;
  headline?: LText;
  bullets?: LList;
  figure?: Figure;
  // ----- chỉ bìa -----
  slogan?: LText; // câu định vị ngắn, nổi bật
  presenter?: LText; // người trình bày
  audience?: LText; // dòng "kính trình" trang trọng
  event?: LText;
  // ----- WORKING-DOC (nội bộ, tiếng Việt) -----
  need?: string[];
  notes?: string;
  why: string;
};

// Tiện ích nhỏ: gói 3 ngôn ngữ.
const L = (vi: string, ko: string, en: string): LText => ({ vi, ko, en });

export const SLIDES: SlideData[] = [
  // ===== 00 · BÌA ===== (GIỮ NGUYÊN — hero 3D + UI base)
  {
    n: 0, file: "00-bia.md", nhip: "—", owner: "growth", status: "skeleton", tech: "non", gatDau: "Cả phòng",
    cover: true, cobrand: true,
    eyebrow: L("Edge AI · Bán dẫn AI", "엣지 AI · AI 반도체", "Edge AI · AI semiconductors"),
    title: L("Pebble Vina", "Pebble Vina", "Pebble Vina"),
    slogan: L(
      "Trí tuệ Hàn Quốc, trái tim Việt Nam.",
      "한국의 두뇌, 베트남의 마음.",
      "A Korean tech brain, a Vietnamese heart.",
    ),
    headline: L(
      "Đưa công nghệ Edge AI của Hàn Quốc vào vận hành thật tại Việt Nam.",
      "한국의 엣지 AI 기술을 베트남 현장에 실제로 도입합니다.",
      "Bringing Korea's Edge-AI technology into real operation in Vietnam.",
    ),
    presenter: L(
      "Trình bày · Trương Bá Quân, General Manager",
      "발표 · Truong Ba Quan, General Manager",
      "Presented by Truong Ba Quan, General Manager",
    ),
    audience: L(
      "Kính trình quý nhà đầu tư & quan khách",
      "투자자와 귀빈 여러분께 드립니다",
      "Presented to our investors & distinguished guests",
    ),
    event: L("Lễ ra mắt · 19.06.2026", "런칭 · 2026.06.19", "Launch · 19 Jun 2026"),
    need: ["Logo/nhận diện", "Quyền co-brand (IP)", "Xác nhận slogan", "Native proofread KO/EN (slogan + presenter)"],
    notes: "Bìa: hero 3D 'die' Analog-PIM. ⚠️ Dòng co-brand đang ghi 'phân phối ủy quyền chính thức' — nhưng CHƯA ký HĐ với Pebble Square (2026-06-15). GM đã chốt GIỮ NGUYÊN bìa → để nguyên, nhưng gắn cờ để rà trước sự kiện.",
    why: "Bìa — vay uy tín Hàn (Hướng C) qua slogan 'não Hàn, tim Việt' + die 3D. Nguồn: ADR 0001.",
  },

  // ===== 01 · KỶ NGUYÊN VƯƠN MÌNH (mạch diễn dịch: đại cục → suy ra → Pebble Vina) · figure: flow =====
  {
    n: 1, file: "01-ky-nguyen-vuon-minh.md", nhip: "mở đầu", owner: "GM", status: "drafting", tech: "non", gatDau: "Cả phòng (khán giả Việt)",
    eyebrow: L("Bối cảnh · Kỷ nguyên mới", "시대적 배경 · 새로운 시대", "Context · A new era"),
    title: L("Kỷ nguyên vươn mình của Việt Nam", "도약하는 베트남의 시대", "Vietnam's era of national rising"),
    headline: L(
      "*Kỷ nguyên vươn mình* — quyết tâm đưa Việt Nam thành quốc gia phát triển, hiện đại; lấy khoa học – công nghệ làm đột phá, với *bán dẫn và AI* là ngành ưu tiên chiến lược.",
      "*도약의 시대* — 베트남을 선진·현대 국가로 만들겠다는 의지이며, 과학기술을 돌파구로 삼고 그 중심에 *반도체와 AI*를 전략 우선 산업으로 둡니다.",
      "*An era of national rising* — Vietnam's resolve to become a developed, modern nation, with science and technology as the breakthrough and *semiconductors and AI* as strategic priority sectors.",
    ),
    figure: {
      kind: "flow",
      steps: [
        {
          label: L("Bán dẫn & AI", "반도체와 AI", "Semiconductors & AI"),
          sub: L("ngành trọng yếu", "핵심 전략 산업", "strategic priority sectors"),
        },
        {
          label: L("Đơn vị tiên phong", "선도 기업", "Pioneers"),
          sub: L("đưa công nghệ vào thực tế", "기술을 현장에 도입", "putting technology into practice"),
        },
        {
          label: L("Giá trị", "가치", "The value"),
          sub: L("cải tiến ngành cũ · tạo ngành mới", "기존 산업 혁신 · 새 산업 창출", "renew old industries · create new ones"),
        },
      ],
      foot: L("Đó là lý do Pebble Vina ra đời.", "그것이 바로 Pebble Vina가 탄생한 이유입니다.", "That is why Pebble Vina was born."),
    },
    bullets: {
      vi: [
        "Chủ trương được *Tổng Bí thư Tô Lâm* cùng lãnh đạo Đảng, Nhà nước thúc đẩy.",
        "Căn cứ *Nghị quyết 57-NQ/TW* (*22/12/2024*) và *Quyết định 1018/QĐ-TTg* (*21/9/2024*) — Chiến lược phát triển công nghiệp bán dẫn Việt Nam đến 2030.",
      ],
      ko: [
        "*또 럼 서기장*과 당·국가 지도부가 추진하는 국가 기조입니다.",
        "근거: *결의 57-NQ/TW호* (*2024.12.22*) · *결정 1018/QĐ-TTg호* (*2024.9.21*) — 2030 베트남 반도체 산업 발전 전략.",
      ],
      en: [
        "A national agenda driven by *General Secretary Tô Lâm* and the Party and State leadership.",
        "Basis: *Resolution 57-NQ/TW* (*22 Dec 2024*) and *Decision 1018/QĐ-TTg* (*21 Sep 2024*) — Vietnam's Semiconductor Industry Strategy to 2030.",
      ],
    },
    need: ["GM duyệt câu chữ chính trị", "Native proofread KO/EN"],
    notes: "Mạch DIỄN DỊCH kiểu Việt (GM, 2026-06-15): đại cục quốc gia → suy ra cần đơn vị tiên phong → hạ cánh Pebble Vina. LẰN RANH: KHÔNG ngụ ý lãnh đạo bảo trợ PV — chỉ dẫn chủ trương quốc gia rồi TA tự đáp lời. Chức danh đã xác minh: Tổng Bí thư khóa XIV (đương nhiệm). Nguồn NQ57 (22/12/2024) + QĐ1018 (21/9/2024). TINH GỌN (2026-06-15): headline = ĐỊNH NGHĨA 'kỷ nguyên là gì' (quốc gia phát triển/hiện đại · KH-CN đột phá · bán dẫn+AI ưu tiên) thay vì câu dài; TÊN lãnh đạo + số hiệu văn bản DỜI xuống bullet (giảm rủi ro lằn ranh, headline thuần khái niệm). Chữ nhấn gradient (.hl): headline = 'kỷ nguyên vươn mình' + 'bán dẫn và AI'; bullet tách 2 dòng (chủ trương+tên lãnh đạo / căn cứ pháp lý), NHẤN tên riêng · mã văn bản · ngày ban hành đầy đủ — GM chốt 2026-06-15 (muốn tên lãnh đạo nổi). Số hiệu+ngày đã xác minh: NQ57 22/12/2024 · QĐ1018 21/9/2024.",
    why: "Khung luận GM: mở deck bằng diễn dịch quốc gia — nâng PV thành 'đáp lời nhu cầu quốc gia', giải thế khó 'chưa ký HĐ/chưa chọn vertical' (biện minh ở tầm sứ mệnh). Nuốt luôn 'why now'.",
  },

  // ===== 02 · PEBBLE VINA LÀ AI (định vị HAI THÌ — điểm hạ cánh của slide 01) · figure: twocol =====
  {
    n: 2, file: "02-dinh-vi-pebble-vina.md", nhip: 0, owner: "GM", status: "drafting", tech: "non", gatDau: "Cả phòng",
    eyebrow: L("Pebble Vina là ai", "Pebble Vina는", "Who we are"),
    title: L("Một công ty Việt Nam, một tầm nhìn khu vực", "베트남 기업, 지역을 향한 비전", "A Vietnamese company, a regional vision"),
    headline: L(
      "Pebble Vina ra đời để đưa *Edge-AI* vào *vận hành thật*, chung tay đưa Việt Nam *phát triển* — cùng nền tảng hàng đầu từ Pebble Square.",
      "Pebble Vina는 *엣지 AI*를 베트남에 *실제로* 도입해 베트남의 *발전*에 함께하고자 설립되었습니다 — Pebble Square의 선도 플랫폼과 함께.",
      "Pebble Vina was founded to put *Edge-AI* into *real operation* — joining hands to help Vietnam *grow*, together with Pebble Square's leading platform.",
    ),
    figure: {
      kind: "twocol",
      left: {
        head: L("Hôm nay", "오늘", "Today"),
        items: [
          L("Một công ty *Việt Nam độc lập*", "*독립된 베트남 기업*", "An *independent Vietnamese company*"),
          L("Kết nối với cộng đồng doanh nghiệp Hàn tại Việt Nam", "베트남 내 한국 기업 커뮤니티와 연결", "Connected to the Korean business community in Vietnam"),
          L("Bắt đầu từ bài toán cấp thiết nhất", "가장 시급한 과제부터 시작", "Starting with the most urgent problem"),
        ],
      },
      right: {
        head: L("Mục tiêu", "목표", "Our goal"),
        items: [
          L("Đối tác phân phối độc quyền của Pebble Square", "Pebble Square 독점 총판 파트너", "Pebble Square's exclusive distribution partner"),
          L("Mở rộng nhiều ứng dụng trên một nền tảng", "하나의 플랫폼에서 다양한 응용으로 확장", "Broadening many applications on one platform"),
          L("Công ty giải pháp Edge-AI cho *Đông Nam Á*", "*동남아*를 위한 엣지 AI 솔루션 기업", "An Edge-AI solutions company for *Southeast Asia*"),
        ],
      },
    },
    bullets: {
      vi: ["Đặt mục tiêu — và làm cho nó thành hiện thực, từng bước một."],
      ko: ["목표를 세우고, 한 걸음씩 현실로 만듭니다."],
      en: ["We set the goal — and make it real, step by step."],
    },
    need: ["GM chốt mức nói 'độc quyền' trên sân khấu", "Native proofread KO/EN"],
    notes: "ĐỊNH VỊ HAI THÌ (chốt 2026-06-15): cột 'Hôm nay' = cái chứng minh được; cột 'Mục tiêu' (gold) = đích earned. CHƯA ký HĐ với PS → 'độc quyền' nằm ở cột MỤC TIÊU, không phải hiện trạng (CEO PS ngồi dưới). Motif = lời GM, sợi chỉ xuyên deck. Chữ nhấn gradient (2026-06-15): headline = 'Edge-AI' + 'vận hành thật' + 'phát triển'; figure nhấn theo MẠCH ĐỊA LÝ 'Việt Nam độc lập' (Hôm nay) → 'Đông Nam Á' (Mục tiêu). REFRAME HEADLINE (2026-06-15, GM feedback): lý do PV tồn tại = SỨ MỆNH đưa Việt Nam phát triển (nối mạch slide 01), KHÔNG phải 'đưa công nghệ PS vào vận hành' (tránh định vị PV lệ thuộc PS). Edge-AI = phương tiện; PS = đối tác/nền tảng 'cùng làm' (chữ 'cùng' thay 'phụ thuộc'), được tôn vinh riêng ở slide 03. CỐ Ý KHÔNG nhấn 'độc quyền' — giữ MỀM trên sân khấu, đồng bộ stance slide 06. (2026-06-15, GM feedback) Bỏ title 'Một câu về chúng tôi' (vô duyên, ít thông tin) → title định vị 'một công ty VN, một tầm nhìn khu vực'. Mở mỗi cột 2→3 mục: Hôm nay thêm 'kết nối cộng đồng DN Hàn (KOCHAM)'; Mục tiêu thêm 'mở rộng nhiều ứng dụng/một nền tảng' = bậc thang vai trò→bề rộng→khu vực (khớp 3 chân trời slide 07). ⚠️ Dòng KOCHAM nhắc nhẹ mạng lưới Hàn — GM rà mức công khai.",
    why: "Điểm hạ cánh của mạch diễn dịch slide 01. Phương pháp định vị hai thì — không hứa viển vông. Nguồn: dinh-vi §3; ADR 0001 (Hướng C).",
  },

  // ===== 03 · PEBBLE SQUARE — NỀN TẢNG TA CHỌN (honor; chứng minh nửa "nền tảng PS" của slide 02) · figure: forces =====
  {
    n: 3, file: "03-pebble-square.md", nhip: 1, owner: "product-lead", status: "drafting", tech: "1 điểm (số MINT)", gatDau: "CEO Pebble Square",
    eyebrow: L("Nền tảng · Pebble Square", "플랫폼 · Pebble Square", "The platform · Pebble Square"),
    title: L("Nền tảng ta chọn", "우리가 선택한 기술", "The platform we chose"),
    headline: L(
      "Pebble Vina không chọn một con chip — chọn nền tảng Analog-PIM đa năng của Pebble Square (Hàn Quốc, 2021): công nghệ thật, đo được, đã được thị trường công nhận.",
      "Pebble Vina는 칩 하나가 아니라, Pebble Square(한국, 2021)의 다목적 Analog-PIM 플랫폼을 선택했습니다 — 실재하고, 측정되며, 시장에서 검증된 기술입니다.",
      "Pebble Vina didn't pick a single chip — we chose Pebble Square's multi-purpose Analog-PIM platform (Korea, 2021): technology that is real, measured, and market-recognized.",
    ),
    figure: {
      kind: "forces",
      items: [
        {
          label: L("Nền tảng đa năng", "다목적 플랫폼", "A multi-purpose platform"),
          sub: L("On-Device: Sound · Vision · Security + Failure Analysis", "온디바이스: Sound · Vision · Security + Failure Analysis", "On-Device: Sound · Vision · Security + Failure Analysis"),
        },
        {
          label: L("Công nghệ đo được", "측정 가능한 성능", "Measurable performance"),
          sub: L("MINT · 4M synapse · 30 GOPS · 17,6 TOPS/W · Analog-PIM", "MINT · 시냅스 400만 · 30 GOPS · 17.6 TOPS/W · Analog-PIM", "MINT · 4M synapses · 30 GOPS · 17.6 TOPS/W · Analog-PIM"),
        },
        {
          label: L("Đã được công nhận", "검증된 신뢰", "Proven & recognized"),
          sub: L("JV Saudi–NEOM · KGCCI 2024 · NDA SK hynix · ETRI · PS Japan", "사우디 JV–NEOM · KGCCI 2024 · SK하이닉스 NDA · ETRI · PS Japan", "Saudi JV–NEOM · KGCCI 2024 · SK hynix NDA · ETRI · PS Japan"),
        },
      ],
    },
    bullets: {
      vi: ["Họ chip Analog-PIM: MOCHA (2021) → MINT (gen-2, sản xuất hàng loạt 2023)."],
      ko: ["Analog-PIM 칩 제품군: MOCHA (2021) → MINT (2세대, 2023 양산)."],
      en: ["Analog-PIM chip family: MOCHA (2021) → MINT (gen-2, mass-produced in 2023)."],
    },
    need: ["Xác nhận chính tả KO + chức danh CEO Lee Choong-hyun với PS", "Xin PS cho trích spec PAPAYA (nếu dùng số)", "Native proofread KO/EN"],
    notes: "HONOR cho CEO PS ngồi dưới. CEO = Lee Choong-hyun (이충현) — GM chốt 2026-06-15 (hồ sơ nội bộ cũ ghi ngược, đã sửa). LẰN RANH: (1) KHÔNG gán arc-fault cho PS — đó là góc của ta, để dành slide 'menu'; (2) KHÔNG số doanh thu (−86% YoY, cờ đỏ); (3) KHÔNG trình '100× GPU/Jetson' như benchmark độc lập — là claim của PS. Nước cờ: để CEO tự nói số sâu. Số MINT ✅ verified.",
    why: "Chứng minh nửa 'nền tảng Pebble Square' trong câu thì-hiện-tại slide 02 là THẬT → nâng độ tin cả định vị; đỡ cho nhà đầu tư. Nguồn: _research-pebble-square-services.md (Mục 1–3 ✅); _research-proof.md (specs MINT).",
  },

  // ===== 04 · THANG ĐỘ CHÍN — 4 mảng dịch vụ PS xếp theo độ chín thị trường VN (overview cho matrix 05) · figure: ladder =====
  {
    n: 4, file: "04-do-chin-thi-truong.md", nhip: 2, owner: "GM + analyst", status: "drafting", tech: "nhẹ", gatDau: "Cả phòng (đặc biệt nhà đầu tư)",
    eyebrow: L("Độ chín thị trường · Việt Nam", "시장 성숙도 · 베트남", "Market readiness · Vietnam"),
    title: L("Thị trường Việt Nam chín tới đâu", "베트남 시장은 어디까지 무르익었나", "Where Vietnam is most ready"),
    headline: L(
      "Bốn mảng dịch vụ của Pebble Square gặp thị trường Việt Nam ở *bốn độ chín khác nhau* — xếp từ nơi cầu đã rõ nhất xuống nơi còn đang mở.",
      "Pebble Square의 네 가지 서비스 영역은 베트남 시장에서 *서로 다른 성숙도*로 만납니다 — 수요가 가장 뚜렷한 곳부터 이제 막 열리는 곳까지.",
      "Pebble Square's four service areas meet the Vietnamese market at *four different maturity levels* — from where demand is clearest down to where it is just opening.",
    ),
    figure: {
      kind: "ladder",
      rungs: [
        {
          cap: L("An ninh · Giám sát video", "온디바이스 보안 · 영상 감시", "Security · video surveillance"),
          seg: L("CCTV & camera AI cho khu công nghiệp, đô thị", "산업단지·도시용 CCTV & AI 카메라", "CCTV & AI cameras for industrial parks, cities"),
          stat: "CCTV VN $615M · +17.6%/yr ✅",
          tier: L("Chín nhất", "가장 성숙", "Most ready"),
        },
        {
          cap: L("Bảo trì dự đoán", "예지보전", "Predictive maintenance"),
          seg: L("Máy móc nhà máy & an toàn điện (FDI Hàn)", "공장 설비 & 전기 안전 (한국 FDI)", "Factory machinery & electrical safety (Korean FDI)"),
          stat: "Công nghiệp IoT VN $1.6B · +13%/yr ✅",
          tier: L("Chín · khớp KOCHAM", "성숙 · KOCHAM 적합", "Ready · fits KOCHAM"),
        },
        {
          cap: L("Thị giác máy · QC sản xuất", "머신 비전 · 제조 QC", "Machine vision · mfg QC"),
          seg: L("Kiểm lỗi dây chuyền điện tử & bán dẫn", "전자·반도체 라인 결함 검사", "Defect inspection on electronics & semiconductor lines"),
          stat: "Amkor x3 · bán dẫn VN $7B → $16.6B ✅",
          tier: L("Đang chín", "성숙 진행 중", "Emerging"),
        },
        {
          cap: L("Giọng nói · âm thanh", "음성 · 사운드", "Voice & sound"),
          seg: L("Smart home & loa tiếng Việt", "스마트홈 & 베트남어 음성", "Smart home & Vietnamese voice"),
          stat: "Smart home VN $0.69B → $1.71B · 9.2%/yr ✅",
          tier: L("Mới nổi", "초기 단계", "Early"),
        },
      ],
      foot: L(
        "Đây là độ chín của thị trường — chưa phải thứ tự Pebble Vina chọn làm trước.",
        "이는 시장의 성숙도이며, Pebble Vina가 먼저 착수할 순서는 아닙니다.",
        "This is the market's readiness — not the order Pebble Vina will tackle them.",
      ),
    },
    bullets: {
      vi: ["Nơi cắm rễ trước sẽ chốt cùng Pebble Square và những khách hàng đầu tiên — xem slide tiếp theo."],
      ko: ["어디에 먼저 뿌리내릴지는 Pebble Square 및 첫 고객들과 함께 정합니다 — 다음 슬라이드 참조."],
      en: ["Where we root first is decided with Pebble Square and our first customers — see the next slide."],
    },
    need: ["Bổ số machine vision/QC riêng VN (đang dùng anchor Amkor)", "GM xác nhận nhãn độ chín 4 bậc", "Native proofread KO/EN"],
    notes: "MỚI (2026-06-15, GM): slide overview xếp 4 nhóm service PS theo ĐỘ CHÍN THỊ TRƯỜNG VN (trên→dưới). KHUNG QUAN TRỌNG: 'độ chín thị trường' (khách quan) ≠ 'thứ tự ưu tiên của ta' → foot nói thẳng, KHÔNG đụng stance HOÃN-priority của slide 05 (matrix). Thứ tự: An ninh/CCTV (số sạch nhất, +17.6%) > Bảo trì dự đoán (khớp KOCHAM nhất) > Thị giác/QC (anchor Amkor; số riêng VN còn ❌) > Giọng nói (B2C, CAGR thấp hơn). Healthcare = chân yếu (>90% thiết bị y tế VN nhập) → để lời thoại, không thành bậc. Số đều ✅ từ _research-vn-segments-map.md (IMARC, fetch 2026-06-15). figure ladder mới.",
    why: "Cho deck một bậc 'answer-first' (thị trường VN chín tới đâu) TRƯỚC khi vào map chi tiết (05), mà vẫn trung thực 'chưa chốt beachhead'. Nguồn: _research-vn-segments-map.md (đầu B, ✅/🟡); _research-pebble-square-services.md (đầu A, 4 nhóm service).",
  },

  // ===== 05 · MAP HAI ĐẦU — năng lực PS ↔ phân khúc VN (HOÃN priority) · figure: matrix =====
  {
    n: 5, file: "05-menu-nen-tang.md", nhip: 3, owner: "GM", status: "drafting", tech: "nhẹ", gatDau: "Cả phòng (khách có nhà máy)",
    eyebrow: L("Cách tiếp cận · Năng lực gặp nhu cầu", "접근 방식 · 역량과 수요", "Our approach · Capability meets demand"),
    title: L("Khớp nền tảng với thị trường Việt", "플랫폼을 베트남 시장에 맞추다", "Matching the platform to Vietnam"),
    headline: L(
      "Pebble Square là một nền tảng Edge-AI đa năng. Việc của Pebble Vina là khớp từng năng lực vào đúng phân khúc thị trường Việt Nam đang có nhu cầu thật.",
      "Pebble Square는 다목적 엣지 AI 플랫폼입니다. Pebble Vina의 역할은 각 역량을 실제 수요가 있는 베트남 시장 부문에 맞추는 것입니다.",
      "Pebble Square is a multi-purpose Edge-AI platform. Pebble Vina's job is to match each capability to the Vietnamese market segments with real demand.",
    ),
    figure: {
      kind: "matrix",
      cols: [
        {
          cap: L("Giọng nói & âm thanh", "음성 & 사운드", "Voice & sound"),
          seg: L("Smart home & loa tiếng Việt", "스마트홈 & 베트남어 음성", "Smart home & Vietnamese voice"),
          stat: "Smart home VN $0.69B → $1.71B · 9.2%/yr",
        },
        {
          cap: L("Thị giác máy", "머신 비전", "Machine vision"),
          seg: L("QC kiểm lỗi sản xuất điện tử", "전자 제조 QC 검사", "Electronics-mfg QC inspection"),
          stat: "Amkor x3 · VN semis $7B → $16.6B",
        },
        {
          cap: L("An ninh tại chỗ", "온디바이스 보안", "On-device security"),
          seg: L("Giám sát video & camera AI", "영상 감시 & AI 카메라", "Video surveillance & AI cameras"),
          stat: "CCTV VN $615M · +17.6%/yr",
        },
        {
          cap: L("Bảo trì dự đoán", "예지보전", "Predictive maintenance"),
          seg: L("Máy móc nhà máy & an toàn điện", "공장 설비 & 전기 안전", "Factory machinery & electrical safety"),
          stat: "Industrial IoT VN $1.6B → $5.2B · +13%/yr",
        },
      ],
      bar: L(
        "KOCHAM · ~10.000 doanh nghiệp Hàn tại Việt Nam — một mạng lưới khách, cả bốn nhu cầu.",
        "KOCHAM · 베트남 내 한국 기업 ~1만 곳 — 하나의 고객망, 네 가지 수요 모두.",
        "KOCHAM · ~10,000 Korean firms in Vietnam — one customer network, all four needs.",
      ),
      foot: L(
        "Một nền tảng → nhiều bài toán Việt Nam. Ưu tiên cái nào trước là bước kế tiếp.",
        "하나의 플랫폼 → 베트남의 여러 과제. 무엇을 먼저 할지는 다음 단계입니다.",
        "One platform → many Vietnamese problems. Which to prioritize is the next step.",
      ),
    },
    bullets: {
      vi: ["Bốn nhóm — bốn thị trường Việt Nam thật, đều đang tăng hai chữ số mỗi năm (số liệu có nguồn)."],
      ko: ["네 그룹 — 모두 실재하는 베트남 시장이며, 매년 두 자릿수로 성장합니다 (출처 있는 수치)."],
      en: ["Four groups — four real Vietnamese markets, each growing double-digits a year (sourced figures)."],
    },
    need: ["GM xem & chốt khung map (CHƯA cần chốt thứ tự ưu tiên)", "legal đọc TCVN 7447-7-712 + QCVN 01:2020/BCT (arc-fault có/không bắt buộc)", "Bổ số machine vision/QC riêng VN nếu trình nhà đầu tư lớn", "Native proofread KO/EN"],
    notes: "MAP HAI ĐẦU (chốt 2026-06-15, GM): slide đổi vai trò 'menu + chốt beachhead' → 'khớp năng lực PS ↔ phân khúc VN, HOÃN priority'. Figure forces→matrix: 4 cột = 4 nhóm service PS (Sound/Vision/Security/PdM), mỗi cột map xuống 1 phân khúc VN + 1 số ✅ verified; thanh ngang KOCHAM xuyên 4 cột. KHÔNG xếp hạng/không tô cột nào trước — thứ tự ưu tiên là 'chuyện sau' (roadmap/nội bộ). LẰN RANH: arc-fault/an toàn điện nằm trong nhóm PdM như ứng dụng PV KHỞI XƯỚNG, KHÔNG gán PS. Số: smart home/CCTV/IIoT/semis đều ✅ (IMARC, fetch 2026-06-15); machine vision riêng VN ❌ → cột Vision dùng anchor Amkor + bán dẫn VN. Đầu B đầy đủ ở _research-vn-segments-map.md.",
    why: "Hiện thực hóa 'một nền tảng, nhiều bài toán' bằng cách MAP minh bạch hai đầu (năng lực PS ↔ nhu cầu VN có số) — đặt nền cho lộ trình (07) mà KHÔNG khóa sớm vào một vertical. Hoãn priority = trung thực (chưa chốt beachhead) + giữ linh hoạt. Nguồn: _research-vn-segments-map.md (đầu B, ✅/🟡 có nhãn); _research-pebble-square-services.md (đầu A).",
  },

  // ===== 06 · CỘNG SINH — KHÔNG PHẢI MUA–BÁN (khóa lợi ích hai bên; đỡ rủi ro 'chưa ký HĐ') · figure: flow (vòng lặp cộng sinh) =====
  {
    n: 6, file: "06-cong-sinh.md", nhip: 4, owner: "GM", status: "drafting", tech: "non", gatDau: "CEO Pebble Square + Nhà đầu tư",
    eyebrow: L("Quan hệ · Cộng sinh", "관계 · 상생", "The relationship · Symbiosis"),
    title: L("Không phải mua–bán", "거래가 아닙니다", "Not a buy–sell deal"),
    headline: L(
      "Một bên có công nghệ, một bên có thị trường và năng lực thực thi. Pebble Square và Pebble Vina khóa vào nhau — mỗi thắng lợi ở Việt Nam khiến cả hai mạnh hơn.",
      "한쪽은 기술을, 다른 한쪽은 시장과 실행력을 가졌습니다. Pebble Square와 Pebble Vina는 서로 맞물려 있고, 베트남에서의 성공 하나하나가 양쪽 모두를 강하게 만듭니다.",
      "One side has the technology, the other has the market and execution. Pebble Square and Pebble Vina are interlocked — every win in Vietnam makes both stronger.",
    ),
    figure: {
      kind: "flow",
      steps: [
        { label: L("Mỗi pilot thắng ở Việt Nam", "베트남에서 거두는 파일럿 성공", "Each pilot won in Vietnam") },
        { label: L("De-risk kế hoạch Đông Nam Á của Pebble Square", "Pebble Square 동남아 계획의 리스크 감소", "De-risks Pebble Square's Southeast Asia plan") },
        { label: L("Pebble Square dồn nguồn lực & ưu tiên lại", "Pebble Square가 자원과 우선순위를 재집중", "Pebble Square refocuses resources & priority") },
        { label: L("Pebble Vina thắng nhanh hơn", "Pebble Vina가 더 빨리 성공", "Pebble Vina wins faster") },
      ],
      foot: L(
        "Vòng quay khóa chặt theo thời gian — không phải hợp đồng phân phối mong manh.",
        "시간이 갈수록 더 단단히 맞물리는 선순환 — 깨지기 쉬운 총판 계약이 아닙니다.",
        "A loop that locks tighter over time — not a fragile distribution contract.",
      ),
    },
    need: ["Trạng thái HĐ độc quyền + điều khoản hỗ trợ (MDF/đào tạo) — legal-counsel", "Xác nhận chiến lược ĐNÁ của PS để chạm CEO đúng — analyst", "Native proofread KO/EN"],
    notes: "FIGURE ĐỔI twocol→flow (2026-06-15, GM: slide cũ 'nhiều thứ, chưa rõ thông điệp'): hero = VÒNG LẶP cộng sinh — đó mới là cái phân biệt cộng sinh ≠ mua-bán (deal phân phối nào cũng 'mỗi bên có cái bên kia cần', nhưng chỉ cộng sinh mới có vòng khóa chặt theo thời gian). Give/get dời xuống lời thoại, KHÔNG bày lên slide. Mức 'độc quyền' = MỀM CÔNG KHAI: nói 'đối tác phân phối', để 'độc quyền' cho gặp riêng. Không over-claim cam kết PS chưa có HĐ. VN = PoC mô hình lập pháp nhân địa phương (Tokyo 2025). Motif cây cầu trả ở slide 08.",
    why: "Sau honor nền tảng (03), định nghĩa BẢN CHẤT quan hệ = cộng sinh. THÔNG ĐIỆP = vòng lặp khóa lợi ích hai bên → đỡ rủi ro 'chưa ký HĐ' (quan hệ thật chứng minh bằng vòng lặp, không bằng tờ giấy). Chạm CEO + nhà đầu tư. Nguồn: dinh-vi §2; parent §mô hình mở rộng; 06-cong-sinh (archive).",
  },

  // ===== 07 · LỘ TRÌNH 3 CHÂN TRỜI — hiện thực hóa cột 'Mục tiêu' slide 02 · figure: flow =====
  {
    n: 7, file: "07-lo-trinh.md", nhip: 5, owner: "GM", status: "drafting", tech: "non", gatDau: "Nhà đầu tư + CEO Pebble Square",
    eyebrow: L("Lộ trình · 3 chân trời", "로드맵 · 3개 지평선", "Roadmap · three horizons"),
    title: L("Lộ trình 3 chân trời", "3개 지평선 로드맵", "A three-horizon path"),
    headline: L(
      "Đặt mục tiêu — rồi đi từng bước: cắm rễ ở Việt Nam bằng một mũi nhọn, mở rộng ứng dụng theo nền tảng đa năng, rồi vươn ra Đông Nam Á.",
      "목표를 세우고 한 걸음씩: 하나의 과제로 베트남에 뿌리내리고, 다목적 플랫폼을 따라 응용을 넓힌 뒤, 동남아로 확장합니다.",
      "Set the goal, then move step by step: root in Vietnam with one spearhead, broaden applications across the platform, then expand into Southeast Asia.",
    ),
    figure: {
      kind: "flow",
      steps: [
        {
          label: L("Chân trời 1 — Cắm rễ VN", "지평선 1 — 베트남 정착", "Horizon 1 — Root in Vietnam"),
          sub: L("Beachhead: an toàn & sức khỏe thiết bị · pilot → case study", "비치헤드: 설비 안전·상태 관리 · 파일럿 → 사례", "Beachhead: equipment safety & health · pilot → case study"),
        },
        {
          label: L("Chân trời 2 — Mở rộng + ra ĐNÁ", "지평선 2 — 확장 + 동남아", "Horizon 2 — Broaden + into SEA"),
          sub: L("Thêm vertical PS (vision · voice · an ninh) + pilot ĐNÁ đầu tiên", "PS 버티컬 추가 (비전·음성·보안) + 첫 동남아 파일럿", "Add PS verticals (vision · voice · security) + first SEA pilot"),
        },
        {
          label: L("Chân trời 3 — Hub Đông Nam Á", "지평선 3 — 동남아 허브", "Horizon 3 — SEA hub"),
          sub: L("Đa giải pháp · brand riêng · công ty giải pháp đúng nghĩa", "다중 솔루션 · 독자 브랜드 · 진정한 솔루션 기업", "Multi-solution · own brand · a true solutions company"),
        },
      ],
      foot: L(
        "Mandate VN → ĐNÁ · 3 trục cùng lên: địa lý · ứng dụng · vai trò (phân phối → giải pháp).",
        "베트남 → 동남아 권한 · 세 축 동반 성장: 지리 · 응용 · 역할 (총판 → 솔루션).",
        "Mandate VN → SEA · three axes rising together: geography · applications · role (distributor → solutions).",
      ),
    },
    bullets: {
      vi: ["Bối cảnh: điện mặt trời Đông Nam Á ~38 → 93 GW vào 2030 (ước tính) — thị trường để mở rộng."],
      ko: ["배경: 동남아 태양광 ~38 → 93 GW (2030, 추정) — 확장할 시장."],
      en: ["Context: Southeast Asia solar ~38 → 93 GW by 2030 (estimate) — room to expand."],
    },
    need: ["GM chốt beachhead Chân trời 1 (đồng bộ slide 05)", "Chốt nước ĐNÁ ưu tiên + thứ tự vertical CT2 — analyst", "Native proofread KO/EN"],
    notes: "Định hướng KHÔNG cam kết cứng — nói theo chân trời, KHÔNG quý/doanh số. Co-brand 3 pha (ADR 0001, Hướng C): ~70/30→40/60→10/90 = spine chiến lược NỘI BỘ, không cần lên sân khấu. Số ĐNÁ là 🟡 ƯỚC TÍNH (Mordor, gián tiếp) — truy báo cáo gốc trước khi trình nhà đầu tư lớn. Mở ứng dụng phải bám vertical PS tự claim, KHÔNG mượn Syntiant/Mythic làm sản phẩm PS.",
    why: "Biến cột 'Mục tiêu' (slide 02) thành lộ trình + vẽ motif 'làm từng bước'. Trục ứng dụng mở sang vertical thật PS → trả lời phê bình 'quá hẹp một ứng dụng'. Gật đầu kép investor (return) + CEO (PS bán nhiều hơn 1 ứng dụng qua ta). Nguồn: 07-dich-den (archive); mandate; ADR 0001; _research-market §07.",
  },

  // ===== 08 · LỜI MỜI + CẢM ƠN — bookend, đóng vòng motif 'viên gạch/cây cầu' · figure: bridge =====
  {
    n: 8, file: "08-loi-moi.md", nhip: 6, owner: "growth", status: "drafting", tech: "non", gatDau: "Cả phòng",
    cobrand: true,
    eyebrow: L("Lời mời · Cảm ơn", "초대 · 감사", "Invitation · Thank you"),
    title: L("Cùng dựng cây cầu", "함께 다리를 놓다", "Let's build the bridge together"),
    headline: L(
      "Pebble Vina đặt mục tiêu trở thành công ty giải pháp Edge-AI cho Việt Nam và Đông Nam Á — và sẽ làm cho nó thành hiện thực, từng bước một. Hôm nay là viên gạch đầu tiên.",
      "Pebble Vina는 베트남과 동남아를 위한 엣지 AI 솔루션 기업을 목표로 하며, 한 걸음씩 현실로 만들어 가겠습니다. 오늘이 그 첫 번째 벽돌입니다.",
      "Pebble Vina aims to become an Edge-AI solutions company for Vietnam and Southeast Asia — and will make it real, step by step. Today is the first stone.",
    ),
    figure: {
      kind: "bridge",
      nodes: [
        L("Hàn Quốc", "한국", "Korea"),
        L("Việt Nam", "베트남", "Vietnam"),
        L("Đông Nam Á", "동남아", "Southeast Asia"),
      ],
      foot: L(
        "Edge-AI: trí tuệ Hàn → vận hành Việt → vươn ra Đông Nam Á.",
        "엣지 AI: 한국의 두뇌 → 베트남의 현장 → 동남아로.",
        "Edge-AI: a Korean brain → run in Vietnam → reaching Southeast Asia.",
      ),
      gold: 1,
    },
    bullets: {
      vi: ["Mời quý vị đồng hành — nhà đầu tư, Pebble Square, và quý khách — mỗi người một viên gạch của cây cầu.", "Xin trân trọng cảm ơn."],
      ko: ["함께해 주시길 초대합니다 — 투자자, Pebble Square, 그리고 귀빈 여러분 — 각자가 다리의 벽돌 하나입니다.", "진심으로 감사드립니다."],
      en: ["Join us — investors, Pebble Square, and our guests — each of you a stone in the bridge.", "With sincere thanks."],
    },
    need: ["Chốt câu định vị bookend cuối (đồng bộ slide 02)", "Thông tin liên hệ + người nhận follow-up từng nhóm", "Native proofread KO/EN"],
    notes: "Bookend đóng vòng: motif slide 02 (viên gạch/cây cầu) + hình bridge của chính slide kết + slogan bìa. Ask MỀM trên sân khấu (mời đồng hành); ask CỨNG để gặp riêng — investor (vốn+KOCHAM), CEO (độc quyền/IP/MDF/co-brand), khách (pilot). KHÔNG biến slide kết thành bảng giá. Giữ 'công ty giải pháp'+'độc quyền' ở thì MỤC TIÊU (CEO PS ngồi dưới).",
    why: "Tri giác đóng vòng (bookend slide 02) + The Ask phân tầng. Ask mềm vì thể loại ra mắt, phòng hỗn hợp → ask cứng để gặp riêng. Nguồn: 10-keu-goi-cam-on (archive); slide 02 (bookend); README §5.",
  },
];

/** Các slide nằm trong luồng trình chiếu chính (bỏ phụ lục). */
export const DECK = SLIDES.filter((s) => !s.appendix);
/** Tra cứu nhanh slide phụ lục đầu tiên (mở bằng phím "a"). */
export const APPENDIX = SLIDES.filter((s) => s.appendix);
