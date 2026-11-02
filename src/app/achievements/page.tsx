import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import MetaLabel from "@/components/MetaLabel";
import { achievements } from "@/data/achievements";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Prestasi, sertifikat, dan partisipasi kegiatan.",
};

export default function AchievementsPage() {
  return (
    <Container className="pt-14">
      <SectionHeader level={1} title="Achievements" description="Prestasi, sertifikat, dan partisipasi kegiatan." />
      <ul className="mt-12 grid gap-5 md:grid-cols-2">
        {achievements.map((a, i) => (
          <li key={`${i}-${a.title}`} className="border border-line bg-surface p-6">
            {a.image && (
              <Image src={a.image.src} alt={a.image.alt} width={a.image.width} height={a.image.height} className="mb-5 h-auto w-full border border-line" />
            )}
            <div className="flex items-center justify-between gap-3">
              <MetaLabel>{a.date}</MetaLabel>
              {a.placeholder && <MetaLabel className="text-copper">Placeholder</MetaLabel>}
            </div>
            <h2 className="mt-4 text-xl font-semibold tracking-tight">{a.title}</h2>
            <p className="mt-1 text-copper">{a.issuer}</p>
            <p className="mt-3 text-sm text-muted">{a.description}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
