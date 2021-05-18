export default function authReducer(state = {login: false}, action){


    if(action.type === "LOGIN"){
        return {
            ...state,
            login: action.payload
        }
    }
    if(action.type === "LOGOUT"){
        return {
            ...state,
            login: false
           
        }
    }
    return state
        

}