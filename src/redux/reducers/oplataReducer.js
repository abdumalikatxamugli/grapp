import { OPLATA_ADD, OPLATA_CREATE, OPLATA_DEL} from '../constants';
const initialState = [];
const oplataReducer = (oplata = initialState, action) => {
	switch (action.type) {
		case OPLATA_CREATE:
			return action.payload
		case OPLATA_ADD:
			return [
				...oplata, action.payload
			];
		case OPLATA_DEL:
			return [
				...oplata.filter((item, index)=>index!==action.payload)
			];
		default:
			return oplata
	}
}
export default oplataReducer;