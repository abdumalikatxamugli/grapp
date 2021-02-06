const { Sequelize, DataTypes } = require('sequelize');

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
        type: DataTypes.DATE,
        allowNull: true
    },
    INS_DATEF: {
        type: DataTypes.DATE,
        allowNull: true
    },
    INS_DAY: {
        type: DataTypes.DATE,
        allowNull: true
    },
    INS_DATET: {
        type: DataTypes.DATE,
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
    OLD_DOGNUM: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

// Contract.belongsTo(Beneficiar);
// Beneficiar.hasMany(Contract);

Anketa.sync({ force: true } );


module.exports = Anketa;
