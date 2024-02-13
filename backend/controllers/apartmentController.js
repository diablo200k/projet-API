const apartmentService = require('../services/apartmentService');

exports.getAllApartments = async (req, res) => {
    try {
        const apartments = await apartmentService.getAllApartments();
        res.json(apartments);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getApartmentById = async (req, res) => {
    try {
        const apartment = await apartmentService.getApartmentById(req.params.apartmentId);
        if (!apartment) {
            res.status(404).json({ error: "Apartment not found" });
            return;
        }
        res.json(apartment);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createApartment = async (req, res) => {
    try {
        const newApartment = await apartmentService.createApartment(req.body);
        res.status(201).json(newApartment);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.updateApartment = async (req, res) => {
    try {
        const updatedApartment = await apartmentService.updateApartment(req.params.apartmentId, req.body);
        res.json(updatedApartment);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.deleteApartment = async (req, res) => {
    try {
        await apartmentService.deleteApartment(req.params.apartmentId);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
