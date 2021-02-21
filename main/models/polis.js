const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('./dbconnection');

const Polis = sequelize.define('Polis', {
	"TB_SERY":{
		type: DataTypes.STRING,
    allowNull: true
	},
	"TB_NUMBER": {
		type: DataTypes.STRING,
    allowNull: true
	},
	"TB_DATE_BEGIN": {
		type: DataTypes.DATEONLY,
    allowNull: true
	},
	"TB_DATE_END": {
		type: DataTypes.DATEONLY,
    allowNull: true
	},    
	"TB_SUMMA": {
		type: DataTypes.INTEGER,
    allowNull: true
	},
	"TB_PREMIA": {
		type: DataTypes.INTEGER,
    allowNull: true
	},
	"TB_DATEPRINT": {
		type: DataTypes.DATE,
    allowNull: true
	},
	"TB_DATECONTROL": {
		type: DataTypes.DATEONLY,
    allowNull: true
	},
	"TB_STATUS": {
		type: DataTypes.INTEGER,
    allowNull: true
	},
	"AVTO_ID":{
		type: DataTypes.INTEGER,
		allowNull: true
	},
	"TRANSCH_ID":{
		type: DataTypes.INTEGER,
		allowNull: true
	},
	"OPLATA_ID":{
		type: DataTypes.INTEGER,
		allowNull: true
	}
});



module.exports=Polis;
