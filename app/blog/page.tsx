import Section from "../../components/Section";
import { posts } from "../../lib/data";
import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <Section title="Latest Posts">
        <div className="grid gap-4">
          {posts.map((p) => (
            <article key={p.slug} className="card">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-zinc-400 mt-1">{p.summary}</p>
              <p className="text-zinc-500 text-sm mt-2">{p.date}</p>
              <Link className="underline mt-3 inline-block" href="#">
                Read notes →
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}