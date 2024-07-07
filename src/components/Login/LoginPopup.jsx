import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [current, setCurrent] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{current}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {current === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="your name" required />
          )}

          <input type="text" placeholder="your email" required />
          <input type="password" placeholder="Password" required />
          
        </div>
        <button>{current === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condation">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {current === "Login" ? (
          <p>
            Create a new account? <span onClick={()=>setCurrent("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={()=>setCurrent("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
