const Contract = require('../models/contract');
const Transport = require('../models/transport');
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
                        console.log(newContract.dataValues)
                    }
                }
                event.reply('contract-saved', sended);
            }
        } catch (error) {
            console.log(error)
        }

    }
    return {
        contract: {
            create: create
        }
    }
}
module.exports = contract();