import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducer/reducer';

let store = createStore(reducer,applyMiddleware(thunk,logger));

window._store=store;
export default store;