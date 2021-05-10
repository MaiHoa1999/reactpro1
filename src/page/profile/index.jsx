import { useState } from "react"
import { Switch ,Route, useRouteMatch} from "react-router"
import { NavLink } from "react-router-dom"
import Tab1 from "./component/tab1"
import Tab2 from "./component/tab2"
import Tab3 from "./component/tab3"
import Tab4 from "./component/tab4"
import Tab5 from "./component/tab5"

export default function Profile(){
    // let [tabActive,setTabActive] = useState(0)
    // function setTab(e,index){
    //     e.preventDefault();
    //     setTabActive(index)

    // }
    let{ path} = useRouteMatch()


    return( <main className="profile" id="main">
    <section>
      <div className="top-info">
        <div className="avatar">
          {/* <span class="text">H</span> */}
          <img src="img/avatar-lg.png" alt="" />
          <div className="camera" />
        </div>
        <div className="name">trần nghĩa</div>
        <p className="des">Thành viên của team CFD1-OFFLINE</p>
      </div>
      <div className="container">
        <div className="tab">
          <div className="tab-title">
            <NavLink exact to={`${path}`}>Thông tin tài khoản</NavLink>
            <NavLink  to={`${path}/khoa-hoc-cua-ban`}>Khóa học của bạn</NavLink>
            <NavLink  to={`${path}/du-an`}>Dự án đã làm</NavLink>
            <NavLink   to={`${path}/lich-su`}>Lịch sử thanh toán</NavLink>
            <NavLink   to={`${path}/quan-ly-coin`}>Quản lý COIN của tôi</NavLink>
            {/* <a href="#" className={tabActive===4? 'active':''} onClick={(e)=>setTab(e,4)}>Quản lý COIN của tôi</a> */}
          </div>
          <div className="tab-content">
         {/* { tabActive ===0 ? <Tab1/>:
            tabActive ===1 ? <Tab2/>:
            tabActive ===2 ? <Tab3/>:
            tabActive ===3 ? <Tab4/>:
          <Tab5/>
         
         }
            
             */}
             <Switch>
               <Route exact path={`${path}`} component={Tab1}></Route>
               <Route path={`${path}/khoa-hoc-cua-ban`} component={Tab2}></Route>
               <Route path={`${path}/du-an`} component={Tab3}></Route>
               <Route path={`${path}/lich-su`} component={Tab4}></Route>
               <Route path={`${path}/quan-ly-coin`} component={Tab5}></Route>
             </Switch>
          </div>
        </div>
      </div>
    </section>
  </main>)
}