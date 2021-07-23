import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import "./LoginRegisterScreen.scss";

const LoginRegisterScreen = () => {
  const [isActive, setActive] = useState(false);

  // Overlay Animation
  const registerAni = () => {
    setActive(true);
  };
  const loginAni = () => {
    setActive(false);
  };
  return (
    <>
      <div className="main">
        <div
          className={isActive ? "container right-pannel-active" : "container"}
        >
          <div className="form-container register-container">
            <form>
              <h1>Create Account</h1>
              <div className="social-container">
                <GoMarkGithub className="social github" />
                <FaFacebook className="social facebook" />
                <FcGoogle className="social" />
              </div>
              <span>or use your email for registration</span>
              <input
                type="text"
                required
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input type="email" required placeholder="Email" />
              <input type="password" required placeholder="Password" />
              <button>Register</button>
            </form>
          </div>
          <div className="form-container login-container">
            <form>
              <h1>login</h1>
              <div className="social-container">
                <GoMarkGithub className="social github" />
                <FaFacebook className="social facebook" />
                <FcGoogle className="social" />
              </div>
              <span>or use your account</span>
              <input type="email" required placeholder="Email" />
              <input type="password" required placeholder="Password" />
              <a>Forgot your password?</a>
              <button>Login</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>Please login with your personal info</p>
                <button onClick={loginAni} className="ghost-btn login">
                  Login
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>CREATE ACCOUNT</h1>
                <p>Be the part of our community, join us today</p>
                <button onClick={registerAni} className="ghost-btn register">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegisterScreen;
