// config/sequelize.js

require('dotenv').config();
const { Sequelize } = require('sequelize');

// Création d'une instance Sequelize en utilisant les variables d'environnement
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql', // Changez le dialecte en fonction de votre base de données: 'postgres', 'sqlite', 'mariadb', 'mssql'
    logging: false, // Pour désactiver le logging, mettez cela à false
    // Ajoutez d'autres options de configuration selon vos besoins
});

module.exports = sequelize;
