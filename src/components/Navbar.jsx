import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";
import logo from "../HarmoniLogo.png";
import menu from "../menu.png";
import { useNavigate } from "react-router-dom";
import logout from "./Images/logout.png";

const Navbar = () => {
  const [display, setDisplay] = useState("none");
  const [profiledisplay, setProfiledisplay] = useState("none");
  const navigate = useNavigate();

  function display_Vertical_Navbar() {
    if (display === "block") {
      setDisplay("none");
    } else {
      setDisplay("block");
    }
  }
  function display_profile() {
    if (profiledisplay === "block") {
      setProfiledisplay("none");
    } else {
      setProfiledisplay("block");
    }
  }
  const handleLogOut = (e) => {
    e.preventDefault();
    // showalert("You are logged out!!!!", "primary");
    localStorage.removeItem("token_Event");
    navigate("/");
    window.location.reload(false);
  };
  return (
    <>
      <div className="main-navbar">
        <div className="symbol-links">
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              paddingLeft: "80px",
              justifyContent: "center",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <div>
              <img
                src={logo}
                alt="#"
                style={{ width: "40px", height: "20px" }}
              />
            </div>
            <div style={{ fontSize: "20px", color: "white" }}> HARMONI</div>
            <div style={{ fontSize: "8px", color: "orange" }}>
              EVENT MANAGEMENT
            </div>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="/event"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  EVENTS
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  GALLERY
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="signin-but">
          {!localStorage.getItem("token_Event") ? (
            <Link to="/signin">
              <button>SignIn</button>
            </Link>
          ) : (
            <>
              {/* <button>Profile</button> */}
              <div className="profile-dropdown">
                <button
                  className="profile-dropbtn"
                  onClick={() => {
                    display_profile();
                  }}
                >
                  Profile
                </button>
                <div
                  className="dropdown-content"
                  style={{ display: `${profiledisplay}` }}
                >
                  <div className="flex">
                    <div className="link-style">
                      <Link
                        to="/userprofile"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontSize: "15px",
                          paddingTop: "20px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                        onClick={() => {
                          display_profile();
                        }}
                      >
                        My Profile
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/userbooking"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontSize: "15px",
                          paddingTop: "20px",
                          display: "flex",
                          justifyContent: "center",
                          paddingBottom: "20px",
                        }}
                        onClick={() => {
                          display_profile();
                        }}
                      >
                        My Booking
                      </Link>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingBottom: "20px",
                        color: "red",
                      }}
                    >
                      <div
                        onClick={(e) => {
                          display_profile();
                          handleLogOut(e);
                        }}
                      >
                        LogOut
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          <img
            src={menu}
            alt="#"
            onClick={() => {
              display_Vertical_Navbar();
            }}
          ></img>
        </div>
      </div>
      <div className="vertical-navbar" style={{ display: `${display}` }}>
        <div className="vertical-navlinks">
          <ul
            onClick={() => {
              display_Vertical_Navbar();
            }}
          >
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/event"
                style={{ textDecoration: "none", color: "white" }}
              >
                EVENTS
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                style={{ textDecoration: "none", color: "white" }}
              >
                GALLERY
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                CONTACT
              </Link>
            </li>
            <li>
              {!localStorage.getItem("token_Event") ? (
                <Link to="/signin">
                  <button>SignIn</button>
                </Link>
              ) : (
                <Link to="/userprofile">{<button>Profile</button>}</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
