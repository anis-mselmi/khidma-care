# Khidma Care - Site Web

Site vitrine pour l'initiative humanitaire Khidma Care, avec une interface moderne, responsive et orientee impact social.

## Apercu

Le projet presente :
- La mission de Khidma Care
- Les caravanes medicales
- Les moments marquants
- L'equipe
- Une section contact (localisation + formulaire)

Le site est maintenant rendu par TypeScript vanilla. `index.html` sert uniquement de point d'entree navigateur, tandis que `js/script.ts` contient les pages, la navigation et les comportements. Le design, les sections et les comportements restent ceux du site original.

## Structure du projet

```text
khidma-care/
|-- index.html
|-- README.md
|-- package.json
|-- package-lock.json
|-- tsconfig.json
|-- .gitattributes
|-- .gitignore
|-- css/
|   `-- styles.css
|-- js/
|   |-- script.ts
|   `-- script.js
`-- assets/
    |-- images/
    |   |-- 11.jpg
    |   |-- 22.png
    |   |-- 33.jpg
    |   |-- 44.jpg
    |   |-- a.jpeg
    |   |-- b.jpeg
    |   |-- c.jpeg
    |   |-- d.jpeg
    |   |-- e.jpeg
    |   |-- f.jpeg
    |   |-- school.jpg
    |   `-- ...
    `-- videos/
        `-- submission.mp4
```

## Technologies utilisees

- HTML5 minimal (point d'entree)
- CSS3
- TypeScript (vanilla, compile vers JavaScript)
- JavaScript compile (`js/script.js`, marque comme genere pour GitHub Linguist)
- Tailwind CSS (via CDN)
- Font Awesome (icones)
- Swiper.js (carrousel)

## Lancer le projet en local

### Compiler le TypeScript

Installer les dependances une seule fois :

```bash
npm install
```

Compiler `js/script.ts` vers `js/script.js` :

```bash
npm run build
```

### Option 1 - Ouverture directe

Ouvrir index.html dans votre navigateur.

### Option 2 - Serveur local (recommande)

Si vous avez VS Code :
1. Installer l'extension Live Server
2. Clic droit sur index.html
3. Cliquer sur Open with Live Server

Ou via Python :

```bash
python -m http.server 5500
```

Puis ouvrir :

```text
http://localhost:5500
```

## Navigation

Pages principales :
- `#/home` : accueil
- `#/mission` : mission
- `#/caravans` : caravanes
- `#/moments` : galerie moments
- `#/team` : equipe
- `#/contact` : contact + localisation + formulaire

## Statistiques GitHub

Le fichier compile `js/script.js` est conserve pour que le site fonctionne directement en statique, mais il est marque comme genere dans `.gitattributes`. GitHub Linguist comptera donc principalement la source TypeScript et le CSS, au lieu de compter deux fois la logique TypeScript et son JavaScript compile.

## Medias principaux

- Photo d'accueil : assets/images/f.jpeg
- Galerie moments : assets/images/a.jpeg a assets/images/e.jpeg
- Caravane a venir : assets/images/school.jpg
- Video principale : assets/videos/submission.mp4

## Deploiement

### GitHub Pages

1. Pousser le projet sur GitHub
2. Aller dans Settings > Pages
3. Selectionner la branche (main) et le dossier racine (/root)
4. Sauvegarder

### Netlify / Vercel

- Importer le depot
- Laisser les reglages par defaut (site statique)
- Aucune commande de build necessaire

## Auteur

Projet realise par Anis Mselmi.
