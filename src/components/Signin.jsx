import React, { useState } from "react";
import "./CSS/Signin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const host = "https://filthy-cyan-slacks.cyclic.app";

  const HandleonChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const SubmitLogin = async (e) => {
    e.preventDefault(); //used to prevent the reloading of page
    // showalert("Verifying your account", "success");

    const response = await fetch(`${host}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();

    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token_Event", json.authtoken);
      navigate("/");
      window.location.reload(false);

      //showalert("Successfully Logged in !!", "success");
    } else {
      //showalert("Invalid Email or Password", "danger");
    }
  };
  return (
    <div className="signin-main">
      <div className="signin-quote">
        <h1>
          <b>
            Kindly log in to
            <br /> reserve your event spot!!
          </b>
        </h1>
      </div>

      <div className="signin-form">
        <img
          src="https://cdn-icons-png.flaticon.com/128/9068/9068751.png"
          alt="#"
        />
        <h2>Sign in</h2>
        <form
          onSubmit={(e) => {
            SubmitLogin(e);
          }}
        >
          <input
            type="email"
            placeholder="email*"
            name="email"
            value={credentials.email}
            onChange={(e) => {
              HandleonChange(e);
            }}
            required
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="password*"
            name="password"
            value={credentials.password}
            onChange={(e) => {
              HandleonChange(e);
            }}
            required
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
          <button type="Submit">SIGN IN</button>
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
