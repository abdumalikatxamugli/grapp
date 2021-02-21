const {Payment, Anketa, Transch, Contract} = require('../models');
const sequelize = require("../models/dbconnection");
const { QueryTypes } = require('sequelize');

const payment = () => {
    const create = async (event, { id, data }) => {
        try {
           Payment.create({...data, ANKETA_ID:id});
        } catch (error) {
            console.log("Xato: ", error)
        }

    }
    const get=async (event, id)=>{

        if(!id){
            return;
        }
        
        const oplatas=await Payment.findAll({
            where:{
                ANKETA_ID:id
            }
        });
        
        const contracts=await Contract.findAll({
            where:{
                ANKETA_ID:id
            }
        });
        const reply={
            contracts:contracts,
            oplatas:oplatas
        }
        event.reply("get-payment", reply);
    }
    const getP=async (event, id)=>{

        if(!id){
            return;
        }
        
        const oplatas=
            await sequelize.query(`SELECT * FROM Payments where id not in 
                (select OPLATA_ID from Polis where OPLATA_ID is not null) and ANKETA_ID=`+id, 
                { type: QueryTypes.SELECT }
            );
        
        const reply={
            contracts:[],
            oplatas:oplatas
        }
        event.reply("get-paymentP", reply);
    }
    const deleteP=async (event, id)=>{
        console.log(id)
        await Payment.destroy({
            where:{
                id:id
            }
        });
        event.reply("delete-oplata");
    }
    return {
        payment: {
            create: create,
            get: get,
            deleteP:deleteP,
            getP:getP
        }
    }
}
module.exports = payment();