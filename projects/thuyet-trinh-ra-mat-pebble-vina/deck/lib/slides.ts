// NGUỒN DỮ LIỆU slide (meta + nội dung) — mirror từ ../slides/*.md.
//
// HAI TẦNG TÁCH BẠCH (đừng trộn — đây là lỗi gốc của bản cũ):
//   • TẦNG SHOW   = eyebrow/title/headline/bullets/figure  → HIỂN THỊ cho khán giả. Tam ngữ {vi,ko,en}.
//   • WORKING-DOC = why/notes/need + meta (owner/status/…)  → CHỈ panel meta (phím "m"). Tiếng Việt nội bộ.
// need/why/notes KHÔNG bao giờ render lên slide.
//
// Tam ngữ: tiếng Việt là gốc; KO trang trọng (존댓말); EN chỉ cho khái niệm/thuật ngữ chuẩn.
// Khi nội dung chốt ở file MD, cập nhật ở đây cho khớp (xem README §9).
//
// XƯƠNG SỐNG (2026-06-14): "Cây cầu — 2 trụ + 1 con đường".
//   pain → window → [Trụ 1 công nghệ] + [Trụ 2 bản địa] → [nhịp cầu CỘNG SINH] → [con đường 3 CHÂN TRỜI VN→ĐNÁ]
//   → kinh tế → rủi ro → kêu gọi. Bìa (n:0) & tầng UI/figure GIỮ NGUYÊN.

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
    notes: "Bìa: hero 3D 'die' Analog-PIM (đúng sản phẩm gốc). Slogan brand-level (não Hàn + tim Việt), KHÔNG khóa vào arc-fault vì chip Pebble Square làm nhiều hơn. Đã gỡ lặp tên thương hiệu: 'Pebble Vina' chỉ ở tiêu đề, 'Pebble Square' chỉ ở dòng co-brand. Slogan chờ GM duyệt; KO/EN cần native proofread.",
    why: "Bìa — vay uy tín Hàn (Hướng C) qua slogan 'não Hàn, tim Việt' + die 3D. Co-brand gọn 1 dòng. Nguồn: ADR 0001; khung luận §1 (NT3 honor).",
  },

  // ===== 01 · ĐỊNH VỊ + CHÀO (bookend với 10) =====
  {
    n: 1, file: "01-dinh-vi-chao.md", nhip: 0, owner: "growth + GM", status: "skeleton", tech: "non", gatDau: "Cả phòng",
    eyebrow: L("Pebble Vina là ai", "페블 비나는", "Who we are"),
    title: L("Một câu về chúng tôi", "한 문장으로", "In one sentence"),
    headline: L(
      "Công ty giải pháp Edge-AI cho Việt Nam và Đông Nam Á — khởi đầu từ an toàn điện, trên nền công nghệ độc quyền của Pebble Square (Hàn Quốc).",
      "베트남과 동남아를 위한 엣지 AI 솔루션 기업 — 전기 안전에서 출발해, 페블스퀘어(한국)의 독점 기술 위에 세웁니다.",
      "An Edge-AI solutions company for Vietnam and Southeast Asia — starting from electrical safety, built on Pebble Square's (Korea) exclusive technology.",
    ),
    bullets: {
      vi: ["An toàn điện", "Công nghệ Hàn (PIM)", "Có người Việt lo"],
      ko: ["전기 안전", "한국 기술 (PIM)", "베트남 현지 지원"],
      en: ["Electrical safety", "Korean tech (PIM)", "A local team in Vietnam"],
    },
    notes: "Chào & cảm ơn đúng thứ bậc: bác Kim, CEO Pebble Square (GS Bae Hak-yeol), quan khách. Đọc câu định vị — gieo mental model chung: ta DỰNG một doanh nghiệp Việt (không chỉ nhập hàng), khởi đầu từ an toàn điện, đi xa tới ĐNÁ. Đây là ĐẦU cây cầu. 'Công ty giải pháp' = đích đến (Hướng C), không phải tuyên bố ta đã là vậy hôm nay.",
    why: "Luận cứ: Tri giác. Nhịp 0. BOOKEND (lặp ở slide 10). Reframe 2026-06-14: từ thụ động 'đối tác đưa công nghệ Hàn vào VN' → chủ động 'công ty giải pháp dựng nghiệp VN→ĐNÁ' (đặt lộ trình của TA làm nhân vật chính). Gieo ẩn dụ cây cầu ngay nhịp 0. Nguồn: dinh-vi §1,§3.",
  },

  // ===== 01b · BẢN ĐỒ HÀNH TRÌNH (agenda = cây cầu) · NAV ngoài arc · figure: bridge =====
  {
    n: "1b", file: "01b-ban-do-hanh-trinh.md", nhip: "—", owner: "growth + GM", status: "skeleton", tech: "non", gatDau: "Cả phòng",
    eyebrow: L("Lộ trình hôm nay", "오늘 갈 길", "Today's route"),
    title: L("Cây cầu ta sẽ đi qua", "오늘 건널 다리", "The bridge we'll cross"),
    headline: L(
      "Từ công nghệ Hàn Quốc (Pebble Square) sang vận hành thật tại Việt Nam (Pebble Vina) — và xa hơn, ra Đông Nam Á.",
      "한국 기술(페블스퀘어)에서 베트남 현장(페블 비나)으로 — 그리고 동남아로.",
      "From Korean technology (Pebble Square) to real operations in Vietnam (Pebble Vina) — and onward to Southeast Asia.",
    ),
    figure: {
      kind: "bridge",
      nodes: [
        L("Ai", "누구", "Who"),
        L("Nỗi đau", "문제", "Pain"),
        L("Giải pháp", "해법", "Solution"),
        L("Cộng sinh", "공생", "Symbiosis"),
        L("3 chân trời", "세 지평", "3 horizons"),
        L("Lời mời", "초대", "Invitation"),
      ],
      foot: L(
        "Hai trụ Hàn ↔ Việt · một con đường · cùng đi",
        "한국 ↔ 베트남 두 기둥 · 하나의 길 · 함께",
        "Two pillars Korea ↔ Vietnam · one road · walked together",
      ),
      gold: 5,
    },
    bullets: {
      vi: ["① An toàn điện — mũi nhọn mở thị trường", "② Việt Nam → Đông Nam Á", "③ Pebble Square — nền tảng đa năng"],
      ko: ["① 전기 안전 — 베트남 진입점", "② 베트남 → 동남아", "③ 페블스퀘어 — 다목적 플랫폼"],
      en: ["① Electrical safety — beachhead in Vietnam", "② Vietnam → Southeast Asia", "③ Pebble Square — a versatile platform"],
    },
    notes: "Slide ĐỊNH HƯỚNG (nav), ngoài arc nhịp — đặt sau chào (01), trước nội dung (02). Agenda dựng THÀNH ẩn dụ cây cầu: vừa định hướng vừa gieo metaphor. Lời thoại: 'Trong (X) phút, mời quý vị đi cùng tôi qua cây cầu này' → điểm nhanh các trạm → móc bookend slide 10. ĐỪNG liệt kê đủ 10 mục (lộ bài). 3 chân trời ở bullets là PREVIEW — phụ thuộc GM chốt beachhead (HANDOFF §3).",
    why: "Nhu cầu GM: agenda giúp khách hình dung dễ hơn — giải bằng bản đồ cây cầu thay vì danh sách (giữ cảm xúc lễ ra mắt). Đồng bộ xương sống v2 '2 trụ + 1 con đường + 3 chân trời'. Bookend kép với slide 07 (3 chân trời) & 10 (bridge). Tái dùng figure 'bridge' sẵn có — KHÔNG thêm Figure kind mới.",
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
      "Ba lực vừa hội tụ cùng lúc — cửa sổ đang mở cho cả hai bên.",
      "세 가지 흐름이 지금 동시에 만났습니다 — 양쪽 모두에게 기회의 창이 열려 있습니다.",
      "Three forces are converging at once — the window is open for both sides.",
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
    notes: "Khung 'why now' — điều gì VỪA thay đổi. Ghi '~10.000 DN Hàn' KHÔNG ghi '10.000 hội viên KOCHAM' (chưa kiểm chứng). KHÔNG tuyên bố 'luật VN bắt buộc chống hồ quang' — chưa kiểm chứng điều khoản gốc. Sắc thái cộng sinh (2026-06-14): cửa sổ mở cho CẢ HAI bên — VN cần giải pháp ngay, Pebble Square cũng đang mở ra châu Á ngay (Tokyo 2025) → thời điểm khớp để dựng cầu cùng nhau (bắc sang slide 06). 'Cửa sổ phai' để trong notes, KHÔNG lên sân khấu.",
    why: "Luận cứ: Thế–thời. Nhịp 2. 'Why now' + chất xúc tác. Thêm sắc thái 'cửa sổ cho cả hai bên' để dẫn sang nhịp cộng sinh. Nguồn: 2026-06-09 §1; khung chiến lược §4.",
  },

  // ===== 04 · TRỤ 1 — NĂNG LỰC CÔNG NGHỆ (Pebble Square) — figure: flow =====
  {
    n: 4, file: "04-giai-phap-bang-chung.md", nhip: 3, owner: "product-lead", status: "skeleton", tech: "1 điểm tech", gatDau: "CEO Pebble Square",
    eyebrow: L("Trụ 1 · Năng lực công nghệ", "기둥 1 · 기술 역량", "Pillar 1 · The technology"),
    title: L("Công nghệ Pebble Square", "페블스퀘어의 기술", "Pebble Square's technology"),
    headline: L(
      "Trụ thứ nhất là công nghệ: phát hiện hồ quang ngay tại thiết bị — điện thấp, độ trễ thấp, không cần cloud — trên chip Analog-PIM của Pebble Square.",
      "첫 번째 기둥은 기술입니다: 페블스퀘어 아날로그-PIM 칩으로 아크 결함을 기기에서 직접 감지합니다 — 저전력, 저지연, 클라우드 불필요.",
      "The first pillar is the technology: detect arc-faults right on the device — low power, low latency, no cloud — on Pebble Square's Analog-PIM chip.",
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
    notes: "Khung 3 LỚP TÁCH BẠCH (không ghép): (1) nguyên lý PIM tiết kiệm điện [học thuật] + (2) chip MINT thật, 17,6 TOPS/W [để CEO Pebble Square tự nói] + (3) arc-fault có chuẩn UL 1699B/IEC 63027. ⚠️ KHÔNG nói 'MINT đã benchmark arc-fault vs ST/TI' (không có số công khai). ⚠️ KHÔNG trích 'MDPI 2024' — bài đó KHÔNG tồn tại. Mời CEO nói 1–2 phút (podium honor). Reframe 2026-06-14: NÉN khỏi vị trí cao trào cũ → chỉ là 1 TRỤ ngang hàng trụ bản địa (05); đừng để 'phình' lại.",
    why: "Luận cứ: Năng lực công nghệ = TRỤ 1. Nhịp 3. Reframe: hạ khỏi cao trào (con chip không còn là nhân vật chính), vẫn giữ honor + CEO nói. Nguồn: parent-pebble-square.md; khung luận §1 (NT1), §3.",
  },

  // ===== 05 · TRỤ 2 — NĂNG LỰC BẢN ĐỊA (Pebble Vina) =====
  {
    n: 5, file: "05-vi-sao-la-ta.md", nhip: 4, owner: "growth + GM", status: "skeleton", tech: "non", gatDau: "Bác Kim / KOCHAM",
    eyebrow: L("Trụ 2 · Năng lực bản địa", "기둥 2 · 현지 역량", "Pillar 2 · Local capability"),
    title: L("Cỗ máy thực thi của Pebble Vina", "페블 비나의 실행 엔진", "Pebble Vina's execution engine"),
    headline: L(
      "Trụ thứ hai là Pebble Vina: độc quyền phân phối, mạng lưới KOCHAM, và năng lực bản địa mà Seoul không cung cấp được. Công nghệ chỉ thắng khi có người đưa nó chạy thật.",
      "두 번째 기둥은 페블 비나입니다: 독점 총판, KOCHAM 네트워크, 그리고 서울이 제공할 수 없는 현지 역량. 기술은 현장에서 실제로 돌릴 사람이 있어야 이깁니다.",
      "The second pillar is Pebble Vina: exclusive distribution, the KOCHAM network, and local capacity Seoul cannot provide. Technology only wins when someone makes it run for real.",
    ),
    bullets: {
      vi: [
        "Quyền phân phối độc quyền tại Việt Nam (→ Đông Nam Á)",
        "Mạng lưới KOCHAM — cộng đồng doanh nghiệp Hàn tại VN (bác Kim, Phó Chủ tịch)",
        "Năng lực bản địa: FAE · tuân thủ TCVN/QCVN · bảo hành tại chỗ",
        "Mỗi pilot thành một case study — lợi thế tự dày lên",
        "Họ cần thị trường của ta — ta cần công nghệ của họ",
      ],
      ko: [
        "베트남 독점 총판 권리 (→ 동남아)",
        "KOCHAM 네트워크 — 베트남 내 한국 기업 커뮤니티 (김 부회장)",
        "현지 역량: FAE · TCVN/QCVN 준수 · 현장 보증",
        "파일럿마다 사례가 되어 — 우위가 스스로 두터워집니다",
        "그들에겐 우리의 시장이, 우리에겐 그들의 기술이 필요합니다",
      ],
      en: [
        "Exclusive distribution rights in Vietnam (→ Southeast Asia)",
        "The KOCHAM network — Korean business community in Vietnam (Vice Chairman Kim)",
        "Local capacity: FAE · TCVN/QCVN compliance · on-site warranty",
        "Each pilot becomes a case study — the advantage compounds",
        "They need our market — we need their technology",
      ],
    },
    need: ["Trạng thái độc quyền HĐ (legal)", "Năng lực FAE thực tế (operations)"],
    notes: "Vinh danh bác Kim & KOCHAM (gật đầu investor). Reframe 2026-06-14: NÂNG ngang hàng trụ công nghệ (04) — không có cỗ máy bản địa, chip giỏi mấy cũng nằm trong kho → đó là lý do Pebble Square CẦN một Pebble Vina. Bullet cuối là câu BẮC CẦU sang nhịp cộng sinh (slide 06). Nói đúng vai (trung thực = uy tín).",
    why: "Luận cứ: Thế + Người = TRỤ 2. Nhịp 4. 7 Powers: Cornered Resource + Counter-Positioning. Reframe: nâng ngang trụ 1 + thêm câu bắc cầu sang cộng sinh. Nguồn: 2026-06-09 §5; khung chiến lược §4–5.",
  },

  // ===== 06 · CỘNG SINH — nhịp cầu giữa hai trụ (MỚI) · figure: 2 cột cho/được =====
  {
    n: 6, file: "06-cong-sinh.md", nhip: 5, owner: "GM + chief-of-staff", status: "skeleton", tech: "non", gatDau: "CEO Pebble Square + Investor",
    eyebrow: L("Cộng sinh", "공생", "Symbiosis"),
    title: L("Đôi bên cùng thắng", "양쪽 모두 이기는 구조", "A win-win that compounds"),
    headline: L(
      "Đây không phải quan hệ mua–bán. Mỗi bên cho cái bên kia không tự có — và mỗi thắng lợi ở Việt Nam khiến cả hai mạnh hơn.",
      "단순한 매매 관계가 아닙니다. 서로가 갖지 못한 것을 주고받으며, 베트남에서의 승리는 양쪽 모두를 더 강하게 만듭니다.",
      "This is not a buyer–seller deal. Each side gives what the other lacks — and every win in Vietnam makes both stronger.",
    ),
    figure: {
      kind: "twocol",
      left: {
        head: L("Pebble Square", "페블스퀘어", "Pebble Square"),
        items: [
          L("CHO ta: chip MINT (PIM) · IP & R&D · đào tạo · hỗ trợ marketing", "우리에게: MINT 칩(PIM) · IP·R&D · 교육 · 마케팅 지원", "Gives us: MINT chip (PIM) · IP & R&D · training · marketing support"),
          L("ĐƯỢC từ ta: cửa vào VN · bản địa hóa · bàn đạp ra Đông Nam Á", "우리에게서: 베트남 진입 · 현지화 · 동남아 발판", "Gains from us: entry to VN · localization · a springboard into SE Asia"),
        ],
      },
      right: {
        head: L("Pebble Vina", "페블 비나", "Pebble Vina"),
        items: [
          L("CHO họ: pháp nhân VN · KOCHAM · đội FAE · tuân thủ · pilot", "그들에게: 베트남 법인 · KOCHAM · FAE · 준수 · 파일럿", "Gives them: a VN entity · KOCHAM · FAE team · compliance · pilots"),
          L("ĐƯỢC từ họ: công nghệ đẳng cấp · uy tín Hàn · độc quyền VN→ĐNÁ", "그들에게서: 세계 수준 기술 · 한국 신뢰 · VN→동남아 독점권", "Gains from them: world-class tech · Korean credibility · VN→SEA exclusivity"),
        ],
      },
    },
    bullets: {
      vi: [
        "Vòng lặp: mỗi pilot thắng ở VN → de-risk kế hoạch châu Á của Pebble Square → họ đầu tư lại → ta thắng nhanh hơn",
        "Việt Nam là bằng-chứng-khái-niệm cho chiến lược Đông Nam Á của Pebble Square",
      ],
      ko: [
        "선순환: 베트남의 파일럿 성공 → 페블스퀘어의 아시아 전략 리스크 감소 → 재투자 → 더 빠른 승리",
        "베트남은 페블스퀘어 동남아 전략의 개념 증명(PoC)입니다",
      ],
      en: [
        "Flywheel: each VN pilot win → de-risks Pebble Square's Asia plan → they reinvest → we win faster",
        "Vietnam is the proof of concept for Pebble Square's Southeast Asia strategy",
      ],
    },
    need: ["Trạng thái HĐ độc quyền + điều khoản MDF/đào tạo (legal)", "Xác nhận chiến lược ĐNÁ của Pebble Square (analyst đọc parent)"],
    notes: "SLIDE MỚI (2026-06-14) — nhịp cầu nối Trụ 1 (công nghệ) ↔ Trụ 2 (bản địa). Trả lời trực tiếp phê bình GM: bản cũ chỉ nói 'họ cần ta', chưa nói 'ta cần họ' và thiếu vòng lặp đôi bên cùng thắng. Chạm CEO: PV là proof-of-concept cho mô hình lập pháp nhân địa phương của họ (như Tokyo 2025). ⚠️ KHÔNG over-claim mức cam kết của Pebble Square (MDF/đào tạo/đầu tư lại) khi chưa có trong hợp đồng — trình ở mức 'định hướng quan hệ', ghi rõ cái nào đã chốt / đang đàm phán.",
    why: "Luận cứ MỚI: Cộng sinh (nhịp cầu). Nhịp 5. Kéo logic Hướng C (ta cần uy tín Hàn, họ cần năng lực bản địa) từ dinh-vi §2 lên sân khấu. Nguồn: dinh-vi §2; parent §mô hình mở rộng (Tokyo/Đại học Tokyo); ADR 0001; mandate-phan-phoi-doc-quyen.md.",
  },

  // ===== 07 · CON ĐƯỜNG — LỘ TRÌNH 3 CHÂN TRỜI (figure: flow 3 chân trời) =====
  {
    n: 7, file: "07-dich-den.md", nhip: 6, owner: "GM + analyst", status: "skeleton", tech: "non", gatDau: "Investor + CEO",
    eyebrow: L("Con đường", "여정", "The road"),
    title: L("Ba chân trời: VN → Đông Nam Á", "세 지평: 베트남 → 동남아", "Three horizons: VN → SE Asia"),
    headline: L(
      "Con đường qua cây cầu có ba chân trời — cắm rễ Việt Nam, nhân rộng và bước ra khu vực, rồi thành hub Đông Nam Á. Mỗi chân trời, ta lớn từ nhà phân phối thành công ty giải pháp.",
      "다리를 건너는 길은 세 지평으로 — 베트남에 뿌리내리고, 확장하며 지역으로 나아가, 동남아 허브가 됩니다. 단계마다 총판에서 솔루션 기업으로 성장합니다.",
      "The road across the bridge has three horizons — root in Vietnam, scale and step into the region, then become the Southeast Asia hub. At each, we grow from distributor to solutions company.",
    ),
    figure: {
      kind: "flow",
      steps: [
        {
          label: L("Chân trời 1 · Cắm rễ VN", "지평 1 · 베트남 정착", "Horizon 1 · Root in VN"),
          sub: L("pilot nhà máy Hàn → case study → chứng nhận · co-brand ~70/30", "한국 공장 파일럿 → 사례 → 인증 · 코브랜드 ~70/30", "Korean-plant pilot → case study → certification · co-brand ~70/30"),
        },
        {
          label: L("Chân trời 2 · Nhân rộng + ra ĐNÁ", "지평 2 · 확장 + 동남아 진출", "Horizon 2 · Scale + into SEA"),
          sub: L("kênh EPC & O&M · thêm dòng sản phẩm · pilot ĐNÁ đầu tiên · co-brand ~40/60", "EPC·O&M 채널 · 제품 라인 추가 · 첫 동남아 파일럿 · 코브랜드 ~40/60", "EPC & O&M channels · more product lines · first SEA pilot · co-brand ~40/60"),
        },
        {
          label: L("Chân trời 3 · Hub Đông Nam Á", "지평 3 · 동남아 허브", "Horizon 3 · SEA hub"),
          sub: L("nhiều dòng sản phẩm · brand riêng · công ty giải pháp · co-brand ~10/90", "다중 제품 라인 · 독자 브랜드 · 솔루션 기업 · 코브랜드 ~10/90", "Multiple product lines · own brand · solutions company · co-brand ~10/90"),
        },
      ],
      foot: L("Mandate độc quyền VN → ĐNÁ · ba trục lớn lên cùng nhau: địa lý · sản phẩm · vai trò", "VN → 동남아 독점 권한 · 세 축이 함께 성장: 지역 · 제품 · 역할", "Exclusive mandate VN → SEA · three axes grow together: geography · product · role"),
    },
    bullets: {
      vi: ["Thị trường PV Đông Nam Á ~38 → 93 GW (2025–2030, ước tính)"],
      ko: ["동남아 태양광 시장 ~38 → 93 GW (2025–2030, 추정)"],
      en: ["SE Asia PV market ~38 → 93 GW (2025–2030, est.)"],
    },
    need: ["Chốt nước ĐNÁ ưu tiên (Thái Lan? Indonesia?) + lý do (analyst)", "Truy báo cáo gốc Mordor (số ĐNÁ là ước tính)", "Mức 'hứa' tầm nhìn khả tín (GM)"],
    notes: "Gật đầu kép: investor (return lớn) + CEO (mỗi chân trời ta đi = một bước mở rộng châu Á của họ). Reframe 2026-06-14: từ '3 trục trừu tượng' (liệt kê phẳng) → 'lộ trình 3 chân trời định hướng' (có thứ tự + tiến hóa co-brand theo Hướng C). ĐỊNH HƯỚNG, KHÔNG chốt quý/doanh số trên sân khấu (chưa ký độc quyền, chưa có pilot tên) — số sâu để phụ lục 99/gặp riêng. Co-brand %/chân trời là định hướng tương đối (ADR 0001), không phải số hợp đồng.",
    why: "Luận cứ: TẦM NHÌN — để không bị thấy là 'anh buôn arc-fault nhỏ'. Nhịp 6. Reframe: phần GM thấy THIẾU NHẤT — lộ trình riêng của Pebble Vina. Nguồn: mandate; ADR 0001 (Hướng C 3 pha co-brand); parent §lộ trình mở rộng; dinh-vi §4 (GTM nhà máy Hàn→EPC→O&M).",
  },

  // ===== 08 · LỢI NHUẬN KÉP (figure: 2 cột) — biên lớn lên dọc chân trời =====
  {
    n: 8, file: "08-loi-nhuan-kep.md", nhip: 7, owner: "cfo", status: "skeleton", tech: "non", gatDau: "Investor",
    eyebrow: L("Lợi nhuận kép", "이중 수익", "Profit on both sides"),
    title: L("Sinh lợi hai phía", "양쪽 모두에 이익", "Value for both sides"),
    headline: L(
      "Một giao dịch, hai phía cùng thắng: khách giảm rủi ro & chi phí, Pebble Vina có biên phân phối & dịch vụ — và biên lớn lên dọc con đường.",
      "한 거래로 양쪽이 모두 이깁니다: 고객은 위험과 비용을 줄이고, 페블 비나는 총판 마진과 서비스 수익을 얻습니다 — 그리고 마진은 여정을 따라 커집니다.",
      "One deal, two winners: customers cut risk and cost, Pebble Vina earns distribution margin and services — and margin grows along the road.",
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
    bullets: {
      vi: ["Biên lớn lên theo chân trời: H1 phân phối → H2 thêm dịch vụ & O&M → H3 giải pháp / IP"],
      ko: ["마진은 지평을 따라 성장: H1 총판 → H2 서비스·O&M 추가 → H3 솔루션 / IP"],
      en: ["Margin grows by horizon: H1 distribution → H2 + services & O&M → H3 solutions / IP"],
    },
    need: ["Mô hình ROI-khách (cfo)", "Giá nhập từ HĐ → biên (cfo + legal)"],
    notes: "Ngôn ngữ TIỀN & RỦI RO, không thuật ngữ. Không bịa số — chưa có giá nhập thì trình định tính, ghi 'ước tính'. Reframe 2026-06-14: đặt SAU lộ trình (07) + gắn biên/role tăng theo chân trời ('kinh tế đi theo con đường'), thay vì bảng biên tĩnh.",
    why: "Luận cứ: Nhu cầu (ROI cho HỌ) + trục Tài chính (biên cho TA). Nhịp 7. Plan cần CẢ HAI. Reframe: gắn vào 3 chân trời. Nguồn: khung chiến lược §2.",
  },

  // ===== 09 · RỦI RO & HÓA GIẢI =====
  {
    n: 9, file: "09-rui-ro-hoa-giai.md", nhip: 8, owner: "chief-of-staff", status: "skeleton", tech: "non", gatDau: "Investor",
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
        "Lợi ích hai bên có thể lệch → căn chỉnh qua hợp đồng độc quyền + nhịp review chung",
      ],
      ko: [
        "경쟁사의 현지화 → 우리는 결과 + 지원 + 준수를 판매 (모방 어려움)",
        "규제 집행 미흡 → 한국 대기업의 내부 기준이 견인 (법을 기다리지 않음)",
        "FAE 채용 → 인력 로드맵 + 페블스퀘어 교육",
        "양측 이해관계 어긋남 → 독점 계약 + 공동 점검 주기로 정렬",
      ],
      en: [
        "Competitor localization → we sell outcomes + support + compliance (hard to copy)",
        "Weak enforcement → Korean groups enforce internal standards (no need to wait for law)",
        "FAE hiring → staffing roadmap + training from Pebble Square",
        "Interests can diverge → aligned via the exclusive contract + a joint review cadence",
      ],
    },
    need: ["Bản 'rủi ro principal' RIÊNG cho gặp nhà đầu tư (không công khai)"],
    notes: "⚠️ RỦI RO PRINCIPAL KHÔNG lên sân khấu (CEO ngồi dưới) — để gặp riêng, dùng Hướng C làm câu trả lời. Bổ sung 2026-06-14: thêm dòng rủi ro 'lệch pha cộng sinh' ở bản AN TOÀN công khai (căn chỉnh lợi ích qua cấu trúc quan hệ) — vì slide 06 đã nâng cộng sinh thành trọng tâm. KHÔNG đụng chuyện M&A/thể diện principal.",
    why: "Luận cứ: Refutatio. Nhịp 8. Chọn phản biện theo người trong phòng. Bổ sung dòng cộng sinh (an toàn công khai). Nguồn: khung luận §4; ADR 0001.",
  },

  // ===== 10 · LỜI KÊU GỌI + CẢM ƠN (bookend với 01) · figure: bridge =====
  {
    n: 10, file: "10-keu-goi-cam-on.md", nhip: 9, owner: "growth + GM", status: "skeleton", tech: "non", gatDau: "Cả phòng",
    cobrand: true,
    eyebrow: L("Lời mời", "초대", "The invitation"),
    title: L("Cùng dựng cây cầu", "함께 다리를 놓읍시다", "Let's build the bridge"),
    headline: L(
      "Pebble Vina — công ty giải pháp Edge-AI cho Việt Nam và Đông Nam Á, khởi đầu từ an toàn điện. Cùng nhau dựng cây cầu Hàn → Việt → Đông Nam Á.",
      "페블 비나 — 전기 안전에서 출발하는, 베트남과 동남아를 위한 엣지 AI 솔루션 기업. 한국 → 베트남 → 동남아 다리를 함께 놓읍시다.",
      "Pebble Vina — an Edge-AI solutions company for Vietnam and Southeast Asia, starting from electrical safety. Let's build the bridge Korea → Vietnam → SE Asia together.",
    ),
    figure: {
      kind: "bridge",
      nodes: [L("Hàn Quốc", "한국", "Korea"), L("Việt Nam", "베트남", "Vietnam"), L("Đông Nam Á", "동남아", "SE Asia")],
      foot: L("Hai trụ · một con đường · cùng đi", "두 기둥 · 하나의 길 · 함께", "Two pillars · one road · walked together"),
    },
    bullets: {
      vi: [
        "Pebble Vina — công ty giải pháp Edge-AI cho Việt Nam & Đông Nam Á",
        "Lời mời chung: cùng dựng cây cầu Edge-AI Hàn → Việt → Đông Nam Á",
        "Xin cảm ơn — và mong được đồng hành",
      ],
      ko: [
        "페블 비나 — 베트남과 동남아를 위한 엣지 AI 솔루션 기업",
        "함께하자는 초대: 한국 → 베트남 → 동남아 엣지 AI 다리",
        "감사합니다 — 함께하길 바랍니다",
      ],
      en: [
        "Pebble Vina — an Edge-AI solutions company for Vietnam & SE Asia",
        "A shared invitation: build the Edge-AI bridge Korea → Vietnam → SE Asia",
        "Thank you — we hope to walk this road together",
      ],
    },
    notes: "Ask CỨNG để gặp riêng: bác Kim (vốn + cửa KOCHAM) · CEO (độc quyền + IP + MDF) · khách (pilot). Đừng biến slide kết thành bảng giá. Bổ sung 2026-06-14: gắn figure bridge (cả cây cầu) đóng vòng ẩn dụ; cập nhật câu bookend cho khớp slide 01 đã reframe (công ty giải pháp VN→ĐNÁ).",
    why: "Luận cứ: Tri giác (bookend) + The Ask. Nhịp 9. Ask mềm sân khấu, cứng gặp riêng. Đóng vòng ẩn dụ cây cầu. Nguồn: khung luận §0,§5; slide 01.",
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
        "Số sâu lộ trình (gặp riêng/handout): mốc quý 3 chân trời · đơn vị kinh tế · thứ tự nước ĐNÁ · cơ chế căn chỉnh lợi ích",
      ],
      ko: [
        "아날로그-PIM 원리 & MINT 성능: ~4M 시냅스 · ~30 GOPS · 17.6 TOPS/W",
        "PIM vs MCU/edge-GPU 기술 계층 비교 (학술 출처)",
        "아크 결함 표준: UL 1699B · IEC 63027 · TCVN 11855-1:2017 · QCVN 01:2020/BCT",
        "배전반/인버터 레퍼런스 디자인; JBNU/KAIST 학술 기반",
        "로드맵 상세 (별도 미팅/핸드아웃): 3지평 분기 마일스톤 · 단위 경제성 · 동남아 국가 순서 · 이해관계 정렬 메커니즘",
      ],
      en: [
        "Analog-PIM principle & MINT performance: ~4M synapses · ~30 GOPS · 17.6 TOPS/W",
        "PIM vs MCU/edge-GPU technology-layer comparison (academic sources)",
        "Arc-fault standards: UL 1699B · IEC 63027 · TCVN 11855-1:2017 · QCVN 01:2020/BCT",
        "Reference design for panel/inverter; JBNU/KAIST academic roots",
        "Roadmap deep numbers (private/handout): quarterly milestones · unit economics · SEA country order · interest-alignment mechanism",
      ],
    },
    need: ["Toàn bộ số kỹ thuật (product-lead xác minh với Pebble Square)", "Số sâu lộ trình: cfo + legal + analyst"],
    notes: "Mọi số phải kiểm chứng được — kỹ sư sẽ soi. KHÔNG có benchmark 'MINT vs ST/TI' công khai → chỉ trình so sánh LỚP công nghệ PIM (học thuật). KHÔNG trích 'MDPI 2024' (bài không tồn tại). Sai một số = mất uy tín cả bài. Bổ sung 2026-06-14: thêm 'số sâu lộ trình' — tầng số liệu (không phải tầng sân khấu).",
    why: "Nguyên tắc NT1 'chiều sâu theo yêu cầu' (khung luận §1,§3). Chứa số sâu của lộ trình/kinh tế (slide 07/08) cho gặp riêng. Nguồn: parent-pebble-square.md; slide 04.",
  },
];

/** Các slide nằm trong luồng trình chiếu chính (bỏ phụ lục). */
export const DECK = SLIDES.filter((s) => !s.appendix);
/** Tra cứu nhanh slide phụ lục đầu tiên (mở bằng phím "a"). */
export const APPENDIX = SLIDES.filter((s) => s.appendix);
