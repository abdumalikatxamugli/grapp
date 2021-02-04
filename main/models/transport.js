const { Sequelize, DataTypes } = require('sequelize');
const Contract = require('./contract');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
    logging: false
})


const Transport = sequelize.define('Transport', {
    TB_ID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    TB_REGNUMBER: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_YEAR: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    TB_KUZOV: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_SHASSI: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_DVIGATEL: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_MARKA: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_MODEL: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_VMODEL: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_TYPE: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_MOSCH: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    TB_STOIMOST: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_STOIMOST: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: true
    },
    TB_COLOR: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_TEXPSERY: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_TEXPNUMBER: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TB_TEXPDATE: {
        type: DataTypes.DATE,
        allowNull: true
    },
    TB_COMMENT: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DEFEKT_OPIS1: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DEFEKT_OPIS2: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DEFEKT_OPIS3: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DEFEKT_OPIS4: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DEFEKT_OPIS5: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DEFEKT_OPIS6: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP_KOL: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_SUMM_DOP_OBOR: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_SUMM_ARENDA: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_SIGNAL: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    TB_DOP1_SPEC: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP1_KOL: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP1_SUM: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    TB_DOP2_SPEC: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP2_KOL: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP2_SUM: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    TB_DOP3_SPEC: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP3_KOL: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP3_SUM: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    TB_DOP4_SPEC: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP4_KOL: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP4_SUM: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    TB_DOP5_SPEC: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP5_KOL: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP5_SUM: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    TB_DOP6_SPEC: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP6_KOL: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP6_SUM: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    TB_DOP7_SPEC: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP7_KOL: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP7_SUM: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    TB_DOP8_SPEC: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP8_KOL: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP8_SUM: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    TB_DOP9_SPEC: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP9_KOL: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP9_SUM: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    TB_DOP10_SPEC: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP10_KOL: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    TB_DOP10_SUM: {
        type: DataTypes.TEXT,
        allowNull: true
    }

});

Transport.hasOne(Contract);
Contract.belongsTo(Transport, {
    as: "transport",
    foreignKey: {
        name: 'TRANSPORT_ID'
    }
});

Transport.sync({ force: true });


module.exports = Transport;