const Apartment = require('../models/Apartment'); // Assurez-vous d'importer correctement le modèle Apartment
const Reservation = require('../models/Reservation');
exports.getAllApartments = async () => {
    return await Apartment.findAll();
};

exports.getApartmentById = async (apartmentId) => {
    return await Apartment.findByPk(apartmentId);
};

exports.createApartment = async (apartmentData) => {
    return await Apartment.create(apartmentData);
};

exports.updateApartment = async (apartmentId, newData) => {
    const apartment = await Apartment.findByPk(apartmentId);
    if (!apartment) {
        throw new Error('Apartment not found');
    }
    await apartment.update(newData);
    return apartment;
};

exports.deleteApartment = async (apartmentId) => {
    try {
        // Annuler toutes les réservations associées à cet appartement
        await Reservation.destroy({ where: { apartment_id: apartmentId } });

        // Une fois les réservations annulées, supprimer l'appartement lui-même
        await Apartment.destroy({ where: { apartment_id: apartmentId } });

        console.log('Appartement et ses réservations supprimés avec succès');
        return true;
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'appartement:', error);
        throw new Error('Erreur lors de la suppression de l\'appartement');
    }
};