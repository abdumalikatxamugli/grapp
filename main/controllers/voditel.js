const {Voditel, VoditelArchive} = require('../models');
const {myupsert} = require('../helpers');

const voditel = () => {
    const create = async (event,  data) => {
    	const voditelArchive=data.id?await myupsert(VoditelArchive, {...data})
									:await VoditelArchive.create({...data});

		const voditel=data.id?await myupsert(Voditel,{...data})
							 :await Voditel.create({...data, ARCHIVE_ID: voditelArchive.id});
        
        console.log(voditel);
        event.reply('voditel-saved', voditel.dataValues);
    }
    const insertFromArchive=async (event, id, transport_id)=>{
    	var data=await voditelArchive.findByPk(id);
    	data=data.dataValues;
    	delete data.id;
    	const voditel=await Voditel.create({...data, TRANSPORT_ID: transport_id, 
    										ARCHIVE_ID: id});
    	event.reply("insert-voditel");

    }
    return {
        voditel: {
            create: create
        }
    }
}
module.exports = voditel();