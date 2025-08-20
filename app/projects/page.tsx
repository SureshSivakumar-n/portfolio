"use client";
import { motion } from "framer-motion";
import Section from "../../components/Section";
import ProjectCard from "../../components/ProjectCard";
import ParallaxCard from "../../components/ParallaxCard";
import { projects } from "../../lib/data";


export default function ProjectsPage() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6"
      >
        Projects
      </motion.h1>

      <Section title="">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr items-stretch"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="h-full"                   // make each cell stretch
            >
              <ParallaxCard className="h-full">   {/* ensure parallax wrapper stretches */}
                <div className="h-full flex">     {/* force child to fill */}
                  <ProjectCard p={p} />
                </div>
              </ParallaxCard>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}