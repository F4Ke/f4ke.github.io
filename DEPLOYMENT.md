# 🚀 Déploiement sur GitHub Pages

## Configuration automatique (Recommandé)

Le site se déploie automatiquement sur **https://f4ke.github.io** à chaque push sur la branche `main`.

### Étapes de configuration (à faire une seule fois) :

1. **Activer GitHub Pages dans les paramètres du repo :**
   - Va sur https://github.com/f4ke/f4ke.github.io/settings/pages
   - Dans "Source", sélectionne **"GitHub Actions"**
   - Sauvegarde

2. **Push ton code :**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

3. **Vérifie le déploiement :**
   - Va sur https://github.com/f4ke/f4ke.github.io/actions
   - Tu verras le workflow "Deploy to GitHub Pages" en cours
   - Une fois terminé (✅), ton site sera live sur https://f4ke.github.io

## Déploiement manuel (Alternative)

Si tu préfères déployer manuellement :

```bash
# 1. Build le projet
cd portfolio-new
npm run build

# 2. Les fichiers sont générés dans le dossier parent (racine du repo)
# Ils sont prêts pour GitHub Pages

# 3. Commit et push
cd ..
git add .
git commit -m "Manual deploy"
git push origin main
```

## Structure du projet

```
f4ke.github.io/
├── portfolio-new/          # Code source
│   ├── src/               # Composants React
│   ├── public/            # Assets statiques
│   └── package.json       # Dépendances
├── index.html             # Page générée (racine)
├── assets/                # Assets générés
└── .github/
    └── workflows/
        └── deploy.yml     # Workflow de déploiement auto
```

## Vérifications

✅ **Le build fonctionne :**
```bash
cd portfolio-new
npm run build
```

✅ **Test en local :**
```bash
cd portfolio-new
npm run dev
# Ouvre http://localhost:5173
```

✅ **Vérifier le déploiement :**
- Attends 2-3 minutes après le push
- Visite https://f4ke.github.io
- Force refresh (Cmd+Shift+R sur Mac, Ctrl+Shift+R sur Windows)

## Troubleshooting

### Le site ne se met pas à jour ?
1. Vide le cache du navigateur (Cmd+Shift+R)
2. Vérifie que le workflow a réussi sur GitHub Actions
3. Attends 2-3 minutes pour la propagation

### Erreur de build ?
1. Vérifie les logs dans GitHub Actions
2. Test le build en local : `cd portfolio-new && npm run build`
3. Corrige les erreurs et re-push

### Page blanche ?
1. Vérifie que `vite.config.ts` a le bon `base`
2. Vérifie que les fichiers sont bien dans la racine du repo
3. Check la console du navigateur pour les erreurs

## Notes importantes

- ⚠️ Le build génère les fichiers à la **racine du repo** (pas dans portfolio-new/)
- ⚠️ Ne modifie pas manuellement les fichiers générés (index.html, assets/)
- ✅ Modifie uniquement les fichiers dans `portfolio-new/src/`
- ✅ Le déploiement est automatique après chaque push sur `main`

## Commandes utiles

```bash
# Développement local
cd portfolio-new
npm run dev

# Build de production
npm run build

# Preview du build
npm run preview

# Vérifier les erreurs TypeScript
npm run type-check
```

---

**🎉 Ton portfolio est maintenant live sur https://f4ke.github.io !**

