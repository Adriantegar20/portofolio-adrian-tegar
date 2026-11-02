import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import { educations } from "@/data/education";

export const metadata: Metadata = {
  title: "Education",
  description: "Riwayat pendidikan.",
};

export default function EducationPage() {
  const items = educations.map((e, i) => ({
    id: `${i}-${e.institution}`,
    title: e.institution,
    subtitle: e.program,
    period: e.period,
    description: e.description,
    placeholder: e.placeholder,
  }));
  return (
    <Container className="pt-14">
      <SectionHeader level={1} title="Education" description="Riwayat pendidikan formal." />
      <div className="mt-12"><Timeline items={items} /></div>
    </Container>
  );
}
