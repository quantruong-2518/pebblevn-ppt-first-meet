---
title: Đổi kiến trúc thương hiệu — Pebble Vina là thành viên Việt Nam của nhóm Pebble Square
status: accepted
owner: GM
updated: 2026-06-16
supersedes: 0001
---

# 0002. Pebble Vina = thành viên Việt Nam của nhóm Pebble Square (đảo Hướng C)

## Bối cảnh

ADR 0001 (2026-06-13) chốt **Hướng C — "lai có lộ trình"**: định vị Pebble Vina là **công ty Việt độc lập /
nhà phân phối độc quyền**, đầu mượn uy tín Hàn rồi **tách dần sang thương hiệu riêng** ("vay uy tín Hàn, xây
tài sản Việt"). Hướng C dựa trên hai giả định nền: (a) quan hệ với Pebble Square là **phân phối** (mua–bán,
hợp đồng độc quyền theo lãnh thổ, trạng thái `[CẦN ĐIỀN]`); (b) PV cần xây tài sản thương hiệu riêng để giảm
rủi ro phụ thuộc principal.

**2026-06-16, GM cập nhật:** quan hệ pháp lý **đã/đang chuyển sang mô hình công ty con–thành viên** — Pebble
Vina là **thành viên / cánh tay Việt Nam của nhóm Pebble Square** (tương tự cách PS lập pháp nhân Tokyo 5/2025),
KHÔNG còn là nhà phân phối độc lập. Điều này lật giả định (a), kéo theo phải rà lại toàn bộ Hướng C — đúng điều
kiện "khi nào rà lại" số (3) của ADR 0001: *"quan hệ với Pebble Square thay đổi cơ bản"*.

GM cũng chốt **dùng lịch sử & thành tựu của Pebble Square làm xương sống marketing/uy tín** (thành lập 2021 ·
Analog-PIM MINT 17,6 TOPS/W · đã sản xuất ~500k chip · pháp nhân Tokyo 2025 · NDA SK hynix), thay vì xây uy tín
riêng từ đầu.

## Các phương án đã cân nhắc

1. **Giữ Hướng C (độc lập, tách dần).** *Nhược:* mâu thuẫn thực tế pháp lý mới (PV là thành viên, không phải
   nhà phân phối độc lập); lãng phí uy tín sẵn có của công ty mẹ; "xây brand riêng / tách dần" đi ngược lợi ích nhóm.

2. **Hướng A thuần — "Pebble Square Vietnam" (co-brand tối đa).** Dùng gần như tên & nhận diện PS, PV là chi
   nhánh. *Ưu:* uy tín tức thì, rất hợp khách Hàn. *Nhược:* xóa bản sắc Việt ("trái tim Việt Nam"); khó truyền
   thông "doanh nghiệp Việt đáp lời kỷ nguyên vươn mình" (mạch slide 01); cứng nếu giấy tờ pháp nhân chưa xong.

3. **Hướng "thành viên" (vừa) — giữ tên Pebble Vina + pháp nhân/sức Việt, gắn nhãn "thành viên nhóm Pebble
   Square", lấy lịch sử PS làm uy tín mở đầu.** *Ưu:* phản ánh đúng quan hệ mẹ–con mới; tận dụng tối đa lịch sử
   PS làm marketing; giữ bản sắc Việt để khớp mạch quốc gia (slide 01) và quan hệ KOCHAM/khách Việt. *Nhược:*
   phụ thuộc công ty mẹ cao hơn Hướng C (chấp nhận — nay là một nhà).

## Quyết định

**Chọn Hướng "thành viên" (phương án 3).** Pebble Vina định vị là **thành viên Việt Nam của nhóm Pebble Square**
(PS = công ty mẹ), vận hành theo nguyên tắc **"gốc công nghệ Hàn, hiện diện & thực thi Việt"**.

