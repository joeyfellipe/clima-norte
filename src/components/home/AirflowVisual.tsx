/** Ilustração decorativa do hero: unidade split + fluxo de ar. Puramente visual. */
export function AirflowVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 440" aria-hidden="true" focusable="false" className={className}>
      <defs>
        <linearGradient id="av-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E8F6FC" />
        </linearGradient>
        <linearGradient id="av-unit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F1F5F8" />
        </linearGradient>
      </defs>

      {/* círculos de fundo */}
      <circle cx="240" cy="220" r="206" fill="url(#av-bg)" />
      <circle cx="240" cy="220" r="206" fill="none" stroke="#DCE6EE" />
      <circle cx="240" cy="220" r="160" fill="none" stroke="#DCE6EE" strokeDasharray="2 7" />
      <circle cx="240" cy="220" r="112" fill="none" stroke="#DCE6EE" />
      <path
        d="M240 14a206 206 0 0 1 178 103"
        fill="none"
        stroke="#39BCEB"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* unidade split */}
      <g>
        <rect x="96" y="104" width="288" height="84" rx="22" fill="url(#av-unit)" stroke="#CFDCE6" />
        <rect x="96" y="104" width="288" height="84" rx="22" fill="none" stroke="#0B1F33" strokeOpacity="0.06" strokeWidth="6" />
        <path d="M124 160h232" stroke="#CFDCE6" strokeWidth="2" strokeLinecap="round" />
        <path d="M124 172h232" stroke="#0B1F33" strokeOpacity="0.12" strokeWidth="5" strokeLinecap="round" />
        <circle cx="352" cy="130" r="4" fill="#39BCEB" />
        <rect x="124" y="124" width="56" height="8" rx="4" fill="#0B1F33" fillOpacity="0.08" />
      </g>

      {/* fluxo de ar */}
      <g fill="none" strokeLinecap="round" stroke="#39BCEB">
        <path className="airflow-line" strokeWidth="3" d="M150 196c-6 34 22 56 8 92s-30 50-10 86" />
        <path className="airflow-line airflow-line--slow" strokeWidth="3" strokeOpacity="0.7" d="M200 196c-4 40 26 60 14 100s-20 52-2 82" />
        <path className="airflow-line" strokeWidth="3" d="M250 196c2 38 28 58 18 98s-16 50 4 84" />
        <path className="airflow-line airflow-line--slow" strokeWidth="3" strokeOpacity="0.7" d="M300 196c6 36 30 54 24 92s-8 50 12 82" />
        <path className="airflow-line" strokeWidth="3" strokeOpacity="0.5" d="M346 196c10 32 32 48 30 82" />
      </g>

      {/* selo de conforto (sem números) */}
      <g transform="translate(300 300)">
        <rect width="150" height="64" rx="18" fill="#0B1F33" />
        <circle cx="32" cy="32" r="16" fill="#39BCEB" fillOpacity="0.18" />
        <path d="M34 22v12.5a5 5 0 1 1-4 0V22a2 2 0 0 1 4 0Z" fill="none" stroke="#39BCEB" strokeWidth="2" strokeLinejoin="round" />
        <rect x="58" y="22" width="70" height="7" rx="3.5" fill="#FFFFFF" />
        <rect x="58" y="36" width="46" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.4" />
      </g>
    </svg>
  );
}
