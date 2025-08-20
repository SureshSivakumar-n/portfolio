export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-700 px-3 py-1 text-sm">
      {children}
    </span>
  );
}