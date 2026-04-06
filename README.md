# Khidma Care - Site Web

Site vitrine multipage pour l'initiative humanitaire Khidma Care, avec une interface moderne, responsive et orientee impact social.

## Apercu

Le projet presente :
- La mission de Khidma Care
- Les caravanes medicales
- Les moments marquants
- L'equipe
- Une section contact (localisation + formulaire)

Le site est en HTML/CSS/JS vanilla (sans build) et peut etre deploye facilement sur GitHub Pages, Netlify ou Vercel en mode statique.

## Nouveautes recentes

- Home mise a jour avec un encart PDF integre (presentation du projet)
- Video de la section "In Action" remplacee par la nouvelle video
- Lien Instagram ajoute dans le hero
- Ajustements responsive/mobile et stabilite JS (menu mobile + fallback animations)
- Tous les medias (PDF/video) sont maintenant references depuis le dossier assets

## Structure du projet

```text
khidma/
|-- index.html
|-- mission.html
|-- caravans.html
|-- moments.html
|-- team.html
|-- contact.html
|-- README.md
|-- css/
|   `-- styles.css
|-- js/
|   `-- script.js
`-- assets/
    |-- images/
    |-- videos/
    |   |-- design-sans-titre.mp4
    |   `-- Humanitarian_Video_Creation_Request_Fulfilled.mp4
    `-- documents/
        `-- khidma-care.pdf
```

## Technologies utilisees

- HTML5
- CSS3
- JavaScript (vanilla)
- Tailwind CSS (via CDN)
- Font Awesome (icones)
- Swiper.js (carrousel)

## Lancer le projet en local

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
- index.html : accueil
- mission.html : mission
- caravans.html : caravanes
- moments.html : galerie moments
- team.html : equipe
- contact.html : contact + localisation + formulaire

## Medias utilises sur la page d'accueil

- PDF de presentation : assets/documents/khidma-care.pdf
- Video principale : assets/videos/design-sans-titre.mp4
- Video fallback : assets/videos/Humanitarian_Video_Creation_Request_Fulfilled.mp4

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
