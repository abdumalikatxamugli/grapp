import anketaReducer from './anketaReducer';
import transportReducer from './transportReducer';
import contractReducer from './contractReducer';
import oplataReducer from './oplataReducer';
import polisReducer from './polisReducer';
import transhReducer from './transhReducer';
import authReducer from './authReducer';
import {combineReducers} from 'redux';


export default combineReducers({
  anketaReducer,
  transportReducer,
  contractReducer,
  oplataReducer,
  polisReducer,
  transhReducer,
  authReducer
})