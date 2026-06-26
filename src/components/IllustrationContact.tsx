import { Person, Badge } from './illustrations/parts';

export default function IllustrationContact({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 380 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="190" cy="165" rx="155" ry="135" fill="#F0FDF4" />
      <circle cx="205" cy="150" r="80" fill="#DCFCE7" />

      <ellipse cx="190" cy="252" rx="118" ry="13" fill="#BBF7D0" opacity="0.6" />

      {/* Envelope */}
      <g>
        <rect x="166" y="116" width="168" height="120" rx="14" fill="white" stroke="#BBF7D0" strokeWidth="2" />
        <path d="M166 130 L250 188 L334 130" stroke="#86EFAC" strokeWidth="2" fill="none" />
        <path d="M166 126 L250 182 L334 126 Z" fill="#86EFAC" opacity="0.5" />
      </g>

      {/* A woman waving / writing */}
      <Person x={96} y={244} s={0.95} color="#16A34A" />

      {/* Chat bubble */}
      <Badge x={300} y={94} bg="#15803D">
        <path d="M-11 -8 H11 A3 3 0 0 1 14 -5 V5 A3 3 0 0 1 11 8 H-3 L-9 13 V8 H-11 A3 3 0 0 1 -14 5 V-5 A3 3 0 0 1 -11 -8 Z" fill="#15803D" />
      </Badge>

      {/* Location pin badge */}
      <Badge x={64} y={150} bg="#16A34A">
        <path d="M0 -12 A8 8 0 0 1 8 -4 A8 11 0 0 1 0 13 A8 11 0 0 1 -8 -4 A8 8 0 0 1 0 -12 Z" fill="#16A34A" />
        <circle cx="0" cy="-4" r="3" fill="white" />
      </Badge>

      {/* Phone badge */}
      <Badge x={328} y={206} bg="#FBBF24">
        <path d="M-7 -9 Q-9 0 -4 6 Q2 12 8 9 Q11 7 9 4 Q5 2 3 5 Q0 2 -2 -2 Q1 -4 -1 -7 Q-3 -10 -7 -9 Z" fill="#FBBF24" />
      </Badge>

      <path d="M150 64 L152 58 L154 64 L160 66 L154 68 L152 74 L150 68 L144 66 Z" fill="#FCD34D" opacity="0.85" />
      <circle cx="126" cy="92" r="4" fill="#4ADE80" />
    </svg>
  );
}
