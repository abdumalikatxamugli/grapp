const Contract = require('../models/contract');
const Transport = require('../models/transport');
const transport = () => {
    const create = async (event, data) => {
        const transport = await Transport.create({ ...data });
        event.reply('transport-saved', transport.dataValues);
    }
    const remove = async (event, id) => {
        const transport = await Transport.destroy({
            where: {
                id: id
            }
        })
        await Contract.destroy({
            where: {
                TRANSPORT_ID: id
            }
        })
        event.reply('transport-deleted', id);
    }
    return {
        transport: {
            create: create,
            delete: remove
        }
    }
}
module.exports = transport();