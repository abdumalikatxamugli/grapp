import { TRANSPORT_CREATE } from '../constants';
const initialState = [];
const transportReducer = (transport = initialState, action) => {
    switch (action.type) {
        case TRANSPORT_CREATE:
            return [
                ...transport, action.payload
            ];
            break;
        default:
            return transport
    }
}
export default transportReducer;