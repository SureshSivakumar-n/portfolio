
"use client";
import Image from "next/image";
import GlowCard from "./GlowCard";

type Props = {
  image: string;
  title: string;
  company: string;
  period: string;
  bullets: string[];
  className?: string;
};

export default function ExperienceCard({ image, title, company, period, bullets }: Props) {
  return (
    <GlowCard className="glass rounded-2xl overflow-hidden border border-zinc-800 card-hover transition-all duration-300 w-full max-w-[500px] mx-auto flex flex-col h-full ${className}">
      {/* Top image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden border-b border-zinc-800">
        <Image
          src={image}
          alt={`${company} cover`}
          fill
          className="object-cover hover:scale-[1.03] transition-transform duration-500 object-cover scale-105"
          sizes="(min-width: 1024px) 600px, 100vw"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-zinc-400 whitespace-nowrap">{period}</span>
        </div>
        <p className="text-brand-500 font-medium mt-1">{company}</p>

        <ul className="list-disc list-inside mt-3 text-zinc-300 space-y-1">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </GlowCard>
  );
}