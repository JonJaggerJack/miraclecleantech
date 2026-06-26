import { Person, Badge } from './illustrations/parts';

export default function IllustrationBlog({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 380 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="190" cy="165" rx="155" ry="135" fill="#F0FDF4" />
      <circle cx="210" cy="150" r="80" fill="#DCFCE7" />

      <ellipse cx="190" cy="252" rx="118" ry="13" fill="#BBF7D0" opacity="0.6" />

      {/* Article card with a photo + text lines */}
      <g>
        <rect x="158" y="92" width="176" height="150" rx="14" fill="white" stroke="#BBF7D0" strokeWidth="1.5" />
        <rect x="172" y="106" width="148" height="56" rx="8" fill="#86EFAC" />
        {/* little image glyph */}
        <circle cx="196" cy="128" r="8" fill="#15803D" />
        <path d="M178 152 L206 132 L226 150 L256 124 L314 152 Z" fill="#16A34A" opacity="0.55" />
        <rect x="172" y="176" width="130" height="8" rx="4" fill="#DCFCE7" />
        <rect x="172" y="194" width="148" height="8" rx="4" fill="#DCFCE7" />
        <rect x="172" y="212" width="96" height="8" rx="4" fill="#BBF7D0" />
      </g>

      {/* A woman reading */}
      <Person x={92} y={244} s={0.95} color="#16A34A" />

      {/* Badges */}
      <Badge x={326} y={104} bg="#FBBF24">
        {/* pencil */}
        <g transform="rotate(45)">
          <rect x="-3.5" y="-12" width="7" height="20" rx="2" fill="#FBBF24" />
          <polygon points="-3.5,8 3.5,8 0,14" fill="#15803D" />
          <rect x="-3.5" y="-12" width="7" height="4" fill="#15803D" />
        </g>
      </Badge>
      <Badge x={60} y={120} bg="#16A34A">
        {/* speech bubble */}
        <path d="M-11 -8 H11 A3 3 0 0 1 14 -5 V5 A3 3 0 0 1 11 8 H-3 L-9 13 V8 H-11 A3 3 0 0 1 -14 5 V-5 A3 3 0 0 1 -11 -8 Z" fill="#16A34A" />
      </Badge>

      <path d="M150 64 L152 58 L154 64 L160 66 L154 68 L152 74 L150 68 L144 66 Z" fill="#FCD34D" opacity="0.85" />
      <circle cx="120" cy="92" r="4" fill="#4ADE80" />
    </svg>
  );
}
