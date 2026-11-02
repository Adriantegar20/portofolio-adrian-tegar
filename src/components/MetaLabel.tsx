import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function MetaLabel({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("meta", className)}>{children}</span>;
}
