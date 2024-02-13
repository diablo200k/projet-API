const express = require('express');
const router = express.Router();
const apartmentController = require('../controllers/apartmentController');

// Routes pour la gestion des appartements
router.get('/', apartmentController.getAllApartments);
router.post('/', apartmentController.createApartment);
router.put('/:apartment_id', apartmentController.updateApartment);
router.delete('/:apartment_id', apartmentController.deleteApartment);

module.exports = router;
