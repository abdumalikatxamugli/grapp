import {ANKETA_CREATE} from '../constants';
const anketaCreate =(payload)=>{
	return {
  		type: ANKETA_CREATE,
  		payload: payload
	}
}
export {anketaCreate}