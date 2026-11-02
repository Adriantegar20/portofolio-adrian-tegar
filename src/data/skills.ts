export type SkillCategory = {
  category: string;
  description: string;
  skills: { name: string; description: string }[];
  technologies: string[];
};

// Tingkat kemampuan sengaja tidak ditampilkan; tambahkan hanya jika punya dasar yang jelas.
export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    description: "Pemrograman yang saya gunakan dalam proyek.",
    skills: [{ name: "C++", description: "Digunakan pada proyek Sistem Lampu Merah Otomatis berbasis Arduino." }],
    technologies: ["C++"],
  },
  {
    category: "Web Development",
    description: "Pembuatan dan pengelolaan situs web.",
    skills: [{ name: "WordPress", description: "Membuat dan mengelola situs menggunakan WordPress." }],
    technologies: ["WordPress"],
  },
  {
    category: "Embedded Systems",
    description: "Sistem berbasis mikrokontroler dan elektronika digital.",
    skills: [
      { name: "Arduino UNO", description: "Simulasi pengatur lampu lalu lintas dengan siklus merah–kuning–hijau." },
      { name: "Digital I/O dan Timer Interrupt", description: "Mengatur LED dan pewaktuan siklus pada mikrokontroler." },
    ],
    technologies: ["Arduino UNO", "LED", "Digital I/O", "Timer Interrupt"],
  },
  {
    category: "Tools & Technologies",
    description: "Perangkat yang mendukung pekerjaan akademik dan dokumentasi.",
    skills: [
      { name: "Microsoft Word dan Excel", description: "Dokumentasi, laporan, dan pengolahan data." },
      { name: "Artificial Intelligence", description: "Mengikuti perkembangan AI dan etika penggunaannya." },
    ],
    technologies: ["Microsoft Word", "Microsoft Excel"],
  },
  {
    category: "Leadership & Communication",
    description: "Kemampuan non-teknis yang dilatih lewat organisasi.",
    skills: [
      { name: "Team Management dan Teamwork", description: "Koordinasi tim dan program di OSIS dan Paskibra." },
      { name: "Public Speaking dan Public Relations", description: "Komunikasi dan relasi dalam kegiatan organisasi." },
      { name: "Youth Empowerment dan Community Development", description: "Terlibat dalam kegiatan pemberdayaan pemuda dan komunitas." },
    ],
    technologies: [],
  },
];
