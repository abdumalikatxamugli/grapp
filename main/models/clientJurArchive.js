const { DataTypes } = require('sequelize');
const ClientCommonArchive = require('./clientCommonArchive');

const sequelize=require('./dbconnection');



const ClientJurArchive = sequelize.define('ClientJurArchive', {
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
    },
    ClientCommonArchiveId:{
        type: DataTypes.INTEGER  
    }
})


ClientJurArchive.associate=(models)=>{
    ClientJurArchive.belongsTo(models.ClientCommonArchive);
};


ClientJurArchive.sync({force:true});


module.exports = ClientJurArchive;