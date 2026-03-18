# 🧪 Guide de Test Complet - Portfolio V3

## 📋 Pré-requis

Avant de commencer, assure-toi d'avoir :

- ✅ Node.js installé (v18+)
- ✅ Une clé API OpenAI active
- ✅ Netlify CLI installé globalement

---

## 🚀 Étape 1 : Installation

```bash
cd portfolio-new

# Installe les dépendances (si pas déjà fait)
npm install

# Installe Netlify CLI globalement
npm install -g netlify-cli
```

---

## 🔑 Étape 2 : Configuration de la clé API

### Option A : Éditer le fichier .env

```bash
# Ouvre le fichier .env
nano .env

# Remplace "your-key-here" par ta vraie clé OpenAI
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx

# Sauvegarde (Ctrl+O puis Ctrl+X)
```

### Option B : Ligne de commande

```bash
echo "OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx" > .env
```

---

## 🎯 Étape 3 : Lancer le serveur de test

```bash
# Lance Netlify Dev (frontend + functions serverless)
netlify dev
```

Le site sera accessible sur : **http://localhost:8888**

---

## ✅ Étape 4 : Tests à effectuer

### Test 1 : Interface de base

- [ ] Le site charge correctement
- [ ] L'avatar est visible et centré
- [ ] Le nom "MATTHIEU FOREL" est visible en fond
- [ ] Le chat widget est visible en bas

### Test 2 : Chat - État initial

- [ ] Le message d'intro s'affiche : "Matthieu Forel, CTO & Tech Lead..."
- [ ] Les boutons raccourcis sont visibles (Parcours, Projets, Compétences, etc.)
- [ ] Le compteur de questions affiche "7 questions restantes"

### Test 3 : Chat - Mode focused

- [ ] Clique dans la zone de texte
- [ ] Le chat s'agrandit et prend plus de place
- [ ] Le chat reste bien centré et ne se crop pas
- [ ] Les boutons raccourcis restent visibles

### Test 4 : Questions raccourcis

Teste chaque bouton :

- [ ] **Mon parcours** → Affiche la timeline (AboutSection)
- [ ] **Projets** → Affiche la grille de projets
- [ ] **Compétences** → Affiche les skills techniques
- [ ] **Fun** → Affiche pilote, musicien, boxeur
- [ ] **Me contacter** → Affiche le formulaire

### Test 5 : AI Chat

- [ ] Pose une question libre : "Quelle est ton expérience en React ?"
- [ ] Le loader "typing..." apparaît
- [ ] La réponse arrive (vérifier qu'elle est cohérente)
- [ ] Le compteur descend à "6 questions restantes"

### Test 6 : Langue

- [ ] Pose une question en anglais : "What's your experience?"
- [ ] La réponse doit être en anglais
- [ ] Pose une question en français
- [ ] La réponse doit être en français

### Test 7 : Rate Limiting

- [ ] Pose 5 questions au total
- [ ] À la 6ème question, tu dois voir :
  - Message : "Tu as atteint la limite de questions..."
  - Le formulaire de contact s'affiche automatiquement
  - Le compteur affiche "0 questions restantes"

### Test 8 : Formulaire de contact

- [ ] Remplis le formulaire (nom, email, message)
- [ ] Clique sur "Envoyer"
- [ ] Message de succès s'affiche
- [ ] Vérifie que tu as reçu l'email sur matthieu.lc.forel@gmail.com

### Test 9 : Responsive

- [ ] Réduis la fenêtre du navigateur
- [ ] Le chat s'adapte correctement
- [ ] Les boutons restent cliquables
- [ ] Le texte reste lisible

---

## 🐛 Troubleshooting

### "Cannot find module '@netlify/functions'"

```bash
npm install --save-dev @netlify/functions @types/node
```

### "OPENAI_API_KEY not configured"

- Vérifie que le fichier `.env` existe
- Vérifie que la clé commence par `sk-`
- Relance `netlify dev`

### "Rate limit exceeded" immédiatement

- C'est normal si tu as déjà testé 5 fois
- Attends 24h OU change de navigateur/mode incognito
- OU redémarre `netlify dev` (reset le compteur en mémoire)

### Le chat ne répond pas

- Ouvre la console (F12)
- Vérifie les erreurs réseau
- Vérifie que `netlify dev` tourne bien
- Vérifie que l'URL de l'API est correcte

---

## 📊 Résultats attendus

Si tout fonctionne :

- ✅ Chat répond de manière intelligente et personnalisée
- ✅ Langue détectée automatiquement
- ✅ System actions s'affichent correctement
- ✅ Rate limiting fonctionne
- ✅ Formulaire envoie les emails
- ✅ UI fluide et responsive

---

## 🎉 Prêt pour la production ?

Si tous les tests passent, tu peux déployer :

```bash
# Push sur GitHub
git add .
git commit -m "feat: AI chat widget ready for production"
git push origin main

# Configure Netlify (voir SETUP.md)
```

---

**Questions ou problèmes ?** Check `SETUP.md` et `SECURITY.md` !
