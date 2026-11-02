export type Experience = {
  organization: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
  placeholder?: boolean;
};

export const experiences: Experience[] = [
  {
    organization: "SMA Negeri 1 Godong, Grobogan",
    position: "Ketua II OSIS",
    period: "2023 — 2024",
    description:
      "Memimpin perencanaan program, koordinasi kegiatan sekolah, dan pengawasan agenda organisasi. Memperkuat kemampuan komunikasi, manajemen kegiatan, dan pengambilan keputusan strategis berbasis kebutuhan peserta didik.",
    responsibilities: [],
  },
  {
    organization: "PASSUSSAM · SMA Negeri 1 Godong",
    position: "Koordinator Departemen Material",
    period: "2023 — 2024",
    description:
      "Mengelola kebutuhan material dalam kegiatan Paskibra. Melatih kedisiplinan, kerja sama tim, dan ketelitian dalam pelaksanaan tata upacara serta kepemimpinan berbasis keteladanan.",
    responsibilities: [],
  },
  {
    organization: "SMA Negeri 1 Godong, Grobogan",
    position: "Pengurus OSIS — Sekbid 3",
    // Catatan: situs lama menulis 2022–2023 di bagian Pengalaman dan 2022–2024 di bagian Pendidikan. Sesuaikan jika perlu.
    period: "2022 — 2023",
    description:
      "Aktif sebagai pengurus OSIS selama dua periode. Terlibat dalam perencanaan dan pelaksanaan berbagai program kesiswaan serta kegiatan sekolah.",
    responsibilities: [],
  },
  {
    organization: "Provinsi Jawa Tengah",
    position: "Peserta Seleksi Duta Integritas",
    period: "2023",
    description:
      "Mengikuti seleksi tingkat provinsi, memperdalam pemahaman mengenai etika publik, nilai integritas, dan pentingnya budaya antikorupsi dalam kehidupan sosial dan organisasi.",
    responsibilities: [],
  },
];
