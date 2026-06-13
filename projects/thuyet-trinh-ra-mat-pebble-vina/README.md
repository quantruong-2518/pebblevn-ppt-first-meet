---
title: Thuyết trình ra mắt Pebble Vina — Chỉ mục & kế hoạch (master index)
status: in-progress
owner: GM
updated: 2026-06-13
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
- **Khán giả (hỗn hợp cấp cao):** nhà đầu tư **bác Kim** (Phó CT KOCHAM) · **CEO Pebble Square** (GS Bae
  Hak-yeol) · **quan khách** · **trộn người có tech / không tech**.
- **Thể loại:** **ra mắt/giới thiệu** — *không* phải pitch đóng kín. Ask cứng (vốn/độc quyền/pilot) để **gặp riêng**.
- **Thông điệp lõi (1 câu):** *"Công nghệ Hàn cho an toàn điện Việt — phát hiện sớm, ngay tại chỗ."*
  (tagline làm việc, chờ GM duyệt — xem `planning/2026-06-13-dinh-vi-... §3`)
- **Điểm yếu nguy hiểm nhất:** **Slide 04 (bằng chứng nó chạy)** — nếu chưa có benchmark/pilot thật, bài hụt "lý-do-tin".

## 2. Vì sao bố cục này (logic gốc — trỏ ra ngoài)

Bài này là **artifact dẫn xuất** từ chuỗi suy luận chiến lược. Đọc theo thứ tự:

1. **Khung chiến lược** → `planning/2026-06-13-khung-chien-luoc-buoc-di-pebble-vina.md`
   *(4 luận cứ: Nhu cầu → Thế → Người → Tri giác, + trục Tài chính; cỗ máy luận cứ→quyết định→business plan)*
2. **Khung luận thuyết trình** → `planning/2026-06-13-khung-thuyet-trinh-pebble-vina.md`
   *(persuasion = 4 luận cứ + bằng chứng + tầm nhìn + phản đề + lời kêu gọi; arc 9 nhịp cho phòng hỗn hợp)*

> Tóm gọn: khung chiến lược = *logic để TA quyết*; khung thuyết trình = *logic để THUYẾT PHỤC phòng*; folder
> này = *thực thi thành slide*. Mỗi slide ↔ một nhịp trong arc 9 nhịp.

## 3. Chỉ mục slide (bảng trạng thái)

| # | File | Nhịp arc | Luận cứ gốc | "Gật đầu" cho | Tech | Owner | Status |
|---|---|---|---|---|---|---|---|
| 00 | [slides/00-bia.md](slides/00-bia.md) | — (bìa) | — | Cả phòng | non | `growth` | skeleton |
| 01 | [slides/01-dinh-vi-chao.md](slides/01-dinh-vi-chao.md) | 0 | Tri giác | Cả phòng | non | `growth`+GM | skeleton |
| 02 | [slides/02-noi-dau.md](slides/02-noi-dau.md) | 1 | Nhu cầu | Cả phòng | non | `growth` | skeleton |
| 03 | [slides/03-vi-sao-bay-gio.md](slides/03-vi-sao-bay-gio.md) | 2 | Thế–thời | Investor, quan khách | nhẹ | `analyst` | skeleton |
| 04 | [slides/04-giai-phap-bang-chung.md](slides/04-giai-phap-bang-chung.md) | 3 | *proof (mới)* | **CEO Pebble Square** | 1 điểm | `product-lead` | skeleton ⚠️ |
| 05 | [slides/05-vi-sao-la-ta.md](slides/05-vi-sao-la-ta.md) | 4 | Thế + Người | **Bác Kim/KOCHAM** | non | `growth`+GM | skeleton |
| 06 | [slides/06-loi-nhuan-kep.md](slides/06-loi-nhuan-kep.md) | 5 | Nhu cầu + Tài chính | Investor | non | `cfo` | skeleton |
| 07 | [slides/07-dich-den.md](slides/07-dich-den.md) | 6 | *vision (mới)* | Investor + CEO | non | GM+`analyst` | skeleton |
| 08 | [slides/08-rui-ro-hoa-giai.md](slides/08-rui-ro-hoa-giai.md) | 7 | *refutatio (mới)* | Investor | non | `chief-of-staff` | skeleton |
| 09 | [slides/09-keu-goi-cam-on.md](slides/09-keu-goi-cam-on.md) | 8 | Tri giác + *Ask* | Cả phòng | non | `growth`+GM | skeleton |
| 99 | [slides/99-phu-luc-ky-thuat.md](slides/99-phu-luc-ky-thuat.md) | phụ lục | proof (sâu) | Kỹ sư hỏi sau | sâu | `product-lead` | skeleton |

