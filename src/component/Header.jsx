import { Link } from "react-router-dom";
import useDeLayLink from "../hook/useDelayLink";
import $ from "jquery";
import { useContext } from "react";
import { Context } from "../App.js";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../redux/action/authAction";
export function Header() {
  const { login } = useSelector((state) => state.auth);

  function menuToggle() {
    document.body.classList.toggle("menu-is-show");
  }
  let deLayLink = useDeLayLink();
  function loadding(e) {
    deLayLink(e);
    $(".loading").css({ transform: "scale(22)" });
  }
  function showLogin() {
    $(".popup-login").css({ display: "flex  " });
  }
  const dispatch = useDispatch();
  function Logout() {
    // dispatch({
    //   type: "LOGOUT",

    // });
    dispatch(logoutAction());
  }

  return (
    <header id="header">
      <div className="wrap">
        <div className="menu-hambeger" onClick={menuToggle}>
          <div className="button">
            <span />
            <span />
            <span />
          </div>
          <span className="text">menu</span>
        </div>

        <Link to="/" className="logo" onClick={(e) => loadding(e)}>
          <img src="img/logo.svg" alt="" />
          <h1>CFD</h1>
        </Link>
        <div className="right">
          {login ? (
            <div className="have-login">
              <div className="account">
                <Link
                  to="/profile"
                  onClick={(e) => loadding(e)}
                  className="info"
                >
                  <div className="name">{login.name}</div>
                  <div className="avatar">
                    <img src={login.avatar} alt="" />
                  </div>
                </Link>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <Link to="/course" onClick={(e) => loadding(e)}>
                  Khóa Link học của tôi
                </Link>
                <Link to="/profile" onClick={(e) => loadding(e)}>
                  Thông tin tài khoản
                </Link>
                <Link to="#" onClick={Logout}>
                  Đăng xuất
                </Link>
              </div>
            </div>
          ) : (
            <div class="not-login bg-none">
              <a href="#" class="btn-register" onClick={showLogin}>
                Đăng nhập
              </a>
              <a href="login.html" class="btn main btn-open-login">
                Đăng ký
              </a>
            </div>
          )}
          {/* <div className="have-login">
                <div className="account">
                    <Link to="/profile" onClick={(e)=>loadding(e)} className="info">
                    <div className="name">{value.login.name}</div>
                    <div className="avatar">
                        <img src={value.login.avt} alt="" />
                    </div>
                    </Link>
                </div>
                <div className="hamberger">
                </div>
                <div className="sub">
                    <Link to="/course" onClick={(e)=>loadding(e)} >Khóa Link học của tôi</Link>
                    <Link to="/profile" onClick={(e)=>loadding(e)} >Thông tin tài khoản</Link>
                    <Link to="#">Đăng xuất</Link>
                </div>
                </div> */}
          {/* <div class="not-login bg-none">
                        <a href="#" class="btn-register" onClick={showLogin}>Đăng nhập</a>
                        <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                    </div> */}
        </div>
      </div>
    </header>
  );
}
