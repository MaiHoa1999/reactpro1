import{endpoint} from './config'
 const Auth={
    login(data){
        return  fetch(`${endpoint}/elearning/v4/login`,{
            method: "POST",
            body:JSON.stringify(data),
            headers:{
              'Content-Type':'application/json'
            }
          }).then(res => res.json())

    },
    register(){},
    update(){}
}
export default Auth