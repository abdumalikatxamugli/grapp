const { Sequelize, DataTypes } = require('sequelize');
const Transport = require('./transport');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
    logging: false
})


const Owner = sequelize.define('Owner', {
    NAME: {
        type: DataTypes.STRING,
        allowNull: true
    },
    SURNAME: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PATRONYM: {
        type: DataTypes.STRING,
        allowNull: true
    },
    DATEBIRTH: {
        type: DataTypes.date,
        allowNull: false
    },
    EXPERIENCE: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    PRAVA_SERIE: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PRAVA_NOMER: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PRAVE_REO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PRAVA_DATE: {
        type: DataTypes.date,
        allowNull: false
    },
    DATE: {
        type: DataTypes.date,
        allowNull: false
    },
    PASSPORT_SERIE: {
        type: DataTypes.STRING(2),
        allowNull: true
    },
    PASSPORT_NOMER: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PASSPORT_NOMER: {
        type: DataTypes.BIGINT(7),
        allowNull: true
    },
    PASSPORT_VIDAN_PLACE: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    PASSPORT_DATE: {
        type: DataTypes.date,
        allowNull: false
    },
    PRAVA_DATEO: {
        type: DataTypes.date,
        allowNull: false
    },
    DOVERRONOST_NUM: {
        type: DataTypes.STRING,
        allowNull: false
    },
    SEX: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    PRAVA_CAT_0: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    PRAVA_CAT_1: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    PRAVA_CAT_2: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    PRAVA_CAT_3: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    PRAVA_CAT_4: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
});

Owner.belongsTo(Transport, { foreignKey: 'CONTRACT_ID' });
Owner.sync({ force: true });


module.exports = Owner;
