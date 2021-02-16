const {Anketa,Transch} = require('../models');

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
    const get=async (event, id)=>{
        if(!id){
            return;
        }
        const transhes=await Transch.findAll({
            where:{
                ANKETA_ID: id
            }
        });
        event.reply('get-contracts', transhes);
    }
    return {
        transch: {
            create: create,
            get:get
        }
    }
}
module.exports = transch();