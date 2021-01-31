import {POLIS_ADD, POLIS_CREATE} from '../constants';
const polisCreate =(payload)=>{
	return {
  		type: POLIS_CREATE,
  		payload: payload
	}
}
const polisAdd =(payload)=>{
	return {
  		type: POLIS_ADD,
  		payload: payload
	}
}
export {polisAdd,polisCreate}