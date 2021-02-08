const { DataTypes } = require('sequelize');
const sequelize=require('./dbconnection');

const Transch = sequelize.define('Transch', {
    ANKETA_ID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    amount: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: true
    },
    date: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: true
    }
});



module.exports = Transch;
