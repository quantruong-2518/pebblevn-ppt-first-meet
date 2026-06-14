# Pebble Vina — Deck (Next.js + Tailwind v4 + Motion + shadcn)

Bản trình chiếu chính thức (tầng render) cho bài thuyết trình ra mắt Pebble Vina.
**Nguồn sự thật nội dung** vẫn là các file MD ở `../slides/*.md`; app này render chúng qua
`lib/slides.ts` (giữ nguyên meta để truy vết).

## Chạy

```bash
cd projects/thuyet-trinh-ra-mat-pebble-vina/deck
npm install
npm run dev        # http://localhost:3000
```

Build/preview bản tĩnh:

```bash
npm run build && npm start
```

## Điều khiển khi trình

- `←` / `→` / `Space` — chuyển slide (có animation hướng).
- **`l`** — đổi ngôn ngữ vòng **VI → KO → EN** (hoặc `1` Việt · `2` Hàn · `3` Anh). Chỉ báo ở góc phải header.
- `m` — bật/tắt **bảng meta** (owner · status · nhịp · "vì sao slide này" · file nguồn). *Working-doc, tiếng Việt.*
- **`a`** — mở/đóng **phụ lục kỹ thuật** (slide 99 — KHÔNG nằm trong luồng chính). `Esc` để thoát.
- `f` — toàn màn hình. · Bấm mép trái/phải màn hình — lùi/tiến.

## Cấu trúc

```
deck/
├── app/
│   ├── layout.tsx      # nạp IBM Plex (Serif/Sans/Mono) + Noto KR (phủ Hangul) qua next/font
│   ├── globals.css     # Tailwind v4 @theme: type triad + bảng màu "instrument" + nền blueprint
│   └── page.tsx        # khung deck + điều hướng + toggle ngôn ngữ + phụ lục + AnimatePresence
├── components/
│   ├── Slide.tsx       # 1 slide (cover / content) — render theo ngôn ngữ; KHÔNG render need/notes (working-doc)
│   ├── Figure.tsx      # 5 khung hình: stat · flow · forces · twocol · bridge (nhãn theo ngôn ngữ)
│   ├── MetaPanel.tsx   # bảng meta trượt phải (truy vết, tiếng Việt nội bộ)
│   └── ui/badge.tsx    # shadcn-style (own-your-code)
├── lib/
│   ├── slides.ts       # DỮ LIỆU slide (mirror ../slides/*.md) — sửa nội dung ở đây. Tách SHOW ↔ working-doc.
│   └── utils.ts        # cn()
└── components.json     # cấu hình shadcn (npx shadcn add … hoạt động)
```

## Hai tầng TÁCH BẠCH trong `slides.ts` (đừng trộn — lỗi gốc của bản cũ)

- **TẦNG SHOW** = `eyebrow/title/headline/bullets/figure` → hiển thị cho khán giả. **Tam ngữ** `{vi,ko,en}` (helper `L()`).
- **WORKING-DOC** = `why/notes/need` + meta → **chỉ** panel meta (`m`). Tiếng Việt nội bộ. **KHÔNG bao giờ lên slide.**
- Phụ lục: slide có `appendix: true` → lọc khỏi luồng chính (`DECK`), chỉ mở bằng `a`.

## Hệ thiết kế (concept: "instrument / blueprint kỹ thuật")

- **Type triad IBM Plex** + **Noto Sans/Serif KR** (phủ Hangul cho chế độ tiếng Hàn). Serif = tiêu đề uy tín ·
  Sans = nội dung (phủ Việt + Hàn) · Mono = số/nhãn kiểu đồng hồ. Tránh font generic (Inter/Roboto).
- **Màu:** nền navy-ink sâu + lưới blueprint mảnh; accent xanh điện `#4f93e8`; vàng tiết chế `#e0b056`
  (sắc Hàn/uy tín, dùng ít). Tông "kỹ sư nói với kỹ sư", không hào nhoáng.
- **Tương phản:** headline dùng `text-ink/85` (KHÔNG `text-muted`) để đọc rõ trên máy chiếu.
- **Motion:** chuyển slide hướng-aware (trượt + mờ + blur nhẹ); trong slide stagger eyebrow → tiêu đề →
  headline → figure → bullet; vạch kẻ "draw" khi vào. Đổi ngôn ngữ = re-stagger (key theo `lang`).
- **Quy ước Mono = ASCII:** nhãn/đơn vị tiếng Anh + số. Chữ tiếng Việt/Hàn luôn ở Sans/Serif.

## Thêm component shadcn

```bash
npx shadcn@latest add button card dialog
```

(đã có `components.json` + token màu trong `globals.css`, style `new-york`, baseColor `slate`.)

## Quy ước đồng bộ MD ↔ app

Khi chốt nội dung ở `../slides/NN-*.md`, cập nhật phần tử tương ứng trong `lib/slides.ts`.
Mỗi slide giữ `nhip / owner / status / gatDau / why` để bảng meta luôn truy vết được *vì sao làm vậy*.
Về sau có thể viết script đọc front-matter MD → sinh `slides.ts` để chỉ còn một nguồn.
