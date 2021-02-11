const {Contract, Transport, ClientCommon, Voditel} = require('../models');

const transport = () => {
    const create = async (event, data) => {
        const transport = await Transport.create({ ...data});
        const contract = await Contract.create({
            name: transport.TB_MARKA+" "+transport.TB_MODEL,
            TRANSPORT_ID: transport.id,
            ANKETA_ID: transport.ANKETA_ID
        });
        event.reply('transport-saved', transport.dataValues);
    }
    const remove = async (event, id) => {
        const transport = await Transport.findOne({
            where: {
                id: id
            }
        });
        const client_id=transport.ZALOGADATEL_ID;
        transport.destroy();
        await ClientCommon.destroy({
            where:{
                id: client_id
            }
        });
        await Contract.destroy({
            where: {
                TRANSPORT_ID: id
            }
        });
        event.reply('transport-deleted', id);
    }
    const get=async (event, id)=>{
        console.log(id)
        if(!id){
            return;
        }
        var transports=await Transport.findAll({
            where:{
                ANKETA_ID:id
            },
            include:Voditel
        });
        transports=await Promise.all(transports.map(async (item)=>{
            item.voditels=await Promise.all(item.Voditels.map(async (item)=>{
                return await item.dataValues;
            })
            )
            delete item.Voditels;
            return item.dataValues;
        })
        )
       
        event.reply('get-transports', transports)
    }
    return {
        transport: {
            create: create,
            delete: remove,
            get:get
        }
    }
}
module.exports = transport();