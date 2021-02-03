import { CONTRACT_CREATE, CONTRACT_ADD } from '../constants';
const initialState = [];
const contractReducer = (contract = initialState, action) => {
	switch (action.type) {
		case CONTRACT_CREATE:
			return action.payload
		case CONTRACT_ADD:
			return [
				...contract, action.payload
			];
		default:
			return contract
	}
}
export default contractReducer;