// https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/
import React from "react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons";
import "./LoginRegister.scss";

const LoginRegister = () => {
  return (
    <>
      <div className="container">
        <div className="form-container register-container">
          <form>
            <h1>Create Account</h1>
            <div class="social-container">
              <li className="social">
                <FaGithub />
              </li>
              <li className="social">
                <FaFacebook />
              </li>
              <li className="social">
                <FaGoogle />
              </li>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
        <div className="form-container login-container">
          <form>
            <h1>Create Account</h1>
            <div class="social-container">
              <li className="social">
                <FaGithub />
              </li>
              <li className="social">
                <FaFacebook />
              </li>
              <li className="social">
                <FaGoogle />
              </li>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <h4>Forgot your password?</h4>
            <button>Login</button>
          </form>
        </div>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>Please login with your personal info</p>
            <button className="btn login">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegister;
