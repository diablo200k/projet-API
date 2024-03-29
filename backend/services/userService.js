// Importations nécessaires
const User = require('../models/User');
const Apartment = require('../models/Apartment');
const Reservation = require('../models/Reservation');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

// Récupérer tous les utilisateurs
exports.getAllUsers = async () => {
    return await User.findAll();
};

// Créer un nouvel utilisateur
exports.createUser = async (userData) => {
    try {
        if (!userData.password_hash) {
            throw new Error('Le mot de passe est requis');
        }
        const hashedPassword = await bcrypt.hash(userData.password_hash, saltRounds);
        // Créer l'utilisateur avec le mot de passe hashé
        const user = await User.create({
            ...userData,
            password: hashedPassword
        });
        return user; // Retourner l'utilisateur créé
    } catch (error) {
        console.error(error);
        // Relancer l'erreur pour la gestion d'erreur au niveau du contrôleur
        throw new Error(error.message || 'Erreur lors de la création de l\'utilisateur');
    }
};

// Trouver un utilisateur par son nom d'utilisateur
exports.findUserByUsername = async (username) => {
    return await User.findOne({ where: { username: username } });
};
// Mettre à jour un utilisateur
exports.updateUser = async (user_id, userData) => {
    try {
        // Rechercher l'utilisateur dans la base de données
        const user = await User.findByPk(user_id);
        if (!user) {
            throw new Error('Utilisateur non trouvé');
        }
        
        // Mettre à jour les champs modifiables de l'utilisateur
        if (userData.username) {
            user.username = userData.username;
        }
        // Ajouter d'autres champs à mettre à jour si nécessaire
        
        // Sauvegarder les modifications dans la base de données
        await user.save();
        
        return user;
    } catch (error) {
        console.error(error);
        throw new Error(error.message || 'Erreur lors de la mise à jour de l\'utilisateur');
    }
};
exports.deleteUser = async (userId) => {
    try {
        // Recherche de tous les appartements de l'utilisateur
        const apartments = await Apartment.findAll({ where: { owner_id: userId } });

        // Pour chaque appartement, annuler les réservations associées
        for (const apartment of apartments) {
            await Reservation.destroy({ where: { apartment_id: apartment.apartment_id } });
        }

        // Une fois les réservations annulées, supprimer les appartements
        await Apartment.destroy({ where: { owner_id: userId } });

        // Enfin, supprimer l'utilisateur lui-même
        await User.destroy({ where: { user_id: userId } });

        console.log('Utilisateur et ses appartements supprimés avec succès');
        return true;
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'utilisateur:', error);
        throw new Error('Erreur lors de la suppression de l\'utilisateur');
    }
};
