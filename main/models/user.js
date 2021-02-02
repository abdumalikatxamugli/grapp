const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
    logging: false
})


const User = sequelize.define('User', {
  SYSTEM_ID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  TOKEN: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  NAME:{
    type:DataTypes.STRING
  },
  LOCAL_PASSWORD_HASH:{
    type:DataTypes.STRING
  }
});
User.sync();


module.exports=User;
