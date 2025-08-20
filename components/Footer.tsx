import { profile } from "../lib/data";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-900/80">
      <div className="container py-8 text-sm text-zinc-500">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.
      </div>
    </footer>
  );
}