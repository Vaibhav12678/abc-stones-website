import { cn } from "@/lib/utils";

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block border border-gold/50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold",
        className
      )}
    >
      {children}
    </span>
  );
}
