const { DataTypes } = require('sequelize');
const sequelize=require('./dbconnection');


const Contract = sequelize.define('Contract', {
  TRANSPORT_ID:{
    type: DataTypes.INTEGER
  },
  ANKETA_ID:{
    type: DataTypes.INTEGER
  },
  insuranceAmount: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: 0    
  },
  premiyaPercent: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: 0      
  },
  premiyaAmount: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: 0      
  },
  franchise: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: false      
  },
  franchiseCond: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: false      
  },
  franchisePercent: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: 0     
  },
  franchiseAmount: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: 0     
  }
});



module.exports = Contract;
