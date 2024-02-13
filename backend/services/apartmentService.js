const Apartment = require('../models/Apartment');

exports.getAllApartments = async () => {
    return await Apartment.findAll();
};

exports.createApartment = async (apartmentData) => {
    return await Apartment.create(apartmentData);
};

exports.updateApartment = async (apartmentId, newData) => {
    const apartment = await Apartment.findByPk(apartmentId);
    if (!apartment) {
        throw new Error('Appartement non trouvé');
    }
    return await apartment.update(newData);
};

exports.deleteApartment = async (apartmentId) => {
    const apartment = await Apartment.findByPk(apartmentId);
    if (!apartment) {
        throw new Error('Appartement non trouvé');
    }
    await apartment.destroy();
};
