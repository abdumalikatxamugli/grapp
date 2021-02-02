const { Sequelize, DataTypes } = require('sequelize');
const Transport = require('./transport');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
    logging: false
})


const Extras = sequelize.define('Extras', {
    NAME: {
        type: DataTypes.STRING,
        allowNull: true
    },
    SPEC: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    COUNT: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    PRICE: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },
});

Extras.belongsTo(Transport, { foreignKey: 'CAR_ID' });
Extras.sync({ force: true });


module.exports = Extras;
