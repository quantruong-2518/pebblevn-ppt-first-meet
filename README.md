# Bộ khung vận hành công ty (Claude-driven)

Đây là "hệ điều hành" của công ty: một repo nơi **General Manager (GM)** vận hành toàn bộ
công ty bằng cách làm việc với một đội ngũ **agent chuyên môn**. Mọi kế hoạch, quyết định,
dự án và giấy tờ đều sống ở đây dưới dạng file — lần vết được, không trôi mất theo phiên chat.

## Bắt đầu trong 3 phút

1. Mở Claude Code tại thư mục này.
2. Điền hồ sơ công ty: mở `company/profile.md`, trả lời các ô `[CẦN ĐIỀN]`.
3. Nói chuyện như với một chánh văn phòng. Ví dụ:
   - *"Giao cho `chief-of-staff`: tôi có ý tưởng làm X, biến nó thành kế hoạch."*
   - *"Hỏi `analyst` quy mô thị trường cho Y."*
   - *"Nhờ `legal-counsel` soạn hợp đồng dịch vụ mẫu."*

## Bản đồ thư mục

| Thư mục            | Là gì                                                          |
| ------------------ | ------------------------------------------------------------- |
| `CLAUDE.md`        | **Hiến pháp** — mọi agent đọc trước. Đọc file này đầu tiên.   |
| `company/`         | Bản sắc: hồ sơ, OKR, **nhật ký quyết định**.                  |
| `memory/`          | **Ngân hàng trí nhớ** — sự thật quan trọng cần nhớ & dùng lại. |
| `planning/`        | Phễu ý tưởng & thăm dò (chưa cam kết).                        |
| `roadmap/`         | Sáng kiến **đã duyệt** — có ưu tiên & mốc thời gian.          |
| `projects/`        | Thực thi tool/sản phẩm cấp công ty (mỗi project 1 thư mục).   |
| `market/`          | Hợp đồng, khách hàng, đối tác, giấy tờ (lớp thương mại).      |
| `reports/`         | Review tuần/tháng & báo cáo cho GM.                           |
| `.claude/agents/`  | Đội ngũ "ban giám đốc ảo".                                    |

## Luồng làm việc

```
planning/  →  roadmap/  →  projects/        (market/ phục vụ xuyên suốt)
 ý tưởng       đã duyệt     đang thực thi
```

Một mục chỉ tiến lên giai đoạn sau khi **GM duyệt**. Chi tiết quy ước & cách dùng agent: xem `CLAUDE.md`.

## Đội ngũ agent

`chief-of-staff` (đầu mối) · `analyst` · `cfo` · `product-lead` · `legal-counsel` · `growth` · `operations`

Mô tả đầy đủ trong `.claude/agents/`. Trong chat, chỉ cần nói "giao cho `<tên-agent>`".
