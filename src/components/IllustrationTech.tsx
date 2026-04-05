export default function IllustrationTech({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 380 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Soft background ellipse */}
      <ellipse cx="190" cy="155" rx="155" ry="125" fill="#EEF2FF" />

      {/* Laptop base */}
      <rect x="60" y="218" width="260" height="18" rx="9" fill="#1D4ED8" />
      <rect x="155" y="218" width="70" height="6" rx="3" fill="#1E40AF" />

      {/* Screen frame */}
      <rect x="82" y="55" width="216" height="166" rx="14" fill="#1D4ED8" />

      {/* Screen glass */}
      <rect x="94" y="67" width="192" height="142" rx="8" fill="#EEF2FF" />

      {/* Code lines */}
      <rect x="110" y="84"  width="65"  height="7" rx="3" fill="#60A5FA" />
      <rect x="120" y="99"  width="110" height="7" rx="3" fill="#34D399" />
      <rect x="120" y="114" width="78"  height="7" rx="3" fill="#818CF8" />
      <rect x="120" y="129" width="102" height="7" rx="3" fill="#34D399" />
      <rect x="110" y="144" width="65"  height="7" rx="3" fill="#60A5FA" />
      <rect x="120" y="159" width="88"  height="7" rx="3" fill="#818CF8" />
      <rect x="120" y="174" width="112" height="7" rx="3" fill="#34D399" />

      {/* Neural-net circle – top-right of screen */}
      <circle cx="260" cy="116" r="32" fill="white" opacity="0.9" />
      <circle cx="260" cy="116" r="28" fill="#EDE9FE" />
      <circle cx="251" cy="109" r="4"  fill="#7C3AED" />
      <circle cx="269" cy="109" r="4"  fill="#7C3AED" />
      <circle cx="243" cy="121" r="4"  fill="#7C3AED" />
      <circle cx="260" cy="123" r="4"  fill="#7C3AED" />
      <circle cx="277" cy="121" r="4"  fill="#7C3AED" />
      <line x1="251" y1="109" x2="243" y2="121" stroke="#A78BFA" strokeWidth="1.5" />
      <line x1="251" y1="109" x2="260" y2="123" stroke="#A78BFA" strokeWidth="1.5" />
      <line x1="269" y1="109" x2="260" y2="123" stroke="#A78BFA" strokeWidth="1.5" />
      <line x1="269" y1="109" x2="277" y2="121" stroke="#A78BFA" strokeWidth="1.5" />

      {/* Wi-Fi signal – floating top-right */}
      <g transform="translate(328 82)">
        <circle cx="0" cy="0" r="4" fill="#16A34A" />
        <path d="M-10 -12 Q0 -22 10 -12" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M-18 -20 Q0 -36 18 -20" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
      </g>

      {/* Mini monitor icon – floating left */}
      <g transform="translate(18 108)">
        <rect x="0" y="0" width="38" height="27" rx="4" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="1.5" />
        <rect x="4" y="4" width="30" height="17" rx="2" fill="#EFF6FF" />
        <rect x="14" y="27" width="10" height="7" fill="#93C5FD" />
        <rect x="9"  y="34" width="20" height="4" rx="2" fill="#93C5FD" />
        <rect x="8"  y="8"  width="18" height="3" rx="1.5" fill="#93C5FD" />
        <rect x="8"  y="14" width="13" height="3" rx="1.5" fill="#BFDBFE" />
      </g>

      {/* Floating accent dots */}
      <circle cx="38"  cy="62"  r="5" fill="#34D399" opacity="0.55" />
      <circle cx="344" cy="198" r="5" fill="#60A5FA" opacity="0.50" />
      <circle cx="343" cy="50"  r="4" fill="#818CF8" opacity="0.50" />
      <circle cx="40"  cy="230" r="4" fill="#34D399" opacity="0.45" />

      {/* Sparkle */}
      <path
        d="M52 175 L55 168 L58 175 L65 178 L58 181 L55 188 L52 181 L45 178 Z"
        fill="#FCD34D"
        opacity="0.80"
      />
    </svg>
  );
}
