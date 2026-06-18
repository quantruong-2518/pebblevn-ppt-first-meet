---
title: HANDOFF — Trạng thái & việc tiếp theo của deck Pebble Vina
status: in-progress
owner: GM
updated: 2026-06-14
links: [README.md, slides/_research-pebble-square-services.md, nghien-cuu-va-brainstorm.md, deck/lib/slides.ts]
---

# 🤝 HANDOFF — Thuyết trình ra mắt Pebble Vina (đọc file này ĐẦU TIÊN)

> Phiên mới: đọc file này → `README.md` (§3 bảng slide) → `slides/_research-pebble-square-services.md`. Là đủ
> để tiếp tục. Hôm nay 2026-06-14. Sự kiện ra mắt (dự kiến) ~19/06 — kiểm lại với GM.
>
> **⭐ Cập nhật 2026-06-19:** deck nay **9 slide (00–08)** — chèn **slide 05 "cách thực thi"** (chứng minh
> năng lực vận hành: *bản địa hóa · thứ nên mang vào · tech→business*, dạng KHUNG, chưa khóa beachhead). Có
> **bản đồ khán giả & góc nhìn** mới — `slides/_audience-pov-map.md` (đọc cùng README §3): 3 VIP (Kim/KOCHAM ·
> CEO PS · head khách hàng) chung 1 câu hỏi *"PV làm gì với nền tảng PS + người vận hành giỏi ra sao"*. Đánh
> số cũ 05/06/07 → 06/07/08. *(Số dưới đây ở §3–§6 còn theo khung cũ — đối chiếu README §3 cho hiện trạng.)*

## 1. Ta đang làm gì
Làm lại **ý tưởng** bộ slide ra mắt Pebble Vina (**thành viên Việt Nam của nhóm Pebble Square**, Hàn Quốc —
đổi luận chính 2026-06-16, ADR 0002; trước đó định vị "nhà phân phối độc quyền").
Đã qua 2 vòng phê bình của GM:
1. *"Quá tập trung cái Pebble Square CÓ, thiếu lộ trình của Pebble Vina + cộng sinh + hướng ĐNÁ."* → dựng xương
   sống **"Cây cầu: 2 trụ + 1 con đường"** (arc 10 nhịp, thêm nhịp Cộng sinh + lộ trình 3 chân trời). = **v1**.
2. *"Vẫn quá khóa vào arc-fault; nghiên cứu kỹ TẤT CẢ dịch vụ Pebble Square trước."* → nghiên cứu sâu (gồm báo
   Hàn) → **v2**: Pebble Square = **NỀN TẢNG đa năng**; arc-fault = **ứng dụng beachhead của Pebble Vina**.

## 2. Trạng thái hiện tại (2026-06-14)
- ✅ **Khung md v2 đã dựng** ở `slides/*.md` (nguồn sự thật). Đã archive v1: `slides/_archive/2026-06-14-v1-cay-cau-arcfault/`.
- ⚠️ **Tầng render `deck/lib/slides.ts` CÒN Ở v1** — CHƯA đẩy v2 xuống (GM dặn "làm md trước"). md (v2) ≠ slides.ts (v1) là **cố ý**.
- ✅ Deck build OK ở v1 (`cd deck && npm run build` → exit 0). Bìa (00) + tầng UI/figure **không đụng tới** (GM dặn).
- ✅ Research kết tủa: `slides/_research-pebble-square-services.md` (toàn bộ sản phẩm PS, có nguồn báo Hàn),
  `slides/_research-proof.md`, `slides/_research-market.md`.

## 3. 🚩 QUYẾT ĐỊNH ĐANG CHỜ GM (chặn bước tiếp theo)
**Beachhead = mũi nhọn vào VN là gì?** (slide 07 Chân trời 1). Đề xuất đang đặt tạm trong md:
> Ô dù **"Giám sát an toàn & sức khỏe thiết bị cho nhà máy Hàn tại VN"** — **arc-fault là cờ đầu** (lực kéo quy
> định + solar), **bảo trì dự đoán/anomaly là lõi** (khớp năng lực Failure Analysis thật của PS).

GM chưa chốt. Lựa chọn: (a) ô dù trên · (b) arc-fault đơn · (c) thêm beachhead thứ 2 (Home-IoT/voice mà PS đã PoC).
**Phải có quyết định này trước khi đẩy v2 xuống render** (slide 02 & 07 phụ thuộc nó).

## 4. Sự thật CỐT LÕI từ research (đừng làm sai lại)
- 🔴 **arc-fault / điện mặt trời KHÔNG phải sản phẩm Pebble Square** — không có ở bất kỳ nguồn chính thức/báo Hàn
  nào. Là **góc tiếp cận của Pebble Vina**. KHÔNG trình như "PS làm chip arc-fault" trên sân khấu (CEO họ ngồi dưới).
