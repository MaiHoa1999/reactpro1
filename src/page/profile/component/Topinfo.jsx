import {useContext} from 'react'

import {Context} from './../../../App'

export default function Topinfo(){
    let {login,data} = useContext(Context)
    return(
        <div className="top-info">
        <div className="avatar">
          {/* <span class="text">H</span> */}
          <img src={login.avt}alt="" />
          <div className="camera" />
        </div>
        <div className="name">{data.name}</div>
        <p className="des">Thành viên của team CFD1-OFFLINE</p>
      </div>
    )
}