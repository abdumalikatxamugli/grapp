import anketaReducer from './anketaReducer';
import transportReducer from './transportReducer';
import contractReducer from './contractReducer';
import oplataReducer from './oplataReducer';
import polisReducer from './polisReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  anketaReducer,
  transportReducer,
  contractReducer,
  oplataReducer,
  polisReducer
})