- 🟢 **PS là nền tảng đa năng:** họ chip **MOCHA**(2021)→**MINT**(gen-2, ~500k chip, 17,6 TOPS/W)→**PAPAYA/FLEX**
  (gen-3, 0,5 TOPS, 30 TOPS/W, ~10mm). 3 trụ **Sound/Vision/Security** + **Failure Analysis**. Biệt danh báo Hàn: "전천후 반도체 / all-weather chip".
- 🟢 **Honor hooks THẬT (mạnh, an toàn):** JV Saudi "Cluster AI Labs" (~100 tỷ KRW, nhắm NEOM) · giải **KGCCI** ·
  NDA **SK hynix** · hợp tác **ETRI** · PoC: đèn nhận diện giọng nói + chuông khẩn cấp; Home-IoT với **MEISEI** (Nhật).
- 🟠 **CEO có thể là Lee Choong-hyun (이충현), KHÔNG phải Bae Hak-yeol** (nguồn 2024–25 + trang chính thức). Repo ghi ngược → cần xác nhận PS.
- 🟠 **TRÁNH số doanh thu** (hồ sơ DN: doanh thu 2025 rất nhỏ, mâu thuẫn narrative). **TRÁNH** "100× GPU" như sự thật độc lập (claim của PS).
- 🔴 **KHÔNG** trích "MDPI 2024 PIM arc-fault" (bài không tồn tại). Arc-fault bằng AI đã có đối thủ (Huawei/Solis/SolarEdge) → khác biệt = on-device/low-power/no-cloud, KHÔNG phải "đầu tiên".

## 5. Việc tiếp theo (thứ tự)
1. **GM chốt beachhead (§3)** → cập nhật slide 02 & 07 nếu khác đề xuất.
2. **Đẩy khung md v2 → `deck/lib/slides.ts`** (render): slide 04 thành nền-tảng (đổi figure flow arc-fault → họ chip + 4 trụ); slide 07 lộ trình + beachhead; 02/06/99 theo md. Tam ngữ VI/KO/EN. **Giữ object bìa `n:0` + không thêm Figure kind mới.** Rồi `npx tsc --noEmit` + `npm run build` + duyệt thử.
3. **Sửa `company/parent-pebble-square.md`** cho khớp research (thêm MOCHA/PAPAYA; sửa CEO; gỡ arc-fault khỏi bảng sản phẩm PS; thêm JV Saudi/KGCCI/SK hynix/ETRI; gắn nhãn "chưa kiểm chứng" cho lộ trình automotive/datacenter). *GM đã được hỏi, chờ đồng ý.*
4. **Gửi Pebble Square 4 câu hỏi:** CEO hiện tại? spec PAPAYA/MOCHA? cho phép PV định vị arc-fault? có PoC arc-fault dùng được không?
5. **Điền dữ liệu slide:** honor hooks slide 04 (product-lead), số kinh tế slide 08 (cfo — cần giá nhập HĐ), nước ĐNÁ slide 07 (analyst).
6. **Biên tập ngôn ngữ:** chạy skill `slide-copyedit` (VI) trước khi chốt; KO/EN cần native proofread.

## 6. Bản đồ file
- **Khung slide (nguồn):** `slides/00-bia.md` … `10-keu-goi-cam-on.md` + `99-phu-luc-ky-thuat.md` (v2)
- **Render:** `deck/lib/slides.ts` (CÒN v1) · chạy `cd deck && npm run dev`
- **Chỉ mục/khung:** `README.md` (§3 bảng + xương sống v2)
- **Research:** `slides/_research-pebble-square-services.md` · `_research-proof.md` · `_research-market.md`
- **Archive khung cũ:** `slides/_archive/2026-06-14-v1-cay-cau-arcfault/`
- **Nhật ký quyết định:** `nghien-cuu-va-brainstorm.md`
- **Khung luận (arc 10 nhịp):** `planning/2026-06-13-khung-thuyet-trinh-pebble-vina.md`
- **Kế hoạch gốc (rework v1):** `/Users/st2518/.claude/plans/cheeky-yawning-raven.md`

## 7. Ràng buộc (đừng phá)
- **Không đụng bìa (00) + tầng UI/figure/3D** — GM chốt.
- **Trung thực:** không bịa số; arc-fault trình đúng là app của PV; rủi ro principal (M&A) KHÔNG lên sân khấu.
- **Lộ trình định hướng**, không cam kết ngày/số cứng trên sân khấu (chưa ký độc quyền, chưa có pilot tên).
- Tiếng Việt là ngôn ngữ làm việc; tam ngữ VI(gốc)/KO(trang trọng)/EN(thuật ngữ) chỉ ở tầng SHOW của `slides.ts`.
