---
title: Thuyết trình ra mắt Pebble Vina — Chỉ mục & kế hoạch (master index)
status: in-progress
owner: GM
updated: 2026-06-14
links: [planning/2026-06-13-khung-thuyet-trinh-pebble-vina.md, planning/2026-06-13-khung-chien-luoc-buoc-di-pebble-vina.md, planning/2026-06-13-dinh-vi-thuong-hieu-pebble-vina.md, planning/2026-06-09-co-hoi-thi-truong-viet.md, company/parent-pebble-square.md, company/decisions/0001-huong-kien-truc-thuong-hieu.md]
---

# 🎤 Thuyết trình ra mắt Pebble Vina — Master Index

> **Folder này là gì:** nơi xây bài thuyết trình giới thiệu Pebble Vina, dưới dạng **các file Markdown** —
> mỗi slide một file. File `README.md` này là **chỉ mục gốc**: mở nó là thấy toàn bộ logic, kế hoạch, và
> trạng thái từng slide.
>
> **Nguyên tắc truy vết:** *logic sâu* (vì sao đi hướng này) **không** chép vào đây mà **trỏ về** 2 file khung
> trong `planning/` (single source of truth). Mỗi file slide có mục **"Vì sao slide này"** dẫn ngược về đúng
> nhịp trong khung luận → sau này luôn truy lại được *tại sao lại làm như vậy*.

---

## 1. Tóm tắt một phút (cho người mới mở folder)

- **Mục tiêu:** giới thiệu Pebble Vina, căn chỉnh cả phòng, tạo chính danh & động lượng.
- **Khán giả (phòng nhỏ, 3 VIP cốt lõi):** nhà đầu tư **bác Kim** (Phó CT KOCHAM) · **CEO Pebble Square**
  (Lee Choong-hyun) · **một "head" khách hàng tiềm năng**. Cả ba chung một câu hỏi: *"PV sẽ làm gì ở VN với
  nền tảng PS — và năng lực người vận hành tới đâu?"* → chi tiết: [`slides/_audience-pov-map.md`](slides/_audience-pov-map.md).
- **Thể loại:** **ra mắt/giới thiệu** — *không* phải pitch đóng kín. Ask cứng (vốn/độc quyền/pilot) để **gặp riêng**.
- **Thông điệp lõi (1 câu, v2):** *"Pebble Vina — công ty giải pháp Edge-AI cho VN & ĐNÁ, khởi đầu từ an toàn
  điện, trên nền nền-tảng đa năng độc quyền của Pebble Square."* (tagline làm việc, chờ GM duyệt)
- **Điểm yếu nguy hiểm nhất:** **Slide 04 (Trụ 1 — nền tảng)** thiếu "lý-do-tin" thật; **+ phải trình PS là nền
  tảng đa năng**, KHÔNG gán arc-fault cho PS (arc-fault là ứng dụng của Pebble Vina).

## 2. Vì sao bố cục này (logic gốc — trỏ ra ngoài)

Bài này là **artifact dẫn xuất** từ chuỗi suy luận chiến lược. Đọc theo thứ tự:

1. **Khung chiến lược** → `planning/2026-06-13-khung-chien-luoc-buoc-di-pebble-vina.md`
   *(4 luận cứ: Nhu cầu → Thế → Người → Tri giác, + trục Tài chính; cỗ máy luận cứ→quyết định→business plan)*
2. **Khung luận thuyết trình** → `planning/2026-06-13-khung-thuyet-trinh-pebble-vina.md`
   *(persuasion = 4 luận cứ + bằng chứng + tầm nhìn + phản đề + lời kêu gọi; arc 10 nhịp cho phòng hỗn hợp — đã chèn nhịp Cộng sinh 2026-06-14)*

> Tóm gọn: khung chiến lược = *logic để TA quyết*; khung thuyết trình = *logic để THUYẾT PHỤC phòng*; folder
> này = *thực thi thành slide*. Mỗi slide ↔ một nhịp trong arc 10 nhịp.

## 3. Chỉ mục slide (bảng trạng thái)

