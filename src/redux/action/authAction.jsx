import Auth from "../../service/auth";
import { LOGIN ,LOGOUT,ERROR,UPDATE} from "../type";

export function loginAction(data){
    return{
        type: LOGIN,
        payload: data

    }
}
export function logoutAction(){
    return{
        type: LOGOUT,
    }
}

export function errorAction(){
    return{
        type: ERROR,
    }
}
export function updateAction(data){
    return async (dispatch)=>{
        let res = await Auth.update(data)
        if(res.data){
            dispatch({
                type: UPDATE,
                payload: res.data
            })
        }else if(res.error){
            dispatch({
                type: ERROR,
                payload: res.error
            })
        }
    }
}