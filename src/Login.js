import React from "react";
import "./CSS/Login.css";
import { Link } from "react-router-dom";

function Login() {
  const loginSign = e => {
    e.preventDefault();
  }
  const loginReg = e => {
    e.preventDefault();
  }
  return (
    
    <div className="login">
      <Link to="/">
        <img
          className="login_Logo"
          src={process.env.PUBLIC_URL + "/images/planet3-1.png"}
          alt="header logo"
        />
      </Link>

      <div className="login_main">
        <h2> 로그인 </h2>
        <form className="login-form">
          <h6> 이메일 </h6>
          <input
            type="email"
            className="-login_id"
            placeholder="Enter your e-mail"
          />
          <h6> 비밀번호 </h6>
          <input
            type="password"
            className="login_pw"
            placeholder="Enter your password"
          />
          <button onClick={loginSign} className="login_sign"> 로그인 </button>
        </form>
        <button onClick={loginReg} className="login_reg"> 계정생성 </button>
      </div>
      
    </div>
  );
}

export default Login;
