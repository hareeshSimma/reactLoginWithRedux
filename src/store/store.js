import {createStore,combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import userReducer from '../reducers/userReducer';

const rootReducer=combineReducers({userReducer});
const store=createStore(rootReducer,applyMiddleware(logger));
export default store;
