# 🚀 Portfolio V3 - Setup & Deployment Guide

## ✅ Ce qui a été implémenté

### 1. **AI Chat Widget avec OpenAI**
- ✅ Intégration OpenAI GPT-4o-mini via Netlify Functions
- ✅ Clé API sécurisée (jamais exposée au client)
- ✅ Rate limiting : 5 questions/jour/utilisateur
- ✅ Fingerprinting utilisateur (FingerprintJS)
- ✅ Loader pendant le chargement
- ✅ Boutons raccourcis toujours visibles
- ✅ Prompt ultra-professionnel avec ton profil LinkedIn

### 2. **System Actions**
Le chat peut afficher des composants interactifs :
- `[SYSTEM:ABOUT]` → Timeline de ton parcours
- `[SYSTEM:PROJECTS]` → Grille de projets
- `[SYSTEM:SKILLS]` → Compétences techniques
- `[SYSTEM:FUN]` → Section fun (à compléter)
- `[SYSTEM:CONTACT]` → Formulaire de contact (FormSubmit.co)

### 3. **Formulaire de Contact**
- ✅ Intégration FormSubmit.co (gratuit)
- ✅ Envoi direct à matthieu.lc.forel@gmail.com
- ✅ Gestion d'erreurs et retry

### 4. **UI/UX**
- ✅ Marges optimisées en mode discussion
- ✅ Chat centré et responsive
- ✅ Style "Old Money" + "2.0 Engineer"
- ✅ Animations fluides (Framer Motion)

---

## 📋 Setup Local (3 étapes)

### 1. Installe Netlify CLI
```bash
npm install -g netlify-cli
```

### 2. Configure ta clé OpenAI
Crée un fichier `.env` dans `portfolio-new/` :
```bash
OPENAI_API_KEY=sk-ta-clef-openai-ici
```

### 3. Lance le dev server
```bash
cd portfolio-new
netlify dev
```

Le site sera accessible sur `http://localhost:8888` avec les fonctions serverless actives.

---

## 🌐 Déploiement Netlify (Production)

### Étape 1 : Push sur GitHub
```bash
git add .
git commit -m "feat: AI chat widget with OpenAI integration"
git push origin main
```

### Étape 2 : Connecte ton repo sur Netlify
1. Va sur [app.netlify.com](https://app.netlify.com)
2. Clique sur "Add new site" → "Import an existing project"
3. Sélectionne ton repo GitHub
4. Configure :
   - **Build command**: `npm run build`
   - **Publish directory**: `../` (car le build va dans le parent)
   - **Functions directory**: `netlify/functions`

### Étape 3 : Configure les variables d'environnement
Dans **Site Settings > Environment Variables**, ajoute :
- `OPENAI_API_KEY` = ta clé OpenAI

### Étape 4 : Deploy !
Netlify va automatiquement builder et déployer ton site.

---

## 🎯 Personnalisation du Prompt

Le prompt AI est dans `netlify/functions/chat.ts` (lignes 1-161).

**Déjà fait :**
- ✅ Profil LinkedIn intégré
- ✅ Parcours professionnel (SWEEP, Silyane, etc.)
- ✅ Stack technique complète
- ✅ Ton de vente intelligent
- ✅ Exemples de réponses

**À ajuster si besoin :**
- Ajoute des projets spécifiques
- Modifie le ton selon tes préférences
- Ajoute des compétences manquantes

---

## 📊 Monitoring & Limites

### Rate Limiting
- **5 questions/jour/utilisateur** (basé sur fingerprint)
- Stockage en mémoire (reset au cold start de la fonction)
- Après 5 questions → redirection vers formulaire contact

### Coûts
- **Netlify** : Gratuit (125k requêtes/mois)
- **OpenAI** : ~$0.0001 par question (GPT-4o-mini)
- **FormSubmit.co** : Gratuit (50 soumissions/mois)

---

## 🔧 Commandes Utiles

```bash
# Dev local avec Netlify Functions
netlify dev

# Build production
npm run build

# Test des fonctions localement
netlify functions:serve

# Deploy manuel
netlify deploy --prod
```

---

## 🐛 Troubleshooting

### "OPENAI_API_KEY not configured"
→ Vérifie que la variable d'environnement est bien définie dans `.env` (local) ou Netlify (prod)

### "Rate limit exceeded"
→ Normal après 5 questions. Attends 24h ou change de navigateur/incognito pour tester

### Formulaire de contact ne fonctionne pas
→ Vérifie que l'email dans `SystemComponents.tsx` ligne 200 est correct

---

## 📝 Next Steps

1. ✅ Teste le chat en local avec `netlify dev`
2. ✅ Vérifie que les system actions s'affichent bien
3. ✅ Teste le formulaire de contact
4. ✅ Deploy sur Netlify
5. 🎨 Personnalise les sections (About, Projects, Skills)
6. 🎮 Ajoute du contenu dans la section Fun

---

**Questions ?** Contacte-moi ou check la doc Netlify : https://docs.netlify.com/functions/overview/

