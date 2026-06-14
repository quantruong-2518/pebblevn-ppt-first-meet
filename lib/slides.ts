// NGUỒN DỮ LIỆU slide — nội dung hiển thị cho khán giả (eyebrow/title/headline/bullets/figure).
//
// Tam ngữ: tiếng Việt là gốc; KO trang trọng (존댓말); EN chỉ cho khái niệm/thuật ngữ chuẩn.
// Mỗi slide chỉ chứa lớp trình chiếu — không có ghi chú nội bộ.

export type Lang = "vi" | "ko" | "en";
export const LANGS: Lang[] = ["vi", "ko", "en"];
export const LANG_LABEL: Record<Lang, string> = { vi: "VI", ko: "KO", en: "EN" };

/** Văn bản đa ngữ. */
export type LText = Record<Lang, string>;
/** Danh sách bullet đa ngữ. */
export type LList = Record<Lang, string[]>;

/** Khung hình — biến điệu thị giác để bài không phải 11 slide cùng khuôn. */
export type Figure =
  | { kind: "forces"; items: { label: LText; sub: LText }[] }
  | { kind: "flow"; steps: { label: LText; sub?: LText }[]; foot: LText }
  | { kind: "twocol"; left: { head: LText; items: LText[] }; right: { head: LText; items: LText[] } }
  | { kind: "bridge"; nodes: LText[]; foot: LText }
  | { kind: "stat"; value: LText; caption: LText; source?: LText };


export type SlideData = {
  n: number | string;
  nhip: number | string;
  cover?: boolean;
  appendix?: boolean; // true = KHÔNG nằm trong luồng chính (mở bằng phím "a")
  cobrand?: boolean;
  eyebrow: LText;
  title: LText;
  headline?: LText;
  bullets?: LList;
  figure?: Figure;
  event?: LText; // chỉ bìa
};

// Tiện ích nhỏ: gói 3 ngôn ngữ.
const L = (vi: string, ko: string, en: string): LText => ({ vi, ko, en });

