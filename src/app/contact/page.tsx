import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import MetaLabel from "@/components/MetaLabel";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social-links";

export const metadata: Metadata = {
  title: "Contact",
  description: `Hubungi ${profile.name}.`,
};

export default function ContactPage() {
  const links = socialLinks.filter((s) => s.url);
  return (
    <Container className="pt-14">
      <SectionHeader level={1} title="Contact" description="Ada pertanyaan, kolaborasi, atau peluang? Kirim email atau hubungi lewat akun di bawah." />
      <div className="mt-10"><Button href={`mailto:${profile.email}`}>Kirim email</Button></div>
      <dl className="mt-12 max-w-xl border-t border-line">
        <div className="flex items-baseline justify-between gap-4 border-b border-line py-4">
          <dt><MetaLabel>Email</MetaLabel></dt>
          <dd><a href={`mailto:${profile.email}`} className="hover:text-copper">{profile.email}</a></dd>
        </div>
        {links.map((s) => (
          <div key={s.label} className="flex items-baseline justify-between gap-4 border-b border-line py-4">
            <dt><MetaLabel>{s.label}</MetaLabel></dt>
            <dd><a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-copper">{s.url.replace(/^https?:\/\//, "")}</a></dd>
          </div>
        ))}
      </dl>
    </Container>
  );
}
