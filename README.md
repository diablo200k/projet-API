# Projet API

Ce projet est une API développée avec Node.js, Express.js et Sequelize, qui fournit des fonctionnalités pour gérer les utilisateurs, les appartements et les réservations.

## Installation

1. Cloner le repository : `git clone <URL_DU_REPOSITORY>`
2. Installer les dépendances : `npm install`
3. Configurer les variables d'environnement (facultatif)
4. Exécuter le serveur : `node index.js`

## Endpoints

### Utilisateurs

- `GET /api/users` : Récupérer la liste de tous les utilisateurs
- `POST /api/users` : Créer un nouvel utilisateur
- `PUT /api/users/:userId` : Mettre à jour un utilisateur existant
- `DELETE /api/users/:userId` : Supprimer un utilisateur existant

### Appartements

- `GET /api/apartments` : Récupérer la liste de tous les appartements
- `POST /api/apartments` : Créer un nouvel appartement
- `PUT /api/apartments/:apartmentId` : Mettre à jour un appartement existant
- `DELETE /api/apartments/:apartmentId` : Supprimer un appartement existant

### Réservations

- `GET /api/reservations` : Récupérer la liste de toutes les réservations
- `POST /api/reservations` : Créer une nouvelle réservation
- `PUT /api/reservations/:reservationId` : Mettre à jour une réservation existante
- `DELETE /api/reservations/:reservationId` : Supprimer une réservation existante

## Base de données

Le projet utilise une base de données MySQL avec la structure suivante :

### Table `users`

- `user_id` : INT (clé primaire, auto-incrémentée)
- `username` : VARCHAR(255) (non nul)
- `password_hash` : VARCHAR(255) (non nul)
- `role_id` : INT (clé étrangère faisant référence à la table `roles`)

### Table `roles`

- `role_id` : INT (clé primaire, auto-incrémentée)
- `role_name` : VARCHAR(50)

### Table `apartments`

- `apartment_id` : INT (clé primaire, auto-incrémentée)
- `area` : INT (non nul)
- `capacity` : INT (non nul)
- `address` : TEXT (non nul)
- `available` : BOOLEAN (non nul)
- `price_per_night` : DECIMAL(10, 2) (non nul)
- `owner_id` : INT (clé étrangère faisant référence à la table `users`)

### Table `reservations`

- `reservation_id` : INT (clé primaire, auto-incrémentée)
- `start_date` : DATE (non nul)
- `end_date` : DATE (non nul)
- `client_id` : INT (clé étrangère faisant référence à la table `users`)
- `apartment_id` : INT (clé étrangère faisant référence à la table `apartments`)
- `price` : DECIMAL(10, 2) (non nul)
