import { useSanityData } from './useSanity';
import { SITE_SETTINGS_QUERY } from './queries';
import { siteSettings, type SiteSettings } from '../data/site';

// Réglages du site : valeurs par défaut, écrasées par Sanity uniquement pour les
// champs réellement renseignés (un champ vide côté Sanity ne casse rien).
export function useSiteSettings(): SiteSettings {
  const remote = useSanityData<Partial<SiteSettings> | null>(SITE_SETTINGS_QUERY, null);
  const merged: SiteSettings = { ...siteSettings };
  if (remote) {
    (Object.keys(siteSettings) as (keyof SiteSettings)[]).forEach((k) => {
      const v = remote[k];
      if (typeof v === 'string' && v.trim()) merged[k] = v;
    });
  }
  return merged;
}
