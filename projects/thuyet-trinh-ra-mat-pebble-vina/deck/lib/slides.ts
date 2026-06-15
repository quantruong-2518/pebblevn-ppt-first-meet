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
//   → 03 Pebble Square (đối tác/nền tảng) → 04 cộng sinh PV+PS → 05 menu nền tảng → 06 lộ trình → 07 lời mời.
//   Khung arc-fault cũ đã archive ở ../slides/_archive/2026-06-15-tai-cau-truc-quoc-gia/.
//   slides.ts đã đủ 00–07 (arc khép). Bìa (n:0) & tầng UI/figure GIỮ NGUYÊN. CEO PS = Lee Choong-hyun.
//   Figure: 01 flow · 02 twocol · 03 forces · 04 flow(vòng lặp) · 05 forces · 06 flow · 07 bridge (bookend cây cầu).
//   ⚠️ Mở: GM chốt BEACHHEAD Chân trời 1 (slide 05/06 đang mặc định 'an toàn & sức khỏe thiết bị nhà máy').

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
      "Việt Nam đang bước vào kỷ nguyên vươn mình của dân tộc — công cuộc hiện đại hóa đất nước được Tổng Bí thư Tô Lâm cùng lãnh đạo Đảng, Nhà nước coi trọng và thúc đẩy.",
      "베트남은 민족의 도약 시대에 들어서고 있습니다 — 국가 현대화 과업을 또 럼 서기장과 당·국가 지도부가 중시하고 적극 추진하고 있습니다.",
      "Vietnam is entering an era of national rising — the country's modernization is valued and actively driven by General Secretary Tô Lâm and the Party and State leadership.",
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
      vi: ["Theo Nghị quyết 57-NQ/TW và Chiến lược phát triển công nghiệp bán dẫn quốc gia đến 2030."],
      ko: ["결의 제57호와 2030 국가 반도체 산업 발전 전략에 근거합니다."],
      en: ["Per Resolution 57-NQ/TW and the national Semiconductor Industry Strategy to 2030."],
    },
    need: ["GM duyệt câu chữ chính trị", "Native proofread KO/EN"],
    notes: "Mạch DIỄN DỊCH kiểu Việt (GM, 2026-06-15): đại cục quốc gia → suy ra cần đơn vị tiên phong → hạ cánh Pebble Vina. LẰN RANH: KHÔNG ngụ ý lãnh đạo bảo trợ PV — chỉ dẫn chủ trương quốc gia rồi TA tự đáp lời. Chức danh đã xác minh: Tổng Bí thư khóa XIV (đương nhiệm). Nguồn NQ57 (22/12/2024) + QĐ1018 (21/9/2024).",
    why: "Khung luận GM: mở deck bằng diễn dịch quốc gia — nâng PV thành 'đáp lời nhu cầu quốc gia', giải thế khó 'chưa ký HĐ/chưa chọn vertical' (biện minh ở tầm sứ mệnh). Nuốt luôn 'why now'.",
  },

  // ===== 02 · PEBBLE VINA LÀ AI (định vị HAI THÌ — điểm hạ cánh của slide 01) · figure: twocol =====
  {
    n: 2, file: "02-dinh-vi-pebble-vina.md", nhip: 0, owner: "GM", status: "drafting", tech: "non", gatDau: "Cả phòng",
    eyebrow: L("Pebble Vina là ai", "Pebble Vina는", "Who we are"),
    title: L("Một câu về chúng tôi", "한 문장으로", "In one sentence"),
    headline: L(
      "Pebble Vina ra đời để đưa công nghệ Edge-AI của Pebble Square (Hàn Quốc) vào vận hành thật tại Việt Nam.",
      "Pebble Vina는 Pebble Square(한국)의 엣지 AI 기술을 베트남 현장에 실제로 도입하기 위해 설립되었습니다.",
      "Pebble Vina was founded to bring Pebble Square's (Korea) Edge-AI technology into real operation in Vietnam.",
    ),
    figure: {
      kind: "twocol",
      left: {
        head: L("Hôm nay", "오늘", "Today"),
        items: [
          L("Một công ty Việt Nam độc lập", "독립된 베트남 기업", "An independent Vietnamese company"),
          L("Bắt đầu từ bài toán cấp thiết nhất", "가장 시급한 과제부터 시작", "Starting with the most urgent problem"),
        ],
      },
      right: {
        head: L("Mục tiêu", "목표", "Our goal"),
        items: [
          L("Đối tác phân phối độc quyền của Pebble Square", "Pebble Square 독점 총판 파트너", "Pebble Square's exclusive distribution partner"),
          L("Công ty giải pháp Edge-AI cho Đông Nam Á", "동남아를 위한 엣지 AI 솔루션 기업", "An Edge-AI solutions company for Southeast Asia"),
        ],
      },
    },
    bullets: {
      vi: ["Đặt mục tiêu — và làm cho nó thành hiện thực, từng bước một."],
      ko: ["목표를 세우고, 한 걸음씩 현실로 만듭니다."],
      en: ["We set the goal — and make it real, step by step."],
    },
    need: ["GM chốt mức nói 'độc quyền' trên sân khấu", "Native proofread KO/EN"],
    notes: "ĐỊNH VỊ HAI THÌ (chốt 2026-06-15): cột 'Hôm nay' = cái chứng minh được; cột 'Mục tiêu' (gold) = đích earned. CHƯA ký HĐ với PS → 'độc quyền' nằm ở cột MỤC TIÊU, không phải hiện trạng (CEO PS ngồi dưới). Motif = lời GM, sợi chỉ xuyên deck.",
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

  // ===== 04 · CỘNG SINH — KHÔNG PHẢI MUA–BÁN (khóa lợi ích hai bên; đỡ rủi ro 'chưa ký HĐ') · figure: twocol cho/được =====
  {
    n: 4, file: "04-cong-sinh.md", nhip: 2, owner: "GM", status: "drafting", tech: "non", gatDau: "CEO Pebble Square + Nhà đầu tư",
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
    notes: "FIGURE ĐỔI twocol→flow (2026-06-15, GM: slide cũ 'nhiều thứ, chưa rõ thông điệp'): hero = VÒNG LẶP cộng sinh — đó mới là cái phân biệt cộng sinh ≠ mua-bán (deal phân phối nào cũng 'mỗi bên có cái bên kia cần', nhưng chỉ cộng sinh mới có vòng khóa chặt theo thời gian). Give/get dời xuống lời thoại, KHÔNG bày lên slide. Mức 'độc quyền' = MỀM CÔNG KHAI: nói 'đối tác phân phối', để 'độc quyền' cho gặp riêng. Không over-claim cam kết PS chưa có HĐ. VN = PoC mô hình lập pháp nhân địa phương (Tokyo 2025). Motif cây cầu trả ở slide 07.",
    why: "Sau honor nền tảng (03), định nghĩa BẢN CHẤT quan hệ = cộng sinh. THÔNG ĐIỆP = vòng lặp khóa lợi ích hai bên → đỡ rủi ro 'chưa ký HĐ' (quan hệ thật chứng minh bằng vòng lặp, không bằng tờ giấy). Chạm CEO + nhà đầu tư. Nguồn: dinh-vi §2; parent §mô hình mở rộng; 06-cong-sinh (archive).",
  },

  // ===== 05 · MENU NỀN TẢNG — MỘT NỀN TẢNG, NHIỀU BÀI TOÁN VN (beachhead sống ở đây) · figure: forces =====
  {
    n: 5, file: "05-menu-nen-tang.md", nhip: 3, owner: "GM", status: "drafting", tech: "nhẹ", gatDau: "Cả phòng (khách có nhà máy)",
    eyebrow: L("Ứng dụng · Bài toán Việt Nam", "응용 · 베트남의 과제", "Applications · Vietnam's problems"),
    title: L("Một nền tảng, nhiều bài toán", "하나의 플랫폼, 여러 과제", "One platform, many problems"),
    headline: L(
      "Một nền tảng Edge-AI — nhiều bài toán Việt Nam giải được. Pebble Vina bắt đầu từ bài toán cấp thiết nhất: an toàn & sức khỏe thiết bị trong nhà máy.",
      "하나의 엣지 AI 플랫폼으로 베트남의 여러 과제를 풀 수 있습니다. Pebble Vina는 가장 시급한 과제 — 공장 설비의 안전과 상태 관리 — 부터 시작합니다.",
      "One Edge-AI platform, many Vietnamese problems it can solve. Pebble Vina starts with the most urgent: the safety & health of factory equipment.",
    ),
    figure: {
      kind: "forces",
      items: [
        {
          label: L("An toàn điện & năng lượng", "전기 안전 & 에너지", "Electrical safety & energy"),
          sub: L("Giám sát hồ quang/arc-fault · điện mặt trời · tủ điện", "아크 결함 감지 · 태양광 · 배전반", "Arc-fault monitoring · solar · switchboards"),
        },
        {
          label: L("Sản xuất & bảo trì dự đoán", "제조 & 예지보전", "Manufacturing & predictive maintenance"),
          sub: L("Anomaly · Failure Analysis (năng lực lõi Pebble Square)", "이상 탐지 · Failure Analysis (Pebble Square 핵심 역량)", "Anomaly · Failure Analysis (Pebble Square's core capability)"),
        },
        {
          label: L("Giọng nói · IoT · an ninh dân dụng", "음성 · IoT · 생활 보안", "Voice · IoT · home security"),
          sub: L("Sound · Security On-Device (Pebble Square đã PoC)", "Sound · Security 온디바이스 (Pebble Square PoC 보유)", "Sound · Security On-Device (Pebble Square has PoCs)"),
        },
      ],
    },
    bullets: {
      vi: ["Cờ đầu: an toàn & sức khỏe thiết bị cho nhà máy (qua mạng KOCHAM) — arc-fault là mũi nhọn kéo quy định, bảo trì dự đoán là lõi khớp năng lực Pebble Square."],
      ko: ["선봉: 공장 설비의 안전과 상태 관리 (KOCHAM 네트워크 경유) — 아크 결함은 규제를 끄는 창끝, 예지보전은 Pebble Square 역량과 맞닿는 핵심."],
      en: ["Spearhead: safety & health of factory equipment (via KOCHAM) — arc-fault is the regulatory tip, predictive maintenance is the core matching Pebble Square's strength."],
    },
    need: ["GM CHỐT beachhead (đang mặc định 'an toàn & sức khỏe thiết bị nhà máy')", "legal đọc TCVN 7447-7-712 + QCVN 01:2020/BCT (có/không AFCI)", "Native proofread KO/EN"],
    notes: "Beachhead = ĐỀ XUẤT research (ô dù an toàn+sức khỏe thiết bị; arc-fault cờ đầu + PdM lõi) — GM CHỐT. LẰN RANH: (1) arc-fault = ứng dụng PV khởi xướng, KHÔNG gán PS; ô ❷❸ mới là vertical PS tự claim; (2) KHÔNG nói 'luật VN bắt buộc arc-fault' (chuẩn VN chưa có); (3) KHÔNG trình arc-fault như 'phát minh' — Huawei/Solis/SolarEdge đã có, khác biệt = on-device + Analog-PIM siêu tiết kiệm điện.",
    why: "Cầu nối bề rộng nền tảng (03) ↔ lộ trình (06): biến 'đa năng' thành bài toán VN cụ thể; nơi beachhead sống (không khóa toàn deck vào arc-fault). Hiện thực hóa 'chọn đúng bài toán VN cần nhất' (slide 02). Nguồn: _research-pebble-square-services (Mục 1–2,4); _research-proof (chuẩn arc-fault); 07-dich-den (archive).",
  },

  // ===== 06 · LỘ TRÌNH 3 CHÂN TRỜI — hiện thực hóa cột 'Mục tiêu' slide 02 · figure: flow =====
  {
    n: 6, file: "06-lo-trinh.md", nhip: 4, owner: "GM", status: "drafting", tech: "non", gatDau: "Nhà đầu tư + CEO Pebble Square",
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

  // ===== 07 · LỜI MỜI + CẢM ƠN — bookend, đóng vòng motif 'viên gạch/cây cầu' · figure: bridge =====
  {
    n: 7, file: "07-loi-moi.md", nhip: 5, owner: "growth", status: "drafting", tech: "non", gatDau: "Cả phòng",
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
    notes: "Bookend đóng vòng: motif slide 02 (viên gạch/cây cầu) + figure bridge slide 04 + slogan bìa. Ask MỀM trên sân khấu (mời đồng hành); ask CỨNG để gặp riêng — investor (vốn+KOCHAM), CEO (độc quyền/IP/MDF/co-brand), khách (pilot). KHÔNG biến slide kết thành bảng giá. Giữ 'công ty giải pháp'+'độc quyền' ở thì MỤC TIÊU (CEO PS ngồi dưới).",
    why: "Tri giác đóng vòng (bookend slide 02) + The Ask phân tầng. Ask mềm vì thể loại ra mắt, phòng hỗn hợp → ask cứng để gặp riêng. Nguồn: 10-keu-goi-cam-on (archive); slide 02 (bookend); README §5.",
  },
];

/** Các slide nằm trong luồng trình chiếu chính (bỏ phụ lục). */
export const DECK = SLIDES.filter((s) => !s.appendix);
/** Tra cứu nhanh slide phụ lục đầu tiên (mở bằng phím "a"). */
export const APPENDIX = SLIDES.filter((s) => s.appendix);
