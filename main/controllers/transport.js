const {Contract, Transport, ClientCommon} = require('../models');

const transport = () => {
    const create = async (event, data) => {
        const transport = await Transport.create({ ...data});
        const contract = await Contract.create({
            name: transport.TB_MARKA+" "+transport.TB_MODEL,
            TransportId: transport.id
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
        if(!id){
            return;
        }
        const transports=Transport.findAll({
            where:{
                ANKETA_ID:id
            }
        })
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