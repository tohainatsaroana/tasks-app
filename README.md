# 📅 Application des tâches (Liste des tâches)

Site web d'un organisateur de tâches (liste des choses à faire) réalisé avec React JS, Tailwind CSS, TypeScript, Redux Toolkit et plus encore.

![page d'acceuil](https://github.com/tohainatsaroana/tasks-app/blob/master/public/To-Do%20List%20_%20All%20tasks.png)

## Description

- Permet d'organiser vos tâches avec les données suivantes : titre, description, date, marquer comme complet et marquer comme important. 
- Les tâches sont organisées en routes : tâches du jour, tâches importantes, incomplètes, terminées, toutes les tâches et tâches par répertoire (dossier). Les répertoires et les tâches peuvent être modifiés ou supprimés. De plus, il y a un répertoire principal appelé "Main" qui ne peut pas être modifié ou supprimé.
- La liste des tâches peut être affichée en premier selon : les plus proches, les plus éloignées, les complètes ou les incomplètes.
- Vous pouvez rechercher des tâches spécifiques dans le champ de recherche.
- Les tâches du jour sont affichées dans la section de l'utilisateur et dans les notifications.
- Les données des tâches, des répertoires et du mode sombre sont enregistrées dans le localStorage.

## Objectif

Ce projet avait principalement pour objectif de mettre en pratique les connaissances en TypeScript, Tailwind, Redux Toolkit et React Js.

## Outils utilisés

- React JS
- TypeScript
- Tailwind CSS
- Redux Toolkit
- React Router DOM
- HTML
- Figma (prototypage)

## Comment tester

Vous pouvez accéder au projet ici : https:///

Ou exécuter le projet sur votre machine :

``` 
git clone https://github.com/tohainatsaroana/tasks-app.git
cd tasks-app
npm install
npm start
```

## Remarques

- Les données des tâches, des répertoires et du mode sombre sont enregistrées dans le localStorage de votre navigateur. Vous pouvez cliquer sur le bouton "delete all data" pour les supprimer du localStorage.
- À des fins de démonstration, l'application dispose d'une liste par défaut de 3 tâches et d'un répertoire appelé "Main".