---
title: ESPRESSO + nền tảng LLM on-premise — Pebble Square mở rộng quá tầm "chip edge"
type: learning
importance: high
tags: [pebble-square, espresso, llm, on-premise, dinh-vi, ir-deck, san-pham]
source: IR Deck Pebble Square 05/01/2026 (company/sources/)
created: 2026-06-18
updated: 2026-06-18
links: [company/parent-pebble-square.md, company/sources/README.md, market/2026-06-chien-luoc-tiep-can-prospect.md]
---

IR Deck chính thức (05/01/2026, GM cung cấp) tiết lộ Pebble Square **không chỉ là công ty chip edge
Analog-PIM** như repo từng mô tả — họ đã có **2 sản phẩm/dòng kinh doanh mới quan trọng**:

**① ESPRESSO — AI SoC (SRAM-based *Digital*-PIM, khác nhánh Analog của MINT/PAPAYA):**
**160 TOPS@INT8 / 100 TFLOPS@bFP16**, 10W, **16 TOPS/W**, gói 20,5×23mm. Có bản M.2 và Accelerator Card
(4× = **640 TOPS**). Chạy **LLM nội bộ tới 120 tỷ tham số** (DeepSeek/OpenAI/Google…). Đích: **AI PC,
private LLM appliance, robotics, industrial edge**. Trạng thái deck: **"available Sep 2026"** → 🟡 lộ trình.

**② Nền tảng LLM On-Premise:** bán **server suy luận LLM đặt tại chỗ** (cấu hình 4U, Epyc 9355, AI SoC =
NVIDIA hoặc ESPRESSO) để doanh nghiệp chạy LLM tùy biến trên dữ liệu riêng — không cloud, riêng tư, dễ tuân
thủ. Định hướng: **GPU-centric → NPU/AI SoC; Cloud AI → Private AI.**

**Vì sao quan trọng:** định vị hiện tại của Pebble Vina (edge AI + beachhead arc-fault) **đúng nhưng hẹp**.
Câu chuyện công ty mẹ giờ to hơn: từ chip edge → **hạ tầng AI doanh nghiệp / AI chủ quyền**. Trùng khớp mạnh
use case "dữ liệu không rời lãnh thổ" ở VN/GCC — có thể là vũ khí pitch mới. Xem [[huong-kien-truc-thuong-hieu-c]].

**Dùng khi nào:** soạn/sửa slide ra mắt & one-pager; định vị thương hiệu; khi GM cân nhắc mở rộng đề xuất
giá trị Pebble Vina ngoài arc-fault. **Lưu ý tách "đã có" vs "lộ trình"** khi nói đối ngoại (deck là tài liệu IR).
