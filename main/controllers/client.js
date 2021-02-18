const { Op } = require("sequelize");
const {ClientCommonArchive,
	   ClientJurArchive,
  	   ClientFizArchive,
       ClientCommon,
 	   ClientJur,
       ClientFiz,
} = require('../models')
const {myupsert} = require('../helpers');


const client=()=>{
	const create=async(event, {c, d, type})=>{
		
		const commonArchive=c.id?await ClientCommonArchive.upsert({...c, SYSTEM_TYPE:type})
								:await ClientCommonArchive.create({...c, SYSTEM_TYPE:type});

		
		const common=await ClientCommon.create({...c, SYSTEM_TYPE:type, ARCHIVE_ID: commonArchive.id});



		const dp={...d, ClientCommonId:common.id};
		const dpa={...d, ClientCommonArchiveId:commonArchive.id};

		const detailArchive=type?
					 d.id?await myupsert(ClientJurArchive, dpa):await ClientJurArchive.create(dpa)
					:d.id?await myupsert(ClientFizArchive, dpa):await ClientFizArchive.create(dpa);
		
		const detail=type?
					   await ClientJur.create(dp)
					  :await ClientFiz.create(dp);
					
		event.reply('client-saved', {
			name:type?detail.TB_ORGNAME:detail.TB_NAME+" "+detail.TB_SURNAME,
			id:common.id,
			archive_id: common.ARCHIVE_ID
		});
	}
	const list=async (event, restricted)=>{
		const clients=await ClientCommonArchive.findAll(
			{
				where:{
					id:{
						[Op.not]: restricted
					}
				},
				include:[
					{
						model:ClientFizArchive
					},
					{
						model:ClientJurArchive
					}
				]
			}
		);
		const restructered=await Promise.all(clients.map(async item=>{
				const elem=item.dataValues;
				elem.fiz=item.SYSTEM_TYPE?null:await item.ClientFizArchive.dataValues;
				elem.jur=item.SYSTEM_TYPE?await item.ClientJurArchive.dataValues:null;
				return {...elem};
			})
		);

		
		event.reply('get-clients', restructered);
	}

	const remove=async (event, id, role)=>{
		const common=await ClientCommon.findByPk(id);	
		await common.destroy();
		event.reply('remove-client', id, role);
	}

	const insertFromArchive=async (event, id)=>{
		var commonPayload=await ClientCommonArchive.findByPk(id, {
			include:[
				{
					model:ClientFizArchive
				},
				{
					model:ClientJurArchive
				}
			]
		});
		commonPayload=commonPayload.dataValues
		var dp=commonPayload.SYSTEM_TYPE?await commonPayload.ClientJurArchive.dataValues
																					:await commonPayload.ClientFizArchive.dataValues;
		delete commonPayload.ClientFizArchive;
		delete commonPayload.ClientJurArchive;
		commonPayload={...commonPayload, ARCHIVE_ID:commonPayload.id}
		delete commonPayload.id;

		const common=await ClientCommon.create(commonPayload);
		delete dp.id;
		dp={...dp, ClientCommonId:common.id}
		const detail=common.SYSTEM_TYPE?
					   await ClientJur.create(dp)
					  :await ClientFiz.create(dp); 

		event.reply('insert-client-from-archive', common.SYSTEM_TYPE?detail.TB_ORGNAME
					:detail.TB_NAME+" "+detail.TB_SURNAME, common.id, common.ARCHIVE_ID);
	}

	return {
		client:{
			create:create,
			list:list,
			remove:remove,
			insertFromArchive:insertFromArchive
		}
	}
}
module.exports=client();