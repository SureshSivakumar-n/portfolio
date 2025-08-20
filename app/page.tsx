"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "../components/MagneticButton";
import Reveal from "../components/Reveal";
import GlowCard from "../components/GlowCard";
import ExperienceCard from "../components/ExperienceCard";
import ClientOnly from "../components/ClientOnly";
import { profile, skills, experience, certifications } from "../lib/data";

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* HERO (client-only to avoid hydration mismatch) */}
      <ClientOnly>
        <section className="grid md:grid-cols-2 gap-10 items-center min-h-[70vh]">
          {/* Left: Intro card */}
          <div className="group w-full h-full">
            <div className="glass rounded-3xl p-10 border border-zinc-800 w-full h-full flex flex-col justify-center shadow-lg transition-all duration-300 group-hover:border-[#6647ff] group-hover:shadow-[0_0_24px_rgba(102,71,255,0.35)]">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-6xl font-extrabold tracking-tight leading-[1.1]"
              >
                Hi, I’m <span className="text-brand-500">{profile.name}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-4 text-2xl text-zinc-300"
              >
                {profile.role}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl"
              >
                {profile.blurb}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-8 flex flex-wrap gap-6"
              >
                <MagneticButton href={profile.linkedin}>LinkedIn</MagneticButton>
                <MagneticButton
                  href={profile.github}
                  className="bg-zinc-800 hover:bg-zinc-700"
                >
                  GitHub
                </MagneticButton>
                <a href="/projects" className="underline-fx text-lg">
                  See Projects →
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right: Profile image + contact */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, staggerChildren: 0.1, delayChildren: 0.05 },
              },
            }}
            className="group w-full h-full flex justify-center items-center"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.6, type: "spring", stiffness: 120, damping: 18 }}
              className="glass rounded-3xl p-8 border border-zinc-800 w-full h-full shadow-lg flex flex-col items-center justify-center transition-all duration-300 group-hover:border-[#6647ff] group-hover:shadow-[0_0_24px_rgba(102,71,255,0.35)]"
            >
              {/* Perfect round avatar */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden ring-4 ring-brand-500 shadow-soft">
                <Image
                  src="/dp.jpeg"
                  alt="Suresh Sivakumar"
                  fill
                  sizes="256px"
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Address + email + phone */}
              <motion.ul className="mt-6 text-center text-lg text-zinc-300 space-y-2">
                <motion.li variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
                  📍 {profile.location}
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
                  ✉️{" "}
                  <a className="underline" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
                  📞{" "}
                  <a className="underline" href="tel:+353894315976">
                    +353 089 431 5976
                  </a>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </section>
      </ClientOnly>

      {/* STACK */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">⚙️ Tech Stack</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([cat, items], idx) => (
            <Reveal key={cat} delay={idx * 0.05}>
              <GlowCard className="rounded-2xl p-6 h-40 hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-semibold capitalize text-brand-500">{cat}</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="text-sm px-3 py-1 rounded-full border border-zinc-700 text-zinc-300 hover:border-brand-500 hover:text-brand-500 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EXPERIENCE — image cards */}
<section>
  <h2 className="text-3xl font-semibold mb-6">💼 Work Experience</h2>

  <div className="grid md:grid-cols-2 gap-6 items-stretch">
    {experience.slice(0, 2).map((job, idx) => (
      <Reveal key={job.company} delay={idx * 0.05}>
        <div className="h-full">
          <ExperienceCard
            image={job.image}
            title={job.title}
            company={job.company}
            period={job.period}
            bullets={job.bullets}
            className="h-full flex flex-col" // ensure card fills parent
          />
        </div>
      </Reveal>
    ))}
  </div>
</section>

{/* EDUCATION */}
<section>
  <h2 className="text-3xl font-semibold mb-6">🎓 Education</h2>

  <div className="grid md:grid-cols-2 gap-6 items-stretch">
    {[
      {
        school: "Maynooth University",
        degree: "MSc in Computer Science (Software Engineering)",
        period: "2024 – 2025",
        details: [
          "Specialized in Software Engineering and Data Engineering",
          "Worked on projects in cloud computing, big data pipelines, and NLP"
        ]
      },
      {
        school: "VISTAS University",
        degree: "B.E. in Computer Science",
        period: "2016 – 2020",
        details: [
          "Graduated with strong foundation in programming & software development",
          "Led academic projects on distributed systems & databases"
        ]
      }
    ].map((edu, idx) => (
      <Reveal key={edu.school} delay={idx * 0.05}>
        <GlowCard className="rounded-2xl p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
          <header>
            <h3 className="text-xl font-semibold text-brand-500">{edu.degree}</h3>
            <p className="text-lg text-zinc-300 mt-1">{edu.school}</p>
            <p className="text-sm text-zinc-400">{edu.period}</p>
          </header>
        </GlowCard>
      </Reveal>
    ))}
  </div>
</section>

      {/* CERTIFICATIONS */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">🏅 Certifications</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((c, idx) => (
            <Reveal key={c.name} delay={idx * 0.05}>
              <GlowCard className="rounded-2xl p-6 h-40 flex items-center hover:-translate-y-1 transition-all duration-300">
                {/* Row: badge + text */}
                <div className="flex items-center gap-6 w-full">
                  {/* Badge */}
                  <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border border-zinc-700">
                    <Image
                      src={c.badge}
                      alt={c.name}
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-center space-y-3 flex-1 pr-1">
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-brand-500 underline-fx"
                    >
                      {c.name}
                    </a>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-zinc-400 hover:text-brand-500 transition-colors"
                    >
                      Credly verification →
                    </a>
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>


    </div>
  );
}