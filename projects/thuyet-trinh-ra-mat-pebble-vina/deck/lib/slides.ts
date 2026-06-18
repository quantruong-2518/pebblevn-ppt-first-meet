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
//   00 bìa → 01 đại cục quốc gia (suy ra cần đơn vị tiên phong) → 02 Pebble Vina là ai (thành viên VN của Pebble Square)
//   → 03 thang độ chín thị trường VN (GỘP công nghệ Pebble Square) → 04 map hai đầu (matrix)
//   → 05 cùng một nhà (PV = mũi nhọn VN của nhóm PS) → 06 lộ trình → 07 lời mời.
//   Khung arc-fault cũ đã archive ở ../slides/_archive/2026-06-15-tai-cau-truc-quoc-gia/.
//   slides.ts đủ 00–07. Bìa (n:0) & tầng UI/figure GIỮ NGUYÊN. CEO PS = Lee Choong-hyun.
//   ⛔ ĐÃ BỎ slide 'Pebble Square — nền tảng ta chọn' (GM 2026-06-15): công nghệ PS gộp vào dẫn chứng slide 03 (thang độ chín).
//   🔁 REFRAME LUẬN CHÍNH (GM 2026-06-16): Pebble Vina = THÀNH VIÊN VIỆT NAM của nhóm Pebble Square (PS = công ty mẹ),
//      dùng lịch sử PS làm marketing/uy tín. Pháp lý đã/đang chuyển sang mô hình công ty con-thành viên → BỎ 'định vị
//      hai thì' & guardrail 'chưa ký HĐ' & khung 'nhà phân phối'. Đảo ADR 0001 (Hướng C) → ADR 0002. Co-brand giữ ĐẬM.
//   Figure: 01 flow · 02 forces(PV-thuần, BỎ giới thiệu PS — CEO PS ngồi dưới) · 03 ladder(thang độ chín + công nghệ PS) · 04 matrix(map hai đầu) · 05 flow(vòng lặp một nhà) · 06 flow(lộ trình) · 07 bridge (bookend cây cầu).
//   ⚠️ Mở: slide 04 (matrix) HOÃN priority — KHÔNG chốt beachhead. slide 03 (thang độ chín) xếp theo ĐỘ CHÍN THỊ TRƯỜNG (khách quan), KHÔNG phải thứ tự ưu tiên → không đụng stance hoãn-priority của 04.
//      → slide 06 Chân trời 1 vẫn gọi tên beachhead 'an toàn & sức khỏe thiết bị' → CẦN làm mềm cho nhất quán (GM xác nhận).

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
  // tech (công nghệ PS gộp vào — trụ On-Device/Failure Analysis) + seg (phân khúc VN) +
  // stat (số bằng chứng, ASCII) + tier (nhãn độ chín). platform = dòng công nghệ nền tảng chung; foot = nguồn + khung.
  | { kind: "ladder"; rungs: { cap: LText; tech: LText; seg: LText; stat: string; tier: LText }[]; platform: LText; foot: LText }
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
    why: "Khung luận GM: mở deck bằng diễn dịch quốc gia — nâng PV thành 'đáp lời nhu cầu quốc gia', làm bệ phóng để slide 02 giới thiệu PV là thành viên VN của một hãng bán dẫn AI Hàn (Pebble Square). Nuốt luôn 'why now'.",
  },

  // ===== 02 · PEBBLE VINA LÀ AI (thành viên VN của Pebble Square — điểm hạ cánh của slide 01) · figure: twocol =====
  {
    n: 2, file: "02-dinh-vi-pebble-vina.md", nhip: 0, owner: "GM", status: "drafting", tech: "non", gatDau: "Cả phòng",
    eyebrow: L("Pebble Vina là ai", "Pebble Vina는", "Who we are"),
    title: L("Trí tuệ Hàn Quốc · Trái tim Việt Nam", "한국의 두뇌 · 베트남의 심장", "Korean brains · Vietnamese heart"),
    headline: L(
      "Pebble Vina là *chi nhánh Việt Nam của Pebble Square* (Hàn Quốc) — *bản địa hóa* công nghệ bán dẫn–AI của công ty mẹ, đưa vào *vận hành thật* tại Việt Nam và vươn ra khu vực.",
      "Pebble Vina는 *Pebble Square(한국)의 베트남 지사*입니다 — 모회사의 반도체–AI 기술을 *현지화*하여 베트남 현장에서 *실제로 운영*하고, 나아가 역내로 확장합니다.",
      "Pebble Vina is *Pebble Square's (Korea) Vietnam branch* — *localizing* the parent's semiconductor–AI technology into *real operation* in Vietnam, and reaching out across the region.",
    ),
    figure: {
      kind: "forces",
      items: [
        { label: L("Thừa hưởng *công nghệ AI Hàn đã kiểm chứng*", "*검증된 한국 AI 기술* 계승", "Inheriting *proven Korean AI technology*"), sub: L("nền tảng bán dẫn của công ty mẹ Pebble Square", "모회사 Pebble Square의 반도체 플랫폼", "the parent Pebble Square's chip platform") },
        { label: L("*Đội ngũ & vận hành* ngay tại Việt Nam", "*베트남 현지* 팀과 운영", "*A team that runs it* in Vietnam"), sub: L("pháp nhân Việt · hỗ trợ, tùy biến tận nơi", "베트남 법인 · 현장 지원과 최적화", "Vietnamese entity · on-site support & tuning") },
        { label: L("*Tiên phong dẫn dắt* bán dẫn–AI tại Việt Nam", "베트남 반도체–AI *선도*", "*Pioneering* semiconductor–AI in Vietnam"), sub: L("đưa vào dùng thật · vươn ra khu vực", "실제 도입 · 역내 확장", "real adoption · reaching the region") },
      ],
    },
    need: ["Xác nhận cách gọi pháp lý đúng ('chi nhánh'/'công ty con') cùng CEO PS", "GM chốt 1 từ vùng mở rộng (khu vực/ĐNÁ/Châu Á) xuyên deck", "Native proofread KO/EN"],
    notes: "REFRAME 2026-06-16 (GM): đổi luận chính — Pebble Vina là THÀNH VIÊN VIỆT NAM của nhóm Pebble Square (PS = công ty mẹ), KHÔNG còn định vị 'công ty Việt độc lập / nhà phân phối'. GM xác nhận quan hệ pháp lý đã/đang chuyển sang mô hình công ty con-thành viên → bỏ định-vị-hai-thì & guardrail 'chưa ký HĐ'. Mức co-brand = VỪA (Q2): giữ tên Pebble Vina + giữ pháp nhân/sức Việt, nhưng GẮN vào nhóm PS. Lịch sử PS = xương sống uy tín mở đầu (2021 · MINT 17,6 TOPS/W · ~500k chip · Tokyo 2025) — đây là 'dùng lịch sử PS làm marketing'. Figure twocol đổi nghĩa: trái = Pebble Square (gốc công nghệ/lịch sử) · phải = Pebble Vina (hiện diện & thực thi tại VN). Mạch nhấn: 'từ 2021' + 'Đông Nam Á'. Motif GM (xuyên deck) giữ nguyên. Số PS đều ✅ verified từ company/parent-pebble-square.md. Đảo ADR 0001 (Hướng C) → ADR 0002. ⚠️ Cách gọi 'thành viên/công ty con' trên sân khấu cần CEO PS đồng thuận trước (need). CHỐT ĐỊNH VỊ 2026-06-18 (GM): PV hoạt động NHƯ chi nhánh quốc tế của công ty mẹ Pebble Square, nhưng BẢN ĐỊA HÓA chiến lược dẫn dắt bán dẫn–AI tại VN, sau vươn ra khu vực. Gói trong slogan 'Trí tuệ Hàn Quốc · Trái tim Việt Nam' (đồng bộ bìa + bookend 07) → slogan thành title/hero, câu lớn giải nghĩa. Figure 2 cột map thẳng slogan: trái = trí tuệ Hàn (công nghệ PS), phải = trái tim Việt (bản địa hóa + dẫn dắt PV). Thay bản 'mẫu B' trung gian (còn 'tối' vì nhồi 6 ý + đuôi hành chính 'pháp nhân Việt…'). Lõi PS = nền tảng bán dẫn–AI nền PIM (chip edge Analog-PIM MINT/PAPAYA + AI SoC Digital-PIM ESPRESSO), KHÔNG thu gọn 'Edge-AI'. VẪN giữ ADR 0002. ⚠️ 'Chi nhánh' = mô tả CHỨC NĂNG ('hoạt động như'), cách gọi pháp lý cứng cần CEO PS chốt. ⚠️ Vùng mở rộng: GM nói 'Châu Á', để 'khu vực' (trung tính) ở slide này; 06/07 vẫn 'Đông Nam Á' → cần chốt 1 từ cho cả deck. KHỬ LẶP 2026-06-18 (GM): slogan từng bị nói 3 lần/slide (title + 2 head cột) → nói 1 lần ở title; head cột rút về danh tính 'Pebble Square · Hàn Quốc' / 'Pebble Vina · Việt Nam' (vế trí tuệ/trái tim hiểu qua vị trí). Cột phải BỎ phần nhại headline (chi nhánh/bản địa hóa) → thay bằng chất CỤ THỂ của 'trái tim Việt': pháp nhân+đội ngũ tại chỗ · hỗ trợ tận nơi/tùy biến · tiên phong dẫn dắt. BỎ bullet motif 'đặt mục tiêu…' khỏi slide 02 (đứng một mình thành châm ngôn rỗng + đánh số '01') — motif giữ ở bookend 07. BỎ GIỚI THIỆU PEBBLE SQUARE 2026-06-18 (GM): CEO PS ngồi dưới → không dựng cột brochure profile PS (2021/chip/500k) để trình cho chính họ; slide này bán Pebble Vina. Đổi figure twocol(PS↔PV) → forces 3 ý PV-thuần. PS chỉ còn là 'công ty mẹ' trong headline + 1 dòng 'thừa hưởng công nghệ AI Hàn'. Số/spec PS dời về slide 03 (dòng platform) — tránh lặp xuyên deck. ⚠️ Hệ quả: khán giả Việt (không biết PS) giờ chỉ thấy uy tín Hàn qua slogan+headline+slide 03; nếu cần 1 beat 'gặp công ty mẹ' riêng cho khách Việt thì là quyết định kiến trúc deck. CẬP NHẬT 2026-06-18 (nạp IR Deck PS 05/01/2026, company/sources/): nới mô tả lõi PS (PIM platform = edge Analog-PIM + AI SoC ESPRESSO/Digital-PIM); PAPAYA/PAPAYA FLEX đã xác nhận → gỡ 🟡. BODY SÂN KHẤU GIỮ NGUYÊN — chưa hé ESPRESSO, chờ GM chốt.",
    why: "Điểm hạ cánh của mạch diễn dịch slide 01: từ 'kỷ nguyên vươn mình' → ai sẽ đưa bán dẫn/Edge-AI vào VN → Pebble Vina, thành viên VN của một hãng chip AI Hàn đã kiểm chứng từ 2021. Nguồn: dinh-vi §3; ADR 0002 (thành viên nhóm PS); company/parent-pebble-square.md.",
  },

  // ===== 03 · THANG ĐỘ CHÍN — 4 mảng dịch vụ PS (gộp công nghệ nền tảng) xếp theo độ chín thị trường VN · figure: ladder =====
  {
    n: 3, file: "03-do-chin-thi-truong.md", nhip: 1, owner: "GM + analyst", status: "drafting", tech: "nhẹ", gatDau: "Cả phòng (đặc biệt nhà đầu tư)",
    eyebrow: L("Độ chín thị trường · Việt Nam", "시장 성숙도 · 베트남", "Market readiness · Vietnam"),
    title: L("Thị trường Việt Nam chín tới đâu", "베트남 시장은 어디까지 무르익었나", "Where Vietnam is most ready"),
    headline: L(
      "Bốn năng lực Edge-AI của *nhóm Pebble Square* gặp thị trường Việt Nam ở *bốn độ chín khác nhau* — xếp từ nơi cầu đã rõ nhất xuống nơi còn đang mở.",
      "*Pebble Square 그룹*의 네 가지 엣지 AI 역량은 베트남 시장에서 *서로 다른 성숙도*로 만납니다 — 수요가 가장 뚜렷한 곳부터 이제 막 열리는 곳까지.",
      "The *Pebble Square group*'s four Edge-AI capabilities meet the Vietnamese market at *four different maturity levels* — from where demand is clearest down to where it is just opening.",
    ),
    figure: {
      kind: "ladder",
      rungs: [
        {
          cap: L("An ninh · Giám sát video", "보안 · 영상 감시", "Security · video surveillance"),
          tech: L("On-Device Security", "온디바이스 Security", "On-Device Security"),
          seg: L("CCTV & camera AI (KCN, đô thị)", "CCTV & AI 카메라 (산업단지·도시)", "CCTV & AI cameras (parks, cities)"),
          stat: "CCTV VN $615M · +17.6%/yr ✅",
          tier: L("Chín nhất", "가장 성숙", "Most ready"),
        },
        {
          cap: L("Bảo trì dự đoán", "예지보전", "Predictive maintenance"),
          tech: L("Failure Analysis", "Failure Analysis", "Failure Analysis"),
          seg: L("Máy móc nhà máy & an toàn điện", "공장 설비 & 전기 안전", "Factory machinery & electrical safety"),
          stat: "Công nghiệp IoT VN $1.6B · +13%/yr ✅",
          tier: L("Chín · khớp KOCHAM", "성숙 · KOCHAM 적합", "Ready · fits KOCHAM"),
        },
        {
          cap: L("Thị giác máy · QC", "머신 비전 · QC", "Machine vision · QC"),
          tech: L("On-Device Vision", "온디바이스 Vision", "On-Device Vision"),
          seg: L("Dây chuyền điện tử & bán dẫn", "전자·반도체 라인", "Electronics & semiconductor lines"),
          stat: "Amkor x3 · bán dẫn VN $7B → $16.6B ✅",
          tier: L("Đang chín", "성숙 진행 중", "Emerging"),
        },
        {
          cap: L("Giọng nói · âm thanh", "음성 · 사운드", "Voice & sound"),
          tech: L("On-Device Sound", "온디바이스 Sound", "On-Device Sound"),
          seg: L("Smart home & loa tiếng Việt", "스마트홈 & 베트남어 음성", "Smart home & Vietnamese voice"),
          stat: "Smart home VN $0.69B → $1.71B · 9.2%/yr ✅",
          tier: L("Mới nổi", "초기 단계", "Early"),
        },
      ],
      platform: L(
        "Cùng nền tảng Analog-PIM của nhóm Pebble Square — MINT · 17,6 TOPS/W · ~500k chip · NDA SK hynix; thế hệ PAPAYA: ~100× hiệu suất & ~1/50 điện so với GPU biên Jetson (số liệu chính thức Pebble Square).",
        "Pebble Square 그룹의 동일한 Analog-PIM 플랫폼 — MINT · 17.6 TOPS/W · ~50만 개 양산 · SK하이닉스 NDA; PAPAYA 세대: 엣지 GPU(Jetson) 대비 연산효율 ~100배 · 전력 ~1/50 (Pebble Square 공식 수치).",
        "All on the Pebble Square group's Analog-PIM platform — MINT · 17.6 TOPS/W · ~500k produced · SK hynix NDA; the PAPAYA generation: ~100× compute efficiency & ~1/50 the power vs an edge GPU (Jetson) — official Pebble Square figures.",
      ),
      foot: L(
        "Nguồn: thị trường — IMARC Group 2025; benchmark — IR Deck Pebble Square 2026 · Đây là độ chín thị trường, chưa phải thứ tự Pebble Vina chọn trước.",
        "출처: 시장 — IMARC Group 2025; 벤치마크 — Pebble Square IR Deck 2026 · 시장 성숙도이며 Pebble Vina의 우선순위는 아닙니다.",
        "Sources: market — IMARC Group 2025; benchmark — Pebble Square IR Deck 2026 · This is market readiness, not Pebble Vina's chosen order.",
      ),
    },
    need: ["Bổ số machine vision/QC riêng VN (đang dùng anchor Amkor)", "GM xác nhận nhãn độ chín 4 bậc", "Native proofread KO/EN"],
    notes: "MỚI (2026-06-15, GM): overview xếp 4 năng lực PS theo ĐỘ CHÍN THỊ TRƯỜNG VN (trên→dưới) + GỘP công nghệ PS vào dẫn chứng (slide 'nền tảng ta chọn' cũ đã BỎ — GM 2026-06-15). Mỗi rung gắn trụ PS: Security/Failure Analysis/Vision/Sound; dòng platform = nền tảng Analog-PIM (MINT · 17,6 TOPS/W · ~500k chip · NDA SK hynix). KHUNG: 'độ chín thị trường' (khách quan) ≠ 'thứ tự ưu tiên của ta' → foot nói thẳng, KHÔNG đụng stance HOÃN-priority của slide 04 (matrix). Foot ghi NGUỒN số (IMARC 2025) theo yêu cầu GM. Thứ tự: An ninh/CCTV (+17.6%) > Bảo trì dự đoán (khớp KOCHAM) > Thị giác/QC (anchor Amkor; số riêng VN ❌) > Giọng nói (B2C). Số ✅ từ _research-vn-segments-map.md; công nghệ PS từ _research-pebble-square-services.md. CẬP NHẬT 2026-06-18 (nạp IR Deck PS 05/01/2026, company/sources/): thêm benchmark CHÍNH THỨC PS vào dòng platform — PAPAYA FLEX vs NVIDIA Jetson Nano ~100× hiệu suất & ~1/50 điện (IR Deck tr.14); trạm 5G vs NVIDIA L4 ~10.000× điện (tr.18) để dành LỜI THOẠI. GỠ guardrail cũ 'KHÔNG trình 100× Jetson' — nay là SỐ CHÍNH THỨC của PS, CEO bảo chứng được (đã dẫn nguồn 'số liệu Pebble Square'). PAPAYA đã xác nhận → gỡ 🟡. ARC-FAULT: IR Deck tr.15 LIỆT KÊ 'Arc-Fault Detection Devices' trong AI-Driven Failure Analysis → arc-fault nằm trong phạm vi ứng dụng PS TỰ NÊU (không còn chỉ là 'góc PV khởi xướng'); nhưng vẫn là ứng dụng ĐÍCH, CHƯA phải sản phẩm benchmark đã ship — đừng claim quá (memory MDPI vẫn giữ). Analog-PIM giữ nguyên ở slide này (đúng cho 4 năng lực edge); ESPRESSO/Digital-PIM để slide 06.",
    why: "Sau khi BỎ slide 'nền tảng ta chọn', slide này gánh luôn vai trò chứng minh năng lực PS — gộp công nghệ PS vào dẫn chứng từng mảng + dòng nền tảng Analog-PIM. Vẫn là bậc 'answer-first' (thị trường VN chín tới đâu) TRƯỚC map chi tiết (04). Nguồn: _research-vn-segments-map.md (đầu B); _research-pebble-square-services.md (đầu A + công nghệ PS).",
  },

  // ===== 04 · MAP HAI ĐẦU — năng lực PS ↔ phân khúc VN (HOÃN priority) · figure: matrix =====
  {
    n: 4, file: "04-menu-nen-tang.md", nhip: 2, owner: "GM", status: "drafting", tech: "nhẹ", gatDau: "Cả phòng (khách có nhà máy)",
    eyebrow: L("Cách tiếp cận · Sản phẩm cho từng bài toán", "접근 방식 · 과제별 제품", "Our approach · A product per problem"),
    title: L("Sản phẩm nào cho bài toán nào", "어떤 제품으로 어떤 과제를", "Which product for which problem"),
    headline: L(
      "Một nền tảng Edge-AI đa năng của *nhóm Pebble Square* — và Pebble Vina đưa từng năng lực vào đúng phân khúc thị trường Việt Nam đang có nhu cầu thật.",
      "*Pebble Square 그룹*의 다목적 엣지 AI 플랫폼 — Pebble Vina는 각 역량을 실제 수요가 있는 베트남 시장 부문에 직접 연결합니다.",
      "A multi-purpose Edge-AI platform from the *Pebble Square group* — and Pebble Vina brings each capability to the Vietnamese market segments with real demand.",
    ),
    figure: {
      kind: "matrix",
      cols: [
        {
          cap: L("On-Device Sound · giọng nói", "On-Device Sound · 음성", "On-Device Sound · voice"),
          seg: L("Smart home & loa/đèn giọng nói tiếng Việt", "스마트홈 & 베트남어 음성 기기", "Smart home & Vietnamese-voice devices"),
          stat: "Chip MINT · Analog-PIM",
        },
        {
          cap: L("On-Device Vision · thị giác", "On-Device Vision · 비전", "On-Device Vision"),
          seg: L("QC kiểm lỗi dây chuyền điện tử", "전자 제조 라인 QC 검사", "Electronics-line QC inspection"),
          stat: "Chip MINT · Analog-PIM",
        },
        {
          cap: L("On-Device Security · an ninh", "On-Device Security · 보안", "On-Device Security"),
          seg: L("Giám sát video & camera AI, không cloud", "영상 감시 & AI 카메라 · 논클라우드", "Video surveillance & AI cameras, no cloud"),
          stat: "Chip MINT · Analog-PIM",
        },
        {
          cap: L("Failure Analysis · bảo trì dự đoán", "Failure Analysis · 예지보전", "Failure Analysis"),
          seg: L("Máy móc nhà máy & an toàn điện", "공장 설비 & 전기 안전", "Factory machinery & electrical safety"),
          stat: "Chip MINT · Analog-PIM",
        },
      ],
      bar: L(
        "KOCHAM — mạng lưới doanh nghiệp Hàn tại Việt Nam: một tập khách, cả bốn nhu cầu.",
        "KOCHAM — 베트남 내 한국 기업 네트워크: 하나의 고객군, 네 가지 수요 모두.",
        "KOCHAM — the network of Korean firms in Vietnam: one customer base, all four needs.",
      ),
      foot: L(
        "Một họ chip Analog-PIM (MINT) + SDK Pebble AI Studio → nhiều bài toán Việt Nam; ưu tiên cái nào trước là bước kế tiếp.",
        "하나의 Analog-PIM 칩(MINT) + Pebble AI Studio SDK → 베트남의 여러 과제; 무엇을 먼저 할지는 다음 단계입니다.",
        "One Analog-PIM chip (MINT) + the Pebble AI Studio SDK → many Vietnamese problems; which to prioritize is the next step.",
      ),
    },
    bullets: {
      vi: ["Cùng một chip MINT — bốn dòng sản phẩm Pebble Square (Sound · Vision · Security · Failure Analysis) chạy bốn bài toán Việt Nam."],
      ko: ["같은 MINT 칩 하나 — Pebble Square의 네 제품(Sound · Vision · Security · Failure Analysis)이 베트남의 네 과제를 풉니다."],
      en: ["One and the same MINT chip — four Pebble Square products (Sound · Vision · Security · Failure Analysis) run four Vietnamese problems."],
    },
    need: ["GM xem & chốt khung map (CHƯA cần chốt thứ tự ưu tiên)", "legal đọc TCVN 7447-7-712 + QCVN 01:2020/BCT (arc-fault có/không bắt buộc)", "Bản cho nhà đầu tư: thêm số thị trường ở phụ lục (slide này cố ý BỎ số)", "Native proofread KO/EN"],
    notes: "MAP HAI ĐẦU (chốt 2026-06-15, GM): 'khớp năng lực PS ↔ phân khúc VN, HOÃN priority'. ĐỔI 2026-06-16 (GM): slide giờ ghi RÕ TÊN SẢN PHẨM Pebble Square cho từng case — mỗi cột = 1 trụ sản phẩm (On-Device Sound/Vision/Security + Failure Analysis) → 1 phân khúc VN; ô dưới ghi CHIP. BỎ HẾT số thị trường ($/%/×3) + bỏ ✅/emoji theo yêu cầu GM (số dời sang bản phụ lục cho nhà đầu tư). CHIP: chỉ dùng MINT (gen-2, ✅ đã sản xuất ~500k, nền Analog-PIM) cho cả 4 — KHÔNG bịa chip-khác-nhau-theo-case (CEO PS ngồi dưới); PAPAYA gen-3 còn 🟡 → không lên slide. SDK Pebble AI Studio ở foot. Thông điệp 'một chip, nhiều sản phẩm, nhiều bài toán' khớp luôn stance HOÃN-priority. LẰN RANH: arc-fault/an toàn điện nằm trong Failure Analysis như ứng dụng PV KHỞI XƯỚNG, KHÔNG gán PS. Số gốc vẫn lưu ở _research-vn-segments-map.md.",
    why: "Hiện thực hóa 'một nền tảng, nhiều bài toán' bằng cách MAP minh bạch (sản phẩm PS + chip ↔ bài toán VN) — đặt nền cho lộ trình (06) mà KHÔNG khóa sớm vào một vertical. Hoãn priority = trung thực (chưa chốt beachhead) + giữ linh hoạt. Nguồn: _research-pebble-square-services.md (danh mục sản phẩm + chip MINT); _research-vn-segments-map.md (bài toán VN).",
  },

  // ===== 05 · CÙNG MỘT NHÀ — KHÔNG PHẢI MUA–BÁN (PV = mũi nhọn VN của nhóm PS; vòng lặp khóa lợi ích) · figure: flow (vòng lặp) =====
  {
    n: 5, file: "05-cong-sinh.md", nhip: 3, owner: "GM", status: "drafting", tech: "non", gatDau: "CEO Pebble Square + Nhà đầu tư",
    eyebrow: L("Quan hệ · Một nhà", "관계 · 한 그룹", "The relationship · One group"),
    title: L("Không phải mua–bán", "거래가 아닙니다", "Not a buy–sell deal"),
    headline: L(
      "Pebble Square và Pebble Vina là *cùng một nhà*: một bên là gốc công nghệ, một bên là *mũi nhọn thị trường Việt Nam* — mỗi thắng lợi ở Việt Nam khiến cả nhóm mạnh hơn.",
      "Pebble Square와 Pebble Vina는 *한 그룹*입니다: 한쪽은 기술의 뿌리, 다른 한쪽은 *베트남 시장의 선봉* — 베트남에서의 성공 하나하나가 그룹 전체를 강하게 만듭니다.",
      "Pebble Square and Pebble Vina are *one group*: one side is the technology root, the other the *Vietnam-market spearhead* — every win in Vietnam makes the whole group stronger.",
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
        "Càng đi càng khóa chặt — vì là *cùng một nhà*, không phải một thương vụ mua–bán.",
        "갈수록 더 단단히 맞물립니다 — *한 그룹*이기 때문이지, 단발성 거래가 아닙니다.",
        "It locks tighter over time — because we are *one group*, not a one-off transaction.",
      ),
    },
    need: ["Điều khoản hỗ trợ thành viên (R&D/đào tạo/MDF) trong cấu trúc nhóm — legal-counsel", "Xác nhận chiến lược ĐNÁ của PS để chạm CEO đúng — analyst", "Native proofread KO/EN"],
    notes: "REFRAME 2026-06-16 (GM): từ 'cộng sinh giữa hai đối tác ngang hàng' → 'CÙNG MỘT NHÀ' (PS = công ty mẹ, PV = mũi nhọn thị trường VN của nhóm). Hook 'Không phải mua–bán' GIỮ (đây là câu chốt vẫn đúng hơn nữa khi là thành viên, không phải reseller). Bỏ tương phản 'hợp đồng phân phối mong manh' (PV không còn định vị nhà phân phối). Hero = VÒNG LẶP khóa lợi ích — pilot VN thắng → de-risk kế hoạch ĐNÁ của PS → PS dồn nguồn lực lại → PV thắng nhanh hơn. Give/get để lời thoại. VN = PoC mô hình lập pháp nhân địa phương (Tokyo 2025) — chạm CEO. Nguồn số PS ở company/parent-pebble-square.md.",
    why: "Sau khi trình nền tảng nhóm PS + độ chín thị trường (03) và bản đồ (04), định nghĩa BẢN CHẤT quan hệ = cùng một nhà (parent–member), không phải mua–bán. Vòng lặp khóa lợi ích cho thấy vì sao PS đặt cược vào mũi nhọn VN. Chạm CEO + nhà đầu tư. Nguồn: ADR 0002; parent §mô hình mở rộng; 06-cong-sinh (archive).",
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
          sub: L("Đa giải pháp · trung tâm Pebble Square cho ĐNÁ · công ty giải pháp đúng nghĩa", "다중 솔루션 · 동남아 Pebble Square 거점 · 진정한 솔루션 기업", "Multi-solution · Pebble Square's SEA hub · a true solutions company"),
        },
      ],
      foot: L(
        "Từ Việt Nam → Đông Nam Á · 3 trục cùng lên: địa lý · ứng dụng · vai trò (đưa công nghệ → giải pháp → hub khu vực).",
        "베트남 → 동남아 · 세 축 동반 성장: 지리 · 응용 · 역할 (기술 도입 → 솔루션 → 권역 거점).",
        "Vietnam → SEA · three axes rising together: geography · applications · role (deploy tech → solutions → regional hub).",
      ),
    },
    bullets: {
      vi: ["Bối cảnh: điện mặt trời Đông Nam Á ~38 → 93 GW vào 2030 (ước tính) — thị trường để mở rộng."],
      ko: ["배경: 동남아 태양광 ~38 → 93 GW (2030, 추정) — 확장할 시장."],
      en: ["Context: Southeast Asia solar ~38 → 93 GW by 2030 (estimate) — room to expand."],
    },
    need: ["GM chốt beachhead Chân trời 1 (đồng bộ slide 04 matrix)", "Chốt nước ĐNÁ ưu tiên + thứ tự vertical CT2 — analyst", "Native proofread KO/EN"],
    notes: "Định hướng KHÔNG cam kết cứng — nói theo chân trời, KHÔNG quý/doanh số. REFRAME 2026-06-16 (GM): trục VAI TRÒ đổi 'phân phối → giải pháp' → 'đưa công nghệ → giải pháp → hub khu vực' (PV là thành viên VN của nhóm PS, không phải nhà phân phối). Chân trời 3 BỎ 'brand riêng' (Hướng C cũ) → 'trung tâm Pebble Square cho ĐNÁ' (đảo ADR 0001→0002: co-brand giữ đậm, PV ở dưới ô của nhóm PS). Số ĐNÁ là 🟡 ƯỚC TÍNH (Mordor, gián tiếp) — truy báo cáo gốc trước khi trình nhà đầu tư lớn. Mở ứng dụng phải bám vertical PS tự claim, KHÔNG mượn Syntiant/Mythic làm sản phẩm PS.",
    why: "Vẽ lộ trình lớn dần + motif 'làm từng bước'. Trục ứng dụng mở sang vertical thật PS → trả lời phê bình 'quá hẹp một ứng dụng'. Gật đầu kép investor (return) + CEO (mỗi chân trời PS hiện diện sâu hơn ở VN/ĐNÁ qua thành viên của mình). Nguồn: 07-dich-den (archive); ADR 0002; _research-market §07.",
  },

  // ===== 07 · LỜI MỜI + CẢM ƠN — bookend, đóng vòng motif 'viên gạch/cây cầu' · figure: bridge =====
  {
    n: 7, file: "07-loi-moi.md", nhip: 5, owner: "growth", status: "drafting", tech: "non", gatDau: "Cả phòng",
    cobrand: true,
    eyebrow: L("Lời mời · Cảm ơn", "초대 · 감사", "Invitation · Thank you"),
    title: L("Cùng dựng cây cầu", "함께 다리를 놓다", "Let's build the bridge together"),
    headline: L(
      "Pebble Vina — *thành viên Việt Nam của Pebble Square* — đặt mục tiêu trở thành công ty giải pháp Edge-AI cho Việt Nam và *Đông Nam Á*, và sẽ làm cho nó thành hiện thực, từng bước một. Hôm nay là viên gạch đầu tiên.",
      "Pebble Vina는 — *Pebble Square의 베트남 멤버사*로서 — 베트남과 *동남아*를 위한 엣지 AI 솔루션 기업을 목표로 하며, 한 걸음씩 현실로 만들어 가겠습니다. 오늘이 그 첫 번째 벽돌입니다.",
      "Pebble Vina — *Pebble Square's Vietnam member* — aims to become an Edge-AI solutions company for Vietnam and *Southeast Asia*, and will make it real, step by step. Today is the first stone.",
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
      vi: ["Cùng công ty mẹ *Pebble Square*, Pebble Vina mời quý nhà đầu tư và quý khách đồng hành — mỗi người một viên gạch của cây cầu.", "Xin trân trọng cảm ơn."],
      ko: ["*Pebble Square*와 함께, Pebble Vina가 투자자와 귀빈 여러분의 동행을 청합니다 — 각자가 다리의 벽돌 하나입니다.", "진심으로 감사드립니다."],
      en: ["Together with our parent *Pebble Square*, Pebble Vina invites our investors and guests to join — each of you a stone in the bridge.", "With sincere thanks."],
    },
    need: ["Chốt câu định vị bookend cuối (đồng bộ slide 02)", "Thông tin liên hệ + người nhận follow-up từng nhóm", "Native proofread KO/EN"],
    notes: "Bookend đóng vòng: motif slide 02 + hình bridge của chính slide kết + slogan bìa. REFRAME 2026-06-16 (GM): bookend giờ vọng lại định vị mới 'thành viên VN của Pebble Square' (slide 02), không còn 'định vị hai thì'. 'Công ty giải pháp cho VN+ĐNÁ' = tham vọng tăng trưởng của thành viên, vẫn giữ. Ask MỀM trên sân khấu (mời đồng hành); ask CỨNG để gặp riêng — investor (vốn+KOCHAM), CEO Pebble Square (làm sâu cấu trúc thành viên: R&D/đào tạo/MDF/nhãn hiệu), khách (pilot). KHÔNG biến slide kết thành bảng giá.",
    why: "Tri giác đóng vòng (bookend slide 02) + The Ask phân tầng. Ask mềm vì thể loại ra mắt, phòng hỗn hợp → ask cứng để gặp riêng. Nguồn: 10-keu-goi-cam-on (archive); slide 02 (bookend); README §5.",
  },
];

/** Các slide nằm trong luồng trình chiếu chính (bỏ phụ lục). */
export const DECK = SLIDES.filter((s) => !s.appendix);
/** Tra cứu nhanh slide phụ lục đầu tiên (mở bằng phím "a"). */
export const APPENDIX = SLIDES.filter((s) => s.appendix);
