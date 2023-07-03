# NearLeague Backend

Ce dépôt contient le code source du backend de l'application NearLeague. Il est développé en utilisant Node.js, Express.js et PostgreSQL. Il fournit une API GraphQL pour gérer les fonctionnalités liées aux utilisateurs (inscription, connexion) et interagir avec la base de données.

## Configuration

Avant de pouvoir exécuter le backend, assurez-vous de configurer les éléments suivants :

1. **Base de données PostgreSQL**: Vous devez avoir une base de données PostgreSQL configurée. Assurez-vous de fournir les informations de connexion appropriées dans le fichier `database.js` situé dans le dossier `src/database`.

2. **Variables d'environnement**: Le backend utilise les variables d'environnement pour des configurations sensibles telles que la clé secrète JWT. Assurez-vous de créer un fichier `.env` à la racine du projet et d'y définir les variables suivantes :
- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
- `JWT_SECRET`

## Installation

1. Clonez ce dépôt sur votre machine locale :
   `git clone https://github.com/AchrafMELKI/nearleague-backend.git`

2. Accédez au dossier du projet :

   `cd nearleagueback`

3. Installez les dépendances nécessaires en utilisant npm :
   `npm install`


## Exécution

Une fois les configurations et les dépendances installées, vous pouvez exécuter le backend en utilisant la commande suivante :

`npm start`

Cela démarrera le serveur backend et vous verrez le message "Serveur GraphQL lancé sur le port 3000" s'afficher dans la console.

## Utilisation

Le backend expose une API GraphQL pour les fonctionnalités liées aux utilisateurs. Vous pouvez envoyer des requêtes GraphQL à l'URL `http://localhost:3000/graphql` en utilisant des outils tels que GraphiQL ou Postman.

Assurez-vous de vous référer à la documentation de l'API pour connaître les types de requêtes et de mutations disponibles, ainsi que les schémas de données attendus.

## Contribuer

Les contributions à ce projet sont les bienvenues. Si vous souhaitez apporter des améliorations, veuillez soumettre une demande de pull avec une description claire des modifications apportées.

## Auteur

Ce projet a été développé par [Achraf MELKI](https://github.com/AchrafMELKI).

## Licence

Ce projet est sous licence [MIT](LICENSE).



