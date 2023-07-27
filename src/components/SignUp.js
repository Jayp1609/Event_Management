import React from "react";
import "./CSS/SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup-main">
      <div className="signup-form">
        <img
          src="https://cdn-icons-png.flaticon.com/128/9068/9068751.png"
          alt="#"
        />
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="name*" name="name" />
          <br />
          <br />

          <input type="email" placeholder="email*" name="email" />
          <br />
          <br />
          <input type="number" placeholder="phone number*" name="phnumber" />
          <br />
          <br />
          <input type="password" placeholder="password*" name="psword" />
          <br />
          <br />
          <input
            type="password"
            placeholder="confirm password*"
            name="cpsword"
          />
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
          <button>SIGN UP</button>
          <br />
          <br />
          <div
            style={{
              width: "80%",
              fontSize: "13px",
              paddingLeft: "39px",
            }}
          >
            <div>
              Don't have an account?<Link to="/signin">Sign In</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
