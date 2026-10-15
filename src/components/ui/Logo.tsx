export function LogoMark({ className = "h-9 w-9", tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false" className={className}>
      <circle cx="20" cy="20" r="20" fill={tone === "dark" ? "#16324D" : "#0B1F33"} />
      <g fill="none" strokeLinecap="round" strokeWidth="2.6">
        <path d="M9.5 15.5c3.5-2.6 7-2.6 10.5 0s7 2.6 10.5 0" stroke="#39BCEB" />
        <path d="M9.5 21.5c3.5-2.6 7-2.6 10.5 0s7 2.6 10.5 0" stroke="#FFFFFF" />
        <path d="M9.5 27.5c3.5-2.6 7-2.6 10.5 0" stroke="#39BCEB" opacity="0.6" />
      </g>
    </svg>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap">
      <LogoMark tone={tone} />
      <span className="leading-none">
        <span className={`block text-lg font-extrabold tracking-tight ${dark ? "text-white" : "text-navy"}`}>
          Clima Norte
        </span>
        <span
          className={`mt-1 block text-[0.625rem] font-semibold uppercase tracking-[0.2em] ${dark ? "text-on-dark" : "text-muted"}`}
        >
          Ar-condicionado
        </span>
      </span>
    </span>
  );
}
