import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";

type ImagePlaceholderProps = {
  label: string;
  icon?: LucideIcon;
  className?: string;
  tone?: "dark" | "olive" | "cream" | "sand";
};

const toneStyles: Record<string, string> = {
  dark: "from-brand-dark to-brand-dark-light text-brand-cream/70",
  olive: "from-brand-olive to-brand-olive-dark text-brand-cream/80",
  cream: "from-brand-cream to-brand-sand text-brand-dark/50",
  sand: "from-brand-sand to-brand-cream text-brand-dark/50",
};

/**
 * Placeholder used everywhere a real product/lifestyle photo will eventually go.
 * Swap the <img> back in once the client supplies photography — every usage
 * site keeps the same aspect ratio so drop-in replacement is a one-line change.
 */
export default function ImagePlaceholder({
  label,
  icon: Icon = ImageIcon,
  className = "",
  tone = "cream",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${toneStyles[tone]} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <Icon className="h-7 w-7 opacity-70" strokeWidth={1.5} />
        <span className="text-xs font-medium tracking-wide">{label}</span>
      </div>
    </div>
  );
}
