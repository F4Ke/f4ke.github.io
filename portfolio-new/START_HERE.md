# 🚀 Portfolio V3 - START HERE

## ⚡ Quick Start (4 commandes)

```bash
# 0. IMPORTANT : Va dans le bon dossier !
cd portfolio-new

# 1. Configure ta clé OpenAI
echo "OPENAI_API_KEY=sk-ta-clef-ici" > .env

# 2. Installe Netlify CLI (si pas déjà fait)
npm install -g netlify-cli

# 3. Lance le serveur de test
npm run test
```

Ouvre **http://localhost:8888** et teste le chat ! 🎉

---

## 📚 Documentation

| Fichier           | Description                             |
| ----------------- | --------------------------------------- |
| **TEST_GUIDE.md** | 📋 Guide de test complet avec checklist |
| **SETUP.md**      | 🛠️ Setup local + déploiement Netlify    |
| **SECURITY.md**   | 🔒 Sécurité et bonnes pratiques         |
| **README.md**     | 📖 Vue d'ensemble du projet             |

---

## ✅ Ce qui est prêt

### 🤖 AI Chat Widget

- ✅ Intégration OpenAI GPT-4o-mini
- ✅ Rate limiting (7 questions/jour)
- ✅ Réponses bilingues (FR/EN)
- ✅ Prompt ultra-professionnel avec ton profil LinkedIn
- ✅ Disponibilité freelance mise en avant

### 🎨 System Actions

- ✅ **Parcours** : Timeline de tes expériences
- ✅ **Projets** : Grille de projets
- ✅ **Compétences** : Stack technique complète
- ✅ **Fun** : Pilote, musicien, boxeur
- ✅ **Contact** : Formulaire vers matthieu.lc.forel@gmail.com

### 🔒 Sécurité

- ✅ API key jamais exposée au client
- ✅ `.env` dans `.gitignore`
- ✅ Rate limiting actif
- ✅ CORS configuré
- ✅ Messages d'erreur clairs

### 🎯 UI/UX

- ✅ Chat centré et responsive
- ✅ Mode focused optimisé (pas de crop)
- ✅ Animations fluides
- ✅ Style "Old Money" + "2.0 Engineer"

---

## 🎯 Prochaines étapes

### 1. **Test Local** (maintenant)

```bash
npm run test
```

Suis le guide dans `TEST_GUIDE.md`

### 2. **Personnalisation** (optionnel)

- Édite `src/components/SystemComponents.tsx` pour ajouter tes vrais projets
- Modifie `netlify/functions/chat.ts` pour ajuster le prompt
- Ajoute des détails dans la section About

### 3. **Déploiement Production**

```bash
git add .
git commit -m "feat: AI chat widget ready"
git push origin main
```

Puis configure Netlify (voir `SETUP.md`)

---

## 🆘 Besoin d'aide ?

### Problème de clé API ?

→ Vérifie `.env` et relance `npm run test`

### Le chat ne répond pas ?

→ Ouvre la console (F12) et check les erreurs

### Rate limit atteint ?

→ Redémarre `netlify dev` ou attends 24h

### Autre problème ?

→ Check `TEST_GUIDE.md` section Troubleshooting

---

## 📊 Commandes utiles

```bash
# Test complet avec Netlify Functions
npm run test

# Dev frontend uniquement (sans AI)
npm run dev

# Build production
npm run build

# Lint du code
npm run lint
```

---

## 🎉 C'est parti !

**Étape 0 :** Va dans le dossier `portfolio-new/` (IMPORTANT !)
**Étape 1 :** Configure ta clé OpenAI dans `.env`
**Étape 2 :** Lance `npm run test`
**Étape 3 :** Ouvre http://localhost:8888
**Étape 4 :** Teste le chat et les system actions

**Bon test ! 🚀**
