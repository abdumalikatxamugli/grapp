const {Contract, Transport} = require('../models');

const contract = () => {
    const create = async (event, data) => {
        try {
            let sended = []
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const element = data[key];
                    if (element.id) {
                        const oldContract = await Contract.update(
                            element,
                            {
                                where: {
                                    id: element.id
                                }
                            }
                        )
                        sended.push(oldContract.dataValues)
                    } else {
                        const newContract = await Contract.create(element)
                        const transport = await Transport.findOne({
                            where: {
                                id: element.transport_id
                            }
                        })
                        newContract.setTransport(transport)
                        sended.push(newContract.dataValues)
                    }
                }
                event.reply('contract-saved', sended);
            }
        } catch (error) {
            console.log(error)
        }

    }
    const get=async (event, id, check)=>{
    
        if(!id){
            return;
        }
        const contracts=await Contract.findAll({
            where:{
                ANKETA_ID: id
            }
        });
        
        event.reply('get-contracts', contracts);
    }
    return {
        contract: {
            create: create,
            get:get
        }
    }
}
module.exports = contract();