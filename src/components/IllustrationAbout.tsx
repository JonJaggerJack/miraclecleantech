import { Person, Badge } from './illustrations/parts';

export default function IllustrationAbout({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 380 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="190" cy="165" rx="155" ry="135" fill="#F0FDF4" />
      <circle cx="190" cy="150" r="80" fill="#DCFCE7" />
      <path d="M100 150 A90 90 0 0 1 280 150" stroke="#86EFAC" strokeWidth="2" strokeDasharray="3 9" fill="none" />

      {/* Large heart – care / identity */}
      <path
        d="M190 96 C181 80 156 82 156 104 C156 124 190 142 190 142 C190 142 224 124 224 104 C224 82 199 80 190 96 Z"
        fill="#15803D"
      />

      <ellipse cx="190" cy="252" rx="118" ry="13" fill="#BBF7D0" opacity="0.6" />

      {/* Two women, together */}
      <Person x={150} y={244} s={1.0} color="#16A34A" />
      <Person x={230} y={244} s={1.0} color="#22C55E" />

      {/* Badges */}
      <Badge x={64} y={140} bg="#16A34A">
        <path d="M-1 11 C-11 6 -11 -7 1 -12 C11 -6 10 7 -1 11 Z" fill="#16A34A" />
        <path d="M0 9 L1 -8" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </Badge>
      <Badge x={316} y={132} bg="#FBBF24">
        <path
          d="M0 -12 L3.5 -3.7 L12 -3 L5.5 3 L7.5 11.5 L0 7 L-7.5 11.5 L-5.5 3 L-12 -3 L-3.5 -3.7 Z"
          fill="#FBBF24"
        />
      </Badge>

      <path d="M150 66 L152 60 L154 66 L160 68 L154 70 L152 76 L150 70 L144 68 Z" fill="#FCD34D" opacity="0.85" />
      <circle cx="236" cy="76" r="4" fill="#86EFAC" />
    </svg>
  );
}
