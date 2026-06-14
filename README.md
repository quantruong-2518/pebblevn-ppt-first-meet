# pebblevn-ppt-first-meet

Bản trình chiếu ra mắt **Pebble Vina** — Next.js + Tailwind v4 + Motion + shadcn.
Nội dung tam ngữ (Việt · Hàn · Anh) nằm trong `lib/slides.ts`; app render qua các component.

## Chạy

```bash
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
- **`a`** — mở/đóng **phụ lục kỹ thuật** (KHÔNG nằm trong luồng chính). `Esc` để thoát.
- `f` — toàn màn hình. · Bấm mép trái/phải màn hình — lùi/tiến.

## Cấu trúc

```
.
├── app/
│   ├── layout.tsx      # nạp IBM Plex (Serif/Sans/Mono) + Noto KR (phủ Hangul) qua next/font
│   ├── globals.css     # Tailwind v4 @theme: type triad + bảng màu "instrument" + nền blueprint
│   └── page.tsx        # khung deck + điều hướng + toggle ngôn ngữ + phụ lục + AnimatePresence
├── components/
│   ├── Slide.tsx       # 1 slide (cover / content) — render theo ngôn ngữ
│   ├── Figure.tsx      # 5 khung hình: stat · flow · forces · twocol · bridge (nhãn theo ngôn ngữ)
│   └── ui/badge.tsx    # shadcn-style (own-your-code)
├── lib/
│   ├── slides.ts       # DỮ LIỆU slide tam ngữ {vi,ko,en} — sửa nội dung ở đây
│   └── utils.ts        # cn()
└── components.json     # cấu hình shadcn (npx shadcn add … hoạt động)
```

## Nội dung tam ngữ trong `lib/slides.ts`

Mỗi slide gồm `eyebrow / title / headline / bullets / figure` ở ba ngôn ngữ `{vi, ko, en}` (helper `L()`).
Slide có `appendix: true` được lọc khỏi luồng chính (`DECK`) và chỉ mở bằng phím `a`.

## Hệ thiết kế (concept: "instrument / blueprint kỹ thuật")

- **Type triad IBM Plex** + **Noto Sans/Serif KR** (phủ Hangul cho chế độ tiếng Hàn). Serif = tiêu đề uy tín ·
  Sans = nội dung (phủ Việt + Hàn) · Mono = số/nhãn kiểu đồng hồ. Tránh font generic (Inter/Roboto).
- **Màu:** nền navy-ink sâu + lưới blueprint mảnh; accent xanh điện `#4f93e8`; vàng tiết chế `#e0b056`
  (sắc Hàn/uy tín, dùng ít). Tông "kỹ sư nói với kỹ sư", không hào nhoáng.
- **Motion:** chuyển slide hướng-aware (trượt + mờ + blur nhẹ); trong slide stagger eyebrow → tiêu đề →
  headline → figure → bullet. Đổi ngôn ngữ = re-stagger (key theo `lang`).

## Thêm component shadcn

```bash
npx shadcn@latest add button card dialog
```

(đã có `components.json` + token màu trong `globals.css`, style `new-york`, baseColor `slate`.)
