type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      <p
        className={`text-sm font-semibold uppercase tracking-[0.14em] ${dark ? "text-aqua" : "text-aqua-ink"}`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-3 text-balance text-[1.75rem] font-bold leading-tight tracking-tight sm:text-4xl ${dark ? "text-white" : "text-navy"}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-pretty text-base leading-relaxed sm:text-lg ${dark ? "text-on-dark" : "text-muted"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
