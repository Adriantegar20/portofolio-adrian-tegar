import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import MetaLabel from "@/components/MetaLabel";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Kemampuan dan teknologi yang dikuasai.",
};

export default function SkillsPage() {
  return (
    <Container className="pt-14">
      <SectionHeader level={1} title="Skills" description="Kemampuan dan teknologi yang saya gunakan." />
      <ul className="mt-12 grid gap-5 md:grid-cols-2">
        {skillCategories.map((c) => (
          <li key={c.category} className="border border-line bg-surface p-6">
            <h2 className="text-xl font-semibold tracking-tight">{c.category}</h2>
            <p className="mt-2 text-sm text-muted">{c.description}</p>
            <ul className="mt-5 space-y-3 border-t border-line pt-4">
              {c.skills.map((s) => (
                <li key={s.name}>
                  <p className="font-medium">{s.name}</p>
                  <p className="text-sm text-muted">{s.description}</p>
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2">
              {c.technologies.map((t) => <li key={t}><MetaLabel className="border border-line px-2 py-1">{t}</MetaLabel></li>)}
            </ul>
          </li>
        ))}
      </ul>
    </Container>
  );
}
