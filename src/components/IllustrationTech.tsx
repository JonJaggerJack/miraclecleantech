import { Person, Badge } from './illustrations/parts';

export default function IllustrationTech({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 380 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="190" cy="165" rx="155" ry="135" fill="#F0FDF4" />
      <circle cx="210" cy="148" r="80" fill="#DCFCE7" />

      <ellipse cx="190" cy="252" rx="118" ry="13" fill="#BBF7D0" opacity="0.6" />

      {/* Laptop */}
      <g>
        <rect x="168" y="104" width="170" height="116" rx="12" fill="#15803D" />
        <rect x="180" y="116" width="146" height="92" rx="6" fill="#F0FDF4" />
        {/* screen content */}
        <rect x="192" y="128" width="60" height="8" rx="4" fill="#22C55E" />
        <rect x="192" y="144" width="110" height="7" rx="3.5" fill="#86EFAC" />
        <rect x="192" y="158" width="86" height="7" rx="3.5" fill="#BBF7D0" />
        <circle cx="296" cy="160" r="18" fill="#16A34A" />
        <path d="M291 152 L305 160 L291 168 Z" fill="white" />
        <rect x="192" y="180" width="120" height="7" rx="3.5" fill="#86EFAC" />
        {/* laptop base */}
        <rect x="150" y="220" width="206" height="12" rx="6" fill="#166534" />
      </g>

      {/* A woman learning */}
      <Person x={98} y={244} s={0.95} color="#16A34A" />

      {/* Wi-Fi badge */}
      <Badge x={326} y={100} bg="#16A34A">
        <circle cx="0" cy="6" r="3" fill="#16A34A" />
        <path d="M-8 -2 Q0 -10 8 -2" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M-13 -8 Q0 -19 13 -8" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
      </Badge>

      {/* Idea / lightbulb badge */}
      <Badge x={60} y={132} bg="#FBBF24">
        <path d="M0 -11 A9 9 0 0 1 5 6 H-5 A9 9 0 0 1 0 -11 Z" fill="#FBBF24" />
        <rect x="-4" y="6" width="8" height="5" rx="2" fill="#15803D" />
      </Badge>

      <path d="M150 64 L152 58 L154 64 L160 66 L154 68 L152 74 L150 68 L144 66 Z" fill="#FCD34D" opacity="0.85" />
      <circle cx="124" cy="92" r="4" fill="#4ADE80" />
    </svg>
  );
}
