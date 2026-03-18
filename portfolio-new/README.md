# Portfolio Matthieu Forel - React + TypeScript + Vite

Portfolio personnel avec chatbot AI intégré, déployé sur Netlify avec Netlify Functions.

## 🚀 Stack Technique

- **Frontend** : React 19 + TypeScript + Vite
- **Styling** : Tailwind CSS
- **Backend** : Netlify Functions (Serverless)
- **AI** : OpenAI GPT-4
- **Déploiement** : Netlify + GitHub Pages

## 📦 Installation

```bash
cd portfolio-new
npm install
```

## 🛠️ Développement Local

### Démarrer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Tester les Netlify Functions en local

```bash
npm run netlify:dev
```

Cela démarre :

- Le serveur Vite sur `http://localhost:5173`
- Les Netlify Functions sur `http://localhost:8888/.netlify/functions/`

**⚠️ Important** : Pour tester le chatbot en local, tu dois créer un fichier `.env` :

```bash
# portfolio-new/.env
OPENAI_API_KEY=sk-your-openai-api-key-here
```

## 🏗️ Build

### Build pour GitHub Pages (racine du repo)

```bash
npm run build
```

Génère le site dans `/` (racine du repo) pour GitHub Pages.

### Build pour Netlify (dist/)

```bash
npm run build:netlify
```

Génère le site dans `portfolio-new/dist/` pour Netlify.

## 🚀 Déploiement

### Architecture de déploiement

Ce projet utilise une **double stratégie de déploiement** :

1. **GitHub Pages** (`matthieuforel.com`) : Site statique sans chatbot
2. **Netlify** (preview) : Site complet avec chatbot AI et Netlify Functions

### Configuration Netlify

Le fichier `netlify.toml` **doit être à la racine du repo** (pas dans `portfolio-new/`) :

```toml
[build]
  base = "portfolio-new"
  command = "npm run build:netlify"
  publish = "portfolio-new/dist"
  functions = "portfolio-new/netlify/functions"

[dev]
  command = "npm run dev"
  targetPort = 5173
  framework = "#custom"

[functions]
  node_bundler = "esbuild"

# Redirect API calls to functions
[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

# SPA fallback
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Variables d'environnement Netlify

**⚠️ OBLIGATOIRE** : Pour que le chatbot fonctionne sur Netlify, tu dois configurer :

1. Va sur **Netlify Dashboard** → ton site → **Site configuration** → **Environment variables**
2. Ajoute :
   - **Key** : `OPENAI_API_KEY`
   - **Value** : ta clé API OpenAI (commence par `sk-...`)

**Où obtenir une clé OpenAI ?**

- Va sur https://platform.openai.com/api-keys
- Crée une nouvelle clé API

### Déploiement automatique

Chaque push sur `master` déclenche automatiquement :

- ✅ **GitHub Pages** : Déploiement via GitHub Actions (`.github/workflows/deploy.yml`)
- ✅ **Netlify** : Déploiement automatique (détecte les changements sur `master`)

### Vérifier le déploiement Netlify

Après un push, vérifie sur Netlify Dashboard → **Deploys** :

✅ **Deploy summary doit montrer** :

- ✅ `192 new files uploaded` (ou similaire)
- ✅ **Functions deployed** ← **IMPORTANT !**

❌ **Si tu vois "No functions deployed"** :

- Vérifie que `netlify.toml` est bien **à la racine du repo**
- Vérifie que `functions = "portfolio-new/netlify/functions"` est correct

### Tester le chatbot en production

Une fois déployé sur Netlify :

```bash
# Ouvre la console réseau du navigateur
# Clique sur le chatbot et envoie un message
# Vérifie la requête POST vers /.netlify/functions/chat
```

**✅ Succès** : Status 200 + réponse JSON
**❌ Erreur 404** : Functions non déployées → vérifie `netlify.toml`
**❌ Erreur 500** : Variable `OPENAI_API_KEY` manquante → ajoute-la sur Netlify

## 🌐 Configuration du nom de domaine personnalisé

### Étape 1 : Configurer Netlify

1. Va sur **Netlify Dashboard** → ton site → **Domain management**
2. Clique sur **Add custom domain**
3. Entre ton domaine : `matthieuforel.com`
4. Netlify va te donner des **DNS records** à configurer

### Étape 2 : Configurer OVH

1. Connecte-toi à **OVH** → **Web Cloud** → **Noms de domaine** → `matthieuforel.com`
2. Va dans l'onglet **Zone DNS**
3. **Supprime** l'ancien enregistrement `A` pointant vers GitHub Pages
4. **Ajoute** les enregistrements fournis par Netlify :

**Option A : Avec sous-domaine www**

```
Type    Nom    Valeur
A       @      75.2.60.5 (IP Netlify - vérifie sur Netlify Dashboard)
CNAME   www    ton-site.netlify.app
```

**Option B : Sans sous-domaine www (apex domain)**

```
Type     Nom    Valeur
ALIAS    @      ton-site.netlify.app
```

5. **Sauvegarde** les modifications

### Étape 3 : Activer HTTPS sur Netlify

1. Retourne sur **Netlify Dashboard** → **Domain management**
2. Clique sur **Verify DNS configuration**
3. Une fois vérifié, clique sur **Provision certificate** (HTTPS gratuit via Let's Encrypt)

### Étape 4 : Attendre la propagation DNS

⏱️ **Délai** : 5 minutes à 48 heures (généralement 1-2 heures)

**Vérifier la propagation** :

```bash
# Vérifie les DNS
dig matthieuforel.com

