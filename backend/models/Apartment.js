const { DataTypes, Model } = require('sequelize');
const sequelize = require('../bdd/database');

class Apartment extends Model {}

Apartment.init({
    apartment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    area: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    price_per_night: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id'
        }
    }
}, {
    sequelize,
    modelName: 'Apartment',
    tableName: 'apartments',
    timestamps: false
});

module.exports = Apartment;
