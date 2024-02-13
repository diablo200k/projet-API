# Projet API

Ce projet est une API développée avec Node.js, Express.js et Sequelize, qui fournit des fonctionnalités pour gérer les utilisateurs, les appartements et les réservations.

## Installation

1. Cloner le repository : `git clone <URL_DU_REPOSITORY>`
2. Installer les dépendances : `npm install`
3. Configurer les variables d'environnement (facultatif)
4. Exécuter le serveur : `node index.js`

## Fonctionnalités

L'API offre les fonctionnalités suivantes :

- **Gestion des utilisateurs :**
  - Récupérer la liste de tous les utilisateurs
  - Créer un nouvel utilisateur
  - Mettre à jour un utilisateur existant
  - Supprimer un utilisateur existant

- **Gestion des appartements :**
  - Récupérer la liste de tous les appartements
  - Créer un nouvel appartement
  - Mettre à jour un appartement existant
  - Supprimer un appartement existant

- **Gestion des réservations :**
  - Récupérer la liste de toutes les réservations
  - Créer une nouvelle réservation
  - Mettre à jour une réservation existante
  - Supprimer une réservation existante

## Base de données

Le projet utilise une base de données MySQL avec la structure suivante :

### Table `users`

- `user_id` : Identifiant unique de l'utilisateur (clé primaire)
- `username` : Nom d'utilisateur
- `password_hash` : Hash du mot de passe de l'utilisateur
- `role_id` : Identifiant du rôle de l'utilisateur (clé étrangère faisant référence à la table `roles`)

### Table `roles`

- `role_id` : Identifiant unique du rôle (clé primaire)
- `role_name` : Nom du rôle (ex: Admin, Owner, Client)

### Table `apartments`

- `apartment_id` : Identifiant unique de l'appartement (clé primaire)
- `area` : Surface de l'appartement en mètres carrés
- `capacity` : Capacité maximale d'occupation de l'appartement
- `address` : Adresse de l'appartement
- `available` : Disponibilité de l'appartement (true/false)
- `price_per_night` : Prix par nuit de l'appartement
- `owner_id` : Identifiant du propriétaire de l'appartement (clé étrangère faisant référence à la table `users`)

### Table `reservations`

- `reservation_id` : Identifiant unique de la réservation (clé primaire)
- `start_date` : Date de début de la réservation
- `end_date` : Date de fin de la réservation
- `client_id` : Identifiant du client ayant effectué la réservation (clé étrangère faisant référence à la table `users`)
- `apartment_id` : Identifiant de l'appartement réservé (clé étrangère faisant référence à la table `apartments`)
- `price` : Prix total de la réservation

## License

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
