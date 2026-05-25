import { cn } from "@/lib/utils";

interface PillBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function PillBadge({ children, className }: PillBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full font-sans text-[13px] px-3.5 py-1.5",
        "border border-gold/40 bg-gold/5 text-gold",
        className
      )}
    >
      {children}
    </div>
  );
}