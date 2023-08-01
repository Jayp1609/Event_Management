import React, { useState } from "react";
import "./CSS/SignUp.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    contact: "",
  });
  let navigate = useNavigate();
  const host = "https://event-server-4orh.onrender.com";

  const onChangetext = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${host}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        contact: credentials.contact,
        password: credentials.password,
      }),
    });
    const json = await response.json();

    //save the auth token and redirect
    if (json.success === true) {
      localStorage.setItem("token_Event", json.authtoken);
      navigate("/");
      // showalert("Account successfully created!!", "success");
    } else {
      // showalert("Email address already in use", "danger");
    }
  };
  return (
    <div className="signup-main">
      <div className="signup-form">
        <img
          src="https://cdn-icons-png.flaticon.com/128/9068/9068751.png"
          alt="#"
        />
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name*"
            name="name"
            value={credentials.name}
            onChange={(e) => {
              onChangetext(e);
            }}
            minLength={3}
            required
          />
          <br />
          <br />

          <input
            type="email"
            placeholder="email*"
            name="email"
            value={credentials.email}
            onChange={(e) => {
              onChangetext(e);
            }}
            required
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="phone number*"
            name="contact"
            value={credentials.contact}
            onChange={(e) => {
              onChangetext(e);
            }}
            minLength={10}
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
              onChangetext(e);
            }}
            minLength={8}
            required
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="confirm password*"
            name="cpassword"
            value={credentials.cpassword}
            onChange={(e) => {
              onChangetext(e);
            }}
            minLength={credentials.password.length}
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
          <button
            type="submit"
            disabled={
              credentials.password !== credentials.cpassword ||
              credentials.name.length < 3
            }
          >
            SIGN UP
          </button>
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