## 4. Nguyên tắc trình bày (nhắc nhanh — chi tiết ở khung luận §1)

1. **Một xương sống + chiều sâu theo yêu cầu:** kể ở tầm người ít kỹ thuật nhất; 1 điểm bằng-chứng trong
   luồng (slide 04), chi tiết kỹ thuật ở phụ lục (slide 99).
2. **"Cái gật đầu" cho từng VIP** (cột "gật đầu" ở bảng trên) — mà bài không vỡ vụn.
3. **Honor là chất chịu lực:** tôn vinh công nghệ Pebble Square + CEO; tôn vinh KOCHAM/bác Kim; tông kỹ-sư-nói-với-kỹ-sư.
4. **Rủi ro principal KHÔNG nói trên sân khấu** (CEO của họ ngồi dưới) — để gặp riêng nhà đầu tư. Xem slide 08.

## 5. Kế hoạch làm (ai điền gì, thứ tự, phụ thuộc)

**Thứ tự đề xuất (rủi-ro-trước):**
1. **Slide 04 trước hết** — `product-lead` kiểm: Pebble Square đã có benchmark/pilot dùng được chưa? *(chặn cả bài)*
2. **Slide 01 + 09** — `growth` chốt câu định vị (bookend) cùng GM.
3. **Slide 02, 03, 07** — `analyst` (nỗi đau, vì sao bây giờ, đích đến).
4. **Slide 05** — `growth` + GM (vì sao là ta + honor KOCHAM).
5. **Slide 06** — `cfo` (cần giá nhập từ hợp đồng → có thể chờ).
6. **Slide 08** — `chief-of-staff` (rủi ro, tách public/riêng).
7. **Biên tập tổng + luyện trình + Q&A hai-độ-sâu** — `chief-of-staff` + GM.

**Phụ thuộc dữ liệu (blocker):** Slide 04 & 99 cần **số kỹ thuật** từ Pebble Square; Slide 06 cần **giá nhập**
từ hợp đồng (`[CẦN ĐIỀN]`). Không có hai thứ này thì hai slide đó chỉ là khung rỗng.

## 6. Nghiên cứu & brainstorm

→ [nghien-cuu-va-brainstorm.md](nghien-cuu-va-brainstorm.md) — nhật ký câu hỏi mở, ý tưởng, quyết định phát
sinh khi làm bài (để truy vết *vì sao chọn cách này*).

## 7. Việc cần GM quyết

- [ ] **Ngày & bối cảnh sự kiện** (`[CẦN ĐIỀN]`) — để đặt nhịp công việc & deadline.
- [ ] **Duyệt câu định vị 1 dòng** cho slide 01/09 (bookend).
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
- **`deck/` = TẦNG TRÌNH CHIẾU CHÍNH THỨC** — app **Next.js + Tailwind v4 + Motion + shadcn**, animation
  chuyển slide. Nội dung render từ `deck/lib/slides.ts` (mirror MD, giữ nguyên meta để truy vết). Chạy:
  `cd deck && npm install && npm run dev`. Điều khiển: `← → / Space` · **`m`** bảng meta · **`f`** fullscreen.
  Chi tiết & hệ thiết kế: `deck/README.md`.
- **`index.html` = bản demo nhanh** (self-contained, double-click) — giữ lại để xem nhanh không cần build.
- **Đừng để các nguồn đua nhau:** khi nội dung chốt ở MD, cập nhật `deck/lib/slides.ts` (và `index.html` nếu
  còn dùng) cho khớp. Về sau có thể viết script sinh `slides.ts` từ front-matter MD để chỉ còn một nguồn.