export const SLIDES: SlideData[] = [
  // ===== 00 · BÌA =====
  {
    n: 0, nhip: "—",
    cover: true, cobrand: true,
    eyebrow: L("Pebble Vina × Pebble Square", "Pebble Vina × Pebble Square", "Pebble Vina × Pebble Square"),
    title: L("Pebble Vina", "Pebble Vina", "Pebble Vina"),
    headline: L(
      "Công nghệ Hàn cho an toàn điện Việt — phát hiện sớm, ngay tại chỗ.",
      "한국의 기술로 베트남 전기 안전을 — 현장에서 더 빠르게 감지합니다.",
      "Korean technology for Vietnam's electrical safety — detect early, right at the edge.",
    ),
    event: L("Lễ ra mắt — 19 tháng 6, 2026", "런칭 행사 — 2026년 6월 19일", "Launch event — June 19, 2026"),
  },

  // ===== 01 · ĐỊNH VỊ + CHÀO (bookend với 09) =====
  {
    n: 1, nhip: 0,
    eyebrow: L("Pebble Vina là ai", "페블 비나는", "Who we are"),
    title: L("Một câu về chúng tôi", "한 문장으로", "In one sentence"),
    headline: L(
      "Đối tác chính hãng đưa giải pháp an toàn điện / Edge AI công nghệ Hàn (PIM) vào vận hành thật tại Việt Nam.",
      "한국의 PIM 엣지 AI 전기 안전 솔루션을 베트남 현장에 실제로 도입하는 공식 파트너입니다.",
      "The official partner bringing Korean PIM Edge-AI electrical-safety solutions into real operation in Vietnam.",
    ),
    bullets: {
      vi: ["An toàn điện", "Công nghệ Hàn (PIM)", "Có người Việt lo"],
      ko: ["전기 안전", "한국 기술 (PIM)", "베트남 현지 지원"],
      en: ["Electrical safety", "Korean tech (PIM)", "A local team in Vietnam"],
    },
  },

  // ===== 02 · NỖI ĐAU =====
  {
    n: 2, nhip: 1,
    eyebrow: L("Vấn đề", "문제", "The problem"),
    title: L("Cháy do hồ quang & ngừng máy", "아크 결함 화재와 가동 중단", "Arc-fault fire & downtime"),
    headline: L(
      "Điện mặt trời Việt Nam bùng nổ — kéo theo rủi ro cháy do hồ quang và ngừng phát điện. Một sự cố = dừng sản xuất, mất tài sản, mất uy tín.",
      "베트남 태양광은 급성장했고, 그만큼 아크 결함 화재와 발전 중단 위험도 커졌습니다. 한 번의 사고가 생산 중단·자산 손실·신뢰 손상으로 이어집니다.",
      "Vietnam's solar boom brings arc-fault fire and outage risk. One incident means halted production, lost assets, lost trust.",
    ),
    figure: {
      kind: "stat",
      value: L("38%", "38%", "38%"),
      caption: L(
        "vụ cháy điện mặt trời đến từ lỗi lắp đặt / đấu nối — và hồ quang điện một chiều là nguyên nhân hàng đầu",
        "태양광 화재가 시공·결선 불량에서 비롯되며, DC 아크 결함이 가장 큰 원인입니다",
        "of PV fires trace to installation / wiring faults — and DC arc-faults are the leading cause",
      ),
      source: L("Khảo sát 210 vụ · TÜV Rheinland + Fraunhofer ISE", "210건 조사 · TÜV Rheinland + Fraunhofer ISE", "210-case study · TÜV Rheinland + Fraunhofer ISE"),
    },
    bullets: {
      vi: [
        "Hiếm nhưng hậu quả lớn: một vụ cháy = mất tài sản, dừng chuyền, gián đoạn doanh thu",
        "Điều khách cần: đừng để cháy, đừng dừng máy, đừng trượt kiểm định",
      ],
      ko: [
        "드물지만 치명적: 한 번의 화재 = 자산 손실 · 라인 정지 · 매출 중단",
        "고객이 원하는 것: 화재 없이, 멈춤 없이, 검사 통과",
      ],
      en: [
        "Rare but catastrophic: one fire = lost assets, halted line, lost revenue",
        "What customers need: no fire, no downtime, pass inspection",
      ],
    },
  },

  // ===== 03 · VÌ SAO BÂY GIỜ (figure: 3 lực hội tụ) =====
  {
    n: 3, nhip: 2,
    eyebrow: L("Thời điểm", "시점", "Why now"),
    title: L("Vì sao bây giờ", "왜 지금인가", "Why now"),
    headline: L(
      "Ba lực vừa hội tụ cùng lúc — cửa sổ đang mở.",
      "세 가지 흐름이 지금 동시에 만났습니다 — 기회의 창이 열려 있습니다.",
      "Three forces are converging at once — the window is open.",
    ),
    figure: {
      kind: "forces",
      items: [
        {
          label: L("Quy định an toàn vào cuộc", "안전 규제 본격화", "Safety regulation arrives"),
          sub: L("TCVN 7447-7-712:2019 · QCVN 01:2020/BCT", "TCVN 7447-7-712:2019 · QCVN 01:2020/BCT", "TCVN 7447-7-712:2019 · QCVN 01:2020/BCT"),
        },
        {
          label: L("Làn sóng PV đủ tuổi → rủi ro hiện ra", "태양광 노후화 → 위험 표면화", "Aging PV fleet → risk surfaces"),
          sub: L("9,58 GW · ~102.000 hệ mái nhà (2021) — nay đã 5–6 tuổi", "9.58 GW · 약 102,000개 옥상 시스템 (2021) — 5~6년 차", "9.58 GW · ~102,000 rooftop systems (2021) — now 5–6 yrs old"),
        },
        {
          label: L("Doanh nghiệp Hàn tại VN dày lên", "베트남 내 한국 기업 밀집", "Korean firms cluster in Vietnam"),
          sub: L("~10.000 DN Hàn · FDI Hàn >92 tỷ USD (#1 tại VN)", "한국 기업 ~10,000개 · 한국 FDI 920억$+ (1위)", "~10,000 Korean firms · Korean FDI >$92bn (#1)"),
        },
      ],
    },
  },

  // ===== 04 · GIẢI PHÁP + BẰNG CHỨNG (figure: flow) — SLIDE TỐI QUAN TRỌNG =====
  {
    n: 4, nhip: 3,
    eyebrow: L("Giải pháp + bằng chứng", "솔루션 + 근거", "Solution + proof"),
    title: L("Nó hoạt động — và đây là bằng chứng", "작동합니다 — 그 근거입니다", "It works — and here is the proof"),
    headline: L(
      "Phát hiện sự cố hồ quang ngay tại thiết bị — công suất thấp, độ trễ thấp, không cần cloud — trên chip Analog-PIM của Pebble Square.",
      "페블스퀘어 아날로그-PIM 칩으로 아크 결함을 기기에서 직접 감지합니다 — 저전력, 저지연, 클라우드 불필요.",
      "Detect arc-faults right on the device — low power, low latency, no cloud — on Pebble Square's Analog-PIM chip.",
    ),
    figure: {
      kind: "flow",
      steps: [
        { label: L("Cảm biến", "센서", "Sensor"), sub: L("dòng / hồ quang", "전류 / 아크", "current / arc") },
        { label: L("Chip PIM", "PIM 칩", "PIM chip"), sub: L("tại tủ điện / inverter", "배전반 / 인버터 내", "in the panel / inverter") },
        { label: L("Cảnh báo sớm", "조기 경보", "Early alert"), sub: L("trước khi thành cháy", "화재 이전에", "before it becomes a fire") },
      ],
      foot: L("Xử lý on-device · không gửi dữ liệu lên cloud", "온디바이스 처리 · 클라우드 전송 없음", "On-device · no data sent to the cloud"),
    },
    bullets: {
      vi: [
        "Nền tảng thật: chip MINT của Pebble Square — 17,6 TOPS/W, Analog-PIM (đo được)",
        "Bài toán có chuẩn rõ ràng: arc-fault PV theo UL 1699B / IEC 63027",
      ],
      ko: [
        "검증된 기반: 페블스퀘어 MINT 칩 — 17.6 TOPS/W, 아날로그-PIM (실측)",
        "명확한 표준: PV 아크 결함 UL 1699B / IEC 63027",
      ],
      en: [
        "Real foundation: Pebble Square MINT — 17.6 TOPS/W, Analog-PIM (measured)",
        "Well-defined problem: PV arc-fault per UL 1699B / IEC 63027",
      ],
    },
  },

  // ===== 05 · VÌ SAO LÀ TA =====
  {
    n: 5, nhip: 4,
    eyebrow: L("Vì sao là chúng tôi", "왜 우리인가", "Why us"),
    title: L("Pebble Vina làm được", "페블 비나는 해냅니다", "Pebble Vina can deliver"),
    headline: L(
      "Công nghệ Hàn cần một đối tác mạnh ở thị trường Việt — độc quyền phân phối, mạng lưới KOCHAM, và năng lực bản địa mà Seoul không cung cấp được.",
      "한국의 기술에는 베트남 시장 역량을 갖춘 파트너가 필요합니다 — 독점 총판, KOCHAM 네트워크, 그리고 서울이 제공할 수 없는 현지 역량.",
      "Korean technology needs a partner with Vietnam market capability — exclusive distribution, the KOCHAM network, and local capacity Seoul cannot provide.",
    ),
    bullets: {
      vi: [
        "Quyền phân phối độc quyền tại Việt Nam (→ Đông Nam Á)",
        "Mạng lưới KOCHAM — cộng đồng doanh nghiệp Hàn tại VN (bác Kim, Phó Chủ tịch)",
        "Năng lực bản địa: FAE · tuân thủ TCVN/QCVN · bảo hành tại chỗ",
        "Mỗi pilot thành một case study — lợi thế tự dày lên",
      ],
      ko: [
        "베트남 독점 총판 권리 (→ 동남아)",
        "KOCHAM 네트워크 — 베트남 내 한국 기업 커뮤니티 (김 부회장)",
        "현지 역량: FAE · TCVN/QCVN 준수 · 현장 보증",
        "파일럿마다 사례가 되어 — 우위가 스스로 두터워집니다",
      ],
      en: [
        "Exclusive distribution rights in Vietnam (→ Southeast Asia)",
        "The KOCHAM network — Korean business community in Vietnam (Vice Chairman Kim)",
        "Local capacity: FAE · TCVN/QCVN compliance · on-site warranty",
        "Each pilot becomes a case study — the advantage compounds",
      ],
    },
  },

  // ===== 06 · LỢI NHUẬN KÉP (figure: 2 cột) =====
  {
    n: 6, nhip: 5,
    eyebrow: L("Lợi nhuận kép", "이중 수익", "Profit on both sides"),
    title: L("Sinh lợi hai phía", "양쪽 모두에 이익", "Value for both sides"),
    headline: L(
      "Một giao dịch, hai phía cùng thắng: khách giảm rủi ro & chi phí, Pebble Vina có biên phân phối & dịch vụ.",
      "한 거래로 양쪽이 모두 이깁니다: 고객은 위험과 비용을 줄이고, 페블 비나는 총판 마진과 서비스 수익을 얻습니다.",
      "One deal, two winners: customers cut risk and cost, Pebble Vina earns distribution margin and services.",
    ),
    figure: {
      kind: "twocol",
      left: {
        head: L("Cho KHÁCH", "고객에게", "For the CUSTOMER"),
        items: [
          L("Tránh tổn thất do cháy & sự cố", "화재·사고 손실 방지", "Avoided fire & incident losses"),
          L("Giảm ngừng máy → giữ sản lượng", "가동 중단 감소 → 발전량 유지", "Less downtime → kept output"),
          L("Đạt tuân thủ, kéo dài tuổi thọ tài sản", "규제 준수, 자산 수명 연장", "Compliance, longer asset life"),
        ],
      },
      right: {
        head: L("Cho PEBBLE VINA", "페블 비나에게", "For PEBBLE VINA"),
        items: [
          L("Biên phân phối độc quyền", "독점 총판 마진", "Exclusive distribution margin"),
          L("Doanh thu dịch vụ tích hợp & hỗ trợ", "통합·지원 서비스 매출", "Integration & support revenue"),
          L("Hợp đồng O&M lặp lại", "반복 O&M 계약", "Recurring O&M contracts"),
        ],
      },
    },
  },

  // ===== 07 · ĐÍCH ĐẾN (figure: cây cầu Hàn→Việt→ĐNÁ) =====
  {
    n: 7, nhip: 6,
    eyebrow: L("Tầm nhìn", "비전", "Where we go"),
    title: L("Chúng ta đi tới đâu", "우리가 향하는 곳", "Where we go"),
    headline: L(
      "Từ an toàn điện mặt trời, dựng cây cầu Edge-AI Hàn → Việt → Đông Nam Á — và lớn lên từ nhà phân phối thành công ty giải pháp.",
      "태양광 안전에서 출발해, 한국 → 베트남 → 동남아를 잇는 엣지 AI 다리를 놓고 — 총판에서 솔루션 기업으로 성장합니다.",
      "From solar safety, we build an Edge-AI bridge Korea → Vietnam → Southeast Asia — growing from distributor to solutions company.",
    ),
    figure: {
      kind: "bridge",
      nodes: [L("Hàn Quốc", "한국", "Korea"), L("Việt Nam", "베트남", "Vietnam"), L("Đông Nam Á", "동남아", "SE Asia")],
      foot: L("Mandate độc quyền VN → ĐNÁ · neo vào cứ điểm đã chứng minh", "VN → 동남아 독점 권한 · 검증된 거점에 기반", "Exclusive mandate VN → SEA · anchored on a proven beachhead"),
    },
    bullets: {
      vi: [
        "Địa lý: VN → ĐNÁ — thị trường PV ~38→93 GW (2025–2030, ước tính)",
        "Sản phẩm: arc-fault → các dòng Pebble khác",
        "Vai trò: nhà phân phối → công ty giải pháp",
      ],
      ko: [
        "지역: 베트남 → 동남아 — 태양광 시장 ~38→93 GW (2025–2030, 추정)",
        "제품: 아크 결함 → 페블의 다른 라인업",
        "역할: 총판 → 솔루션 기업",
      ],
      en: [
        "Geography: VN → SE Asia — PV market ~38→93 GW (2025–2030, est.)",
        "Product: arc-fault → other Pebble lines",
        "Role: distributor → solutions company",
      ],
    },
  },

  // ===== 08 · RỦI RO & HÓA GIẢI =====
  {
    n: 8, nhip: 7,
    eyebrow: L("Rủi ro", "리스크", "Risk"),
    title: L("Nhìn thẳng & cách hóa giải", "정면으로 보고, 대응합니다", "We face it, and we have answers"),
    headline: L(
      "Chúng tôi nhìn thẳng vào rủi ro thị trường & thực thi — và đã có cách phòng.",
      "시장과 실행의 리스크를 정면으로 보고, 대비책을 갖추었습니다.",
      "We look market and execution risk in the eye — and we are prepared.",
    ),
    bullets: {
      vi: [
        "Đối thủ bản địa hóa → ta bán kết quả + hỗ trợ + tuân thủ (khó sao chép)",
        "Quy định thực thi còn yếu → tập đoàn Hàn ép chuẩn nội bộ (không chờ luật)",
        "Tuyển FAE → lộ trình đội hình + đào tạo từ Pebble Square",
      ],
      ko: [
        "경쟁사의 현지화 → 우리는 결과 + 지원 + 준수를 판매 (모방 어려움)",
        "규제 집행 미흡 → 한국 대기업의 내부 기준이 견인 (법을 기다리지 않음)",
        "FAE 채용 → 인력 로드맵 + 페블스퀘어 교육",
      ],
      en: [
        "Competitor localization → we sell outcomes + support + compliance (hard to copy)",
        "Weak enforcement → Korean groups enforce internal standards (no need to wait for law)",
        "FAE hiring → staffing roadmap + training from Pebble Square",
      ],
    },
  },

  // ===== 09 · LỜI KÊU GỌI + CẢM ƠN (bookend với 01) =====
  {
    n: 9, nhip: 8,
    cobrand: true,
    eyebrow: L("Lời mời", "초대", "The invitation"),
    title: L("Cùng dựng cây cầu", "함께 다리를 놓읍시다", "Let's build the bridge"),
    headline: L(
      "Công nghệ Hàn cho an toàn điện Việt — phát hiện sớm, ngay tại chỗ. Cùng dựng cây cầu Edge-AI Hàn → Việt → Đông Nam Á.",
      "한국의 기술로 베트남 전기 안전을 — 현장에서 더 빠르게. 한국 → 베트남 → 동남아 엣지 AI 다리를 함께 놓읍시다.",
      "Korean technology for Vietnam's electrical safety — early, at the edge. Let's build the Edge-AI bridge Korea → Vietnam → SE Asia.",
    ),
    bullets: {
      vi: [
        "Pebble Vina — đưa công nghệ Hàn vào vận hành thật tại Việt Nam",
        "Lời mời chung: cùng dựng cây cầu Edge-AI Hàn → Việt → Đông Nam Á",
        "Xin cảm ơn — và mong được đồng hành",
      ],
      ko: [
        "페블 비나 — 한국의 기술을 베트남 현장에 실제로",
        "함께하자는 초대: 한국 → 베트남 → 동남아 엣지 AI 다리",
        "감사합니다 — 함께하길 바랍니다",
      ],
      en: [
        "Pebble Vina — Korean technology in real operation in Vietnam",
        "A shared invitation: build the Edge-AI bridge Korea → Vietnam → SE Asia",
        "Thank you — we hope to walk this road together",
      ],
    },
  },

  // ===== 99 · PHỤ LỤC (appendix — KHÔNG nằm trong luồng chính) =====
  {
    n: 99, nhip: "phụ lục",
    appendix: true,
    eyebrow: L("Phụ lục — depth-on-demand", "부록 — 요청 시 심화", "Appendix — depth on demand"),
    title: L("Chi tiết kỹ thuật", "기술 상세", "Technical detail"),
    headline: L(
      "Không trình mặc định — chỉ mở khi được hỏi, hoặc in handout. Thỏa người có tech mà không loãng luồng chính.",
      "기본 발표 제외 — 질문이 있을 때만 또는 핸드아웃. 기술 청중을 만족시키되 본 흐름은 흐리지 않습니다.",
      "Not shown by default — opened on request, or printed as a handout.",
    ),
    bullets: {
      vi: [
        "Nguyên lý Analog-PIM & hiệu năng MINT: ~4M khớp · ~30 GOPS · 17,6 TOPS/W",
        "So sánh lớp công nghệ PIM vs MCU/edge-GPU (nguồn học thuật)",
        "Chuẩn arc-fault: UL 1699B · IEC 63027 · TCVN 11855-1:2017 · QCVN 01:2020/BCT",
        "Reference design lắp tủ điện/inverter; gốc học thuật JBNU/KAIST",
      ],
      ko: [
        "아날로그-PIM 원리 & MINT 성능: ~4M 시냅스 · ~30 GOPS · 17.6 TOPS/W",
        "PIM vs MCU/edge-GPU 기술 계층 비교 (학술 출처)",
        "아크 결함 표준: UL 1699B · IEC 63027 · TCVN 11855-1:2017 · QCVN 01:2020/BCT",
        "배전반/인버터 레퍼런스 디자인; JBNU/KAIST 학술 기반",
      ],
      en: [
        "Analog-PIM principle & MINT performance: ~4M synapses · ~30 GOPS · 17.6 TOPS/W",
        "PIM vs MCU/edge-GPU technology-layer comparison (academic sources)",
        "Arc-fault standards: UL 1699B · IEC 63027 · TCVN 11855-1:2017 · QCVN 01:2020/BCT",
        "Reference design for panel/inverter; JBNU/KAIST academic roots",
      ],
    },
  },
];

/** Các slide nằm trong luồng trình chiếu chính (bỏ phụ lục). */
export const DECK = SLIDES.filter((s) => !s.appendix);
/** Tra cứu nhanh slide phụ lục đầu tiên (mở bằng phím "a"). */
export const APPENDIX = SLIDES.filter((s) => s.appendix);
