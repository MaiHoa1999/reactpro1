import {createStore, combineReducers} from 'redux'
import authReducer from './reducer/authReducer'
 let reducer = combineReducers({
     auth: authReducer
 })

 let store = createStore( reducer)

 export default store
