# Pharma Max

Ce projet est une application web simple permettant de gérer des articles de pharmacie.  Elle est conçue pour être exécutée **localement** avec Node.js et offre une base solide pour ajouter ultérieurement une connexion à une base de données SQL Server.

> **Nom de l'application :** **Pharma Max**

## Structure du projet

```
pharma-max/
├── index.js            # Fichier d'entrée du serveur Node/Express
├── package.json        # Dépendances et scripts npm
├── .env                # Variables d'environnement (port, base de données)
├── /public             # Fichiers statiques (CSS, JS, images)
│   ├── css/style.css   # Styles personnalisés
│   └── js/script.js    # Scripts front-end
├── /views              # Gabarits EJS pour les pages
│   ├── index.ejs       # Liste des articles
│   ├── form.ejs        # Formulaire d'ajout
│   └── /partials       # En-tête et pied de page communs
└── /config             # (à venir) Fichiers de configuration (ex. connexion SQL Server)
```

## Installation

1. **Pré-requis :** vous devez avoir installé [Node.js](https://nodejs.org/) (version 18 ou plus récente).
2. Clonez ou téléchargez ce dépôt.
3. Depuis le dossier `pharma-max`, installez les dépendances :

```bash
npm install
```

4. Copiez le fichier `.env` et ajustez les variables si nécessaire (notamment le port ; la connexion à la base de données sera configurée plus tard).
5. Lancez l'application en local :

```bash
npm start
```

6. Ouvrez votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000) pour accéder à l'application.

## Personnalisation du design

Les pages utilisent le framework CSS **Bootstrap 5** pour un rendu moderne et responsive.  Vous pouvez personnaliser les couleurs et la mise en page dans le fichier `public/css/style.css`.

## Étapes suivantes

Ce squelette ne s'appuie pas encore sur une base de données.  Les articles sont stockés en mémoire.  Pour connecter l'application à SQL Server :

1. Créez un fichier `config/db.js` qui utilise le package `mssql` pour établir la connexion (voir [la documentation officielle](https://www.npmjs.com/package/mssql)).
2. Remplacez la liste en mémoire par des appels à la base.
3. Adaptez les gabarits et le contrôleur en conséquence.

Cette architecture est volontairement simple pour vous permettre d'ajouter de nouvelles fonctionnalités progressivement : gestion des ventes, fournisseurs, clients, statistiques, etc.