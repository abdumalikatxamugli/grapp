const {Polis} = require('../models');
const {myupsert} = require('../helpers');
const sequelize = require("../models/dbconnection");


const polis = () => {
    const get = async (event) => {
        const polises = await Polis.findAll({
            where:{
                TB_STATUS:1
            }
        });
        event.reply("get-polis", polises);
    }
    
    return {
        polis: {
            get:get
        }
    }
}
module.exports = polis();