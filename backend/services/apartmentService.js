const Apartment = require('../models/Apartment');

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
    const apartment = await Apartment.findByPk(apartmentId);
    if (!apartment) {
        throw new Error('Apartment not found');
    }
    await apartment.destroy();
};
