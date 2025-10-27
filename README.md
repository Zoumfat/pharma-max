# Pharma Max Dashboard

Interface web moderne pour l’application Pharma Max. Le tableau de bord reprend l’esthétique professionnelle de la maquette fournie et permet de visualiser l’état de l’inventaire pharmaceutique.

## Fonctionnalités

- Tableau de bord avec cartes statistiques principales
- Graphique des tendances de stock (Recharts)
- Alertes de stock visuelles
- Menu latéral de navigation avec icônes Lucide
- Thème clair/sombre avec bascule instantanée
- Navigation multi-pages avec React Router

## Démarrage

```bash
npm install
npm run dev
```

L’application est servie par Vite sur [http://localhost:5173](http://localhost:5173).

## Structure principale

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   ├── CardStat.jsx
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   └── StockAlert.jsx
├── pages/
│   ├── Articles.jsx
│   ├── Dashboard.jsx
│   ├── Emplacements.jsx
│   ├── Fournisseurs.jsx
│   └── Rapports.jsx
└── assets/
```

## Technologies

- React 18 + Vite
- Tailwind CSS 3
- Lucide React
- Recharts
- React Router DOM
