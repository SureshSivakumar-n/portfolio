"use client";
import { useRef } from "react";

export default function MagneticButton({ children, href, className="" }:{
  children: React.ReactNode; href?: string; className?: string;
}){
  const ref = useRef<HTMLAnchorElement>(null);
  const move = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current; if(!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width/2)) * 0.1;
    const dy = (e.clientY - (r.top + r.height/2)) * 0.1;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };
  const leave = () => { if(ref.current) ref.current.style.transform = `translate(0,0)`; };
  const Comp:any = href ? "a" : "button";
  return (
    <Comp ref={ref} href={href} onMouseMove={move} onMouseLeave={leave}
      className={`px-5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white shadow-soft transition-transform will-change-transform ${className}`}
    >
      {children}
    </Comp>
  );
}