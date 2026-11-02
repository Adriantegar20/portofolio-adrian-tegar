import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import MetaLabel from "@/components/MetaLabel";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { getProject, getRelatedProjects, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line pt-5">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 max-w-prose">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return <ul className="list-disc space-y-1 pl-5 marker:text-copper">{items.map((i) => <li key={i}>{i}</li>)}</ul>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = getRelatedProjects(project);

  return (
    <Container className="pt-14">
      <Link href="/projects" className="text-sm text-muted hover:text-copper">← Semua proyek</Link>
      <header className="mt-6">
        <div className="flex flex-wrap gap-4">
          <MetaLabel>{project.category}</MetaLabel>
          <MetaLabel className="text-copper">{project.status}</MetaLabel>
        </div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">{project.title}</h1>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((t) => <li key={t}><MetaLabel className="border border-line px-2 py-1">{t}</MetaLabel></li>)}
        </ul>
      </header>

      <div className="mt-12 space-y-10">
        <Block title="Overview"><p>{project.overview}</p></Block>
        <Block title="Problem statement"><p>{project.problem}</p></Block>
        <Block title="Objectives"><List items={project.objectives} /></Block>
        <Block title="Implementation process"><List items={project.implementation} /></Block>
        <Block title="Features"><List items={project.features} /></Block>
        {project.documentation && <Block title="Documentation"><p>{project.documentation}</p></Block>}
        {project.repository && (
          <Block title="Repository"><Button href={project.repository} variant="secondary">Buka repository</Button></Block>
        )}
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-line pt-5">
          <h2 className="text-2xl font-semibold tracking-tight">Proyek terkait</h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2">
            {related.map((p) => <li key={p.slug}><ProjectCard project={p} /></li>)}
          </ul>
        </section>
      )}
    </Container>
  );
}
