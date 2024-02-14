const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

// Route pour obtenir toutes les réservations
router.get('/', reservationController.getAllReservations);

// Route pour créer une nouvelle réservation
router.post('/', reservationController.createReservation);

// Route pour mettre à jour une réservation existante
router.put('/:id', reservationController.updateReservation);

// Route pour supprimer une réservation
router.delete('/:id', reservationController.deleteReservation);

module.exports = router;
