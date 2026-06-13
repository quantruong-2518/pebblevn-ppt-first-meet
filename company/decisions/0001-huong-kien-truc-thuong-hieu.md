---
title: Hướng kiến trúc thương hiệu Pebble Vina (C — lai có lộ trình)
status: accepted
owner: GM
updated: 2026-06-13
supersedes:
---

# 0001. Hướng kiến trúc thương hiệu Pebble Vina (C — lai có lộ trình)

## Bối cảnh

Pebble Vina là nhà phân phối độc quyền sản phẩm Edge AI / chip PIM của Pebble Square (Hàn Quốc) tại VN,
giai đoạn pre-revenue. Trước khi đầu tư vào nhận diện hình ảnh (logo/màu/website), GM muốn chốt **cách
định vị thương hiệu**: ta tự giới thiệu là ai, và khách sẽ nhìn ta như công ty thế nào.

Câu hỏi gốc rễ là **mức độ gắn danh tính của ta vào công ty mẹ Pebble Square**. Ràng buộc chi phối:
- Pre-revenue + bán cho hội đồng kỹ thuật, chu kỳ 12–24 tháng → **cần uy tín ngay**, mà uy tín của riêng
  ta thì chưa có → áp lực mượn uy tín của principal.
- Nhưng giá trị thật của một nhà phân phối là **năng lực bản địa** (hỗ trợ kỹ thuật/FAE, tuân thủ
  TCVN/QCVN, bảo hành tại chỗ, quan hệ KOCHAM) — thứ principal ở Seoul không cung cấp được.
- **Rủi ro principal là thật:** trạng thái hợp đồng độc quyền còn `[CẦN ĐIỀN]`; có chỉ tiêu doanh số tối
  thiểu; Pebble Square là startup 2021 còn non (có thể bị M&A / đổi chiến lược).
- Chính cái tên công ty **"Pebble Vina"** đã hard-code danh tính vào principal ở cấp pháp nhân.

Phân tích đầy đủ: `planning/2026-06-13-dinh-vi-thuong-hieu-pebble-vina.md` (§2).

## Các phương án đã cân nhắc

1. **Hướng A — "Cánh tay Việt Nam của Pebble Square" (co-brand mạnh).**
   *Ưu:* tạo niềm tin nhanh nhất, chi phí brand thấp nhất, rất hợp khách Hàn (đồng hương + đồ Hàn chính hãng).
   *Nhược:* phụ thuộc principal cao nhất, ta thành cái bóng, không tích lũy tài sản brand riêng, rủi ro tồn
   vong nếu quan hệ Pebble Square thay đổi; room mở rộng hẹp.

2. **Hướng B — "Công ty giải pháp riêng" (Pebble là ingredient brand, kiểu "Intel Inside").**
   *Ưu:* room mở rộng lớn nhất, độc lập với principal, tài sản brand thuộc về ta.
   *Nhược:* pre-revenue chưa đủ uy tín tự đứng → khách kỹ thuật chưa tin → niềm tin xây chậm, bán quá sức
   một nhà phân phối non trẻ.

3. **Hướng C — Lai có lộ trình.** Nghiêng A ở đầu để mượn uy tín, **chủ động dịch chuyển sang B** khi đã có
   case study & năng lực chứng minh. *Ưu:* lấy cái tốt của cả hai theo thời gian, giảm rủi ro principal có
   chủ đích, khớp chính chiến lược mở rộng của Pebble Square (họ muốn đối tác có năng lực thị trường riêng).
   *Nhược:* cần kỷ luật thực thi để thực sự dịch chuyển (nếu lười, C trượt về A vĩnh viễn).

## Quyết định

**Chọn Hướng C — lai có lộ trình,** vận hành theo nguyên tắc **"vay uy tín Hàn, xây tài sản Việt".**

- Giai đoạn đầu: co-brand mạnh "Pebble Vina × Pebble Square" để mượn uy tín Made-in-Korea / PIM.
- **Trigger chuyển trọng tâm A→B = một sự kiện, không phải mốc thời gian: ngay sau pilot/case study đầu
  tiên.** Mỗi pilot phải kết tủa thành case study **mang tên Pebble Vina** — đây là cơ chế chuyển A→B.
- Giữ nguyên tên công ty "Pebble Vina"; bù lại đầu tư sớm vào một **"tên giải pháp" riêng** cho beachhead
  arc-fault làm chỗ bám cho thương hiệu riêng (tên cụ thể: GM còn cần chốt).

*Vì sao:* ở pre-revenue ta cần uy tín ngay (loại B thuần), nhưng đặt 100% danh tính vào một startup principal
còn non là rủi ro tồn vong (loại A thuần). C là con đường duy nhất cân bằng được hai sức ép này, lại làm ta
thành đối tác giá trị hơn khi đàm phán quyền độc quyền.

## Hệ quả

**Mở ra:**
- Định vị, thông điệp, phân khúc trong tài liệu định vị (`planning/2026-06-13-...`) trở thành nền tảng làm việc.
- Cho phép khởi động các tài sản bán hàng giai đoạn đầu theo phong cách co-brand (one-pager song ngữ, datasheet
  bản địa hóa) — dẫn yếu tố Hàn với khách Hàn, dẫn năng lực/tuân thủ với khách Việt.

**Đóng lại / chấp nhận đánh đổi:**
- Không theo A thuần (chấp nhận chi phí xây tài sản riêng dần) và không theo B thuần (chấp nhận phụ thuộc
  principal ở giai đoạn đầu).
- Rủi ro chấp nhận: nếu thiếu kỷ luật tạo case study, C có thể trượt về A trên thực tế.

**Điều kiện chưa thỏa (lock cứng phụ thuộc):** Quyết định này **giả định** hợp đồng phân phối cho ta
(a) quyền dùng nhãn hiệu/tài sản Pebble Square cho co-brand, và (b) **không cấm** xây thương hiệu giải pháp
riêng. Trạng thái hợp đồng còn `[CẦN ĐIỀN]` → phải đưa đúng hai quyền này vào checklist đàm phán (mục IP/nhãn
hiệu trong `market/_phap-ly-phan-phoi-vn.md`). Nếu hợp đồng cấm (b), phải rà lại quyết định này.

**Khi nào rà lại:** (1) khi biết điều khoản IP/nhãn hiệu thực tế của hợp đồng; (2) sau pilot đầu tiên (kích
hoạt dịch chuyển A→B); (3) nếu quan hệ với Pebble Square thay đổi cơ bản (hết độc quyền, M&A, đổi chính sách).

*Liên quan:* trí nhớ `memory/huong-kien-truc-thuong-hieu-c.md`; beachhead `memory/beachhead-arc-fault-dien-mat-troi.md`.
