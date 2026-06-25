import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || '3et2ceje',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  // Nom de l'admin en ligne -> https://maw-bukavu.sanity.studio
  // (doit être unique ; change-le ici s'il est déjà pris.)
  studioHost: 'maw-bukavu',
});

