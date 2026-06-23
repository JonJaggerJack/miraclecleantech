import { useState } from 'react';
import LogoMaw from './LogoMaw';

// Real logo files – drop them in /public to use the official artwork:
//   public/maw-icon.png       → round MAW icon (navbar)
//   public/maw-logo-full.png  → full horizontal lockup (footer)
// Until the files exist, we gracefully fall back to the SVG recreation,
// so the site never shows a broken image.
const ICON_SRC = '/maw-icon.png';
const FULL_SRC = '/maw-logo-full.png';

export function BrandIcon({ className = '' }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <LogoMaw className={className} />;
  return (
    <img
      src={ICON_SRC}
      alt="Miracles Actions for Women"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

export function BrandFull() {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <span className="inline-flex bg-white rounded-xl px-3 py-2">
        <img
          src={FULL_SRC}
          alt="Miracles Actions for Women"
          className="h-12 w-auto object-contain"
          onError={() => setFailed(true)}
        />
      </span>
    );
  }

  // Fallback: SVG icon + text wordmark (for the dark footer).
  return (
    <span className="flex items-center gap-3">
      <LogoMaw className="h-12 w-12 shrink-0" />
      <span className="text-white font-bold text-base leading-tight">
        Miracles Actions<br />for Women
        <span className="block text-[11px] font-medium text-green-400 mt-1">
          Pour le Droit et l'Égalité des Femmes
        </span>
      </span>
    </span>
  );
}
