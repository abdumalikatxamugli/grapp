const {Payment, Anketa, Transch, Contract} = require('../models');

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
            deleteP:deleteP
        }
    }
}
module.exports = payment();