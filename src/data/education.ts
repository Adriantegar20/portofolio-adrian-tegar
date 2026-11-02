export type Education = {
  institution: string;
  program: string;
  period: string;
  description: string;
  placeholder?: boolean;
};

export const educations: Education[] = [
  {
    institution: "Universitas Teknologi Yogyakarta (UTY)",
    program: "S1 Teknik Komputer",
    period: "2025 — Sekarang",
    description:
      "Mahasiswa aktif yang membangun fondasi di bidang arsitektur komputer, sistem digital, dan embedded systems.",
  },
  {
    institution: "SMA Negeri 1 Godong, Grobogan, Jawa Tengah",
    program: "Sekolah Menengah Atas",
    period: "2022 — 2025",
    description: "Aktif di OSIS dan Paskibra selama masa SMA.",
  },
];
