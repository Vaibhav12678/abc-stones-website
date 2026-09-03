import { cn } from "@/lib/utils";

export default function Divider({ className }: { className?: string }) {
  return <div className={cn("hairline w-full", className)} />;
}
