import { TRANSPORT_CREATE, TRANSPORT_REMOVE, VODITEL_ADD, VODITEL_REMOVE } from '../constants';
const transportCreate = (payload) => {
	return {
		type: TRANSPORT_CREATE,
		payload: payload
	}
}
const transportRemove = (idx) => {
	return {
		type: TRANSPORT_REMOVE,
		payload: { idx }
	}
}
const voditelAdd = (idx, id, TB_NAME) => {
	return {
		type: VODITEL_ADD,
		payload: { idx, id, TB_NAME }
	}
}
const voditelRemove = (idx, vIdx) => {
	return {
		type: VODITEL_REMOVE,
		payload: { idx, vIdx }
	}
}
export { transportCreate, voditelAdd, voditelRemove,transportRemove }