const { Sequelize, DataTypes } = require('sequelize');
const Beneficiar = require('./Beneficiar.js');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
    logging: false
})


const Anketa = sequelize.define('Anketa', {
    INS_NUM: {
        type: DataTypes.STRING,
        allowNull: false
    },
    INS_DATE: {
        type: DataTypes.DATE,
        allowNull: false
    },
    INS_DATEF: {
        type: DataTypes.DATE,
        allowNull: false
    },
    INS_DAY: {
        type: DataTypes.DATE,
        allowNull: true
    },
    INS_DATET: {
        type: DataTypes.DATE,
        allowNull: false
    },
    BENEFICIARY_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    INSURANT_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    INS_COUNTRY:{
        type: DataTypes.STRING,
        allowNull: false
    },
    VAL_USLOVIYA:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OLD_DOGNUM: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Contract.belongsTo(Beneficiar);
// Beneficiar.hasMany(Contract);

Anketa.sync();


module.exports = Anketa;
