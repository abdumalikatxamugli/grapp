const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite3',
  logging: false
})


const Contract = sequelize.define('Contract', {
  TRANSPORT_ID: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  insuranceAmount: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: true
  },
  premiyaPercent: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: true
  },
  premiyaAmount: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: true
  },
  franchise: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: true
  },
  franchiseCond: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: true
  },
  franchisePercent: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: true
  },
  franchiseAmount: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: true
  },
});

Contract.sync({ force: true });



module.exports = Contract;
