export default function IllustrationContact({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 380 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Background ellipse */}
      <ellipse cx="190" cy="165" rx="155" ry="135" fill="#EEF2FF" />

      {/* Main envelope body */}
      <rect x="58" y="108" width="232" height="162" rx="18" fill="white" />
      <rect x="58" y="108" width="232" height="162" rx="18" stroke="#BFDBFE" strokeWidth="2" />

      {/* Envelope flap (open, folded back) */}
      <path d="M58 126 L174 196 L290 126" stroke="#BFDBFE" strokeWidth="2" fill="none" />
      <path d="M58 108 L174 178 L290 108 Z" fill="#EFF6FF" />
      <path d="M58 108 L174 178 L290 108" stroke="#BFDBFE" strokeWidth="1.5" fill="none" />

      {/* Arrow going out of envelope (sending) */}
      <circle cx="270" cy="96" r="22" fill="#1D4ED8" />
      <path
        d="M260 96 L280 96 M274 89 L281 96 L274 103"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Floating message bubble 1 */}
      <rect x="62" y="52" width="108" height="44" rx="14" fill="#1D4ED8" />
      <path d="M82 96 L74 108 L96 96 Z" fill="#1D4ED8" />
      <rect x="74" y="64" width="84" height="7" rx="3.5" fill="white" opacity="0.7" />
      <rect x="74" y="76" width="60" height="7" rx="3.5" fill="white" opacity="0.5" />

      {/* Floating message bubble 2 (reply) */}
      <rect x="220" y="32" width="100" height="44" rx="14" fill="#D1FAE5" />
      <path d="M306 76 L316 88 L296 76 Z" fill="#D1FAE5" />
      <rect x="232" y="44" width="76" height="7" rx="3.5" fill="#16A34A" opacity="0.6" />
      <rect x="232" y="56" width="52" height="7" rx="3.5" fill="#16A34A" opacity="0.4" />

      {/* Phone icon – bottom left */}
      <circle cx="82" cy="232" r="26" fill="#EDE9FE" />
      <path
        d="M73 224 Q72 232 76 238 Q82 246 90 245 Q94 244 94 240 Q91 237 88 238 Q86 235 83 231 Q84 228 82 226 Q80 224 73 224 Z"
        fill="#7C3AED"
      />

      {/* Location pin – bottom right */}
      <circle cx="296" cy="232" r="26" fill="#DBEAFE" />
      <path d="M296 218 A10 10 0 0 1 306 228 A10 14 0 0 1 296 246 A10 14 0 0 1 286 228 A10 10 0 0 1 296 218 Z" fill="#1D4ED8" />
      <circle cx="296" cy="228" r="4" fill="white" />

      {/* Sparkle */}
      <path
        d="M44 155 L47 148 L50 155 L57 158 L50 161 L47 168 L44 161 L37 158 Z"
        fill="#FCD34D"
        opacity="0.85"
      />

      {/* Dots */}
      <circle cx="48" cy="90" r="5" fill="#60A5FA" opacity="0.45" />
      <circle cx="336" cy="265" r="5" fill="#34D399" opacity="0.45" />
      <circle cx="350" cy="248" r="3.5" fill="#A78BFA" opacity="0.45" />
    </svg>
  );
}
