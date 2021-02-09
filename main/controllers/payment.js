const {Payment, Anketa, Transch} = require('../models');

const payment = () => {
    const create = async (event, { id, data }) => {
        try {
            let sended = []
            let anketa
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const element = data[key];
                    if (element.id) {
                        const oldPayment = await Payment.update(
                            element,
                            {
                                where: {
                                    id: element.id
                                }
                            }
                        )
                        sended.push(oldPayment.dataValues)
                        console.log(oldPayment.dataValues)
                    } else {
                        // const newTransch = await Transch.create(element)
                        anketa = await Anketa.findOne({
                            where: {
                                id: id
                            }
                        })
                        anketa.createPayment(element)
                    }
                }
                event.reply('payment-saved', data);
            }
        } catch (error) {
            console.log("Xato: ", error)
        }

    }
    return {
        payment: {
            create: create
        }
    }
}
module.exports = payment();