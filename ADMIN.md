# Espace d'administration (Sanity) — Miracles Actions for Women

Ce guide explique comment activer l'espace d'administration qui permet de
modifier le contenu du site **sans toucher au code**.

> Tant que ces étapes ne sont pas faites, **le site fonctionne normalement**
> avec le contenu intégré (repli automatique). Rien ne casse.

Ce qui est déjà éditable une fois branché : **articles de blog**, **actions /
programmes**, et **coordonnées** (email, téléphone, localisation). Les textes
des pages Accueil et À propos seront branchés ensuite (leurs champs existent
déjà dans le Studio).

---

## 1. Créer le projet Sanity (gratuit)

1. Allez sur **https://www.sanity.io** et créez un compte (Google/GitHub).
2. Créez un nouveau projet ; jeu de données (**dataset**) : `production`.
3. Notez votre **Project ID** (visible sur https://www.sanity.io/manage).

## 2. Lancer l'espace d'administration (le « Studio »)

Dans un terminal, à la racine du projet :

```bash
cd studio
echo "SANITY_STUDIO_PROJECT_ID=VOTRE_PROJECT_ID" > .env
npm install
npx sanity login        # connexion à votre compte Sanity
npm run dev             # admin en local : http://localhost:3333
```

Pour un **admin en ligne** accessible au client (recommandé) :

```bash
npm run deploy          # publie sur https://VOTRE-PROJET.sanity.studio
```

## 3. Importer le contenu actuel du site

Toujours dans `studio/` :

```bash
npm run import          # importe studio/seed.ndjson dans le dataset "production"
```

Vous retrouverez alors dans le Studio : les réglages, les 4 actions et
l'article de blog déjà remplis.

## 4. Rendre le contenu lisible par le site

Sur https://www.sanity.io/manage → votre projet → **API** :

- **Dataset** `production` : laissez-le **public** (lecture publique).
- **CORS Origins** : ajoutez les adresses du site (sans identifiants) :
  - `http://localhost:5173`
  - l'URL de production (ex. `https://miraclecleantech.vercel.app` et le
    domaine final).

## 5. Brancher le site sur Sanity

Définissez deux variables d'environnement **pour le site** :

| Variable | Valeur |
|---|---|
| `VITE_SANITY_PROJECT_ID` | votre Project ID |
| `VITE_SANITY_DATASET` | `production` |

- **En local** : copiez `.env.example` en `.env` à la racine et remplissez-les.
- **Sur Vercel** : Project → Settings → Environment Variables → ajoutez les
  deux → **Redeploy**.

## 6. Vérifier

Modifiez un article dans le Studio, rechargez le site : le changement apparaît.
(En production sur le CDN Sanity, comptez quelques secondes.)

---

### Comment ça marche (résumé technique)
- Le site lit le contenu via l'API HTTP de Sanity (`src/lib/sanity.ts`), avec
  un repli automatique sur le contenu intégré (`src/data/*`) si Sanity n'est
  pas configuré ou ne répond pas.
- Les requêtes sont dans `src/lib/queries.ts`, consommées via le hook
  `useSanityData` (`src/lib/useSanity.ts`).
- Les schémas d'édition sont dans `studio/schemaTypes/`.
