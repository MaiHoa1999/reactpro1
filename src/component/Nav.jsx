import { Link } from "react-router-dom";
import ReactDOM from 'react-dom'

export function Nav(){
    return ReactDOM.createPortal(

        <>
        <nav className="nav">
          <ul>
            <li className="li_login">
              <Link to="/dang-nhap">Đăng nhập</Link>
              <Link to="/register">Đăng ký</Link>
            </li>
            <li className="active">
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/team">CFD Team</Link>
            </li>
            <li>
              <Link to="/course">Khóa Học</Link>
            </li>
            <li>
              <Link to="/project">Dự Án</Link>
            </li>
            <li>
              <Link to="/hoptac">Liên hệ</Link>
            </li>
          </ul>
        </nav>
        <div className="overlay_nav" />
     
      </>,
 document.body
    )
}
