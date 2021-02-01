import {ANKETA_CREATE} from '../constants';
const initialState={};
const anketaReducer=(anketa=initialState, action)=>{
	switch(action.type){
		case ANKETA_CREATE:
			return {
				...anketa, ...action.payload	
			};
			break;
		default:
			return anketa
	}
}
export default anketaReducer;