export default function Timeline({ items }: { items: { company: string; title: string; period: string; bullets: string[] }[] }) {
  return (
    <div className="space-y-6">
      {items.map((it) => (
        <div key={it.company} className="card">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">{it.title} • {it.company}</h3>
              <p className="text-zinc-400">{it.period}</p>
            </div>
          </div>
          <ul className="mt-3 text-zinc-300 list-disc list-inside">
            {it.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}