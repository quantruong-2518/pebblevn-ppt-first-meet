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
- `m` — bật/tắt **bảng meta** (owner · status · nhịp · "vì sao slide này" · file nguồn).
- `f` — toàn màn hình.
- Bấm mép trái/phải màn hình — lùi/tiến.

## Cấu trúc

```
deck/
├── app/
│   ├── layout.tsx      # nạp bộ ba IBM Plex (Serif/Sans/Mono) qua next/font
│   ├── globals.css     # Tailwind v4 @theme: type triad + bảng màu "instrument" + nền blueprint
│   └── page.tsx        # khung deck + điều hướng + AnimatePresence (chuyển slide)
├── components/
│   ├── Slide.tsx       # 1 slide (cover / content) + stagger motion
│   ├── MetaPanel.tsx   # bảng meta trượt phải (truy vết)
│   └── ui/badge.tsx    # shadcn-style (own-your-code)
├── lib/
│   ├── slides.ts       # DỮ LIỆU slide (mirror ../slides/*.md) — sửa nội dung ở đây
│   └── utils.ts        # cn()
└── components.json     # cấu hình shadcn (npx shadcn add … hoạt động)
```

## Hệ thiết kế (concept: "instrument / blueprint kỹ thuật")

- **Type triad IBM Plex:** Serif = tiêu đề uy tín · Sans = nội dung (phủ tiếng Việt + Hàn fallback) ·
  Mono = số/nhãn kiểu đồng hồ. Tránh font generic (Inter/Roboto).
- **Màu:** nền navy-ink sâu + lưới blueprint mảnh; accent xanh điện `#4f93e8`; vàng tiết chế `#e0b056`
  (sắc Hàn/uy tín, dùng ít). Tông "kỹ sư nói với kỹ sư", không hào nhoáng.
- **Motion:** chuyển slide hướng-aware (trượt + mờ + blur nhẹ); trong slide stagger eyebrow → tiêu đề →
  headline → bullet; vạch kẻ "draw" khi vào.
- **Quy ước Mono = ASCII:** nhãn/đơn vị tiếng Anh + số (tránh lỗi dấu tiếng Việt trên font Mono). Chữ
  tiếng Việt luôn ở Sans/Serif.

## Thêm component shadcn

```bash
npx shadcn@latest add button card dialog
```

(đã có `components.json` + token màu trong `globals.css`, style `new-york`, baseColor `slate`.)

## Quy ước đồng bộ MD ↔ app

Khi chốt nội dung ở `../slides/NN-*.md`, cập nhật phần tử tương ứng trong `lib/slides.ts`.
Mỗi slide giữ `nhip / owner / status / gatDau / why` để bảng meta luôn truy vết được *vì sao làm vậy*.
Về sau có thể viết script đọc front-matter MD → sinh `slides.ts` để chỉ còn một nguồn.
