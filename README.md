# Introduction
* Voir les tendances des frameworks JS existants : [State Of Js](https://2024.stateofjs.com/en-US/libraries/front-end-frameworks/)
* Rappel fonctions tableaux en JS

<img src="./documentation/burgers.gif" width="300px" >

# React
[Documentation officielle](https://fr.react.dev/)

## Créer son premier projet
* Installer [NodeJs](https://nodejs.org/fr) (version LTS)
* Créer un projet avec Vite :
```
npm create vite@latest
```
> Accepter l'installation de create-vite

> Selectionner un nom de projet > Selectionner React > Selectionner JS

## Lancer le serveur
Si première fois, il faudra installer les packages 
```
npm i(nstall)
```

```
npm run dev
```

## Architecture du projet
--**node-modules** (ne pas toucher -> dépendances du projet)\
--**public** (médias publiques)\
--**src**\
|---**assets** (médias pour l'app)\
|---**App.css** (fichier css créé pour le composant App)\
|---**App.jsx** (composant contenant votre application)\
|---**index.css** (style global à toute l'application)\
|---**main.jsx** (script de démarrage -> celui qui charge App)\
--**.gitignore** (fichier créé spécifiquement pour react)\
--**index.html** (LE fichier html lancé au démarrage)\
--**package.json** (fichier où sont listées les dépendances du projet)\
--**vite.config.js** (config de vite)

## Quelques librairies utiles
### Gestion des formulaires
Il n'y a pas de librairie officielle pour la gestion de formulaires. Une des librairies les plus connues de React pour la gestion des formulaires s'appelle [React Hook Form](https://react-hook-form.com/)
Pour l'installer dans votre projet : 
```
npm i react-hook-form
```
(Il y a aussi [Formik](https://formik.org/) et [JsonSchema Form](https://github.com/rjsf-team/react-jsonschema-form))

### Requêtes API 
Pour la gestion des requêtes vers des API, le plus connu est [Axios](https://axios-http.com/)
```
npm i axios
```

### Le routing
Pour rajouter du routing dans notre projet, il n'y a pas de librairie officielle.
Les plus connues sont cependant : 
[React Router](https://reactrouter.com/start/data/routing)
[Tanstack Router](https://tanstack.com/router/latest)

### Gestion de state global
Pour gérer un state global à toute l'application (pour un panier, un utilisateur connecté etc...), il existe de nombreuses alternatives
[Redux](https://redux.js.org/) est la plus connue mais est aussi la plus difficile à prendre en main
[Jotai](https://jotai.org/) fait partie de ces gestionnaires de state global plus accessibles, il fonctionne un peu comme le useState mais de façon globale

# Les bonus :
Installer la police Fira dans VSCode et activer les ligatures [ici](https://rubenshibu.medium.com/set-fira-code-as-your-vs-code-font-windows-11-f5a8d96b1104)

Extension VSCode pour pack icônes : Material Icon Theme

Raccourcis pour émoji : Windows + ;
Raccourcis anti-Aurélien : Windows + L (DÈS QUE VOUS QUITTEZ VOTRE PC)