import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

// Renseignez votre Project ID (depuis sanity.io/manage) via la variable
// d'environnement SANITY_STUDIO_PROJECT_ID, ou remplacez la valeur ci-dessous.
export default defineConfig({
  name: 'default',
  title: 'Miracles Actions for Women',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'votre-project-id',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
