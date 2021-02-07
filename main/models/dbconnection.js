'use strict';

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
    logging: false,
    pool: {
	    max: 5,
	    min: 0,
	    acquire: 30000,
	    idle: 10000
	  }
});


module.exports=sequelize;