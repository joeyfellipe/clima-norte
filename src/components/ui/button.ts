type Variant = "primary" | "accent" | "outline" | "outlineDark" | "link";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy-700",
  accent: "bg-aqua text-navy hover:bg-aqua-300",
  outline: "border border-navy/20 bg-white text-navy hover:border-navy/40 hover:bg-mist",
  outlineDark: "border border-white/25 text-white hover:border-white/50 hover:bg-white/5",
  link: "rounded-md text-aqua-ink hover:text-navy",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-[0.9375rem]",
  lg: "min-h-12 px-6 text-base sm:min-h-13 sm:px-7",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className = "",
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  if (variant === "link") return `${base} ${variants.link} ${className}`;
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}
