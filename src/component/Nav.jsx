import { NavLink } from "react-router-dom";
import useDeLayLink from '../hook/useDelayLink'
import ReactDOM from 'react-dom';
import $ from "jquery"

export function Nav(){
  function closeMenu(){
    document.body.classList.remove("menu-is-show");
    $(".loading").css({"transform":"scale(22)"})

  }
 
  let deLayLink = useDeLayLink()

    return ReactDOM.createPortal(

        <>
        <nav className="nav">
          <ul>
            {/* <li className="li_login">
              <NavLink to="/dang-nhap">Đăng nhập</NavLink>
              <NavLink to="/register">Đăng ký</NavLink>
            </li> */}
            <li>
              <NavLink exact to="/" onClick={(e)=>{deLayLink(e);closeMenu()}}>Trang chủ</NavLink>
            </li>
            <li>
              <NavLink to="/team" onClick={(e)=>{deLayLink(e);closeMenu()}}>CFD Team</NavLink>
            </li>
            <li>
              <NavLink to="/course" onClick={(e)=>{deLayLink(e);closeMenu()}}>Khóa Học</NavLink>
            </li>
            <li>
              <NavLink to="/project" onClick={(e)=>{deLayLink(e);closeMenu()}}>Dự Án</NavLink>
            </li>
            <li>
              <NavLink to="/hoptac" onClick={(e)=>{deLayLink(e);closeMenu()}}>Liên hệ</NavLink>
            </li>
          </ul>
        </nav>
        <div onClick={closeMenu} className="overlay_nav" />
     
      </>,
 document.body
    )
}
