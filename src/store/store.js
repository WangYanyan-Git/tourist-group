import {createStore,applyMiddleware,compose} from 'redux';
import reducers from './reducer/reducers';
import logger  from 'redux-logger';//打印日志
import thunk from 'redux-thunk';//遇到函数，thunk帮助函数执行

//使用中间件跨域派发函数

// 创建一个中间件集合
//  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

//  const store = createStore(reducers, composeEnhancers(
//     applyMiddleware(logger,thunk)
//   ));
  let store = createStore(reducers,applyMiddleware(thunk));

window._store = store;
export default store;