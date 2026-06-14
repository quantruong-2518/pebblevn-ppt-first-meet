---
title: Rà soát ngôn ngữ deck Pebble Vina (copyedit + i18n preflight)
status: proposed
owner: GM
updated: 2026-06-14
links: [projects/thuyet-trinh-ra-mat-pebble-vina/deck/lib/slides.ts, /Users/st2518/Works/pebblevn-ppt-first-meet/lib/slides.ts]
---

## Bối cảnh
- Soát + sửa chạy trên **bản standalone** `pebblevn-ppt-first-meet/lib/slides.ts` (bản sắp publish).
- ⚠️ Bản canonical `projects/thuyet-trinh-ra-mat-pebble-vina/deck/lib/slides.ts` + `slides/*.md` **chưa** được cập nhật → đang lệch. Có thể port 4 sửa đổi này về sau.

## Tóm tắt
- 4 phát hiện 🟡 đã **áp dụng** (chỉnh từ ngữ `vi`, giữ nguyên nghĩa, không đụng số/danh từ riêng).
- 3 mục 🔵 **chưa sửa** — để GM xác nhận (nghi là điệp ngữ/bookend cố ý).
- Chính tả: sạch. Over-claim: không có. Giọng văn: cụ thể, tiết chế — tốt.
- i18n: KO/EN vẫn khớp `vi` đã polish → **không dòng nào cần dịch lại**.

## Đã áp dụng (🟡)
| Slide | Trường | Nhóm | Nguyên văn → Sửa | Vì sao |
|---|---|---|---|---|
| 02 | headline | ngữ nghĩa | `kèm rủi ro… và ngừng phát` → `kéo theo rủi ro… và ngừng phát điện` | `kèm` lỏng (quan hệ là nhân-quả → `kéo theo`); `ngừng phát` thiếu tân ngữ → `ngừng phát điện` |
| 04 | headline | ngữ nghĩa | `điện thấp` → `công suất thấp` | `điện thấp` mơ hồ (điện áp thấp?); ý là tiêu thụ điện thấp → `công suất thấp` (khớp KO 저전력 / EN low power) |
| 05 | headline | lặp từ | `có năng lực thị trường Việt` → `mạnh ở thị trường Việt` | `năng lực` lặp 2 lần trong 1 câu (`…thị trường` + `năng lực bản địa`); `mạnh ở thị trường` gọn, đỡ corporate, giữ nghĩa |
| 07 | figure foot | đăng ký từ | `neo vào beachhead đã chứng minh` → `neo vào cứ điểm đã chứng minh` | `beachhead` là tiếng Anh tư vấn lẫn trong câu Việt; `cứ điểm` rõ tiếng Việt (khớp KO 거점) |

## Cần GM quyết (🔵 — chưa sửa)
| Slide | Vấn đề | Đề xuất nếu muốn sửa |
|---|---|---|
| 02 | headline & bullet 1 cùng liệt kê hậu quả (`mất tài sản`, `dừng sản xuất`/`dừng chuyền`) — trùng ý | Nếu là vô tình: bullet 1 nhấn "hiếm nhưng hậu quả lớn", bỏ liệt kê lặp. Nếu cố ý nhấn mạnh: giữ |
| 08 | title `Nhìn thẳng…` & headline `Chúng tôi nhìn thẳng vào rủi ro…` lặp cụm `nhìn thẳng` | Nếu vô tình: headline → `Chúng tôi không né rủi ro…` hoặc `…nhìn rõ rủi ro…` |
| 09 | headline & bullet 2 cùng mang trọn câu cầu nối `cùng dựng cây cầu Edge-AI Hàn → Việt → ĐNÁ` | Slide kết (bookend) — lặp có thể cố ý để "đóng bài". Cân nhắc rút gọn bullet 2 |

## i18n preflight (base trên VN)
- Cấu trúc: inline `L(vi, ko, en)` trong `slides.ts` — không phải file locale rời → scanner N/A, đối chiếu thủ công.
- Nguồn sự thật: `vi`. Đích: `ko`, `en`. Mọi key đã đủ 3 ngữ, không thiếu/để trống.
- 4 dòng `vi` vừa sửa đều giữ nguyên nghĩa → KO/EN tương ứng vẫn trung thành, **0 dòng dịch lại**.
