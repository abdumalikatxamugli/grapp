const {Anketa,Transch} = require('../models');

const transch = () => {
    const create = async (event, { id, data }) => {
        try {
            await Transch.destroy({
                where:{
                    ANKETA_ID:id
                }
            });
            
            for (const item of data) {
                    delete item.selected;
                    item.id?await myupsert(Transch,{...item})
                             :await Transch.create({...item, ANKETA_ID: id});      
            }
            event.reply('transch-saved');
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
        event.reply('get-transhes', transhes);
    }
    return {
        transch: {
            create: create,
            get:get
        }
    }
}
module.exports = transch();