const { Sequelize, DataTypes } = require('sequelize');
const Contract = require('./contract');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
    logging: false
})


const Payment = sequelize.define('Payment', {
    SUMMA: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },
    DATE: {
        type: DataTypes.date,
        allowNull: false
    },
    TYPE: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    PAYDOC: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

Payment.belongsTo(Contract, {foreignKey: 'CONTRACT_ID'});
Payment.sync({force: true});


module.exports = Payment;
