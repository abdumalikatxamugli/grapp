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
    const save=async (event, payload)=>{
        await myupsert(Polis, {...payload, TB_STATUS:2});
        event.reply("polis-save");
    }
    return {
        polis: {
            get:get,
            save:save
        }
    }
}
module.exports = polis();