"use client";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useCallback } from "react";

/** Mouse‑follow page spotlight (build‑safe, no useMouse) */
export default function Spotlight() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }, [x, y]);

  const spotlight = useMotionTemplate`
    radial-gradient(
      400px circle at ${x}px ${y}px,
      rgba(102,71,255,0.12),
      transparent 60%
    )
  `;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      style={{ backgroundImage: spotlight }}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden
    />
  );
}