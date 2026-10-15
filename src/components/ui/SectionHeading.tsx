/** Evita quebrar palavras compostas no hífen (ex.: "ar-condicionado"). */
export function keepHyphenated(text: string) {
  return text.split(/(S+-S+)/).map((part, i) =>
    i % 2 ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
};

export function Eyebrow({ children, tone = "light" }: { children: string; tone?: "light" | "dark" }) {
  return (
    <p
      className={`flex items-center gap-3 text-[0.8125rem] font-bold uppercase tracking-[0.16em] ${
        tone === "dark" ? "text-aqua" : "text-aqua-ink"
      }`}
    >
      <span aria-hidden="true" className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

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
    <div className={`${align === "center" ? "mx-auto text-center [&>p:first-child]:justify-center" : ""} max-w-3xl ${className}`}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className={`mt-5 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.025em] sm:text-[2.75rem] lg:text-[3.25rem] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {keepHyphenated(title)}
      </h2>
      {intro && (
        <p className={`mt-5 max-w-2xl text-pretty text-[1.0625rem] leading-relaxed sm:text-lg ${dark ? "text-on-dark" : "text-muted"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
