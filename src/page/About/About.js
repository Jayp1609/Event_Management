import React from "react";
import "./About.css";
import logo from "../../HarmoniLogo.png";

const About = () => {
  return (
    <div className="main-about">
      <div className="back-image">
        <img
          src="https://images.pexels.com/photos/933183/pexels-photo-933183.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt="#"
        />
      </div>
      <div className="image-text">
        <div>
          <p style={{ letterSpacing: "10px", lineHeight: "30px" }}>
            <b>
              ALL YOU NEED TO
              <br />
              KNOW
            </b>
          </p>
          <div style={{ fontSize: "35px", color: "rgb(255, 183, 0)" }}>
            <b>ABOUT</b>
          </div>
          <div style={{ fontSize: "35px", paddingTop: "5px" }}>
            <b>HARMONI</b>
          </div>
          <div style={{ paddingTop: "5px" }}>
            <b>Home | About Us</b>
          </div>
        </div>
      </div>

      {/* .........Next Part........ */}
      <div className="event-back2">
        <div className="left">
          <div>We are harmoni</div>
          <h1>
            No.1 Events <br />
            Management
          </h1>
          <div>get started!</div>
        </div>
        <div className="right">
          {/* ......1...... */}
          <div>
            <div className="h4-hr-flex">
              <h4>our mission</h4>
              <div className="hr"></div>
            </div>
            <p>
              Like a symphony conductor, we harmonize elements of design,
              technology, and hospitality, setting the stage for a symphony of
              delight. With creativity as our brush and innovation as our
              palette.
              <br />
              <br />
              <b>
                we paint the canvas of your occasion with vibrant hues of
                elegance, energy, and enchantment.
              </b>
            </p>
          </div>
          {/* ......2...... */}
          <div>
            <div className="h4-hr-flex">
              <h4>our vision</h4>
              <div className="hr"></div>
            </div>
            <p>
              Our legacy lies in the cherished memories we've created, the
              laughter that reverberates, and the tears of joy that glisten in
              your eyes. <br />
              <br />
              <b>
                our pursuit of creating magic in the ordinary, and our boundless
                enthusiasm to surpass expectations.
              </b>
            </p>
          </div>
        </div>
      </div>

      {/* .......Next........ */}
      <div className="event-back3">
        <div className="left">
          <div>
            <div>
              <img src={logo} alt="#" />
            </div>
            <h1>HARMONI</h1>
            <hr />
            <h3>
              <b>Working Since</b>
            </h3>
            <div style={{ fontSize: "70px" }}>
              <b>1980</b>
            </div>
          </div>
        </div>
        <div className="right">
          <p>harmoni award</p>
          <h1>Our Winning Awards</h1>
          {/* .....1...... */}
          <div style={{ display: "flex", paddingTop: "30px" }}>
            <div style={{ color: "rgb(255, 183, 0)", fontSize: "20px" }}>
              <b>AUG 2022</b>
            </div>
            <div
              style={{
                fontSize: "22px",
                paddingLeft: "20px",
              }}
            >
              <b>
                1st Place for Unique Events <br /> 2022
              </b>
            </div>
          </div>
          {/* ......2..... */}
          <div style={{ display: "flex", paddingTop: "30px" }}>
            <div style={{ color: "rgb(255, 183, 0)", fontSize: "20px" }}>
              <b>MAY 2019</b>
            </div>
            <div
              style={{
                fontSize: "22px",
                paddingLeft: "20px",
              }}
            >
              <b>
                1st Winner Best New Year <br /> Events
              </b>
            </div>
          </div>
          {/* .......3...... */}
          <div style={{ display: "flex", paddingTop: "30px" }}>
            <div style={{ color: "rgb(255, 183, 0)", fontSize: "20px" }}>
              <b>AUG 2017</b>
            </div>
            <div
              style={{
                fontSize: "22px",
                paddingLeft: "20px",
              }}
            >
              <b>
                1st Place for Unique Events <br /> 2017
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
