import { applyMiddleware, createStore } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import gridReducer from '../lib/gridReducer.js'

let mw = [promise(), thunk]
const middleware = applyMiddleware(...mw)

const reducer = combineReducers({
  grid: gridReducer
})

var store = createStore(reducer, middleware)

export default store
