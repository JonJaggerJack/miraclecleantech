// Connexion à Sanity via l'API HTTP (aucune dépendance lourde).
// Si VITE_SANITY_PROJECT_ID n'est pas défini, tout retombe sur le contenu statique.
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;
const dataset = (import.meta.env.VITE_SANITY_DATASET as string | undefined) || 'production';
const apiVersion = '2023-10-01';

export const sanityEnabled = Boolean(projectId);

export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T | null> {
  if (!projectId) return null;

  const base = `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}`;
  const paramString = Object.entries(params)
    .map(([k, v]) => `&$${k}=${encodeURIComponent(JSON.stringify(v))}`)
    .join('');
  const url = `${base}?query=${encodeURIComponent(query)}${paramString}`;

  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const json = (await res.json()) as { result?: T };
    return json.result ?? null;
  } catch {
    return null;
  }
}
