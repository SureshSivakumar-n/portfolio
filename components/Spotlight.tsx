"use client";
import { motion, useMouse } from "framer-motion";
import { useRef } from "react";

export default function Spotlight(){
  const ref = useRef<HTMLDivElement>(null);
  // useMouse is tiny util in framer-motion@11; fallback if not present
  const handle = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if(!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };
  return (
    <div ref={ref} onMouseMove={handle}
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(600px at var(--mx,50%) var(--my,50%), rgba(124,92,255,.14), transparent 60%)`
      }}
    />
  );
}