type Variant = "primary" | "accent" | "white" | "outline" | "outlineDark" | "link" | "linkDark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy-700",
  accent: "bg-aqua text-navy hover:bg-aqua-300",
  white: "bg-white text-navy hover:bg-mist",
  outline: "border border-navy/20 bg-white text-navy hover:border-navy/40 hover:bg-mist",
  outlineDark: "border border-white/30 text-white hover:border-white/60 hover:bg-white/5",
  link: "rounded-md text-navy underline decoration-aqua decoration-2 underline-offset-[6px] hover:decoration-navy",
  linkDark: "rounded-md text-white underline decoration-aqua decoration-2 underline-offset-[6px] hover:decoration-white",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-[0.9375rem]",
  lg: "min-h-13 px-7 text-base",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className = "",
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  if (variant === "link" || variant === "linkDark") return `${base} ${variants[variant]} ${className}`;
  return `${base} text-center ${variants[variant]} ${sizes[size]} ${className}`;
}
