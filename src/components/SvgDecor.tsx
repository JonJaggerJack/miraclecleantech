interface Props { className?: string }

/** Grid of dots, coloured via `currentColor` (use Tailwind text-* utilities). */
export function DotGrid({ className = '' }: Props) {
  return (
    <svg
      className={className}
      width="220"
      height="220"
      viewBox="0 0 220 220"
      fill="none"
      aria-hidden="true"
    >
      {Array.from({ length: 10 }, (_, row) =>
        Array.from({ length: 10 }, (_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * 22 + 11}
            cy={row * 22 + 11}
            r="2"
            fill="currentColor"
          />
        ))
      )}
    </svg>
  );
}

/** Organic blob shape, coloured via `currentColor`. */
export function BlobDecor({ className = '' }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 500 500"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M380 120 Q460 220 420 330 Q380 440 260 450 Q140 460 80 360 Q20 260 60 150 Q100 40 220 30 Q340 20 380 120Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Three concentric dashed rings, coloured via `currentColor`. */
export function RingDecor({ className = '' }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 300"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="150" cy="150" r="120" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
      <circle cx="150" cy="150" r="80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 12" />
      <circle cx="150" cy="150" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
    </svg>
  );
}
