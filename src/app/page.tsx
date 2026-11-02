import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import MetaLabel from "@/components/MetaLabel";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function HomePage() {
  const selected = projects.slice(0, 3);
  return (
    <>
      <section className="border-b border-line">
        <Container className="grid items-center gap-10 py-14 md:grid-cols-[1.2fr_1fr] md:py-24">
          <div>
            <MetaLabel>Portfolio / {new Date().getFullYear()}</MetaLabel>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">{profile.name}</h1>
            <p className="mt-5 text-xl text-copper">{profile.title}</p>
            <p className="mt-4 max-w-prose text-muted">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/projects">Lihat proyek</Button>
              <Button href="/contact" variant="secondary">Hubungi saya</Button>
            </div>
          </div>
          <div className="border border-line bg-surface p-3">
            <Image
              src={profile.image.src}
              alt={profile.image.alt}
              width={profile.image.width}
              height={profile.image.height}
              priority
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      <Container className="mt-20">
        <SectionHeader number="01" title="Proyek pilihan" description="Beberapa proyek yang mewakili pekerjaan saya." />
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {selected.map((p) => <li key={p.slug}><ProjectCard project={p} /></li>)}
        </ul>
        <p className="mt-6"><Link href="/projects" className="text-copper underline underline-offset-4">Semua proyek</Link></p>
      </Container>

      <Container className="mt-20">
        <SectionHeader number="02" title="Profil singkat" />
        <p className="mt-6 max-w-prose text-lg">{profile.summary}</p>
        <p className="mt-4"><Link href="/about" className="text-copper underline underline-offset-4">Selengkapnya tentang saya</Link></p>
      </Container>
    </>
  );
}
