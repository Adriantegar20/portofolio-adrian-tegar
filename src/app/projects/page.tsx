import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ProjectBrowser from "@/components/ProjectBrowser";
import { projects, projectCategories } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Daftar proyek web, IoT, hardware, dan software.",
};

export default function ProjectsPage() {
  return (
    <Container className="pt-14">
      <SectionHeader level={1} title="Projects" description="Pilih kategori untuk menyaring proyek." />
      <div className="mt-10">
        <ProjectBrowser projects={projects} categories={projectCategories} />
      </div>
    </Container>
  );
}
