'use strict';

const { DataTypes } = require('sequelize');

const sequelize=require('./dbconnection');


const TransportArchive = sequelize.define('TransportArchive', {
    ZALOGADATEL_ID: {
        type: DataTypes.INTEGER
    },
    TB_REGNUMBER: {
        type: DataTypes.STRING
    },
    TB_YEAR: {
        type: DataTypes.INTEGER
    },
    TB_KUZOV: {
        type: DataTypes.STRING
    },
    TB_SHASSI: {
        type: DataTypes.STRING
    },
    TB_DVIGATEL: {
        type: DataTypes.STRING
    },
    TB_MARKA: {
        type: DataTypes.STRING
    },
    TB_MODEL: {
        type: DataTypes.STRING
    },
    TB_VMODEL: {
        type: DataTypes.STRING
    },
    TB_TYPE: {
        type: DataTypes.STRING
    },
    TB_MOSCH: {
        type: DataTypes.FLOAT
    },
    TB_STOIMOST: {
        type: DataTypes.STRING
    },
    TB_STOIMOST: {
        type: DataTypes.DECIMAL(15, 2)
    },
    TB_COLOR: {
        type: DataTypes.STRING
    },
    TB_TEXPSERY: {
        type: DataTypes.STRING
    },
    TB_TEXPNUMBER: {
        type: DataTypes.STRING
    },
    TB_TEXPDATE: {
        type: DataTypes.DATE,
    },
    TB_COMMENT: {
        type: DataTypes.TEXT
    },
    TB_DEFEKT_OPIS1: {
        type: DataTypes.TEXT
    },
    TB_DEFEKT_OPIS2: {
        type: DataTypes.TEXT
    },
    TB_DEFEKT_OPIS3: {
        type: DataTypes.TEXT
    },
    TB_DEFEKT_OPIS4: {
        type: DataTypes.TEXT
    },
    TB_DEFEKT_OPIS5: {
        type: DataTypes.TEXT
    },
    TB_DEFEKT_OPIS6: {
        type: DataTypes.TEXT
    },
    TB_DOP_KOL: {
        type: DataTypes.TEXT
    },
    TB_SUMM_DOP_OBOR: {
        type: DataTypes.TEXT
    },
    TB_SUMM_ARENDA: {
        type: DataTypes.TEXT
    },
    TB_SIGNAL: {
        type: DataTypes.TEXT
    },
    TB_DOP1_SPEC: {
        type: DataTypes.TEXT
    },
    TB_DOP1_KOL: {
        type: DataTypes.TEXT
    },
    TB_DOP1_SUM: {
        type: DataTypes.TEXT
    },
    TB_DOP2_SPEC: {
        type: DataTypes.TEXT
    },
    TB_DOP2_KOL: {
        type: DataTypes.TEXT
    },
    TB_DOP2_SUM: {
        type: DataTypes.TEXT
    },
    TB_DOP3_SPEC: {
        type: DataTypes.TEXT
    },
    TB_DOP3_KOL: {
        type: DataTypes.TEXT
    },
    TB_DOP3_SUM: {
        type: DataTypes.TEXT
    },
    TB_DOP4_SPEC: {
        type: DataTypes.TEXT
    },
    TB_DOP4_KOL: {
        type: DataTypes.TEXT
    },
    TB_DOP4_SUM: {
        type: DataTypes.TEXT
    },
    TB_DOP5_SPEC: {
        type: DataTypes.TEXT
    },
    TB_DOP5_KOL: {
        type: DataTypes.TEXT
    },
    TB_DOP5_SUM: {
        type: DataTypes.TEXT
    },
    TB_DOP6_SPEC: {
        type: DataTypes.TEXT
    },
    TB_DOP6_KOL: {
        type: DataTypes.TEXT
    },
    TB_DOP6_SUM: {
        type: DataTypes.TEXT
    },
    TB_DOP7_SPEC: {
        type: DataTypes.TEXT
    },
    TB_DOP7_KOL: {
        type: DataTypes.TEXT
    },
    TB_DOP7_SUM: {
        type: DataTypes.TEXT
    },
    TB_DOP8_SPEC: {
        type: DataTypes.TEXT
    },
    TB_DOP8_KOL: {
        type: DataTypes.TEXT        
    },
    TB_DOP8_SUM: {
        type: DataTypes.TEXT        
    },

    TB_DOP9_SPEC: {
        type: DataTypes.TEXT        
    },
    TB_DOP9_KOL: {
        type: DataTypes.TEXT        
    },
    TB_DOP9_SUM: {
        type: DataTypes.TEXT        
    },
    TB_DOP10_SPEC: {
        type: DataTypes.TEXT        
    },
    TB_DOP10_KOL: {
        type: DataTypes.TEXT        
    },
    TB_DOP10_SUM: {
        type: DataTypes.TEXT        
    }
});







module.exports = TransportArchive;
