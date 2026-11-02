"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import { navLinks } from "@/lib/navigation";
import { profile } from "@/data/profile";
import { cn, isActivePath } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight" onClick={() => setOpen(false)}>
          {profile.shortName}
        </Link>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex gap-6">
            {navLinks.map((link) => {
              const active = isActivePath(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "border-b-2 py-1 text-sm transition-colors duration-200",
                      active ? "border-copper text-ink" : "border-transparent text-muted hover:text-ink",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="meta flex min-h-11 items-center border border-line px-4 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {open && (
        <nav id="mobile-menu" aria-label="Navigasi mobile" className="border-t border-line lg:hidden">
          <Container>
            <ul>
              {navLinks.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <li key={link.href} className="border-b border-line last:border-b-0">
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={cn("flex min-h-12 items-center", active ? "text-copper" : "text-ink")}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
