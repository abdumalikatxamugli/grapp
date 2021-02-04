import { CONTRACT_ADD, CONTRACT_CREATE, CONTRACT_REMOVE } from '../constants';
const contractCreate = (payload) => {
	return {
		type: CONTRACT_CREATE,
		payload: payload
	}
}
const contractAdd = (payload) => {
	return {
		type: CONTRACT_ADD,
		payload: payload
	}
}
const contractRemove = (idx) => {
	return {
		type: CONTRACT_REMOVE,
		payload: { idx }
	}
}
export { contractCreate, contractAdd, contractRemove }