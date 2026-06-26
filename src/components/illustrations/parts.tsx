import type { ReactNode } from 'react';

// Silhouette de femme aux bras levés (en écho au logo MAW).
export function Person({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle cx="0" cy="-46" r="11" fill={color} />
      <path
        d="M -22 -30 L 0 -13 L 22 -30"
        fill="none"
        stroke={color}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M -10 -15 L 10 -15 L 8 4 L 18 18 L -18 18 L -8 4 Z" fill={color} />
    </g>
  );
}

// Pastille ronde blanche avec un glyphe coloré.
export function Badge({
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
