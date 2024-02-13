const apartmentService = require('../services/apartmentService');

exports.getAllApartments = async (req, res) => {
    try {
        const apartments = await apartmentService.getAllApartments();
        res.json(apartments);
    } catch (error) {
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
};

exports.createApartment = async (req, res) => {
    try {
        const newApartment = await apartmentService.createApartment(req.body);
        res.status(201).json(newApartment);
    } catch (error) {
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
};

exports.updateApartment = async (req, res) => {
    try {
        const updatedApartment = await apartmentService.updateApartment(req.params.apartment_id, req.body);
        res.json(updatedApartment);
    } catch (error) {
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
};

exports.deleteApartment = async (req, res) => {
    try {
        await apartmentService.deleteApartment(req.params.apartment_id);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
};
