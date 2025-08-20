"use client";
import { motion, Variants } from "framer-motion";

const v: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: .6 } }
};

export default function Reveal({ children, delay=0 }:{ children: React.ReactNode; delay?: number }){
  return (
    <motion.div variants={v} initial="hidden" whileInView="show" viewport={{ once:true, amount:.2 }}
      transition={{ delay }}>
      {children}
    </motion.div>
  );
}