> **Xương sống (v2, cập nhật 2026-06-14): "Cây cầu — 2 trụ + 1 con đường".**
> pain → window → **[Trụ 1: NỀN TẢNG đa năng của Pebble Square]** + **[Trụ 2: cỗ máy bản địa]** → **[nhịp cầu
> CỘNG SINH]** → **[con đường 3 CHÂN TRỜI VN→ĐNÁ]** → kinh tế → rủi ro → kêu gọi. Arc 10 nhịp (đã chèn Cộng sinh).
>
> **Sửa lớn v2 (sau nghiên cứu `slides/_research-pebble-square-services.md`):** Pebble Square là **nền tảng
> Edge-AI đa năng** (3 trụ Sound/Vision/Security + Failure Analysis; họ chip MOCHA→MINT→PAPAYA; "all-weather
> chip") — **KHÔNG** phải công ty arc-fault. **arc-fault/an toàn điện = ứng dụng beachhead do Pebble Vina khởi
> xướng** (không phải sản phẩm của PS) → sống ở slide 07, không phải slide 04. Trục sản phẩm của lộ trình mở rộng
> sang các vertical thật của PS. Khung v1 (khóa vào arc-fault) đã archive: `slides/_archive/2026-06-14-v1-cay-cau-arcfault/`.
> Bìa (00) + tầng UI/figure **giữ nguyên**. *(Tầng render `deck/lib/slides.ts` còn ở v1 — sẽ cập nhật sau khi GM chốt khung md v2.)*

> **🎯 Khán giả & góc nhìn:** nguồn sự thật là [`slides/_audience-pov-map.md`](slides/_audience-pov-map.md)
> — *AI nói cho ai, từ giọng nào.* Bảng dưới phản ánh nó (cột **Góc nhìn** + **Gật đầu cho**). Khi đổi
> khung khán giả, sửa bản đồ TRƯỚC rồi mới lan xuống đây + frontmatter từng slide.
>
> **Deck hiện là 9 slide (00–08).** Bản 11 slide cũ (00–10+99 theo arc 10 nhịp) đã gộp lại khi dựng v2;
> slide 05 *"cách thực thi"* được chèn 2026-06-19 (chứng minh năng lực vận hành). Tên file & đánh số dưới là hiện trạng.

| # | File | Nhịp | Góc nhìn (giọng) | Gật đầu cho (người nghe chính) | Tech | Owner | Status |
|---|---|---|---|---|---|---|---|
| 00 | [slides/00-bia.md](slides/00-bia.md) | — (bìa) | PV — đĩnh đạc | Cả phòng · sự kiện nghiêm túc | non | `growth` | skeleton |
| 01 | [slides/01-ky-nguyen-vuon-minh.md](slides/01-ky-nguyen-vuon-minh.md) | mở đầu | PV — đáp lời nhu cầu quốc gia | Kim + khách Việt *(bệ phóng, ngắn)* | non | GM | drafting |
| 02 | [slides/02-dinh-vi-pebble-vina.md](slides/02-dinh-vi-pebble-vina.md) | 0 | PV — người vận hành | Cả phòng *(nhất khách chưa biết PS)* | non | GM | drafting |
| 03 | [slides/03-do-chin-thi-truong.md](slides/03-do-chin-thi-truong.md) | 1 | PV — nhà chiến lược | Kim + khách hàng | nhẹ | GM+`analyst` | drafting |
| 04 | [slides/04-menu-nen-tang.md](slides/04-menu-nen-tang.md) | 2 | PV — nhà vận hành | Khách hàng + CEO PS | nhẹ | GM+`analyst` | drafting ⚠️ |
| 05 | [slides/05-cach-thuc-thi.md](slides/05-cach-thuc-thi.md) | 3 | PV — người vận hành (có phương pháp) | CEO PS + Kim · *"biết CÁCH biến nền tảng thành kết quả"* | nhẹ | GM | drafting 🆕 |
| 06 | [slides/06-cong-sinh.md](slides/06-cong-sinh.md) | 4 | PV — thành viên nhóm | CEO PS + Kim | non | GM+`chief-of-staff` | drafting |
| 07 | [slides/07-lo-trinh.md](slides/07-lo-trinh.md) | 5 | PV — người dẫn dắt | Kim + CEO PS | non | GM+`analyst` | drafting |
| 08 | [slides/08-loi-moi.md](slides/08-loi-moi.md) | 6 | PV — người mời | Cả phòng *(ask riêng từng VIP)* | non | `growth`+GM | drafting |

## 4. Nguyên tắc trình bày (nhắc nhanh — chi tiết ở khung luận §1)

1. **Một xương sống + chiều sâu theo yêu cầu:** kể ở tầm người ít kỹ thuật nhất; 1 điểm bằng-chứng trong
   luồng (slide 04), chi tiết kỹ thuật ở phụ lục (slide 99).
2. **"Cái gật đầu" cho từng VIP** (cột "gật đầu" ở bảng trên) — mà bài không vỡ vụn.
3. **Honor là chất chịu lực:** tôn vinh công nghệ Pebble Square + CEO; tôn vinh KOCHAM/bác Kim; tông kỹ-sư-nói-với-kỹ-sư.
4. **Rủi ro principal KHÔNG nói trên sân khấu** (CEO của họ ngồi dưới) — để gặp riêng nhà đầu tư. Xem slide 09.

## 5. Kế hoạch làm (ai điền gì, thứ tự, phụ thuộc)

**Thứ tự đề xuất (rủi-ro-trước):**
1. **Slide 04 (Trụ 1) trước hết** — `product-lead` kiểm: Pebble Square đã có benchmark/pilot dùng được chưa? *(chặn cả bài)*
2. **Slide 01 + 10** — `growth` chốt câu định vị (bookend) cùng GM.
3. **Slide 02, 03, 07** — `analyst` (nỗi đau, vì sao bây giờ, lộ trình 3 chân trời).
4. **Slide 05 + 06** — `growth`/GM (Trụ 2 bản địa) + GM/`chief-of-staff` (Cộng sinh — cần trạng thái HĐ độc quyền).
5. **Slide 08** — `cfo` (lợi nhuận kép; cần giá nhập từ hợp đồng → có thể chờ).
6. **Slide 09** — `chief-of-staff` (rủi ro, tách public/riêng).
7. **Biên tập tổng + luyện trình + Q&A hai-độ-sâu** — `chief-of-staff` + GM.

**Phụ thuộc dữ liệu (blocker):** Slide 04 & 99 cần **số kỹ thuật** từ Pebble Square; Slide 08 cần **giá nhập**
từ hợp đồng (`[CẦN ĐIỀN]`); Slide 06 (cộng sinh) cần **điều khoản độc quyền/MDF/đào tạo**. Không có thì các
slide đó chỉ là khung rỗng.

## 6. Nghiên cứu & brainstorm

→ [nghien-cuu-va-brainstorm.md](nghien-cuu-va-brainstorm.md) — nhật ký câu hỏi mở, ý tưởng, quyết định phát
sinh khi làm bài (để truy vết *vì sao chọn cách này*).

## 7. Việc cần GM quyết

- [ ] **Ngày & bối cảnh sự kiện** (`[CẦN ĐIỀN]`) — để đặt nhịp công việc & deadline.
- [ ] **Duyệt câu định vị 1 dòng** cho slide 01/10 (bookend) — bản reframe "công ty giải pháp VN→ĐNÁ".
- [ ] **Xác nhận thể loại = ra mắt** (ask cứng để gặp riêng)?
- [ ] **Bằng chứng slide 04:** đã có benchmark/pilot từ Pebble Square chưa, hay cần đi đòi?
- [ ] **Cho phép giao các slide cho agent** theo §5?

## 8. Quy ước folder (để người sau hiểu cách đọc)

- **Đặt tên slide:** `NN-ten-ngan.md` — `NN` = thứ tự trình chiếu (00 bìa, 99 phụ lục).
- **Mỗi file slide có frontmatter:** `slide` (thứ tự), `nhip` (nhịp trong arc), `status`, `owner`, `tech`,
  `gat-dau`. Và các mục: *Thông điệp chính · Nội dung slide · Lời thoại · **Vì sao slide này** · Cần gì để
  hoàn thiện · Lưu ý*.
- **`status` slide:** `skeleton` → `drafting` → `review` → `done`.
- **Quy tắc vàng:** mọi số kỹ thuật phải `product-lead` xác nhận, mọi số tài chính phải `cfo` xác nhận, trước
  khi lên `done`.

## 9. Hai tầng: MD (nguồn) ↔ render (trình chiếu)

- **`slides/*.md` = NGUỒN SỰ THẬT** (nội dung + meta + lý do). Sửa nội dung/logic ở đây.
- **`deck/` = TẦNG TRÌNH CHIẾU CHÍNH THỨC** — app **Next.js + Tailwind v4 + Motion + shadcn**, **tam ngữ
  VI/KO/EN**, có khung hình (figure), phụ lục tách khỏi luồng. Render từ `deck/lib/slides.ts` (mirror MD, giữ
  meta để truy vết). Chạy: `cd deck && npm install && npm run dev`. Điều khiển: `← → / Space` · **`l`** đổi
  ngôn ngữ · **`m`** bảng meta · **`a`** phụ lục · **`f`** fullscreen. Chi tiết & hệ thiết kế: `deck/README.md`.
- **Hệ thiết kế 3D** → [3d-design-system.md](3d-design-system.md) — khế ước hình ảnh cho mọi vật thể 3D trong
  deck (titanium · accent glow · gold; preset chất liệu, mô-típ, animation, rollout theo slide). **Đọc trước
  khi dựng item 3D mới** để giữ nhất quán. Reference: `deck/components/ChipScene.tsx`.
- **`index.html` = ĐÃ NGHỈ HƯU** (2026-06-14) — chỉ còn trang thông báo trỏ về `deck/`. Gỡ để **hết cảnh hai
  bản render đua nhau** (theme sáng vs tối). Nay chỉ còn MỘT tầng render.
- **Tách SHOW ↔ working-doc:** trong `slides.ts`, `eyebrow/title/headline/bullets/figure` là tầng SHOW (tam
  ngữ); `why/notes/need` là working-doc (chỉ panel meta, tiếng Việt) — **không bao giờ render lên slide**.
- **Một nguồn (về sau):** viết script sinh `slides.ts` từ front-matter MD để chỉ còn một nguồn sự thật.
- **`slides/_research-proof.md` · `_research-market.md` · `_research-pebble-square-services.md`** = nhật ký
  research web (2026-06-14) — bằng chứng slide 04 + số liệu thị trường + **TOÀN BỘ sản phẩm/ứng dụng Pebble
  Square** (họ chip, vertical, honor hooks, đính chính CEO), kèm nhãn tin cậy ✅/🟡/❌ và mọi nguồn (gồm báo Hàn).
- **`slides/_archive/`** = các khung deck cũ đã thay (vd `2026-06-14-v1-cay-cau-arcfault/` — bản còn khóa vào arc-fault).
