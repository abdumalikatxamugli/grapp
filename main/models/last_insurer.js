const { Sequelize, DataTypes } = require('sequelize');
const Transport = require('./transport');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
    logging: false
})


const LastInsurer = sequelize.define('LastInsurer', {
    NAME: {
        type: DataTypes.STRING,
        allowNull: true
    },
    UBITKA_YEAR: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    UBITKA_SUMMA: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },
    UBITKA_PRICHINA: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    UBITKA_YEAR_2: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    UBITKA_SUMMA_2: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },
    UBITKA_PRICHINA_2: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    UBITKA_YEAR_3: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    UBITKA_SUMMA_3: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },
    UBITKA_PRICHINA_3: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

LastInsurer.belongsTo(Transport, { foreignKey: 'CAR_ID' });
LastInsurer.sync({ force: true });


module.exports = LastInsurer;
