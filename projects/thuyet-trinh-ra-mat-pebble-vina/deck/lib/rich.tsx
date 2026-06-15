import { Fragment, type ReactNode } from "react";

/**
 * Tô chữ nhấn — gradient "xanh → trắng" (class `.hl`) cho cụm quan trọng được bọc trong *…*.
 *
 * Dùng ở mọi nơi render văn bản slide (headline, bullet, foot, nhãn figure…). Văn bản KHÔNG
 * chứa dấu * sẽ render y hệt như cũ ⇒ an toàn để bọc khắp nơi; chỉ kích hoạt khi có markup.
 *
 *   L("Việt Nam bước vào *kỷ nguyên vươn mình*.", …)  →  "kỷ nguyên vươn mình" được tô gradient.
 *
 * Quy ước: dấu * KHÔNG dùng trong dữ liệu cho mục đích khác (đã kiểm: data không có *).
 */
export function rich(text: string): ReactNode {
  if (!text.includes("*")) return text;
  return text.split(/(\*[^*]+\*)/g).map((part, i) =>
    /^\*[^*]+\*$/.test(part) ? (
      <span key={i} className="hl">
        {part.slice(1, -1)}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
