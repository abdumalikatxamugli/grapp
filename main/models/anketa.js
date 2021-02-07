const { Sequelize, DataTypes } = require('sequelize');
const Payment = require('./payment');
const Transch = require('./transch');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
    logging: false
})


const Anketa = sequelize.define('Anketa', {
    INS_NUM: {
        type: DataTypes.STRING,
        allowNull: true
    },
    INS_DATE: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    INS_DATEF: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    INS_DAY: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    INS_DATET: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    BENEFICIARY_ID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    INSURANT_ID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    INS_COUNTRY:{
        type: DataTypes.STRING,
        allowNull: true
    },
    VAL_USLOVIYA:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VAL_TYPE:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VAL_KURS:{
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    
    OLD_DOGNUM: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

// Contract.belongsTo(Beneficiar);
// Beneficiar.hasMany(Contract);
Anketa.hasMany(Transch, {
    as: 'transch',
    foreignKey: 'ANKETA_ID'
})
Anketa.hasMany(Payment, {
    as: 'payment',
    foreignKey: 'ANKETA_ID'
})
Transch.belongsTo(Anketa)
Anketa.sync({ force: true } );


module.exports = Anketa;
