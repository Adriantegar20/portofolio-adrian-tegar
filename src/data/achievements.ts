export type Achievement = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: { src: string; alt: string; width: number; height: number };
  placeholder?: boolean;
};

export const achievements: Achievement[] = [
  {
    title: "Duta Integritas Kabupaten Grobogan",
    issuer: "Kabupaten Grobogan, Jawa Tengah",
    date: "2023",
    description: "Penghargaan sebagai Duta Integritas tingkat Kabupaten Grobogan.",
  },
  {
    title: "Webinar Etika Penggunaan Artificial Intelligence",
    issuer: "Universitas Islam Indonesia",
    date: "2025",
    description:
      "Memperluas perspektif mengenai dampak sosial teknologi dan pentingnya penerapan prinsip etis dalam penggunaan AI di kehidupan akademik dan profesional.",
  },
];
