import { SITE_SETTINGS_QUERY } from './queries';
import { siteSettings, type SiteSettings } from '../data/site';
import { useMergedContent } from './useMergedContent';

// Réglages du site : valeurs par défaut, écrasées par Sanity uniquement pour les
// champs réellement renseignés (un champ vide côté Sanity ne casse rien).
export function useSiteSettings(): SiteSettings {
  return useMergedContent<SiteSettings>(SITE_SETTINGS_QUERY, siteSettings);
}
