"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar(){
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: .2 });
  return (
    <motion.div style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-50"
    >
      <div className="h-full bg-gradient-to-r from-brand-500 to-purple-500" />
    </motion.div>
  );
}