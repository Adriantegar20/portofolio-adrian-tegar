export type ProjectCategory =
  | "Web Development"
  | "Internet of Things"
  | "Hardware"
  | "Software"
  | "Other Projects";

export type ProjectStatus = "Placeholder" | "Planned" | "In Progress" | "Completed";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  summary: string;
  technologies: string[];
  overview: string;
  problem: string;
  objectives: string[];
  implementation: string[];
  features: string[];
  documentation?: string;
  repository?: string;
};

export const projectCategories: ProjectCategory[] = [
  "Web Development",
  "Internet of Things",
  "Hardware",
  "Software",
  "Other Projects",
];

export const projects: Project[] = [
  {
    slug: "sistem-lampu-merah-otomatis",
    title: "Sistem Lampu Merah Otomatis",
    category: "Hardware",
    status: "Completed",
    summary:
      "Simulasi pengatur lampu lalu lintas pada perempatan jalan menggunakan Arduino UNO.",
    technologies: ["Arduino UNO", "C++", "LED", "Digital I/O", "Timer Interrupt"],
    overview:
      "Simulasi sistem pengaturan lampu lalu lintas pada perempatan jalan menggunakan Arduino UNO. Sistem mengatur siklus merah–kuning–hijau secara otomatis dengan timing yang dikonfigurasi untuk tiap jalur, untuk mensimulasikan kondisi persimpangan jalan nyata.",
    // TODO: isi dengan penjelasan Anda sendiri; bagian di bawah belum dikonfirmasi.
    problem: "[Placeholder] Masalah yang ingin diselesaikan oleh proyek ini.",
    objectives: [
      "Mensimulasikan pengaturan lampu lalu lintas pada perempatan jalan.",
      "Mengatur siklus merah–kuning–hijau secara otomatis.",
    ],
    implementation: ["[Placeholder] Tahap implementasi 1", "[Placeholder] Tahap implementasi 2"],
    features: [
      "Siklus merah–kuning–hijau otomatis.",
      "Timing yang dapat dikonfigurasi untuk tiap jalur.",
    ],
    repository: "https://github.com/Adriantegar20/trafficlamp-project",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export function getRelatedProjects(project: Project, limit = 2) {
  const others = projects.filter((p) => p.slug !== project.slug);
  const same = others.filter((p) => p.category === project.category);
  return [...same, ...others.filter((p) => p.category !== project.category)].slice(0, limit);
}
