---
title: Slide 01b — Bản đồ hành trình (agenda = cây cầu)
slide: "1b"
nhip: "—"
status: skeleton
owner: growth + GM
tech: non
gat-dau: Cả phòng
updated: 2026-06-14
links: [projects/thuyet-trinh-ra-mat-pebble-vina/slides/01-dinh-vi-chao.md, projects/thuyet-trinh-ra-mat-pebble-vina/slides/07-dich-den.md, projects/thuyet-trinh-ra-mat-pebble-vina/HANDOFF.md]
---

# Slide 01b — Bản đồ hành trình (agenda dạng "cây cầu")

## 🎯 Thông điệp chính
> Hôm nay ta cùng đi qua một **cây cầu**: từ **công nghệ Hàn Quốc (Pebble Square)** sang **vận hành thật tại
> Việt Nam (Pebble Vina)** — và xa hơn, **ra Đông Nam Á**.

## 🖼 Nội dung slide (skeleton)
- **Hình trung tâm — bản đồ "cây cầu": 2 trụ + 1 con đường.**
  - **Trụ trái — TRỤ HÀN QUỐC:** Pebble Square (nền công nghệ Edge-AI / Analog-PIM).
  - **Trụ phải — TRỤ VIỆT NAM:** Pebble Vina (vận hành · thị trường · "có người Việt lo").
  - **Con đường (mũi tên) nối hai trụ** = mạch bài, 5–6 trạm:
    **Ai → Nỗi đau → Giải pháp → Cộng sinh → 3 chân trời → Lời mời.**
- **3 nhãn ở cuối đường (preview đích đến — 3 chân trời):**
  ① **An toàn điện** (beachhead) · ② **Việt Nam → ĐNÁ** · ③ **Nền tảng đa năng.**
- Tối giản chữ — đây là **bản đồ định hướng**, không phải nội dung. Để lời thoại gánh.

## 🎤 Lời thoại
- "Trong (X) phút tới, mời quý vị đi cùng tôi qua cây cầu này." — chỉ tay từ trụ Hàn → trụ Việt.
- Điểm nhanh các **trạm** ta sẽ dừng (không đi sâu) — gieo kỳ vọng + trao khách một bản đồ để bám theo.
- Chốt móc nối **bookend:** "Cuối hành trình, tôi sẽ quay lại đúng câu mở đầu — và xin một lời đồng hành." (→ slide 10).

## 🧭 Vì sao slide này (truy vết)
- **Vai trò:** slide **định hướng / NAV** — **ngoài arc nhịp** (như bìa), đặt giữa **chào (01)** và **nội dung (02…)**.
- **Nhu cầu giải quyết:** GM nêu (2026-06-14) "agenda giúp khách hình dung dễ hơn" — đáp ứng mà **không làm phẳng
  cảm xúc** của lễ ra mắt: agenda được dựng **thành chính ẩn dụ xương sống**, gieo metaphor "cây cầu" ngay đầu.
- **Đồng bộ xương sống v2:** "2 trụ + 1 con đường + 3 chân trời."
- **Bookend kép:** preview đích đến ở đây ↔ trả bài ở slide 07 (3 chân trời) + slide 10 (kêu gọi).

## 📥 Cần gì để hoàn thiện
- [ ] **GM chốt vị trí:** đặt **sau chào (01b)** *(đề xuất)* hay **tuyệt đối đầu tiên, trước cả chào** (→ đổi thành 00b).
- [ ] **Chốt nhãn 3 chân trời** sau khi GM chốt **beachhead** (HANDOFF §3) — slide này *preview* nó nên phải khớp.
- [ ] **Cách render bản đồ cây cầu:** HANDOFF dặn *"không thêm Figure kind mới"* trong `deck/lib/slides.ts` → thống
      nhất cách thể hiện (tái dùng kind sẵn có / layout CSS / ảnh tĩnh) trước khi đẩy xuống render.
- [ ] **Thời lượng buổi** (điền "(X) phút" trong lời thoại).
- [ ] Tam ngữ VI/KO/EN khi đẩy render.

## ⚠️ Lưu ý
- **Đừng liệt kê đủ 10 mục** — giữ ở mức bản đồ ẩn dụ; liệt kê hết = lộ bài, mất kịch tính.
- **Cây cầu ở đây phải khớp 100%** cách slide 07 vẽ 3 chân trời — lệch hình là khách rối.
- Hình cây cầu là **đồ họa mới** → bàn cách tái dùng Figure sẵn có trước khi code (ràng buộc HANDOFF §5 "không thêm Figure kind mới").
