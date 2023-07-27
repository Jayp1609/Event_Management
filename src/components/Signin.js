import React from "react";
import "./CSS/Signin.css";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="signin-main">
      <div className="signin-form">
        <img
          src="https://cdn-icons-png.flaticon.com/128/9068/9068751.png"
          alt="#"
        />
        <h2>Sign in</h2>
        <form>
          <input type="email" placeholder="email*" name="email" />
          <br />
          <br />
          <input type="password" placeholder="password*" name="psword" />
          <br />
          <br />
          <div
            style={{
              display: "flex",
              paddingLeft: "30px",
            }}
          >
            <input
              type="checkbox"
              name="remember"
              id="remember"
              style={{ width: "15px", textAlign: "left" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "10px",
              }}
            >
              Remember Me
            </div>
          </div>

          <br />
          <br />
          <br />
          <button>SIGN IN</button>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
              fontSize: "13px",
              paddingLeft: "39px",
            }}
          >
            <div>Forgot password?</div>
            <div>
              Don't have an account?<Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
