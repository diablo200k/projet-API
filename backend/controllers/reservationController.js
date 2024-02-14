const reservationService = require('../services/reservationService');

// Récupérer toutes les réservations
exports.getAllReservations = async (req, res, next) => {
    try {
        const reservations = await reservationService.getAllReservations();
        res.status(200).json(reservations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
};

// Créer une nouvelle réservation
exports.createReservation = async (req, res, next) => {
    try {
        const newReservation = await reservationService.createReservation(req.body);
        res.status(201).json(newReservation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
};

// Mettre à jour une réservation existante
exports.updateReservation = async (req, res, next) => {
    try {
        const updatedReservation = await reservationService.updateReservation(req.params.id, req.body);
        res.status(200).json(updatedReservation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
};

// Supprimer une réservation
exports.deleteReservation = async (req, res, next) => {
    try {
        const deleted = await reservationService.deleteReservation(req.params.id);
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: "Réservation non trouvée" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
};
