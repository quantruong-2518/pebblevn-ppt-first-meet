// NGUỒN DỮ LIỆU slide (meta + nội dung) — mirror từ ../slides/*.md.
//
// HAI TẦNG TÁCH BẠCH (đừng trộn — đây là lỗi gốc của bản cũ):
//   • TẦNG SHOW   = eyebrow/title/headline/bullets/figure  → HIỂN THỊ cho khán giả. Tam ngữ {vi,ko,en}.
//   • WORKING-DOC = why/notes/need + meta (owner/status/…)  → CHỈ panel meta (phím "m"). Tiếng Việt nội bộ.
// need/why/notes KHÔNG bao giờ render lên slide.
//
// Tam ngữ: tiếng Việt là gốc; KO trang trọng (존댓말); EN chỉ cho khái niệm/thuật ngữ chuẩn.
// Khi nội dung chốt ở file MD, cập nhật ở đây cho khớp (xem README §9).

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
  // ===== 00 · BÌA =====
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
    notes: "Bìa: hero 3D 'die' Analog-PIM (đúng sản phẩm gốc). Slogan brand-level (não Hàn + tim Việt), KHÔNG khóa vào arc-fault vì chip Pebble Square làm nhiều hơn. Đã gỡ lặp tên thương hiệu: 'Pebble Vina' chỉ ở tiêu đề, 'Pebble Square' chỉ ở dòng co-brand. Slogan chờ GM duyệt; KO/EN cần native proofread.",
    why: "Bìa — vay uy tín Hàn (Hướng C) qua slogan 'não Hàn, tim Việt' + die 3D. Co-brand gọn 1 dòng. Nguồn: ADR 0001; khung luận §1 (NT3 honor).",
  },

  // ===== 01 · ĐỊNH VỊ + CHÀO (bookend với 09) =====
  {
    n: 1, file: "01-dinh-vi-chao.md", nhip: 0, owner: "growth + GM", status: "skeleton", tech: "non", gatDau: "Cả phòng",
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
    notes: "Chào & cảm ơn đúng thứ bậc: bác Kim, CEO Pebble Square (GS Bae Hak-yeol), quan khách. Đọc câu định vị — gieo mental model chung.",
    why: "Luận cứ: Tri giác. Nhịp 0. Vai trò BOOKEND (lặp ở slide 09). Honor = chất chịu lực. Nguồn: dinh-vi §1,§3.",
  },

  // ===== 02 · NỖI ĐAU =====
  {
    n: 2, file: "02-noi-dau.md", nhip: 1, owner: "growth", status: "skeleton", tech: "non", gatDau: "Cả phòng",
    eyebrow: L("Vấn đề", "문제", "The problem"),
    title: L("Cháy do hồ quang & ngừng máy", "아크 결함 화재와 가동 중단", "Arc-fault fire & downtime"),
    headline: L(
      "Điện mặt trời Việt Nam bùng nổ — kèm rủi ro cháy do hồ quang và ngừng phát. Một sự cố = dừng sản xuất, mất tài sản, mất uy tín.",
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
    need: ["legal-counsel đọc bản gốc TCVN/QCVN (gỡ giả định A2)"],
    notes: "Dẫn bằng VẤN ĐỀ KINH DOANH, chưa nhắc chip. Khung 'đuôi rủi ro hậu quả cao' (hiếm nhưng mất nhà máy), nguyên nhân #1 = hồ quang DC. KHÔNG nêu 'thiệt hại trung bình 1 vụ cháy' (không có số tin cậy). KHÔNG over-claim 'đảm bảo không cháy'. Số quốc tế (chưa có thống kê cháy PV riêng VN).",
    why: "Luận cứ: Nhu cầu. Nhịp 1. 'Bán kết quả không bán chip'. Nguồn: 2026-06-09 §3; dinh-vi §6.",
  },

  // ===== 03 · VÌ SAO BÂY GIỜ (figure: 3 lực hội tụ) =====
  {
    n: 3, file: "03-vi-sao-bay-gio.md", nhip: 2, owner: "analyst", status: "skeleton", tech: "nhẹ", gatDau: "Investor, quan khách",
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
    need: ["legal-counsel: TCVN/QCVN có bắt buộc AFCI/hồ quang không? (giả định A2)"],
    notes: "Khung 'why now' — điều gì VỪA thay đổi. Ghi '~10.000 DN Hàn' KHÔNG ghi '10.000 hội viên KOCHAM' (số đó chưa kiểm chứng). KHÔNG tuyên bố 'luật VN bắt buộc chống hồ quang' — chưa kiểm chứng điều khoản gốc. Số PV/FDI: EVN/MOIT, Báo Chính phủ 2024–2025. 'Cửa sổ phai' để trong notes, KHÔNG lên sân khấu.",
    why: "Luận cứ: Thế–thời. Nhịp 2. Phương pháp 'Why now' + chất xúc tác. Nguồn: 2026-06-09 §1; khung chiến lược §4.",
  },

  // ===== 04 · GIẢI PHÁP + BẰNG CHỨNG (figure: flow) — SLIDE TỐI QUAN TRỌNG =====
  {
    n: 4, file: "04-giai-phap-bang-chung.md", nhip: 3, owner: "product-lead", status: "skeleton", tech: "1 điểm tech", gatDau: "CEO Pebble Square",
    eyebrow: L("Giải pháp + bằng chứng", "솔루션 + 근거", "Solution + proof"),
    title: L("Nó hoạt động — và đây là bằng chứng", "작동합니다 — 그 근거입니다", "It works — and here is the proof"),
    headline: L(
      "Phát hiện sự cố hồ quang ngay tại thiết bị — điện thấp, độ trễ thấp, không cần cloud — trên chip Analog-PIM của Pebble Square.",
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
    need: ["Email Pebble Square: PoC/benchmark arc-fault + quyền trích dẫn", "Xác nhận CEO (Bae/Lee) + có bài PIM-anomaly thật (DOI) không?"],
    notes: "Khung 3 LỚP TÁCH BẠCH (không ghép): (1) nguyên lý PIM tiết kiệm điện [học thuật] + (2) chip MINT thật, 17,6 TOPS/W [để CEO Pebble Square tự nói] + (3) arc-fault có chuẩn UL 1699B/IEC 63027. ⚠️ KHÔNG nói 'MINT đã benchmark arc-fault vs ST/TI' (không có số công khai). ⚠️ KHÔNG trích 'MDPI 2024' — bài đó KHÔNG tồn tại. Mời CEO nói 1–2 phút.",
    why: "Luận cứ: BẰNG CHỨNG GIẢI PHÁP — cầu nối 'họ cần'→'ta giải được'. Nhịp 3. Slide tối quan trọng: thiếu = hụt lý-do-tin.",
  },

  // ===== 05 · VÌ SAO LÀ TA =====
  {
    n: 5, file: "05-vi-sao-la-ta.md", nhip: 4, owner: "growth + GM", status: "skeleton", tech: "non", gatDau: "Bác Kim / KOCHAM",
    eyebrow: L("Vì sao là chúng tôi", "왜 우리인가", "Why us"),
    title: L("Pebble Vina làm được", "페블 비나는 해냅니다", "Pebble Vina can deliver"),
    headline: L(
      "Công nghệ Hàn cần một đối tác có năng lực thị trường Việt — độc quyền phân phối, mạng lưới KOCHAM, và năng lực bản địa mà Seoul không cung cấp được.",
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
    need: ["Trạng thái độc quyền HĐ (legal)", "Năng lực FAE thực tế (operations)"],
    notes: "Vinh danh bác Kim & KOCHAM (gật đầu investor). Chạm CEO: 'PV là cánh tay Việt/ĐNÁ Seoul không tự dựng'. Nói đúng vai.",
    why: "Luận cứ: Thế + Người. Nhịp 4. 7 Powers: Cornered Resource + Counter-Positioning. Nguồn: 2026-06-09 §5; khung chiến lược §4–5.",
  },

  // ===== 06 · LỢI NHUẬN KÉP (figure: 2 cột) =====
  {
    n: 6, file: "06-loi-nhuan-kep.md", nhip: 5, owner: "cfo", status: "skeleton", tech: "non", gatDau: "Investor",
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
    need: ["Mô hình ROI-khách (cfo)", "Giá nhập từ HĐ → biên (cfo + legal)"],
    notes: "Ngôn ngữ TIỀN & RỦI RO, không thuật ngữ. Không bịa số — chưa có giá nhập thì trình định tính, ghi 'ước tính'.",
    why: "Luận cứ: Nhu cầu (ROI cho HỌ) + trục Tài chính (biên cho TA). Nhịp 5. Plan cần CẢ HAI. Nguồn: khung chiến lược §2.",
  },

  // ===== 07 · ĐÍCH ĐẾN (figure: cây cầu Hàn→Việt→ĐNÁ) =====
  {
    n: 7, file: "07-dich-den.md", nhip: 6, owner: "GM + analyst", status: "skeleton", tech: "non", gatDau: "Investor + CEO",
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
      foot: L("Mandate độc quyền VN → ĐNÁ · neo vào beachhead đã chứng minh", "VN → 동남아 독점 권한 · 검증된 거점에 기반", "Exclusive mandate VN → SEA · anchored on a proven beachhead"),
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
    need: ["Truy báo cáo gốc Mordor (số ĐNÁ là ước tính)", "Mức 'hứa' tầm nhìn khả tín (GM)"],
    notes: "Gật đầu kép: investor (return lớn) + CEO (PV là cửa ngõ ĐNÁ — đúng chiến lược họ). Neo vào beachhead đã chứng minh.",
    why: "Luận cứ: TẦM NHÌN — để không bị thấy là 'anh buôn arc-fault nhỏ'. Nhịp 6. Nguồn: mandate; ADR 0001; parent.",
  },

  // ===== 08 · RỦI RO & HÓA GIẢI =====
  {
    n: 8, file: "08-rui-ro-hoa-giai.md", nhip: 7, owner: "chief-of-staff", status: "skeleton", tech: "non", gatDau: "Investor",
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
    need: ["Bản 'rủi ro principal' RIÊNG cho gặp nhà đầu tư (không công khai)"],
    notes: "⚠️ RỦI RO PRINCIPAL KHÔNG lên sân khấu (CEO ngồi dưới) — để gặp riêng, dùng Hướng C làm câu trả lời.",
    why: "Luận cứ: Refutatio. Nhịp 7. Chọn phản biện theo người trong phòng. Nguồn: khung luận §4.",
  },

  // ===== 09 · LỜI KÊU GỌI + CẢM ƠN (bookend với 01) =====
  {
    n: 9, file: "09-keu-goi-cam-on.md", nhip: 8, owner: "growth + GM", status: "skeleton", tech: "non", gatDau: "Cả phòng",
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
    notes: "Ask CỨNG để gặp riêng: bác Kim (vốn + cửa KOCHAM) · CEO (độc quyền + IP + MDF) · khách (pilot). Đừng biến slide kết thành bảng giá.",
    why: "Luận cứ: Tri giác (bookend) + The Ask. Nhịp 8. Ask mềm sân khấu, cứng gặp riêng. Nguồn: khung luận §0,§5.",
  },

  // ===== 99 · PHỤ LỤC (appendix — KHÔNG nằm trong luồng chính) =====
  {
    n: 99, file: "99-phu-luc-ky-thuat.md", nhip: "phụ lục", owner: "product-lead", status: "skeleton", tech: "sâu", gatDau: "Kỹ sư hỏi sau",
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
    need: ["Toàn bộ số kỹ thuật (product-lead xác minh với Pebble Square)"],
    notes: "Mọi số phải kiểm chứng được — kỹ sư sẽ soi. KHÔNG có benchmark 'MINT vs ST/TI' công khai → chỉ trình so sánh LỚP công nghệ PIM (học thuật). KHÔNG trích 'MDPI 2024' (bài không tồn tại). Sai một số = mất uy tín cả bài.",
    why: "Nguyên tắc NT1 'chiều sâu theo yêu cầu' (khung luận §1,§3). Nguồn: parent-pebble-square.md; slide 04.",
  },
];

/** Các slide nằm trong luồng trình chiếu chính (bỏ phụ lục). */
export const DECK = SLIDES.filter((s) => !s.appendix);
/** Tra cứu nhanh slide phụ lục đầu tiên (mở bằng phím "a"). */
export const APPENDIX = SLIDES.filter((s) => s.appendix);
