const {Voditel, VoditelArchive} = require('../models');
const {myupsert} = require('../helpers');
const sequelize = require("../models/dbconnection");
const { QueryTypes } = require('sequelize');

const voditel = () => {
    const create = async (event,  data) => {
    	const voditelArchive=data.id?await myupsert(VoditelArchive, {...data})
									:await VoditelArchive.create({...data});

        delete data.id;
		const voditel=data.id?await myupsert(Voditel,{...data})
							 :await Voditel.create({...data, ARCHIVE_ID: voditelArchive.id});
        
    
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
    const deleteV=async (event, id)=>{
        await Voditel.destroy({
            where:{
                id:id
            }
        });
        event.reply("delete-voditel");
    }
    const getV=async (event, transport_id) =>{
        const payload=await sequelize.query("SELECT * FROM VoditelArchives where id not in (select ARCHIVE_ID from Voditels where TRANSPORT_ID="+transport_id+")", { type: QueryTypes.SELECT });
            
        event.reply("get-voditels", payload);
    }

    const choose=async(event,id, transport_id)=>{
        var voditel=await VoditelArchive.findByPk(id);
        voditel=voditel.dataValues;
        delete voditel.id;
        await Voditel.create({...voditel, ARCHIVE_ID:id, TRANSPORT_ID: transport_id});
        event.reply("choose-voditel");
    }
    return {
        voditel: {
            create: create,
            deleteV: deleteV,
            getV:getV,
            choose:choose
        }
    }
}
module.exports = voditel();