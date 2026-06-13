// NGUỒN DỮ LIỆU slide (meta + nội dung) — mirror từ ../slides/*.md.
// Mỗi object giữ meta để truy vết: nhip / owner / status / gatDau / why.
// Khi nội dung chốt ở file MD, cập nhật ở đây cho khớp (xem README §9).

export type SlideStatus = "skeleton" | "drafting" | "review" | "done";

export type SlideData = {
  n: number | string;
  file: string;
  nhip: number | string;
  owner: string;
  status: SlideStatus;
  tech: string;
  gatDau: string;
  cover?: boolean;
  eyebrow: string;
  title: string;
  headline?: string;
  bullets?: string[];
  need?: string[];
  cobrand?: boolean;
  notes?: string;
  why: string;
};

export const SLIDES: SlideData[] = [
  {
    n: 0, file: "00-bia.md", nhip: "—", owner: "growth", status: "skeleton", tech: "non", gatDau: "Cả phòng",
    cover: true, eyebrow: "Pebble Vina × Pebble Square", title: "Pebble Vina",
    headline: "Công nghệ Hàn cho an toàn điện Việt — phát hiện sớm, ngay tại chỗ.",
    cobrand: true, need: ["Logo/nhận diện", "Quyền co-brand (IP)", "Tên & ngày sự kiện"],
    why: "Bìa — đặt khối co-brand theo Hướng C (vay uy tín Hàn) ngay hình ảnh đầu. Nguồn: ADR 0001; khung luận §1 (NT3 honor).",
  },
  {
    n: 1, file: "01-dinh-vi-chao.md", nhip: 0, owner: "growth + GM", status: "skeleton", tech: "non", gatDau: "Cả phòng",
    eyebrow: "Pebble Vina là ai", title: "Một câu về chúng tôi",
    headline: "Đối tác chính hãng đưa giải pháp an toàn điện / Edge AI công nghệ Hàn (PIM) vào vận hành thật tại Việt Nam.",
    bullets: ["An toàn điện", "Công nghệ Hàn (PIM)", "Có người Việt lo"],
    notes: "Chào & cảm ơn đúng thứ bậc: bác Kim, CEO Pebble Square, quan khách. Đọc câu định vị — gieo mental model chung.",
    why: "Luận cứ: Tri giác. Nhịp 0. Vai trò BOOKEND (lặp ở slide 09). Honor = chất chịu lực. Nguồn: dinh-vi §1,§3.",
  },
  {
    n: 2, file: "02-noi-dau.md", nhip: 1, owner: "growth", status: "skeleton", tech: "non", gatDau: "Cả phòng",
    eyebrow: "Vấn đề", title: "Cháy do hồ quang & ngừng máy",
    headline: "Điện mặt trời VN bùng nổ — kèm theo rủi ro cháy do hồ quang và ngừng phát. Một sự cố = dừng sản xuất + mất tài sản + mất uy tín.",
    bullets: ["Hồ quang điện → cháy; sự cố ngầm → ngừng phát", "Tổn thất một vụ cháy PV", "\"Việc\" khách cần: đừng để cháy / dừng chuyền / trượt kiểm định"],
    need: ["1 số liệu cháy PV tại VN (analyst)"],
    notes: "Dẫn bằng VẤN ĐỀ KINH DOANH, chưa nhắc chip. Không over-claim 'đảm bảo không cháy'.",
    why: "Luận cứ: Nhu cầu. Nhịp 1. 'Bán kết quả không bán chip'. Nguồn: 2026-06-09 §3; dinh-vi §6.",
  },
  {
    n: 3, file: "03-vi-sao-bay-gio.md", nhip: 2, owner: "analyst", status: "skeleton", tech: "nhẹ", gatDau: "Investor, quan khách",
    eyebrow: "Thời điểm", title: "Vì sao bây giờ",
    headline: "Ba lực vừa hội tụ: quy định an toàn vào cuộc · làn sóng PV đủ tuổi để rủi ro hiện ra · mật độ doanh nghiệp Hàn tại VN dày lên.",
    bullets: ["Quy định: TCVN 7447-7-712:2019 · QCVN 01:2020/BCT", "Bùng nổ PV 2020–2023 → nay vào giai đoạn rủi ro cháy", "China+1: cứ điểm điện tử/bán dẫn, khách Hàn dày đặc", "Cửa sổ phai khi đối thủ bản địa hóa / khóa kênh EPC"],
    need: ["Số PV lắp đặt + DN Hàn có PV (analyst)", "Tình trạng thực thi quy định (A2)"],
    notes: "Khung 'why now' — điều gì VỪA thay đổi. Nói nhẹ phần cửa sổ (đây là slide động lượng).",
    why: "Luận cứ: Thế–thời. Nhịp 2. Phương pháp 'Why now' + chất xúc tác. Nguồn: 2026-06-09 §1; khung chiến lược §4.",
  },
  {
    n: 4, file: "04-giai-phap-bang-chung.md", nhip: 3, owner: "product-lead", status: "skeleton", tech: "1 điểm tech", gatDau: "CEO Pebble Square",
    eyebrow: "Giải pháp + bằng chứng", title: "Nó hoạt động — và đây là bằng chứng",
    headline: "Phát hiện sự cố hồ quang ngay tại thiết bị — điện thấp, độ trễ thấp, không cần cloud — trên chip Analog-PIM của Pebble Square.",
    bullets: ["Sơ đồ: cảm biến → chip PIM tại tủ điện/inverter → cảnh báo sớm", "[HÌNH] benchmark PIM vs ST/TI HOẶC số liệu 1 pilot", "Đóng khung theo KẾT QUẢ, không theo thông số"],
    need: ["Bằng chứng thật từ Pebble Square (CHẶN cả bài)", "MDPI 2024 nếu chưa có pilot VN"],
    notes: "Vinh danh PIM + gốc học thuật JBNU/KAIST/MINT (gật đầu CEO). Ý tưởng: mời CEO nói 1–2 phút ở đây.",
    why: "Luận cứ: BẰNG CHỨNG GIẢI PHÁP (mảnh khung luận bổ sung) — cầu nối 'họ cần'→'ta giải được'. Nhịp 3. Slide tối quan trọng: thiếu = hụt lý-do-tin.",
  },
  {
    n: 5, file: "05-vi-sao-la-ta.md", nhip: 4, owner: "growth + GM", status: "skeleton", tech: "non", gatDau: "Bác Kim / KOCHAM",
    eyebrow: "Vì sao là chúng tôi", title: "Pebble Vina làm được",
    headline: "Công nghệ Hàn cần một đối tác có năng lực thị trường Việt — độc quyền phân phối, mạng lưới KOCHAM, và năng lực bản địa Seoul không cung cấp được.",
    bullets: ["Quyền phân phối độc quyền tại VN (→ ĐNÁ)", "Mạng lưới KOCHAM (bác Kim, Phó CT)", "Năng lực bản địa: FAE · tuân thủ TCVN/QCVN · bảo hành tại chỗ", "Mỗi pilot → case study → mở phân khúc kế (lợi thế tự dày lên)"],
    need: ["Trạng thái độc quyền HĐ (legal)", "Năng lực FAE thực tế (operations)"],
    notes: "Vinh danh bác Kim & KOCHAM (gật đầu investor). Chạm CEO: 'PV là cánh tay Việt/ĐNÁ Seoul không tự dựng'. Nói đúng vai.",
    why: "Luận cứ: Thế + Người. Nhịp 4. 7 Powers: Cornered Resource + Counter-Positioning. Nguồn: 2026-06-09 §5; khung chiến lược §4–5.",
  },
  {
    n: 6, file: "06-loi-nhuan-kep.md", nhip: 5, owner: "cfo", status: "skeleton", tech: "non", gatDau: "Investor",
    eyebrow: "Lợi nhuận kép", title: "Sinh lợi hai phía",
    headline: "Cho KHÁCH (ROI dài hạn: tránh cháy, giảm downtime, tuân thủ) và cho PEBBLE VINA (biên phân phối + dịch vụ).",
    bullets: ["Cột HỌ: tổn thất tránh được + né phạt + tuổi thọ tài sản (tính nhiều năm)", "Cột TA: biên phân phối + dịch vụ tích hợp/hỗ trợ", "Đơn vị kinh tế & đường tới hòa vốn"],
    need: ["Mô hình ROI-khách (cfo)", "Giá nhập từ HĐ → biên (cfo + legal)"],
    notes: "Ngôn ngữ TIỀN & RỦI RO, không thuật ngữ. Không bịa số — chưa có giá nhập thì trình định tính, ghi 'ước tính'.",
    why: "Luận cứ: Nhu cầu (ROI cho HỌ) + trục Tài chính (biên cho TA). Nhịp 5. Plan cần CẢ HAI. Nguồn: khung chiến lược §2.",
  },
  {
    n: 7, file: "07-dich-den.md", nhip: 6, owner: "GM + analyst", status: "skeleton", tech: "non", gatDau: "Investor + CEO",
    eyebrow: "Tầm nhìn", title: "Chúng ta đi tới đâu",
    headline: "Từ an toàn điện mặt trời, dựng cây cầu Edge-AI Hàn → Việt → Đông Nam Á — và lớn lên từ nhà phân phối thành công ty giải pháp.",
    bullets: ["Địa lý: VN → Đông Nam Á (mandate độc quyền)", "Sản phẩm: arc-fault → dòng Pebble khác", "Vai trò: phân phối → công ty giải pháp riêng (Hướng C)"],
    need: ["Quy mô ĐNÁ (analyst)", "Mức 'hứa' tầm nhìn khả tín (GM)"],
    notes: "Gật đầu kép: investor (return lớn) + CEO (PV là cửa ngõ ĐNÁ — đúng chiến lược họ). Neo vào beachhead đã chứng minh.",
    why: "Luận cứ: TẦM NHÌN (mảnh khung luận bổ sung) — để không bị thấy là 'anh buôn arc-fault nhỏ'. Nhịp 6. Nguồn: mandate; ADR 0001; parent.",
  },
  {
    n: 8, file: "08-rui-ro-hoa-giai.md", nhip: 7, owner: "chief-of-staff", status: "skeleton", tech: "non", gatDau: "Investor",
    eyebrow: "Rủi ro", title: "Nhìn thẳng & cách hóa giải",
    headline: "Chúng tôi nhìn thẳng vào rủi ro — và đã có cách phòng. (Chỉ rủi ro thị trường/thực thi.)",
    bullets: ["Đối thủ bản địa hóa → counter-positioning (kết quả + hỗ trợ + tuân thủ)", "Quy định thực thi yếu → cầu capture (tập đoàn Hàn ép chuẩn)", "Tuyển FAE → lộ trình đội hình + đào tạo từ Pebble Square"],
    need: ["Bản 'rủi ro principal' RIÊNG cho gặp nhà đầu tư (không công khai)"],
    notes: "⚠️ RỦI RO PRINCIPAL KHÔNG lên sân khấu (CEO ngồi dưới) — để gặp riêng, dùng Hướng C làm câu trả lời.",
    why: "Luận cứ: Refutatio (mảnh khung luận bổ sung). Nhịp 7. Chọn phản biện theo người trong phòng. Nguồn: khung luận §4.",
  },
  {
    n: 9, file: "09-keu-goi-cam-on.md", nhip: 8, owner: "growth + GM", status: "skeleton", tech: "non", gatDau: "Cả phòng",
    eyebrow: "Lời mời", title: "Cùng dựng cây cầu",
    headline: "Pebble Vina — đối tác chính hãng đưa công nghệ Hàn vào vận hành thật tại Việt Nam. Cùng dựng cây cầu Edge-AI Hàn → Việt → ĐNÁ.",
    bullets: ["Lặp câu định vị slide 01 (đóng vòng)", "Lời kêu gọi chung, không-giao-dịch", "Cảm ơn + liên hệ"],
    notes: "Ask CỨNG để gặp riêng: bác Kim (vốn + cửa KOCHAM) · CEO (độc quyền + IP + MDF) · khách (pilot). Đừng biến slide kết thành bảng giá.",
    why: "Luận cứ: Tri giác (bookend) + The Ask (mảnh khung luận bổ sung). Nhịp 8. Ask mềm sân khấu, cứng gặp riêng. Nguồn: khung luận §0,§5.",
  },
  {
    n: 99, file: "99-phu-luc-ky-thuat.md", nhip: "phụ lục", owner: "product-lead", status: "skeleton", tech: "sâu", gatDau: "Kỹ sư hỏi sau",
    eyebrow: "Phụ lục — depth-on-demand", title: "Chi tiết kỹ thuật",
    headline: "KHÔNG trình mặc định — chỉ mở khi được hỏi, hoặc in handout. Thỏa người có tech mà không loãng luồng chính.",
    bullets: ["Benchmark đầy đủ PIM vs ST/TI/Microchip/NVIDIA-edge", "Kiến trúc Analog-PIM; MINT (~4M khớp, ~30 GOPS)", "Reference design lắp tủ điện/inverter", "Ánh xạ tuân thủ TCVN/QCVN", "Tham chiếu MDPI 2024; JBNU/KAIST"],
    need: ["Toàn bộ số kỹ thuật (product-lead xác minh)"],
    notes: "Mọi số phải kiểm chứng được — kỹ sư sẽ soi. Sai một số = mất uy tín cả bài.",
    why: "Nguyên tắc NT1 'chiều sâu theo yêu cầu' (khung luận §1,§3). Nguồn: parent-pebble-square.md; slide 04.",
  },
];
