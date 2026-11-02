import MetaLabel from "./MetaLabel";

export type TimelineItem = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  points?: string[];
  placeholder?: boolean;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="border-l border-line">
      {items.map((item) => (
        <li key={item.id} className="relative grid gap-2 pb-12 pl-6 last:pb-0 md:grid-cols-[12rem_1fr] md:gap-8 md:pl-10">
          <span aria-hidden className="absolute -left-[5px] top-2 size-2.5 bg-copper" />
          <MetaLabel className="pt-1">{item.period}</MetaLabel>
          <div>
            <h2 className="text-xl font-semibold tracking-tight">{item.title}</h2>
            <p className="mt-1 text-copper">{item.subtitle}</p>
            <p className="mt-3 max-w-prose text-muted">{item.description}</p>
            {item.points && item.points.length > 0 && (
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm marker:text-copper">
                {item.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            )}
            {item.placeholder && <MetaLabel className="mt-4 block text-copper">Placeholder</MetaLabel>}
          </div>
        </li>
      ))}
    </ol>
  );
}
