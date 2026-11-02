import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import { experiences } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Pengalaman organisasi, kepanitiaan, dan kegiatan relevan.",
};

export default function ExperiencePage() {
  const items = experiences.map((e, i) => ({
    id: `${i}-${e.organization}`,
    title: e.position,
    subtitle: e.organization,
    period: e.period,
    description: e.description,
    points: e.responsibilities,
    placeholder: e.placeholder,
  }));
  return (
    <Container className="pt-14">
      <SectionHeader level={1} title="Experience" description="Organisasi, kepanitiaan, dan kegiatan yang pernah saya ikuti." />
      <div className="mt-12"><Timeline items={items} /></div>
    </Container>
  );
}
