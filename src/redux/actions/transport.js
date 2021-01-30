import {TRANSPORT_CREATE} from '../constants';
const transportCreate =(payload)=>{
	return {
  		type: TRANSPORT_CREATE,
  		payload: payload
	}
}
export {transportCreate}