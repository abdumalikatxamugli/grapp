const { Sequelize, DataTypes } = require('sequelize');
const Contract = require('./contract');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
    logging: false
})


const Transch = sequelize.define('Transch', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    SUMMA: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },
    DATE: {
        type: DataTypes.date,
        allowNull: false
    }
});

Transch.belongsTo(Contract, {foreignKey: 'CONTRACT_ID'});
Transch.sync({force: true});


module.exports = Transch;
