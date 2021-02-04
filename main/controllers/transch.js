const Anketa = require('../models/anketa');
const Transch = require('../models/transch');
const transch = () => {
    const create = async (event, { id, data }) => {
        try {
            let sended = []
            let anketa
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const element = data[key];
                    if (element.id) {
                        const oldTransch = await Transch.update(
                            element,
                            {
                                where: {
                                    id: element.id
                                }
                            }
                        )
                        sended.push(oldTransch.dataValues)
                    } else {
                        // const newTransch = await Transch.create(element)
                        anketa = await Anketa.findOne({
                            where: {
                                id: id
                            }
                        })
                        anketa.createTransch(element)
                    }
                }
                event.reply('transch-saved', data);
            }
        } catch (error) {
            console.log("Xato: ",error)
        }

    }
    return {
        transch: {
            create: create
        }
    }
}
module.exports = transch();