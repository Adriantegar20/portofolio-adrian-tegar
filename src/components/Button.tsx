import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  children: ReactNode;
};

const base =
  "inline-flex min-h-11 items-center justify-center border px-5 text-sm font-medium transition-colors duration-200";
const variants = {
  primary: "border-copper bg-copper text-paper hover:bg-ink hover:border-ink",
  secondary: "border-ink text-ink hover:bg-ink hover:text-paper",
};

export default function Button({ href, variant = "primary", external, children }: Props) {
  const className = cn(base, variants[variant]);
  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={className} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return <Link href={href} className={className}>{children}</Link>;
}
