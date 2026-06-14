---
title: Hệ thiết kế 3D cho deck Pebble Vina — nhất quán "titanium high-tech"
status: proposed
owner: product-lead
updated: 2026-06-14
links: [projects/thuyet-trinh-ra-mat-pebble-vina/README.md, projects/thuyet-trinh-ra-mat-pebble-vina/deck/components/ChipScene.tsx, projects/thuyet-trinh-ra-mat-pebble-vina/deck/app/globals.css, company/parent-pebble-square.md]
---

# Hệ thiết kế 3D cho deck — "titanium high-tech"

> **Vì sao file này tồn tại.** Bìa đã có một vật thể 3D thật (exploded die Analog-PIM). Khi ta thêm 3D vào
> các slide khác, mỗi món **phải trông cùng một gia đình** — cùng kim loại, cùng ánh sáng, cùng "ngôn ngữ" —
> nếu không deck sẽ vỡ thành nhiều phong cách. File này là **khế ước hình ảnh**: ai dựng item 3D tiếp theo
> đọc đây trước, copy preset, không tự chế bảng màu mới.
>
> **Nguồn tham chiếu (reference implementation):** `deck/components/ChipScene.tsx` — mọi hằng số/preset dưới
> đây đã chạy thật ở đó. Khi sửa hệ, sửa cả hai nơi.

---

## 1. Ba nguyên tắc bất biến

1. **Một kim loại duy nhất: titanium.** Thân mọi vật thể là titanium phay (kim loại, hơi xám-ấm), không
   phải nhựa, không phải sapphire bóng loẹt. Cảm giác: linh kiện bán dẫn cao cấp, "chế tạo chính xác".
2. **Ánh sáng kể chuyện, không phải màu kể chuyện.** Màu thân giữ trung tính; **điểm nhấn = vùng phát sáng**
   (xanh điện cho phần "tính toán/sống", vàng cho tiếp xúc & thương hiệu). Mắt người xem đi theo chỗ sáng.
3. **High-tech = chi tiết đúng chức năng + bo + sần.** Cạnh luôn bo (không cạnh sắc nhựa); bề mặt chịu lực có
   vân sần (micro-texture); mỗi khối mang **cấu kiện phù hợp nội dung** (mảng ô nhớ, chân tiếp xúc, SMD…),
   không phải hộp trơn dán nhãn.

---

## 2. Bảng màu 3D (khoá vào design token của deck)

Lấy thẳng từ `globals.css` để 3D và 2D không lệch tông. **Không thêm màu ngoài bảng này.**

| Vai trò 3D            | Hex       | Token deck        | Dùng cho                                            |
| --------------------- | --------- | ----------------- | -------------------------------------------------- |
| Titanium phay (sáng)  | `#c4c8cd` | (mới, gần `ink`)  | Thân die, khối linh kiện chính                      |
| Titanium anode (tối)  | `#39434e` | (mới, ~`surface`) | Đế/package, khối nền                                |
| Accent — xanh điện    | `#4f93e8` | `--color-accent`  | Vùng tính toán phát sáng, ô nhớ, đường mạch         |
| Accent sâu            | `#1e6fd9` | `--color-accent-deep` | Glow tầng dưới, biến thể chiều sâu              |
| Gold                  | `#e0b056` | `--color-gold`    | Chân tiếp xúc (pins), logo/branding, pad           |
| Nền glow vùng sáng    | `#0a1c34` | ~`--color-navy`   | Màu thân của ô phát sáng (emissive nổi trên đó)     |

> Biến thể thân cho phép xê dịch nhẹ trong dải titanium (`#bcc1c7` … `#cacfd3`) để các khối cạnh nhau **phân
> biệt được mà vẫn cùng họ**. Tuyệt đối không đổi sang vàng/đỏ/tím cho thân.

---

## 3. Chất liệu chuẩn (preset — copy nguyên, đừng chế lại)

Bốn material preset phủ ~mọi nhu cầu. Thông số đã hiệu chỉnh trong `ChipScene.tsx`.

| Preset            | Loại                   | Thông số lõi                                                                 |
| ----------------- | ---------------------- | --------------------------------------------------------------------------- |
| **`titanium`**    | `meshPhysicalMaterial` | `metalness 0.94 · roughness 0.34 · clearcoat 0.6 · envMapIntensity 1.15`     |
| **`darkTitanium`**| `meshPhysicalMaterial` | `metalness 0.85 · roughness 0.46 · clearcoat 0.5` + `roughnessMap` (sần)     |
| **`accentGlow`**  | `meshStandardMaterial` | `color #0a1c34 · emissive #4f93e8 · emissiveIntensity 1.1–1.35`              |
| **`gold`**        | `meshStandardMaterial` | `color #e0b056 · metalness 1 · roughness 0.28`                              |

**"Sần" (micro-texture)** = một `CanvasTexture` nhiễu hạt (xem `makeNoiseTexture()`), gắn vào **cả**
`roughnessMap` **và** `bumpMap` (`bumpScale ~0.012–0.02`). Đây là cách tạo cảm giác bề mặt gia công mà không
cần file ảnh ngoài — chạy offline, nhẹ.

---

## 4. Hình học & ánh sáng (giữ giống nhau giữa các cảnh)

- **Bo cạnh:** dùng `RoundedBox` của drei. Bán kính ~`0.022` cho die mỏng, `0.035–0.05` cho khối lớn. **Không
  bao giờ** dùng `boxGeometry` trần cho khối chính (chỉ dùng cho ô nhỏ/pins).
