import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900/80 bg-black/50 backdrop-blur">
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold underline-fx">Suresh • Data Engineer</Link>
        <div className="flex gap-6 text-sm">
          <Link className="underline-fx" href="/projects">Projects</Link>
          {/* <Link className="underline-fx" href="/blog">Blog</Link> */}
          <Link className="underline-fx" href="/contact">Contact</Link>
          
        </div>
      </nav>
    </header>
  );
}