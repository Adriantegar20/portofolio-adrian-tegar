import Link from "next/link";
import MetaLabel from "./MetaLabel";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col border border-line bg-surface p-5 transition-colors duration-200 hover:border-copper"
    >
      <div className="flex items-center justify-between gap-3">
        <MetaLabel>{project.category}</MetaLabel>
        <MetaLabel className="text-copper">{project.status}</MetaLabel>
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight group-hover:text-copper">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{project.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
        {project.technologies.map((t) => (
          <li key={t} className="meta border border-line px-2 py-1">{t}</li>
        ))}
      </ul>
    </Link>
  );
}
