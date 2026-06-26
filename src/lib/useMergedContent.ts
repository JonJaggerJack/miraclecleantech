import { useSanityData } from './useSanity';

// Renvoie le contenu par défaut, en remplaçant chaque champ par sa version Sanity
// uniquement si elle est réellement renseignée (chaîne non vide / tableau non vide).
// => un champ laissé vide dans l'admin ne casse jamais l'affichage.
export function useMergedContent<T>(query: string, fallback: T): T {
  const remote = useSanityData<Record<string, unknown> | null>(query, null);
  if (!remote) return fallback;

  const merged: Record<string, unknown> = { ...(fallback as Record<string, unknown>) };
  for (const k of Object.keys(merged)) {
    const v = remote[k];
    if (v == null) continue;
    if (typeof v === 'string' && !v.trim()) continue;
    if (Array.isArray(v) && v.length === 0) continue;
    merged[k] = v;
  }
  return merged as T;
}
