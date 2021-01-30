import anketaReducer from './anketaReducer';
import transportReducer from './transportReducer';
import contractReducer from './contractReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  anketaReducer,
  transportReducer,
  contractReducer
})