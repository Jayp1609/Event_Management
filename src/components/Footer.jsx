import React from "react";
import "./CSS/Footer.css";
import logo from "../HarmoniLogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="part-1">
        <h1>
          Do you want to step into the
          <br />
          future of Your Upcoming Event
        </h1>
        <button>Request Early Access</button>
      </div>

      <div className="company">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "20px",
            paddingRight: "20px",
            textAlign: "center",
          }}
        >
          <div>
            <img src={logo} alt="#" style={{ width: "40px", height: "20px" }} />
          </div>
          <div style={{ fontSize: "20px", color: "white" }}> HARMONI</div>
          <div style={{ fontSize: "8px", color: "orange" }}>
            EVENT MANAGEMENT
          </div>
          <div>
            <p
              style={{
                color: "white",
                fontSize: "13px",
                padding: "10px 0px 50px 0px",
              }}
            >
              Creterworld K12 182 DK Alknjkcb,
              <br />
              All Rights Reserved
            </p>
          </div>
        </div>

        <div>
          <ul>
            <li>
              <b>Links</b>
            </li>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <b>Company</b>
            </li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div style={{ color: "white", paddingTop: "40px", textAlign: "center" }}>
        <p>@2021 GPT-3. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
