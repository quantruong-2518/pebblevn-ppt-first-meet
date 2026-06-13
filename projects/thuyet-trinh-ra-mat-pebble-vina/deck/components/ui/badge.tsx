import { cn } from "@/lib/utils";

// shadcn-style (own-your-code). Mặc định: chip "cần điền" sắc vàng tiết chế.
export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 font-sans text-[12px] font-medium text-gold",
        className,
      )}
      {...props}
    />
  );
}
