import { ReactNode } from "react";

export default function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid gap-4">{children}</div>
    </section>
  );
}