const ClientCommon=require('../models/clientCommon');
const ClientJur=require('../models/clientJur');
const ClientFiz=require('../models/clientFiz');

const client=()=>{
	const create=async(event, {c, d, type})=>{
		console.log(c);
		const common=await ClientCommon.create({...c, SYSTEM_TYPE:type});
		const detail=type?await ClientJur.create(d):await ClientFiz.create(d);
	
		event.reply('client-saved', {
			name:type?detail.TB_ORGNAME:detail.TB_NAME+" "+detail.TB_SURNAME,
			id:common.id
		});
	}
	return {
		client:{
			create:create
		}
	}
}
module.exports=client();