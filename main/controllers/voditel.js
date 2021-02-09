const {Voditel} = require('../models');

const voditel = () => {
    const create = async (event,  data) => {
        const voditel = await Voditel.create({ ...data });
        event.reply('voditel-saved', voditel.dataValues);
    }
    return {
        voditel: {
            create: create
        }
    }
}
module.exports = voditel();