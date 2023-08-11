import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/UserProfile.css";
import { ContextState } from "../context/EventContext";

const UserProfile = () => {
  const { host } = ContextState();

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    contact: "",
  });

  //fetch user information
  const getuser = async () => {
    try {
      const response = await fetch(`${host}/auth/getuser`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token_Event"),
        },
      });
      const json = await response.json();
      console.log(json);
      setCredentials(json);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getuser();
    // eslint-disable-next-line
  }, []);

  const handleLogOut = (e) => {
    e.preventDefault();
    // showalert("You are logged out!!!!", "primary");
    localStorage.removeItem("token_Event");
    navigate("/");
    window.location.reload(false);
  };
  return (
    <div className="user-main">
      <div className="user-form">
        <form>
          <h2>Profile</h2>
          <label htmlFor="name">
            <b>Name : </b>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={credentials.name}
            disabled
          />
          <br />
          <br />
          <label htmlFor="email">
            <b>Email : </b>
          </label>
          <input type="email" name="email" value={credentials.email} disabled />
          <br />
          <br />
          <label htmlFor="contact">
            <b>Phone : </b>
          </label>
          <input
            type="text"
            name="contact"
            value={credentials.contact}
            disabled
          />
          <br />
          <br />
          <br />
          <button
            onClick={(e) => {
              handleLogOut(e);
            }}
          >
            Log Out
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