- **Rig ánh sáng chuẩn** (copy từ `ChipScene`): `ambient 0.5` + key `directional [5,8,4] 1.6` + fill lạnh
  `[-5,4,-3] 0.5 #bcd2ff` + rim ấm `[0,2.5,-6] 0.45 #e0b056`.
- **Environment** (drei `<Environment frames={1}>`) với 4 `Lightformer` (2 rect trắng, 1 rect ấm, 1 ring) —
  đây là thứ làm titanium "ăn" phản chiếu studio. **Bake một lần** (`frames={1}`) cho nhẹ.
- **Camera:** fov `30`, góc 3/4 từ trên (`~[3.3, 2.7, 5.2]`). Mọi cảnh dùng cùng fov để vật thể "cùng tỉ lệ
  thấu kính".

---

## 5. Thư viện mô-típ (motifs tái dùng)

Bộ "cấu kiện" để lắp vào khối cho đúng nội dung — đã có sẵn trong `ChipScene.tsx`:

- **PIM core array** — lưới ô `accentGlow` trên mặt die (xử lý-trong-bộ-nhớ). Số ô đổi theo kích thước khối.
- **Activation bars** — dải bar cao dần theo đường **sigmoid** (mô-típ hàm kích hoạt). Dùng cho khối "logic".
- **Gold pins** — hàng chân tiếp xúc vàng dọc mép (I/O, kết nối).
- **Branding decal** — `CanvasTexture` chữ **PEBBLE SQUARE** + dấu hiệu vuông-bo, in lên mặt khối I/O (xem
  `makeBrandTexture()`). Đây là chỗ "đóng dấu" công ty mẹ trên mọi cảnh có package.
- **SMD nhỏ** — vài hộp tối li ti tạo cảm giác bo mạch thật.

---

## 6. Animation chuẩn

- **Vào cảnh:** "ráp → tách" (assemble → explode). Các mảnh **ráp khít thành một khối** lúc đầu, sau
  `~0.5s` **tách dần từ mảnh thấp nhất lên**, **vừa tách vừa to ra một chút** (`scale 0.86 → 1`, easeOutBack).
- **Nhịp thở:** sau khi tách, cả cụm **trôi rất nhẹ** (`position.y` & `rotation.y` theo sin biên độ ~0.025) —
  đủ để "sống", không đủ để gây nhiễu/jitter nhãn.
- **Legend khoá vật thể:** chiếu anchor 3D → màn hình mỗi frame; leader **vuông góc** (đi ngang → rẽ dọc),
  **khoảng cách-x tới nhãn luôn cố định** (trái hay phải đều bằng nhau). Nhãn = **tên + chú thích in nghiêng**.

---

## 7. Kế hoạch áp dụng theo slide (rollout)

Nguyên tắc: **3D có chủ đích, không trang trí tràn lan.** Mỗi slide tối đa một "anh hùng 3D", phục vụ đúng
luận điểm của nhịp đó. Đề xuất (chờ GM duyệt — cột Status):

| Slide | Nhịp/luận cứ        | Item 3D đề xuất                                  | Mô-típ dùng                          | Status |
| ----- | ------------------- | ----------------------------------------------- | ------------------------------------ | ------ |
| 00 Bìa | —                  | Exploded die Analog-PIM (đã xong)               | core array · activation · pins · brand | ✅ done |
| 04 Giải pháp/bằng chứng | proof   | Die **lắp lại** (reverse explode) → khối nguyên | titanium · accentGlow nhịp           | proposed |
| 03 Vì sao bây giờ   | thế–thời       | Khối Edge AI đặt **tại chỗ** (cạnh thiết bị điện) | titanium · gold pins                 | proposed |
| 07 Đích đến         | vision         | Cùng die nhân bản/lan toả (mảng) — ẩn dụ scale  | core array lặp · glow lan             | idea   |
| 99 Phụ lục kỹ thuật | proof sâu      | Cảnh die xoay chậm, chú thích lớp               | full motif + leader vuông góc        | idea   |

> **Quy tắc nhất quán khi mở slide mới:** (1) import preset & helper từ `ChipScene`, không copy số rời; (2)
> dùng đúng rig sáng + camera fov 30; (3) chỉ glow xanh cho "tính toán", chỉ vàng cho tiếp xúc/brand; (4)
> mọi cạnh bo; (5) nếu cần legend → leader vuông góc, khoảng cách-x cố định, nhãn + chú thích nghiêng.

---

## 8. Việc cần GM quyết / bước tiếp

- [ ] **Duyệt rollout §7** — đồng ý đưa 3D vào slide 03/04/07/99 theo thứ tự nào, hay chỉ giữ ở bìa + 04?
- [ ] **Tách preset thành module dùng chung** (`deck/components/three/materials.ts` + `motifs.tsx`) trước khi
      dựng cảnh thứ hai — để không nhân bản hằng số. *(việc của `product-lead`, ~nửa ngày)*
- [ ] **Hiệu năng đa cảnh:** nếu >1 Canvas/slide, cân nhắc một Canvas dùng chung + chuyển scene, tránh tốn GPU.
- [ ] **Logo Pebble Square chuẩn:** hiện branding decal vẽ tay bằng canvas. Nếu có file logo chính thức, thay
      vào `makeBrandTexture()` cho đúng nhận diện. *(cần GM cấp asset)*
