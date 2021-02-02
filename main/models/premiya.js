const { Sequelize, DataTypes } = require('sequelize');
const Transport=require("./transport.js");
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
    logging: false
})


const Premiya = sequelize.define('Premiya', {
    STRAXOVAYA_SUMMA:{
        type: DataTypes.DECIMAL(15, 2),
        allowNull:false
    },
    PREMIYA_PERCENT: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },
    FRANCHISE_PERCENT: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }
});

Premiya.belongsTo(Transport, {foreignKey: 'OBJECT_ID'});
Premiya.sync({force: true});


module.exports = Premiya;
