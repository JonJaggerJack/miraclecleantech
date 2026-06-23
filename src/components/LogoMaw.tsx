// MAW – Miracles Actions for Women logo, recreated as a scalable SVG.
// Three figures with raised arms inside a green ring, sitting above a "MAW" band.

const GREEN = '#2f9e44';

function Figure({ tx, ty, s }: { tx: number; ty: number; s: number }) {
  return (
    <g transform={`translate(${tx} ${ty}) scale(${s})`}>
      {/* head */}
      <circle cx="0" cy="-46" r="9" fill={GREEN} />
      {/* raised arms */}
      <path
        d="M -20 -30 L 0 -14 L 20 -30"
        fill="none"
        stroke={GREEN}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* body / chalice */}
      <path d="M -8 -16 L 8 -16 L 7 2 L 16 14 L -16 14 L -7 2 Z" fill={GREEN} />
    </g>
  );
}

export default function LogoMaw({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Miracles Actions for Women"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* outer ring with a swoosh gap at the top */}
      <path
        d="M 118 14 A 88 88 0 1 1 82 14"
        fill="none"
        stroke={GREEN}
        strokeWidth="13"
        strokeLinecap="round"
      />

      {/* three figures – the centre one taller */}
      <Figure tx={100} ty={92} s={1.05} />
      <Figure tx={60} ty={100} s={0.7} />
      <Figure tx={140} ty={100} s={0.7} />

      {/* ground band with the MAW wordmark */}
      <path d="M 26 112 Q 100 98 174 112 L 168 134 Q 100 158 32 134 Z" fill={GREEN} />
      <text
        x="100"
        y="129"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Poppins', system-ui, sans-serif"
        fontSize="26"
        fontWeight="800"
        letterSpacing="1"
        fill="#ffffff"
      >
        MAW
      </text>
    </svg>
  );
}
