const userService = require('../services/userService');

// Récupérer tous les utilisateurs
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
};

// Créer un nouvel utilisateur
exports.createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || "Erreur interne du serveur" });
    }
};

// Mettre à jour un utilisateur
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await userService.updateUser(req.params.user_id, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
};

// Fonction pour supprimer un utilisateur
exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.user_id; // Obtenez l'ID de l'utilisateur à supprimer depuis les paramètres de la requête
        const deletedUser = await userService.deleteUser(userId);
        res.status(200).json({ message: 'Utilisateur supprimé avec succès', deletedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur interne du serveur lors de la suppression de l\'utilisateur' });
    }
};