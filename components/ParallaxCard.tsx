"use client";
import { useRef } from "react";

export default function ParallaxCard({ children, className="" }:{ children: React.ReactNode; className?: string; }){
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if(!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - (r.left + r.width/2)) / r.width;
    const py = (e.clientY - (r.top + r.height/2)) / r.height;
    el.style.transform = `rotateX(${(-py*6)}deg) rotateY(${(px*6)}deg) translateZ(0)`;
  };
  const reset = () => { if(ref.current) ref.current.style.transform = `rotateX(0) rotateY(0)`; };
  return (
    <div ref={ref}
      onMouseMove={move} onMouseLeave={reset}
      className={`[transform-style:preserve-3d] transition-transform duration-200 ${className}`}
    >
      {children}
    </div>
  );
}