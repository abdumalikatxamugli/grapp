import {CONTRACT_ADD, CONTRACT_CREATE} from '../constants';
const contractCreate =(payload)=>{
	return {
  		type: CONTRACT_CREATE,
  		payload: payload
	}
}
const contractAdd =(payload)=>{
	return {
  		type: CONTRACT_ADD,
  		payload: payload
	}
}
export {contractCreate,contractAdd}