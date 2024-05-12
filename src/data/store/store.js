/* import{createStore,applyMiddleware} from 'redux'
import { reducer } from './index'
import thunk from 'redux-thunk';
const store = createStore(
    reducer,
   applyMiddleware(thunk)
  
)

export default store */

import {combineReducers,compose,createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise';
import {thunk} from 'redux-thunk';
import { reducer } from './index'

const middle = applyMiddleware(thunk,promise,logger)
const store=createStore(reducer,compose(middle));

export default store;