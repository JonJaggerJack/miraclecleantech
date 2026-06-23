import { useEffect, useState } from 'react';
import { sanityFetch } from './sanity';

// Renvoie immédiatement `fallback`, puis remplace par le contenu Sanity dès qu'il
// arrive (et seulement s'il existe). Aucun écran de chargement, aucune casse.
export function useSanityData<T>(
  query: string,
  fallback: T,
  params: Record<string, unknown> = {},
): T {
  const [data, setData] = useState<T>(fallback);

  useEffect(() => {
    let active = true;
    sanityFetch<T>(query, params).then((result) => {
      if (active && result != null && (!Array.isArray(result) || result.length > 0)) {
        setData(result);
      }
    });
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, JSON.stringify(params)]);

  return data;
}
