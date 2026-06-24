import type { ReactNode } from 'react';

function Person({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {/* head */}
      <circle cx="0" cy="-46" r="11" fill={color} />
      {/* raised arms */}
      <path
        d="M -22 -30 L 0 -13 L 22 -30"
        fill="none"
        stroke={color}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* body */}
      <path d="M -10 -15 L 10 -15 L 8 4 L 18 18 L -18 18 L -8 4 Z" fill={color} />
    </g>
  );
}

function Badge({
  x,
  y,
  bg,
  children,
}: {
  x: number;
  y: number;
  bg: string;
  children: ReactNode;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="22" fill="white" />
      <circle r="22" fill={bg} opacity="0.12" />
      {children}
    </g>
  );
}

export default function IllustrationProducts({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 380 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Background */}
      <ellipse cx="190" cy="165" rx="155" ry="135" fill="#F0FDF4" />
      <circle cx="190" cy="150" r="78" fill="#DCFCE7" />
      {/* dotted arc */}
      <path d="M96 150 A94 94 0 0 1 284 150" stroke="#86EFAC" strokeWidth="2" strokeDasharray="3 9" fill="none" />

      {/* ground shadow */}
      <ellipse cx="190" cy="252" rx="120" ry="14" fill="#BBF7D0" opacity="0.6" />

      {/* Three women, arms raised (solidarity / empowerment) */}
      <Person x={126} y={236} s={0.92} color="#16A34A" />
      <Person x={190} y={222} s={1.12} color="#15803D" />
      <Person x={256} y={238} s={0.86} color="#22C55E" />

      {/* Floating badges – the action areas */}
      {/* Heart – care / accompaniment */}
      <Badge x={66} y={120} bg="#F43F5E">
        <path
          d="M0 5 C-4 -2 -13 -1 -13 6 C-13 12 0 18 0 18 C0 18 13 12 13 6 C13 -1 4 -2 0 5 Z"
          fill="#F43F5E"
        />
      </Badge>

      {/* Leaf – environment */}
      <Badge x={316} y={112} bg="#16A34A">
        <path d="M-1 11 C-11 6 -11 -7 1 -12 C11 -6 10 7 -1 11 Z" fill="#16A34A" />
        <path d="M0 9 L1 -8" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </Badge>

      {/* Star – leadership */}
      <Badge x={326} y={206} bg="#FBBF24">
        <path
          d="M0 -12 L3.5 -3.7 L12 -3 L5.5 3 L7.5 11.5 L0 7 L-7.5 11.5 L-5.5 3 L-12 -3 L-3.5 -3.7 Z"
          fill="#FBBF24"
        />
      </Badge>

      {/* Book – education */}
      <Badge x={56} y={210} bg="#15803D">
        <path d="M-11 -7 L0 -4 L0 10 L-11 7 Z" fill="#15803D" />
        <path d="M11 -7 L0 -4 L0 10 L11 7 Z" fill="#22C55E" />
      </Badge>

      {/* Sparkles */}
      <path d="M150 70 L152 64 L154 70 L160 72 L154 74 L152 80 L150 74 L144 72 Z" fill="#FCD34D" opacity="0.85" />
      <circle cx="232" cy="80" r="4" fill="#86EFAC" />
      <circle cx="110" cy="92" r="3" fill="#4ADE80" />
    </svg>
  );
}