# Ou utilise un outil en ligne
https://dnschecker.org
```

### Étape 5 : Rediriger GitHub Pages (optionnel)

Si tu veux garder GitHub Pages comme backup :

1. Garde le `CNAME` dans le repo pointant vers `matthieuforel.com`
2. Configure un **sous-domaine** pour Netlify : `app.matthieuforel.com`

Ou **désactive GitHub Pages** :

1. Va sur **GitHub** → ton repo → **Settings** → **Pages**
2. Sélectionne **None** dans **Source**

## 📁 Structure du projet

```
portfolio-new/
├── src/
│   ├── components/
│   │   └── ChatBot.tsx          # Chatbot AI avec OpenAI
│   ├── App.tsx
│   └── main.tsx
├── netlify/
│   └── functions/
│       └── chat.ts               # Netlify Function pour OpenAI
├── public/
├── dist/                         # Build Netlify (gitignored)
├── package.json
├── vite.config.ts
└── netlify.toml                  # ⚠️ DOIT ÊTRE À LA RACINE DU REPO !
```

## 🔧 Scripts disponibles

```bash
npm run dev              # Dev server (Vite)
npm run netlify:dev      # Dev server + Netlify Functions
npm run build            # Build pour GitHub Pages (racine)
npm run build:netlify    # Build pour Netlify (dist/)
npm run preview          # Preview du build
npm run lint             # Linter ESLint
```

## 🐛 Troubleshooting

### Le chatbot ne fonctionne pas en production

1. ✅ Vérifie que `OPENAI_API_KEY` est configurée sur Netlify
2. ✅ Vérifie que le Deploy summary montre "Functions deployed"
3. ✅ Vérifie la console réseau : la requête doit aller vers `/.netlify/functions/chat`

### Erreur 404 sur /.netlify/functions/chat

- ❌ `netlify.toml` n'est pas à la racine du repo
- ❌ `functions = "portfolio-new/netlify/functions"` est incorrect

### Erreur 500 sur /.netlify/functions/chat

- ❌ Variable `OPENAI_API_KEY` manquante ou invalide
- ❌ Vérifie les logs Netlify : **Functions** → **Function logs**

### Le site ne se met pas à jour après un push

1. Vérifie que le push est bien sur `master`
2. Vérifie les **GitHub Actions** (pour GitHub Pages)
3. Vérifie les **Netlify Deploys** (pour Netlify)
4. Force un redeploy sur Netlify : **Deploys** → **Trigger deploy**

## 📝 License

MIT
