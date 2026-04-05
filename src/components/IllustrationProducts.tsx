export default function IllustrationProducts({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 380 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Background ellipse */}
      <ellipse cx="190" cy="165" rx="155" ry="135" fill="#EFF6FF" />

      {/* Shelf / surface */}
      <rect x="55" y="240" width="270" height="14" rx="7" fill="#BFDBFE" />

      {/* === Bottle 1 – pump dispenser (tall, blue) === */}
      <rect x="95" y="105" width="52" height="138" rx="14" fill="#1D4ED8" />
      <rect x="109" y="88" width="24" height="20" rx="6" fill="#1E40AF" />
      {/* pump head */}
      <rect x="116" y="72" width="10" height="18" rx="5" fill="#93C5FD" />
      <rect x="108" y="70" width="26" height="10" rx="5" fill="#60A5FA" />
      {/* label stripe */}
      <rect x="100" y="150" width="42" height="48" rx="8" fill="white" opacity="0.18" />
      <rect x="106" y="158" width="30" height="5" rx="2.5" fill="white" opacity="0.5" />
      <rect x="106" y="168" width="22" height="5" rx="2.5" fill="white" opacity="0.4" />
      <rect x="106" y="178" width="26" height="5" rx="2.5" fill="white" opacity="0.4" />
      {/* shine */}
      <rect x="132" y="112" width="8" height="60" rx="4" fill="white" opacity="0.12" />

      {/* === Bottle 2 – spray trigger (medium, green) === */}
      <rect x="168" y="120" width="56" height="122" rx="14" fill="#16A34A" />
      {/* spray nozzle */}
      <path d="M196 105 L224 105 L224 122 L196 122 Z" rx="6" fill="#15803D" />
      <path d="M224 112 L238 107 L238 117 Z" fill="#86EFAC" />
      {/* trigger */}
      <path d="M214 122 Q220 130 216 140 Q212 148 206 144" stroke="#86EFAC" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* label */}
      <rect x="174" y="160" width="44" height="50" rx="8" fill="white" opacity="0.18" />
      <rect x="180" y="168" width="32" height="5" rx="2.5" fill="white" opacity="0.5" />
      <rect x="180" y="178" width="24" height="5" rx="2.5" fill="white" opacity="0.4" />
      <rect x="180" y="188" width="28" height="5" rx="2.5" fill="white" opacity="0.4" />
      <rect x="206" y="128" width="8" height="55" rx="4" fill="white" opacity="0.12" />

      {/* === Bottle 3 – round flask (small, violet) === */}
      <ellipse cx="288" cy="198" rx="30" ry="38" fill="#7C3AED" />
      <rect x="274" y="155" width="28" height="20" rx="6" fill="#6D28D9" />
      {/* cap */}
      <rect x="272" y="148" width="32" height="12" rx="6" fill="#A78BFA" />
      {/* label */}
      <rect x="264" y="183" width="48" height="34" rx="8" fill="white" opacity="0.18" />
      <rect x="270" y="191" width="36" height="5" rx="2.5" fill="white" opacity="0.5" />
      <rect x="270" y="201" width="28" height="5" rx="2.5" fill="white" opacity="0.4" />
      <rect x="304" y="163" width="7" height="48" rx="3.5" fill="white" opacity="0.12" />

      {/* Bubbles floating */}
      <circle cx="78" cy="175" r="8" fill="#BFDBFE" opacity="0.7" />
      <circle cx="64" cy="148" r="5" fill="#BFDBFE" opacity="0.55" />
      <circle cx="82" cy="128" r="3.5" fill="#93C5FD" opacity="0.55" />
      <circle cx="348" cy="168" r="7" fill="#D1FAE5" opacity="0.7" />
      <circle cx="355" cy="145" r="4.5" fill="#BBF7D0" opacity="0.55" />

      {/* Sparkle */}
      <path
        d="M58 95 L61 88 L64 95 L71 98 L64 101 L61 108 L58 101 L51 98 Z"
        fill="#FCD34D"
        opacity="0.85"
      />

      {/* Check badge */}
      <circle cx="338" cy="100" r="22" fill="#16A34A" />
      <path d="M328 100 l7 8 15-16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
