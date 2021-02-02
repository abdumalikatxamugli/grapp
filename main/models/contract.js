const { Sequelize, DataTypes } = require('sequelize');
const Beneficiar=require('./Beneficiar.js');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
    logging: false
})


const Contract = sequelize.define('Contract', {
 
  INS_DATE: {
    type: DataTypes.DATE,
    allowNull: false
  },
  INS_DATEF: {
    type: DataTypes.DATE,
    allowNull: false
  },
  INS_DAY: {
    type: DataTypes.DATE,
    allowNull: false
  },
  INS_DATET: {
    type: DataTypes.DATE,
    allowNull: false
  },
  OWNERID:{
    type: DataTypes.INTEGER,
    allowNull: true
  },
  BENEFID:{
    type: DataTypes.INTEGER,
    allowNull: true
  },
  INSURANT_ID:{
    type: DataTypes.INTEGER,
    allowNull: true
  },
  // VAL_USLOVIYA:{
  //   type: DataTypes.INTEGER,
  //   allowNull: false
  // },
  // VAL_USLOVIYA:{
  //   type: DataTypes.INTEGER,
  //   allowNull: false
  // },
  // VAL_LBL:{
  //   type: DataTypes.INTEGER,
  //   allowNull: false
  // },
  // VAL_KURS:{
  //   type: DataTypes.DECIMAL(10,2),
  //   allowNull: false
  // },
  INS_COUNTRY:{
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  ISTOCHNIK_O:{
    type: DataTypes.STRING,
    allowNull: false
  },
  INS_DOGNUM:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  OLD_DOGNUM:{
    type: DataTypes.STRING,
    allowNull: false
  }
});

Contract.belongsTo(Beneficiar);
Beneficiar.hasMany(Contract);

Contract.sync();


module.exports=Contract;
