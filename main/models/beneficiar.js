const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
    logging: false
})


const Beneficiar = sequelize.define('Beneficiar', {

    TB_REZIDENT: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    TB_ORGINN: {
        type: DataTypes.BIGINT(9),
        allowNull: false
    },
    //not correct
    TB_ORGNAME:{
        type: DataTypes.STRING,
        allowNull: false
    },
    //not correct

    TB_KOD_OKONX: {
        type: DataTypes.INTEGER(5),
        allowNull: false,
    },
    TB_KOD_OKED: {
        type: DataTypes.INTEGER(5),
        allowNull: false,
    },
    TB_ORGMFO: {
        type: DataTypes.INTEGER(5),
        allowNull: false,
    },
    TB_ORGBANK: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    TB_ORGSCHET: {
        type: DataTypes.BIGINT(20),
        allowNull: false
    },
    TB_KOD_OKPO: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_KOD_SOATO: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_DIREKTOR: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_BUHGALTER: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_BASIS: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_ISBANK: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    TB_COUNTRY: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_OBLAST: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_RAYON: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_ULICA: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_DOM: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_KV: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_EMAIL: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_SITE: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_POCHTA: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_PHONE1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_PHONE2: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_FAX: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


Beneficiar.sync();


module.exports = Beneficiar;
