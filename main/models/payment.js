const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('./dbconnection');

const Payment = sequelize.define('Payment', {
    ANKETA_ID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    OPL_DATA: {
        type: DataTypes.DATE,
        allowNull: true
    },
    OPL_SUMMA: {
        type: DataTypes.DECIMAL(15,2),
        allowNull: true
    },
    OPL_TYPE: {
        type: DataTypes.STRING,
        allowNull: true
    },
    DOC_NUM: {
        type: DataTypes.STRING,
        allowNull: true
    }
});



module.exports = Payment;
