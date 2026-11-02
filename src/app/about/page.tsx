import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import MetaLabel from "@/components/MetaLabel";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: `Profil dan latar belakang ${profile.name}.`,
};

export default function AboutPage() {
  return (
    <Container className="pt-14">
      <SectionHeader level={1} title="About" description={profile.intro} />
      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_20rem]">
        <section aria-labelledby="bio">
          <h2 id="bio" className="text-2xl font-semibold tracking-tight">Biografi</h2>
          <div className="mt-4 max-w-prose space-y-4">
            {profile.bio.map((p) => <p key={p}>{p}</p>)}
          </div>
          <h2 className="mt-12 text-2xl font-semibold tracking-tight">Latar belakang</h2>
          <p className="mt-4 max-w-prose">{profile.background}</p>
        </section>
        <aside className="space-y-8 border-t border-line pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <section>
            <MetaLabel>Minat</MetaLabel>
            <ul className="mt-3 list-disc space-y-1 pl-5 marker:text-copper">
              {profile.interests.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </section>
          <section>
            <MetaLabel>Kegiatan relevan</MetaLabel>
            <ul className="mt-3 list-disc space-y-1 pl-5 marker:text-copper">
              {profile.activities.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </section>
        </aside>
      </div>
    </Container>
  );
}
