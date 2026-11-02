import Link from "next/link";
import Container from "./Container";
import MetaLabel from "./MetaLabel";
import { navLinks } from "@/lib/navigation";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social-links";

export default function Footer() {
  const links = socialLinks.filter((s) => s.url);
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="mt-2 text-sm text-muted">{profile.title}</p>
        </div>
        <nav aria-label="Navigasi footer">
          <MetaLabel>Pages</MetaLabel>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-copper">{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <MetaLabel>Contact</MetaLabel>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a href={`mailto:${profile.email}`} className="hover:text-copper">{profile.email}</a></li>
            {links.map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-copper">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-line">
        <Container className="py-4">
          <MetaLabel>© {new Date().getFullYear()} {profile.name}</MetaLabel>
        </Container>
      </div>
    </footer>
  );
}
