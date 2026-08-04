interface MaterialIconProps {
  name: string;
  className?: string;
  filled?: boolean;
}

export function MaterialIcon({ name, className = "", filled = false }: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined notranslate ${filled ? "icon-fill" : ""} ${className}`}
      aria-hidden="true"
      translate="no"
    >
      {name}
    </span>
  );
}
