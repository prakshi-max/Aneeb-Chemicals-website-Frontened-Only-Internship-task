import {
  Droplets,
  FlaskConical,
  Grid3x3,
  PanelsTopLeft,
  PaintBucket,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "internal-plastering": PaintBucket,
  waterproofing: Droplets,
  "construction-chemicals": FlaskConical,
  "tile-fixing": Grid3x3,
  "laminated-glass": PanelsTopLeft,
};

interface ProductVisualProps {
  categorySlug: string;
  className?: string;
  iconClassName?: string;
}

export default function ProductVisual({
  categorySlug,
  className = "",
  iconClassName = "h-12 w-12",
}: ProductVisualProps) {
  const Icon = iconMap[categorySlug] ?? FlaskConical;

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-brand-gradient ${className}`}
    >
      <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-white/10" />
      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10" />
      <Icon className={`${iconClassName} relative text-white`} strokeWidth={1.5} />
    </div>
  );
}
