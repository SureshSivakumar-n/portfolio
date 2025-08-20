"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Badge from "./Badge";
import type { Project } from "../lib/data";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full min-h-[480px] rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur p-6 transition-all duration-300"
    >
      {p.image && (
        <div className="mb-4 relative w-full aspect-[16/9] overflow-hidden rounded-xl border border-zinc-800">
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
            className="object-cover hover:scale-[1.02] transition-transform duration-300"
            priority={false}
          />
        </div>
      )}

      <header className="mb-3">
        <h3 className="text-xl font-semibold">{p.title}</h3>
        <p className="text-zinc-400 mt-1">{p.summary}</p>
      </header>

      <div className="flex flex-wrap gap-2 mb-4">
        {p.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      {p.impact?.length > 0 && (
        <ul className="text-zinc-300 mb-4 list-disc list-inside space-y-1">
          {p.impact.map((i, k) => (
            <li key={k}>{i}</li>
          ))}
        </ul>
      )}

      {/* push footer to bottom */}
      <footer className="mt-auto flex gap-4 pt-4 border-t border-zinc-800">
        {p.repo && p.repo !== "#" && (
          <a className="underline" href={p.repo} target="_blank" rel="noreferrer">
            View Code →
          </a>
        )}
        {p.link && (
          <a className="underline" href={p.link} target="_blank" rel="noreferrer">
            Live Demo →
          </a>
        )}
      </footer>
    </motion.article>
  );
}