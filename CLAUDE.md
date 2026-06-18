# CLAUDE.md — Hiến pháp vận hành công ty

> File này là **nguồn sự thật** mà mọi phiên làm việc và mọi agent đều đọc trước.
> Khi có mâu thuẫn giữa các tài liệu, file này thắng. Cập nhật nó khi công ty thay đổi.

---

## 1. Công ty là ai

- **Tên công ty:** **Pebble Vina**
- **Một câu mô tả:** **Thành viên Việt Nam** của nhóm **Pebble Square (Hàn Quốc)** — đưa nền tảng **Edge AI /
  bán dẫn AI** của công ty mẹ vào **vận hành thật** tại **thị trường Việt Nam**, tầm nhìn mở rộng **Đông Nam Á**.
  *(Đổi từ "nhà phân phối độc quyền" → mô hình thành viên/công ty con — 2026-06-16, [ADR 0002](company/decisions/0002-pebble-vina-thanh-vien-pebble-square.md).)*
- **Công ty mẹ:** Pebble Square Inc. — chip AI **Analog-PIM** (xem `company/parent-pebble-square.md`).
- **Nhà đầu tư chính:** bác Kim — Phó Chủ tịch Hội Doanh nghiệp Hàn Quốc tại VN (KOCHAM).
- **Giai đoạn:** đang thành lập (pre-revenue).
- **Người vận hành:** General Manager (GM) — chủ repo này, ra quyết định cuối cùng.

Chi tiết sống ở `company/profile.md`, `company/parent-pebble-square.md`,
`planning/2026-06-09-co-hoi-thi-truong-viet.md`, `market/_phap-ly-phan-phoi-vn.md`.
File CLAUDE.md chỉ giữ phần ổn định nhất.

## 2. Mô hình làm việc: GM + đội ngũ agent

GM **không tự làm tất cả**. GM **ra đề, duyệt, và quyết**. Các agent là "ban giám đốc ảo":

| Khi cần…                                   | Gọi agent           |
| ------------------------------------------ | ------------------- |
| Biến ý tưởng → kế hoạch, điều phối, review | `chief-of-staff`    |
| Nghiên cứu thị trường, đối thủ, cơ hội     | `analyst`           |
| Tài chính, ngân sách, giá, unit economics  | `cfo`               |
| Đặc tả & xây tool/sản phẩm cấp công ty      | `product-lead`      |
| Soạn / rà hợp đồng, giấy tờ pháp lý        | `legal-counsel`     |
| Marketing, bán hàng, đối tác, nội dung     | `growth`            |
| Vận hành, nhân sự, quy trình, nhà cung cấp | `operations`        |

> Cách dùng: trong phiên chat, bảo Claude *"giao việc này cho `cfo`"* hoặc
> *"hỏi `analyst` quy mô thị trường X"*. Claude sẽ spawn đúng agent.
> Mỗi agent đọc CLAUDE.md + thư mục liên quan trước khi trả lời.

## 3. Triết lý "vibe working"

1. **Mọi thứ là file, mọi file có thể lần vết.** Không có quyết định nào chỉ nằm trong đầu hay trong chat — nó phải kết tủa thành file trong repo.
2. **Pipeline rõ ràng, không nhảy cóc.** Ý tưởng đi qua các trạng thái, không "đùng một cái triển khai".
3. **Tài liệu ngắn, sống, có trạng thái.** Mỗi tài liệu mở đầu bằng frontmatter trạng thái (xem §5). Thà 1 trang cập nhật còn hơn 10 trang chết.
4. **Agent đề xuất, GM quyết.** Agent được phép có quan điểm mạnh, nhưng đánh dấu rõ đâu là giả định, đâu là việc cần GM duyệt.
5. **Tiếng Việt là ngôn ngữ làm việc mặc định** (trừ tài liệu kỹ thuật/code).

## 4. Pipeline thư mục (luồng giá trị)

```
  ý tưởng        cam kết         thực thi          thương mại
 ┌─────────┐   ┌─────────┐    ┌──────────┐      ┌──────────┐
 │planning/│──▶│roadmap/ │───▶│projects/ │      │ market/  │
 └─────────┘   └─────────┘    └──────────┘      └──────────┘
  khám phá,     đã duyệt,       đang làm,         hợp đồng,
  chưa cam kết  có ưu tiên+thời  có deliverable    KH, đối tác,
                điểm             cụ thể            giấy tờ
```

