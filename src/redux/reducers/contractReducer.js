import { CONTRACT_CREATE, CONTRACT_ADD, CONTRACT_REMOVE } from '../constants';
const initialState = [];
const contractReducer = (contract = initialState, action) => {
	switch (action.type) {
		case CONTRACT_CREATE:
			return action.payload
		case CONTRACT_ADD:
			return [
				...contract, action.payload
			];
		case CONTRACT_REMOVE:
			var afterDeleteContracts = [...contract]; // make a separate copy of the array
			const idx = afterDeleteContracts.findIndex(item => item.id === action.payload.idx)
			if (idx != -1) {
				afterDeleteContracts.splice(idx, 1);
				return [...afterDeleteContracts]
			}
		default:
			return contract
	}
}
export default contractReducer;