import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { MaterialIcon } from "./MaterialIcon";

type Variant = "primary" | "outline" | "inverse" | "outline-inverse";
type Size = "md" | "lg" | "pill";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  to?: string;
  icon?: string;
  iconPosition?: "left" | "right";
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-on-primary hover:shadow-xl",
  outline: "border-2 border-secondary text-secondary hover:bg-secondary/5",
  inverse: "bg-on-primary text-primary hover:scale-105 shadow-2xl",
  "outline-inverse":
    "bg-transparent border-2 border-secondary text-secondary hover:bg-secondary/5",
};

const sizeClasses: Record<Size, string> = {
  md: "px-6 py-2.5 rounded-lg",
  lg: "px-8 py-4 rounded-xl",
  pill: "px-10 py-5 rounded-full",
};

export function Button({
  variant = "primary",
  size = "lg",
  to,
  icon,
  iconPosition = "right",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-headline-md text-body-md font-semibold transition-all duration-300 hover:-translate-y-1 active:scale-95 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const iconEl = icon && (
    <MaterialIcon
      name={icon}
      className={iconPosition === "right" ? "group-hover:translate-x-1 transition-transform" : ""}
    />
  );

  const content =
    iconPosition === "left" ? (
      <>
        {iconEl}
        {children}
      </>
    ) : (
      <>
        {children}
        {iconEl}
      </>
    );

  if (to) {
    return (
      <Link to={to} className={`group ${classes}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`group ${classes}`} {...rest}>
      {content}
    </button>
  );
}