- **`planning/`** — Phễu ý tưởng & thăm dò. Chưa cam kết nguồn lực. Rẻ để sai.
- **`roadmap/`** — Những gì **đã được GM duyệt** đưa vào lộ trình: có ưu tiên, mốc thời gian, người/agent phụ trách. "Đã vào plan".
- **`projects/`** — Thực thi các sáng kiến/tool cấp công ty. Mỗi project là 1 thư mục con tự chứa.
- **`market/`** — Lớp thương mại xuyên suốt: hợp đồng, khách hàng, đối tác, giấy tờ pháp lý. Không nằm trong pipeline tuyến tính — nó phục vụ mọi giai đoạn.
- **`company/`** — Bản sắc công ty: hồ sơ, OKR, **nhật ký quyết định** (ADR).
- **`memory/`** — **Ngân hàng trí nhớ**: sự thật quan trọng cần nhớ & dùng lại (người, con số, cam kết, bài học). **Mọi agent đọc `memory/INDEX.md` đầu mỗi phiên.**
- **`reports/`** — Đầu ra định kỳ: review tuần/tháng, báo cáo cho GM.

**Quy tắc thăng cấp:** một mục chỉ chuyển từ `planning/` → `roadmap/` khi GM duyệt;
chỉ từ `roadmap/` → `projects/` khi có người/agent phụ trách + deliverable rõ.

## 5. Quy ước (mọi agent tuân thủ)

**Đặt tên file:** `YYYY-MM-DD-ten-ngan-gon.md` cho tài liệu có mốc thời gian;
`kebab-case.md` cho tài liệu sống. Project: `projects/ten-project/`.

**Frontmatter trạng thái** (đầu mỗi tài liệu kế hoạch/sáng kiến/dự án):

```yaml
---
title: <tiêu đề>
status: idea | proposed | approved | in-progress | done | parked | dropped
owner: GM | <tên-agent>
updated: YYYY-MM-DD
links: [<đường dẫn tài liệu liên quan>]
---
```

**Hôm nay là ngày nào:** luôn kiểm tra ngày hệ thống, không phỏng đoán. Mọi "ngày tương đối" (tuần sau, Q3...) phải quy về ngày tuyệt đối khi ghi file.

## 6. Hai tầng trí nhớ (đừng lẫn)

Phiên chat sẽ quên; file thì không. Công ty có **hai tầng trí nhớ** với mục đích khác nhau:

1. **`memory/` — Ngân hàng trí nhớ.** Sự thật **nguyên tử, quan trọng, cần dùng lại**: người, con số,
   cam kết, bài học, sự kiện, rủi ro. Mỗi sự thật 1 file + 1 dòng trong `memory/INDEX.md`.
   **Đầu mỗi phiên, agent đọc `memory/INDEX.md`** để biết "ta đang nhớ gì". Khi GM nói *"nhớ giúp tôi…"*,
   tạo/ cập nhật file trong `memory/` và `INDEX.md`. Quy tắc: `memory/README.md`.
2. **`company/decisions/` — Nhật ký quyết định.** *Vì sao* ta chọn một hướng **khó đảo ngược** (chọn hướng đi,
   ký hợp đồng, tuyển người, bỏ dòng sản phẩm) → 1 file ADR (`NNNN-tieu-de.md`).

Ranh giới: `memory/` lưu *sự thật cần nhớ*; `company/decisions/` lưu *lý do của quyết định lớn*;
`planning/` lưu *ý tưởng đang bàn*. Không lẫn lộn ba thứ này.

## 7. Nhịp vận hành (cadence)

- **Hằng ngày (tùy chọn):** GM mở phiên, hỏi `chief-of-staff` "hôm nay nên ưu tiên gì?".
- **Hằng tuần:** `chief-of-staff` viết review tuần vào `reports/` — tiến độ roadmap, rủi ro, đề xuất tuần tới.
- **Hằng tháng:** rà OKR (`company/okrs.md`), dọn `planning/`, cập nhật `company/profile.md`.

> Có thể tự động hóa nhịp này bằng `/schedule` (cloud agent chạy theo lịch) khi công ty đã ổn định quy trình.

## 8. Nguyên tắc an toàn

- Không gửi hợp đồng/giấy tờ ra dịch vụ ngoài khi chưa được GM cho phép rõ ràng.
- Trước khi xóa/ghi đè tài liệu trong `market/` hay `company/decisions/`: dừng lại, đọc, hỏi GM.
- Agent nêu rõ giả định và giới hạn hiểu biết — không bịa số liệu tài chính/pháp lý.
