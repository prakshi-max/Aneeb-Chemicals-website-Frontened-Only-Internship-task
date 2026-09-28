import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

interface ClickButtonProps extends BaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
}

type ButtonProps = LinkButtonProps | ClickButtonProps;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-card hover:bg-primary-700 hover:shadow-card-hover",
  secondary:
    "bg-accent text-white shadow-card hover:bg-emerald-600 hover:shadow-card-hover",
  outline:
    "border border-line bg-white text-ink hover:border-primary hover:text-primary",
  ghost: "text-primary hover:bg-primary-50",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98]";

export default function Button({
  children,
  variant = "primary",
  className = "",
  icon,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
