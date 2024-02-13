const express = require('express');
const router = express.Router();
const apartmentController = require('../controllers/apartmentController');

// GET all apartments
router.get('/', apartmentController.getAllApartments);

// GET single apartment by ID
router.get('/:apartmentId', apartmentController.getApartmentById);

// POST create new apartment
router.post('/', apartmentController.createApartment);

// PUT update apartment by ID
router.put('/:apartmentId', apartmentController.updateApartment);

// DELETE apartment by ID
router.delete('/:apartmentId', apartmentController.deleteApartment);

module.exports = router;
