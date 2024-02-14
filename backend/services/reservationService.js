const Reservation = require('../models/Reservation');

// Récupérer toutes les réservations
exports.getAllReservations = async () => {
    return await Reservation.findAll();
};

// Créer une nouvelle réservation
exports.createReservation = async (reservationData) => {
    return await Reservation.create(reservationData);
};

// Mettre à jour une réservation existante
exports.updateReservation = async (id, newData) => {
    const reservation = await Reservation.findByPk(id);
    if (!reservation) {
        throw new Error('Réservation non trouvée');
    }
    await reservation.update(newData);
    return reservation;
};

// Supprimer une réservation
exports.deleteReservation = async (id) => {
    const reservation = await Reservation.findByPk(id);
    if (!reservation) {
        return false;
    }
    await reservation.destroy();
    return true;
};
