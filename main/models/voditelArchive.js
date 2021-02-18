const { Sequelize, DataTypes } = require('sequelize');

const sequelize=require('./dbconnection');


const VoditelArchive = sequelize.define('VoditelArchive', {
    TB_SURNAME: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_NAME: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_PATRONYM: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_DATEBIRTH: {
        type: DataTypes.DATE,
        allowNull: true
    },
    TB_STAJ: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    TB_PRAVA_SERY: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_PRAVA_NUMBER: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_PRAVA_REO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_PRAVA_DATE: {
        type: DataTypes.DATE,
        allowNull: true
    },
    TB_DATE: {
        type: DataTypes.DATE,
        allowNull: true
    },
    TB_PASPSERY: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_PASPNUMBER: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_PASPVIDAN: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_PASPDATE: {
        type: DataTypes.DATE,
        allowNull: true
    },
    TB_PRAVA_DATE0: {
        type: DataTypes.DATE,
        allowNull: true
    },
    TB_DOVERENNOST_NUM: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_SEX: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    TB_PRAVA_CATEGORY: {
        type: DataTypes.STRING(1),
        allowNull: true
    }
});


module.exports = VoditelArchive;

