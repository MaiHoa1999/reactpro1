
import useFormValidate from '../hook/useFormValidate'
import ReactDOM from 'react-dom';
import $ from "jquery"
import React, {useContext, useState} from 'react'
import {useDispatch} from 'react-redux'
import {Context} from '../App.js'
import Auth from '../service/auth';
import { loginAction } from '../redux/action/authAction';
// import useDeLayLink from '../hook/useDelayLink'
export function Login(){
  let{loginError, setLoginError} = useState(null)
  let  dispatch = useDispatch()
  
  let{handlelogin} = useContext(Context)

  function hideLogin(){
    $('.popup-login').hide()
  }

let {error, inputChange, check,form}= useFormValidate({
   
    username:'',
    password: '',
   

},{
    rule:{
        username:{
        required:true,
        pattern: "email"
    } ,
    password:{
        required:true,
        
        min: 6,
        max: 32
    }
}
})
async function onSubmit(){
    let errorObj = check()
    // setError(errorObj);
    // console.log(`error`, error)
    if(Object.keys(errorObj).length === 0){
      let res = await Auth.login(form)
      if(res.data){
        // dispatch({
        //   type: 'LOGIN',
        //   payload: res.data
          
        // })
        dispatch(loginAction(res.data))
        
      }else if( res.error){
        setLoginError( res.error)
      }
      //  handlelogin(form)
     
      // if(res.success){
      //   hideLogin()
      // }else if(error){
      //   setLoginError(res.error)
      // }
     
    //  if(res){
    //    alert(res)
    //  }else{
    //   hideLogin()
    //  }
        // console.log(form)
        // alert("thanh cong");
    }
    
}



 
 
    return ReactDOM.createPortal(

        <>
          <div className="popup-form popup-login" style={{display: 'none'}} >
          <div className="wrap">
            {/* login-form */}
            <div className="ct_login" style={{display: 'block'}}>
              <h2 className="title">Đăng nhập</h2>
              {loginError && <p className="txt-error">{loginError}</p>}
              <input type="text" value={form.username} name="username" onChange={inputChange} placeholder="username / Số điện thoại" />
              {
                error.username && <p className="txt-error">{error.username}</p>
            }
              <input type="password" value={form.password} name="password" onChange={inputChange} placeholder="Mật khẩu" />
              {
                error.password && <p className="txt-error">{error.password}</p>
            }
              <div className="remember">
                <label className="btn-remember">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <p>Nhớ mật khẩu</p>
                </label>
                <a href="#" className="forget">Quên mật khẩu?</a>
              </div>
              <div className="btn rect main btn-login" onClick={onSubmit}>đăng nhập</div>
              <div className="text-register">
                <strong>hoặc đăng ký bằng</strong>
              </div>
              <div>
                <div className="btn btn-icon rect white btn-google">
                  <img src="img/google.svg" alt="" />
                  Google
                </div>
              </div>
              <div className="close">
                <img src="img/close-icon.png" alt="" />
              </div>
            </div>
            {/* username form */}
            <div className="ct_username">
              <h2 className="title">Đặt lại mật khẩu</h2>
              <input type="text" placeholder="username" />
              <div className="btn rect main btn-next">Tiếp theo</div>
              <div className="back" />
              <div className="close" onClick={hideLogin}>
                <img src="img/close-icon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        
      </>,
 document.getElementById("root2")
    )
}
