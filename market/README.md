# market/ — Lớp thương mại: hợp đồng, khách hàng, đối tác, giấy tờ

Mọi thứ thuộc về **mặt thương mại & pháp lý** của công ty. Không nằm trong pipeline tuyến tính
(planning → roadmap → projects) — nó phục vụ mọi giai đoạn.

## Cấu trúc

| Thư mục       | Chứa gì                                                        |
| ------------- | ------------------------------------------------------------- |
| `contracts/`  | Hợp đồng (dịch vụ, NDA, lao động, hợp tác...) và phụ lục.     |
| `clients/`    | Hồ sơ khách hàng: mỗi khách 1 file/thư mục, lịch sử trao đổi. |
| `partners/`   | Hồ sơ đối tác / nhà cung cấp.                                 |
| `_templates/` | Mẫu hợp đồng & giấy tờ tái sử dụng.                           |

## Quy tắc bảo mật (quan trọng)

- **Nhạy cảm:** thư mục này chứa thông tin pháp lý/cá nhân. Đừng commit bí mật (số tài khoản,
  CMND/CCCD, chữ ký số) — dùng `.gitignore` hoặc lưu ngoài repo nếu cần.
- **Không gửi nội dung hợp đồng ra dịch vụ ngoài** khi GM chưa cho phép rõ ràng.
- `legal-counsel` giúp soạn/rà, nhưng **không thay luật sư thật** cho việc ký kết quan trọng.
- Trước khi xóa/ghi đè file ở đây: dừng lại, đọc, hỏi GM.

## Quy ước đặt tên

- Hợp đồng: `contracts/YYYY-MM-DD-loai-hd-ten-doi-tac.md`
- Khách hàng/đối tác: `clients/ten-khach-hang.md`
