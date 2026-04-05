export default function IllustrationAbout({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 380 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Background ellipse */}
      <ellipse cx="190" cy="165" rx="158" ry="138" fill="#F0FDF4" />

      {/* Ground / platform */}
      <ellipse cx="190" cy="282" rx="130" ry="14" fill="#D1FAE5" />

      {/* Person 1 – left (blue shirt) */}
      <circle cx="115" cy="110" r="22" fill="#DBEAFE" />
      <circle cx="115" cy="97" r="13" fill="#93C5FD" />
      <path d="M96 132 Q115 120 134 132 L134 185 Q115 192 96 185 Z" fill="#1D4ED8" />
      <rect x="96" y="170" width="10" height="30" rx="5" fill="#BFDBFE" />
      <rect x="120" y="170" width="10" height="30" rx="5" fill="#BFDBFE" />

      {/* Person 2 – centre (green shirt) */}
      <circle cx="190" cy="100" r="24" fill="#D1FAE5" />
      <circle cx="190" cy="86" r="14" fill="#6EE7B7" />
      <path d="M169 124 Q190 111 211 124 L214 182 Q190 190 166 182 Z" fill="#16A34A" />
      <rect x="167" y="168" width="11" height="32" rx="5" fill="#BBF7D0" />
      <rect x="192" y="168" width="11" height="32" rx="5" fill="#BBF7D0" />

      {/* Person 3 – right (violet shirt) */}
      <circle cx="265" cy="110" r="22" fill="#EDE9FE" />
      <circle cx="265" cy="97" r="13" fill="#C4B5FD" />
      <path d="M246 132 Q265 120 284 132 L284 185 Q265 192 246 185 Z" fill="#7C3AED" />
      <rect x="246" y="170" width="10" height="30" rx="5" fill="#DDD6FE" />
      <rect x="270" y="170" width="10" height="30" rx="5" fill="#DDD6FE" />

      {/* Heart above centre person */}
      <path
        d="M190 68 C190 68 178 55 172 60 C166 65 170 74 190 85 C210 74 214 65 208 60 C202 55 190 68 190 68 Z"
        fill="#F43F5E"
        opacity="0.85"
      />

      {/* Linked hands between person 1 & 2 */}
      <path d="M134 155 Q162 147 166 155" stroke="#6EE7B7" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Linked hands between person 2 & 3 */}
      <path d="M214 155 Q218 147 246 155" stroke="#C4B5FD" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Floating badge – "ASBL" */}
      <rect x="40" y="60" width="64" height="28" rx="14" fill="#1D4ED8" />
      <text x="72" y="79" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="white">ASBL</text>

      {/* Floating badge – leaf */}
      <circle cx="336" cy="80" r="20" fill="#D1FAE5" />
      <path d="M336 70 Q345 74 344 83 Q343 92 334 93 Q326 88 327 79 Q328 70 336 70 Z" fill="#16A34A" />
      <line x1="336" y1="93" x2="336" y2="100" stroke="#16A34A" strokeWidth="1.5" />

      {/* Sparkle top-right */}
      <path
        d="M350 130 L353 123 L356 130 L363 133 L356 136 L353 143 L350 136 L343 133 Z"
        fill="#FCD34D"
        opacity="0.85"
      />

      {/* Dots decoration */}
      <circle cx="42" cy="200" r="5" fill="#60A5FA" opacity="0.45" />
      <circle cx="55" cy="225" r="3.5" fill="#34D399" opacity="0.45" />
      <circle cx="340" cy="220" r="5" fill="#34D399" opacity="0.45" />
      <circle cx="328" cy="245" r="3.5" fill="#A78BFA" opacity="0.45" />
    </svg>
  );
}
