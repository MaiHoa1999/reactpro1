import {createStore, combineReducers} from 'redux'
import authReducer from './reducer/authReducer'
 let reducer = combineReducers({
     auth: authReducer
 })

 let store = createStore( reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

 export default store
