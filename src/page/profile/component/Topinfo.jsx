import {useContext} from 'react'

import {Context} from './../../../App'
import { useSelector } from "react-redux";


export default function Topinfo(){
    // let {login,data} = useContext(Context)
    const { login } = useSelector((store) => store.auth);

    return(
        <div className="top-info">
        <div className="avatar">
          {/* <span class="text">H</span> */}
          <img src={login.avatar}alt="" />
          <div className="camera" />
        </div>
        <div className="name">{login.name}</div>
        <p className="des">Thành viên của team CFD1-OFFLINE</p>
      </div>
    )
}