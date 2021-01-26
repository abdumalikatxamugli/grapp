import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import logger from 'redux-logger';

const store = createStore(reducers, applyMiddleware(logger));
export default store;