import {OPLATA_ADD, OPLATA_CREATE} from '../constants';
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
export {oplataAdd,oplataCreate}