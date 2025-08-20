"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function GlowCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={clsx(
        "relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm",
        "transition-all duration-300 ease-out",
        className
      )}
    >
      {/* Soft dim glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${coords.x}px ${coords.y}px, rgba(102,71,255,0.15), transparent 70%)`,
          transition: "background 0.10s ease-out",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}