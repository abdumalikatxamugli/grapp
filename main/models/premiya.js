const { Sequelize, DataTypes } = require('sequelize');

const sequelize=require('./dbconnection');

const Premiya = sequelize.define('Premiya', {
    STRAXOVAYA_SUMMA:{
        type: DataTypes.DECIMAL(15, 2),
        allowNull:false
    },
    PREMIYA_PERCENT: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },
    FRANCHISE_PERCENT: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }
});




module.exports = Premiya;
