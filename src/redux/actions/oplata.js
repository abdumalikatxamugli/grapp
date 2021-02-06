import {OPLATA_ADD, OPLATA_CREATE, OPLATA_DEL} from '../constants';
const oplataCreate =(payload)=>{
	return {
  		type: OPLATA_CREATE,
  		payload: payload
	}
}
const oplataAdd =(payload)=>{
	return {
  		type: OPLATA_ADD,
  		payload: payload
	}
}
const deletePayment =(payload)=>{
	return {
  		type: OPLATA_DEL,
  		payload: payload
	}
}
export {oplataAdd,oplataCreate, deletePayment}