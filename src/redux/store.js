import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {userReducer} from './user/UserReducer'

export const store = createStore(userReducer, applyMiddleware(thunk))