'use strict';

const {DataTypes } = require('sequelize');
const sequelize=require('./dbconnection');



const ClientCommonArchive = sequelize.define('ClientCommonArchive', {
    SYSTEM_TYPE:{
        //yur=1 fiz=0 
        type: DataTypes.BOOLEAN
    },
    TB_REZIDENT:{
        type: DataTypes.BOOLEAN,
    },
    TB_COUNTRY:{
        type: DataTypes.STRING,
    },
    TB_OBLAST:{
        type: DataTypes.STRING
    },
    TB_RAYON:{
        type: DataTypes.STRING
    },
    TB_ULICA:{
        type: DataTypes.STRING
    },
    TB_DOM:{
        type: DataTypes.NUMBER
    },
    TB_KV:{
        type: DataTypes.STRING
    },
    TB_EMAIL:{
        type: DataTypes.STRING
    },
    TB_SITE:{
        type: DataTypes.STRING
    },
    TB_POCHTA:{
        type: DataTypes.STRING
    },
    TB_PHONE1:{
        type: DataTypes.STRING
    },
    TB_PHONE2:{
        type: DataTypes.STRING
    },
    TB_FAX:{
        type: DataTypes.STRING
    }
})




module.exports = ClientCommonArchive;