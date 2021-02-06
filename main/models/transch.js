const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
    logging: false
})


const Transch = sequelize.define('Transch', {
    ANKETA_ID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    amount: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: true
    },
    date: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: true
    }
});

Transch.sync({ force: true });


module.exports = Transch;
