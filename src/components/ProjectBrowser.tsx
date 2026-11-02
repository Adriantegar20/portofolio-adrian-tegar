"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { cn } from "@/lib/utils";
import type { Project, ProjectCategory } from "@/data/projects";

type Filter = "All" | ProjectCategory;

export default function ProjectBrowser({ projects, categories }: { projects: Project[]; categories: ProjectCategory[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const filters: Filter[] = ["All", ...categories];

  return (
    <div>
      <div role="group" aria-label="Filter kategori proyek" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "meta min-h-11 border px-4 transition-colors duration-200",
              filter === f ? "border-ink bg-ink text-paper" : "border-line hover:border-ink",
            )}
          >
            {f}
          </button>
        ))}
      </div>
      {visible.length === 0 ? (
        <p className="mt-10 text-muted">Belum ada proyek di kategori ini.</p>
      ) : (
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <li key={p.slug}><ProjectCard project={p} /></li>
          ))}
        </ul>
      )}
    </div>
  );
}
