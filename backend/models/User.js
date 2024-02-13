const { DataTypes } = require('sequelize');
const sequelize = require('../bdd/database');

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    tableName: 'users',
    timestamps: false,
});

module.exports = User;
