export default function Chips({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-brand-dark/15 bg-white/60 px-3.5 py-1.5 text-sm text-brand-dark/80"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
