import MetaLabel from "./MetaLabel";

type Props = {
  title: string;
  number?: string;
  description?: string;
  level?: 1 | 2;
};

export default function SectionHeader({ title, number, description, level = 2 }: Props) {
  const Heading = level === 1 ? "h1" : "h2";
  const size = level === 1 ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl";
  return (
    <header className="border-t border-line pt-5">
      {number && <MetaLabel>Section {number}</MetaLabel>}
      <Heading className={`mt-2 font-semibold tracking-tight ${size}`}>{title}</Heading>
      {description && <p className="mt-4 max-w-prose text-muted">{description}</p>}
    </header>
  );
}
