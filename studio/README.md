# MAW Studio (Sanity)

Espace d'administration du site Miracles Actions for Women.

```bash
echo "SANITY_STUDIO_PROJECT_ID=VOTRE_PROJECT_ID" > .env
npm install
npx sanity login
npm run dev        # admin local : http://localhost:3333
npm run deploy     # admin en ligne : https://VOTRE-PROJET.sanity.studio
npm run import     # importe le contenu initial (seed.ndjson)
```

Voir le guide complet : [`../ADMIN.md`](../ADMIN.md).