- **Mức co-brand = VỪA:** giữ tên "Pebble Vina" + giữ pháp nhân & năng lực bản địa Việt (FAE, tuân thủ
  TCVN/QCVN, KOCHAM, "trái tim Việt Nam"); GẮN rõ vào nhóm Pebble Square trên mọi tài sản nhận diện.
- **Lịch sử Pebble Square = xương sống uy tín** mở đầu mọi câu chuyện bán hàng (2021 · MINT 17,6 TOPS/W · ~500k
  chip · Tokyo 2025 · NDA SK hynix — **chỉ dùng số đã verified** ở `company/parent-pebble-square.md`; PAPAYA
  gen-3 vẫn 🟡 chưa xác nhận, không dùng).
- **Bỏ "tách dần sang thương hiệu riêng"** (cơ chế A→B của Hướng C): PV ở dưới ô thương hiệu nhóm PS, lớn lên
  như **mũi nhọn thị trường VN → hub giải pháp ĐNÁ của nhóm**, không tách ra độc lập.
- **Bỏ guardrail "chưa ký HĐ / định vị hai thì"** trong deck ra mắt: định vị thành viên nói ở **thì hiện tại**.

*Vì sao:* định vị phải phản ánh đúng quan hệ pháp lý thực tế (mẹ–con), và hướng này khai thác tối đa tài sản
lớn nhất ta đang có — uy tín & lịch sử của công ty mẹ — trong khi vẫn giữ bản sắc Việt cần cho mạch "kỷ nguyên
vươn mình" và khách Việt/KOCHAM.

## Hệ quả

**Mở ra:**
- Deck ra mắt (slide 00/02/05/06/07) reframe sang "thành viên VN của Pebble Square"; lịch sử PS lên tuyến đầu.
  Tầng render `deck/lib/slides.ts` + `deck/components/Slide.tsx` (CobrandLine) đã sửa.
- Nhận diện: dòng co-brand "công ty thành viên Việt Nam của nhóm Pebble Square"; slogan "Trí tuệ Hàn Quốc, trái
  tim Việt Nam" giữ nguyên (khớp luôn hướng thành viên).
- Đàm phán với PS chuyển trọng tâm: từ "điều khoản phân phối độc quyền" → **cấu trúc thành viên/công ty con**
  (sở hữu, hỗ trợ R&D/đào tạo/MDF, quyền dùng nhãn hiệu nhóm).

**Đóng lại / chấp nhận đánh đổi:**
- Chấp nhận phụ thuộc công ty mẹ cao hơn — đánh đổi có chủ đích (nay là một nhà, lợi ích khóa vào nhau; xem slide 05).
- Bỏ con đường "thương hiệu giải pháp độc lập" của Hướng C.

**Điều kiện chưa thỏa / cần đóng (đừng over-claim trước khi có):**
- **Cấu trúc pháp nhân chính xác `[CẦN ĐIỀN]`:** loại hình (công ty con 100% / liên doanh / thành viên góp
  vốn), tỉ lệ sở hữu của Pebble Square, ngày hiệu lực. GM xác nhận **hướng**; giấy tờ cụ thể cần kết tủa vào
  `company/profile.md` + `market/`.
- **CEO Pebble Square đồng thuận cách gọi "thành viên / công ty con" trên sân khấu 19/6** (CEO PS dự lễ ra mắt)
  — xác nhận trước sự kiện.

**Khi nào rà lại:** khi giấy tờ pháp nhân hoàn tất (điền cấu trúc thật); nếu PS đổi chiến lược/sở hữu; nếu quan
hệ mẹ–con thay đổi cơ bản.

*Liên quan:* `company/decisions/0001-huong-kien-truc-thuong-hieu.md` (superseded); `memory/mandate-phan-phoi-doc-quyen.md`;
`memory/huong-kien-truc-thuong-hieu-c.md`; `company/parent-pebble-square.md`; deck `projects/thuyet-trinh-ra-mat-pebble-vina/`.
