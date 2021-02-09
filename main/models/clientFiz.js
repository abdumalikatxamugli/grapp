'use strict';

const { DataTypes } = require('sequelize');
const sequelize=require('./dbconnection');


const ClientFiz = sequelize.define('ClientFiz', {
    TB_PINFL:{
        type: DataTypes.STRING
    },
    TB_PASPSERY:{
        type: DataTypes.STRING
    },
    TB_PASPNUMBER:{
        type: DataTypes.STRING
    },
    TB_NAME:{
        type: DataTypes.STRING
    },
    TB_SURNAME:{
        type: DataTypes.STRING
    },
    TB_PATRONYM:{
        type: DataTypes.STRING
    },
    TB_DATEBIRTH:{
        type: DataTypes.DATEONLY
    },
    TB_PASPVIDAN:{
        type: DataTypes.STRING
    },
    TB_PASPDATE:{
        type: DataTypes.DATEONLY
    },
    TB_SEX:{
        type: DataTypes.INTEGER
    },
    TB_PRAVA_SERY:{
        type: DataTypes.STRING
    },
    TB_PRAVA_NUMBER:{
        type: DataTypes.STRING
    },
    TB_PRAVA_DATE:{
        type: DataTypes.DATEONLY
    },
    TB_CHP:{
        type: DataTypes.INTEGER
    },
    TB_CERTIFICATE:{
        type: DataTypes.STRING
    },
    TB_CERT_BEGIN:{
        type: DataTypes.DATEONLY
    },
    TB_CERT_END:{
        type: DataTypes.DATEONLY
    }
});



module.exports = ClientFiz;