import { TRANSH_CREATE } from '../constants';
const initialState = [];
const transhReducer = (transhes = initialState, action) => {
	console.log(transhes)
    switch (action.type) {
        case TRANSH_CREATE:
            return [
                 ...action.payload
            ];
            break;
        default:
            return transhes
    }
}
export default transhReducer;