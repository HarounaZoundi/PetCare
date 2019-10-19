import {combineReducers} from 'redux'
import {ownersReducer}from './ownerReducer'
import {sittersReducer} from './sitterReducer'

const combinedReducer= combineReducers({
  owners:ownersReducer,
  sitters:sittersReducer
  })

export default combinedReducer
