import { useState } from 'react';
import LogoMaw from './LogoMaw';

// Real logo file – drop it in /public to use the official artwork:
//   public/maw-icon.png  → round MAW icon (navbar + footer)
// Until the file exists, we gracefully fall back to the SVG recreation,
// so the site never shows a broken image.
const ICON_SRC = '/maw-icon.png';

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
