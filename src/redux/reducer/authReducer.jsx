
import{ LOGIN, LOGOUT} from './../type'
let initState = {
    login: JSON.parse(localStorage.getItem('login'))
}
export default function authReducer(state = initState, action){

    if(action.type === LOGIN){
        localStorage.setItem('login', JSON.stringify(action.payload))
        return {
            ...state,
            login: action.payload
        }
    }
    if(action.type === LOGOUT){
        localStorage.setItem('login',false)
        return {
            ...state,
            login: false
           
        }
    }
    return state
        

}