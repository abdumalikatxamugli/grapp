const { DataTypes } = require('sequelize');

const sequelize=require('./dbconnection');



const ClientJur = sequelize.define('ClientJur', {
    TB_ORGINN:{
        type:DataTypes.STRING
    },
    TB_ORGNAME:{
        type:DataTypes.STRING
    },
    TB_KOD_OKONX:{
        type:DataTypes.STRING
    },
    TB_KOD_OKED:{
        type:DataTypes.STRING
    },
    TB_ORGMFO:{
        type:DataTypes.STRING
    },
    TB_ORGBANK:{
        type:DataTypes.STRING
    },
    TB_ORGSCHET:{
        type:DataTypes.STRING
    },
    TB_KOD_OKPO:{
        type:DataTypes.STRING
    },
    TB_KOD_SOATO:{
        type:DataTypes.STRING
    },
    TB_DIREKTOR:{
        type:DataTypes.STRING
    },
    TB_BUHGALTER:{
        type:DataTypes.STRING
    },
    TB_BASIS:{
        type:DataTypes.STRING
    },
    TB_ISBANK:{
        type:DataTypes.BOOLEAN
    }
})





module.exports = ClientJur;