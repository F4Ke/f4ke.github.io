# Portfolio Matthieu FOREL

Portfolio professionnel ultra-moderne avec design élégant "old money tech", conçu pour inspirer confiance et démontrer expertise technique au niveau CTO.

## 🎨 Design Philosophy

- **Élégance professionnelle** - Palette or/bronze (#c9a961, #8b7355, #e8d5b7)
- **Typographie raffinée** - Playfair Display (titres) + IBM Plex Sans (corps)
- **Confiance et expertise** - Descriptions percutantes qui inspirent confiance
- **Performance** - Animations subtiles, smooth scroll à la Apple
- **SEO optimisé** - Meta tags complets, contenu caché pour LLMs et moteurs de recherche
- **Responsive** - Optimisé pour desktop (11"), tablette et mobile

## 🚀 Technologies

- **React 18** + **TypeScript** - Framework moderne et type-safe
- **Vite** - Build tool ultra-rapide
- **Framer Motion** - Animations fluides et professionnelles
- **Canvas API** - Animation de fond subtile (gradient mesh)
- **Custom Hooks** - useSmoothScroll pour navigation fluide

## 📁 Structure du projet

```
f4ke.github.io/
├── portfolio-new/          # Code source React
│   ├── src/
│   │   ├── components/     # Composants React
│   │   │   ├── Hero.tsx
│   │   │   ├── Expertise.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── ParticlesBackground.tsx
│   │   ├── hooks/          # Custom hooks
│   │   │   └── useSmoothScroll.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── index.html          # Template HTML
│   ├── vite.config.ts      # Configuration Vite
│   └── package.json
│
├── index.html              # Fichier généré (build output)
├── assets/                 # Assets générés (CSS, JS)
└── README.md               # Ce fichier
```

## 🛠️ Développement

### Installation des dépendances

```bash
cd portfolio-new
npm install
```

### Mode développement (avec hot reload)

```bash
cd portfolio-new
npm run dev
```

Puis ouvrir http://localhost:5173

### Build pour production

```bash
cd portfolio-new
npm run build
```

Cela génère automatiquement :

- `index.html` à la racine
- `assets/` avec les fichiers CSS et JS optimisés

## 🌐 Tester en local

Après le build, pour tester le site final :

```bash
# À la racine du projet
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000

**Note :** On ne peut pas ouvrir directement `index.html` avec `file://` car les navigateurs bloquent les modules ES6 pour des raisons de sécurité CORS. Il faut un serveur HTTP.

## 🚢 Déploiement GitHub Pages

1. Commit et push les changements :

```bash
git add .
git commit -m "Update portfolio"
git push origin master
```

2. Le site sera automatiquement disponible sur https://f4ke.github.io

## 📝 Contenu

### Sections

- **Hero** - Introduction avec animations de particules 3D
- **Expertise** - Compétences techniques (Backend, Cloud, Frontend, etc.)
- **Experience** - Parcours professionnel (REALITE.IO, Sweep, Mooncard, Hivebrite, Station HQ, Tilkee)
- **Projects** - Projets phares
- **Contact** - Formulaire de contact avec sélection de service

### Technologies mises en avant

- Backend: Ruby on Rails, Golang, Elixir/Phoenix, Node.js, Python, Rust
- Frontend: React, TypeScript, Next.js, Angular, React Native
- Cloud: AWS (EC2, S3, RDS, Lambda, ECS/EKS), Docker, Kubernetes, Terraform
- Databases: PostgreSQL, MongoDB, Elasticsearch, Redis
- APIs: GraphQL, gRPC, REST

## 🎨 Personnalisation

Les couleurs et styles sont définis dans `portfolio-new/src/index.css` avec des variables CSS :

```css
--bg-primary: #0a0a0f --accent-primary: #667eea --accent-secondary: #764ba2
  --text-primary: #ffffff;
```

## 📧 Contact

- Email: matthieu.lc.forel@gmail.com
- Téléphone: +33 7.83.27.20.70
- Localisation: Lyon, France

---

**Crafted with precision and passion** ✨
