import { TRANSPORT_CREATE, TRANSPORT_REMOVE, VODITEL_ADD, VODITEL_REMOVE } from '../constants';
const initialState = [];
const transportReducer = (transport = initialState, action) => {
    switch (action.type) {
        case TRANSPORT_CREATE:
            return [
                ...transport, action.payload
            ];
        case VODITEL_ADD:
            const oldTransports = [...transport]
            oldTransports[action.payload.idx] = { ...oldTransports[action.payload.idx], voditels: [...oldTransports[action.payload.idx].voditels, { id: action.payload.id, TB_NAME: action.payload.TB_NAME }] }
            return [
                ...oldTransports
            ];
        case VODITEL_REMOVE:
            const newTransports = [...transport]
            var newVoditels = [...transport[action.payload.idx].voditels];
            newVoditels.splice(action.payload.vIdx, 1);
            newTransports[action.payload.idx] = { ...newTransports[action.payload.idx], voditels: [...newVoditels] }
            return [...newTransports]
        case TRANSPORT_REMOVE:
            var afterDeleteTransports = [...transport]; // make a separate copy of the array
            const idx = afterDeleteTransports.findIndex(item => item.id === action.payload.idx)
            if (idx != -1) {
                afterDeleteTransports.splice(idx, 1);
                return [...afterDeleteTransports]
            }
        default:
            return transport
    }
}
export default transportReducer;