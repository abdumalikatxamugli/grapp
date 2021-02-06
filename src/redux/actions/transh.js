import {TRANSH_CREATE} from '../constants';
const transhesUpdate=(payload)=>{
	
	return {
  		type: TRANSH_CREATE,
  		payload: payload
	}
}
export {transhesUpdate}