import Badge from "./Badge";

export default function TechGrid({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card">
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((t) => <Badge key={t}>{t}</Badge>)}
      </div>
    </div>
  );
}