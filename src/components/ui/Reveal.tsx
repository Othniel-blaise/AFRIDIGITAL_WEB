import type { ElementType, ReactNode } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}

/** Wraps a section/div so it fades in when scrolled into view, replacing the
 * inline IntersectionObserver scripts duplicated in every static page. */
export function Reveal({ children, as: Tag = "div", className = "", delay = 0 }: RevealProps) {
  const { ref, visible } = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
