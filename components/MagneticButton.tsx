"use client";
import { useRef } from "react";
"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function MagneticButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.05 }} // 👈 smooth scale forward
      transition={{ duration: 0.3, delay: 0.2 }}
      className={clsx(
        "inline-block px-6 py-3 rounded-xl bg-[#6647ff] text-white font-semibold transition-transform duration-300 hover:scale-105 hover:text-white",
        className
      )}
    >
      {children}
    </motion.a>
  );
}