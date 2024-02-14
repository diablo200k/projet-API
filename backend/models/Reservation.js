const { DataTypes, Model } = require('sequelize');
const sequelize = require('../bdd/database');
const User = require('./User'); // Assurez-vous que le chemin est correct
const Apartment = require('./Apartment'); // Assurez-vous que le chemin est correct

class Reservation extends Model {}

Reservation.init({
    reservation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User, // Utilisez le modèle User importé
            key: 'user_id'
        }
    },
    apartment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Apartment, // Utilisez le modèle Apartment importé
            key: 'apartment_id'
        }
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Reservation',
    tableName: 'Reservations',
    timestamps: false
});

module.exports = Reservation;
