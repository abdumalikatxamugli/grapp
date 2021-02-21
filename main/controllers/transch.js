const {Anketa,Transch} = require('../models');
const sequelize = require("../models/dbconnection");
const { QueryTypes } = require('sequelize');

const transch = () => {
    const create = async (event, { id, data }) => {
        try {
            await Transch.destroy({
                where:{
                    ANKETA_ID:id
                }
            });
            
            for (const item of data) {
                    delete item.selected;
                    item.id?await myupsert(Transch,{...item})
                             :await Transch.create({...item, ANKETA_ID: id});      
            }
            event.reply('transch-saved');
        } catch (error) {
            console.log("Xato: ",error)
        }

    }
    const get=async (event, id)=>{

        if(!id){
            return;
        }
        const transhes=await Transch.findAll({
            where:{
                ANKETA_ID: id
            }
        });
        event.reply('get-transhes', transhes);
    }
    const getP=async (event, id)=>{

        if(!id){
            return;
        }
        const transhes=
            await sequelize.query(`SELECT * FROM Transches where id not in 
                (select TRANSCH_ID from Polis where TRANSCH_ID is not null) and ANKETA_ID=`+id, 
                { type: QueryTypes.SELECT }
            );
        console.log(transhes, id);
        event.reply('get-transhesP', transhes);
    }
    return {
        transch: {
            create: create,
            get:get,
            getP:getP
        }
    }
}
module.exports = transch();