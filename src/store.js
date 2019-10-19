import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import combinedReducer from './Reducers/index'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

export default createStore(
  combinedReducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware.withExtraArgument(),
    loggingMiddleware
  ))
)
