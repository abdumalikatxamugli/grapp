import { OPLATA_ADD, OPLATA_CREATE } from '../constants';
const initialState = [];
const oplataReducer = (oplata = initialState, action) => {
	switch (action.type) {
		case OPLATA_CREATE:
			return action.payload
			break;
		case OPLATA_ADD:
			return [
				...oplata, action.payload
			];
			break;
		default:
			return oplata
	}
}
export default oplataReducer;