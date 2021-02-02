const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
    logging: false
})


const Insurant = sequelize.define('Insurant', {
    TB_REZIDENT: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    TB_ORGINN: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_PINFL: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_SURNAME: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_NAME: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_PATRONYM: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_PASPSERY: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_PASPNUMBER: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_PRAVA_SERY: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_PRAVA_NUMBER: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_PINFL: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_PASPVIDAN: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_PASPDATE: {
        type: DataTypes.DATE,
        allowNull: false
    },
    TB_ORGNAME: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_ORGTYPE: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_INPS: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_SEX: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_DATEBIRTH: {
        type: DataTypes.DATE,
        allowNull: false
    },
    TB_PRAVA_DATE: {
        type: DataTypes.DATE,
        allowNull: false
    },
    TB_CHP: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    TB_CERTIFICATE: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_CERT_BEGIN: {
        type: DataTypes.DATE,
        allowNull: false
    },
    TB_CERT_END: {
        type: DataTypes.DATE,
        allowNull: false
    },
    TB_KOD_OKONX: {
        type: DataTypes.INTEGER(5),
        allowNull: true,
    },
    TB_KOD_OKED: {
        type: DataTypes.INTEGER(5),
        allowNull: true
    },
    TB_ORGMFO: {
        type: DataTypes.INTEGER(5),
        allowNull: true,
    },
    TB_ORGBANK: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    TB_ORGSCHET: {
        type: DataTypes.BIGINT(20),
        allowNull: true
    },
    TB_KOD_OKPO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_KOD_SOATO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_DIREKTOR: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_BUHGALTER: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_BASIS: {
        type: DataTypes.STRING,
        allowNull: true
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


Insurant.sync();


module.exports = Insurant;
