import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";
import logo from "../HarmoniLogo.png";
import menu from "../menu.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [display, setDisplay] = useState("none");
  const Navigate = useNavigate();

  function displayNavbar() {
    if (display === "block") {
      setDisplay("none");
    } else {
      setDisplay("block");
    }
  }
  return (
    <>
      <div className="main">
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
              Navigate("/");
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
                  to="about"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="event"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  EVENTS
                </Link>
              </li>
              <li>
                <Link
                  to="gallery"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  GALLERY
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="signin-but">
          <Link to="/signin">
            <button>SignIn</button>
          </Link>

          <img
            src={menu}
            alt="#"
            onClick={() => {
              displayNavbar();
            }}
          ></img>
        </div>
      </div>
      <div className="vertical-navbar" style={{ display: `${display}` }}>
        <div className="vertical-navlinks">
          <ul
            onClick={() => {
              displayNavbar();
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
              <Link to="/signin">
                <button>SignIn</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
