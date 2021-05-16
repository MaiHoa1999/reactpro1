
import useFormValidate from '../hook/useFormValidate'
import ReactDOM from 'react-dom';
import $ from "jquery"
import React, {useContext, useState} from 'react'
import {Context} from '../App.js'
// import useDeLayLink from '../hook/useDelayLink'
export function Login(){
  let{loginError, setLoginError} = useState(null)
  let{handlelogin} = useContext(Context)

  function hideLogin(){
    $('.popup-login').hide()
  }
let {error, inputChange, check,form}= useFormValidate({
   
    email:'',
    pass: '',
   

},{
    rule:{
        email:{
        required:true,
        pattern: "email"
    } ,
    pass:{
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
      let res= await handlelogin(form.email, form.pass)
     
      if(res.success){
        hideLogin()
      }else if(error){
        setLoginError(res.error)
      }
     
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
              <input type="text" value={form.email} name="email" onChange={inputChange} placeholder="Email / Số điện thoại" />
              {
                error.email && <p className="txt-error">{error.email}</p>
            }
              <input type="password" value={form.pass} name="pass" onChange={inputChange} placeholder="Mật khẩu" />
              {
                error.pass && <p className="txt-error">{error.pass}</p>
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
            {/* email form */}
            <div className="ct_email">
              <h2 className="title">Đặt lại mật khẩu</h2>
              <input type="text" placeholder="Email" />
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
