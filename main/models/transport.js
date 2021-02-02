const { Sequelize, DataTypes } = require('sequelize');
const Contract = require('./contract');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
    logging: false
})


const Transport = sequelize.define('Transport', {
    REGNUMBER: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_YEAR: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    TB_KUZOV: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_SHASSI: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_DVIGATEL: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_MARKA: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_MODEL: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_TYPE_LABEL: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_MOSCH: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    TB_STOIMOST: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_STOIMOST: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },
    TB_COLOR: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_TEXPSERY: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_TEXPNUMBER: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_TEXPDATE: {
        type: DataTypes.DATE,
        allowNull: false
    },
    TB_COMMENT: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    TB_DEFECTOPIS: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

Transport.belongsTo(Contract, {foreignKey: 'CONTRACT_ID'});
Transport.sync({force: true});


module.exports = Transport;
