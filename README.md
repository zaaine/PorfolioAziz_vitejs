![logo vite](/public/vite.svg)

# Mon Portfolio - Vite

Bienvenue sur le repository de mon portfolio personnel, réalisé avec **React** et migré vers **Vite** pour améliorer les performances et l'optimisation du SEO. Ce projet présente mon parcours de développeur, mes compétences et quelques-uns de mes projets réalisés. Il reflète aussi ma démarche d'optimisation et d'amélioration continue à travers des outils modernes.

## 🚀 Objectifs du projet

- **Créer une interface interactive** pour présenter mes compétences en tant que développeur front-end.
- **Améliorer les performances du site** pour offrir une expérience utilisateur fluide.
- **Optimiser le SEO** pour un meilleur référencement sur les moteurs de recherche.
- **Passer de Create React App (CRA) à Vite** pour tirer parti des outils modernes de bundling et de développement rapide.

## 🛠️ Technologies utilisées

- **React** : Bibliothèque JavaScript pour la création d'interfaces utilisateur.
- **Vite** : Bundler et environnement de développement rapide.
- **Chakra UI** : Librairie de composants pour React, facilitant la création de design responsive.
- **Sass** : Préprocesseur CSS pour des styles modulaires et réutilisables.
- **GitHub Actions** : Pour l'intégration et le déploiement continus (CI/CD).
- **Lighthouse** : Outil d'analyse pour évaluer les performances, l'accessibilité et le SEO.

## 📦 Migration de Create React App (CRA) à Vite

L'un des objectifs clés de ce projet était de **migrer de CRA à Vite**. Cette migration a permis plusieurs améliorations significatives :

- **Temps de build et de hot reload considérablement réduits** : Avec Vite, les temps de démarrage et de build sont beaucoup plus rapides, offrant une meilleure expérience de développement.
- **Optimisation du code** : Vite utilise le tree-shaking, permettant de ne charger que les modules utilisés dans l'application, réduisant ainsi la taille du bundle.
- **Support de l'ESM (ECMAScript Modules)** : Vite supporte nativement les modules ES, offrant une gestion plus efficace des dépendances.

### Étapes principales de la migration :

1. **Désinstallation de CRA** et suppression de la configuration Webpack par défaut.
2. **Installation de Vite** et configuration des fichiers `vite.config.js`.
3. **Adaptation des composants et styles** : Conversion des fichiers JSX/JS pour qu'ils soient compatibles avec le nouveau bundler.
4. **Réglage des imports dynamiques** et configuration du `lazy loading` avec Vite pour améliorer les temps de chargement.

## 📈 Optimisation SEO et Performance

Un aspect important de ce projet a été l'amélioration des **performances et du SEO** :

### Améliorations SEO :

- **Ajout de métadonnées appropriées** :
  - `meta description`, `meta keywords`, et `meta og:description` ont été soigneusement rédigés pour un meilleur référencement.
  - Utilisation de **JSON-LD** pour inclure des **données structurées**, optimisant la visibilité du site sur les moteurs de recherche.
- **Sitemap et Robots.txt** :
  - Génération dynamique d'un **sitemap** avec toutes les routes du portfolio.
  - Création d'un fichier **robots.txt** pour indiquer aux crawlers les pages à indexer ou non.

### Améliorations des Performances (Score Lighthouse) :

- **Compression des ressources** :
  - Utilisation de la compression **Brotli** pour réduire la taille des fichiers transférés.
  - Mise en cache des ressources statiques (images, fichiers CSS et JS).
- **Optimisation des images** :
  - Conversion des images au format **AVIF** et **WebP** pour une meilleure compression.
  - Mise en place de `srcset` et `sizes` pour servir des images adaptées aux différentes tailles d'écrans.
- **Lazy loading** :
  - Implémentation du **lazy loading** pour les images et certaines ressources pour optimiser le temps de rendu initial.
- **Audit Lighthouse** :
  - Le projet a atteint un excellent score **Lighthouse** (>90) dans les catégories **Performance**, **SEO**, et **Accessibilité**.

## 📝 À propos des tests

Le projet a été soumis à des tests de performance et d'accessibilité à l'aide de **Lighthouse**, ainsi que des tests manuels sur divers navigateurs et tailles d'écrans pour garantir une compatibilité optimale.

## 💻 Installation et exécution

### Prérequis :

- **Node.js** et **npm** doivent être installés sur votre machine.

### Installation :

1. Clonez ce dépôt :

   ```bash
   git clone https://github.com/zaaine/MyPortfolio.git

   ```

2. Commandes :

- npm install
- npm run dev
- npm run build

3. server configuré sur le port 4000

- node server.js
