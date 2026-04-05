export default function IllustrationBlog({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 360 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Soft background ellipse */}
      <ellipse cx="180" cy="155" rx="155" ry="130" fill="#EFF6FF" />

      {/* Notebook body */}
      <rect x="60" y="35" width="195" height="225" rx="14" fill="white" />
      <rect x="60" y="35" width="195" height="225" rx="14" stroke="#BFDBFE" strokeWidth="1.5" />

      {/* Spine */}
      <rect x="60" y="35" width="26" height="225" rx="13" fill="#DBEAFE" />

      {/* Spine rings */}
      <circle cx="73" cy="80" r="5" fill="white" />
      <circle cx="73" cy="115" r="5" fill="white" />
      <circle cx="73" cy="150" r="5" fill="white" />
      <circle cx="73" cy="185" r="5" fill="white" />
      <circle cx="73" cy="220" r="5" fill="white" />

      {/* Text lines – alternating blue / green tones */}
      <rect x="102" y="72"  width="130" height="7" rx="3.5" fill="#BFDBFE" />
      <rect x="102" y="96"  width="110" height="7" rx="3.5" fill="#BFDBFE" />
      <rect x="102" y="120" width="130" height="7" rx="3.5" fill="#D1FAE5" />
      <rect x="102" y="144" width="95"  height="7" rx="3.5" fill="#BFDBFE" />
      <rect x="102" y="168" width="125" height="7" rx="3.5" fill="#D1FAE5" />
      <rect x="102" y="192" width="105" height="7" rx="3.5" fill="#BFDBFE" />

      {/* Green "done" badge */}
      <circle cx="252" cy="55" r="28" fill="#16A34A" />
      <path
        d="M241 55 l8 9 17-18"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Pen */}
      <g transform="translate(293 185) rotate(-40)">
        <rect x="-5" y="-50" width="10" height="60" rx="5" fill="#1D4ED8" />
        <polygon points="-5,10 5,10 0,26" fill="#1E40AF" />
        <rect x="-5" y="-62" width="10" height="14" rx="3" fill="#FBBF24" />
        <rect x="-6" y="-50" width="12" height="5" fill="#93C5FD" />
      </g>

      {/* Floating accent dots */}
      <circle cx="33"  cy="90"  r="6" fill="#34D399" opacity="0.55" />
      <circle cx="38"  cy="200" r="4" fill="#60A5FA" opacity="0.50" />
      <circle cx="325" cy="75"  r="5" fill="#60A5FA" opacity="0.50" />
      <circle cx="318" cy="225" r="6" fill="#34D399" opacity="0.50" />

      {/* Sparkle */}
      <path
        d="M335 50 L338 43 L341 50 L348 53 L341 56 L338 63 L335 56 L328 53 Z"
        fill="#FCD34D"
        opacity="0.85"
      />
    </svg>
  );
}
