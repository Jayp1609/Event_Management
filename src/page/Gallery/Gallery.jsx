import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-main">
      <div className="back-image">
        <img
          src="https://images.pexels.com/photos/2087708/pexels-photo-2087708.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="#"
        />
      </div>
      <div className="image-text">
        <div>
          <p style={{ letterSpacing: "10px", lineHeight: "30px" }}>
            <b>HARMONI EVENT</b>
          </p>
          <div style={{ fontSize: "35px", color: "rgb(255, 183, 0)" }}>
            <b>HARMONI</b>
          </div>
          <div style={{ fontSize: "35px", paddingTop: "5px" }}>
            <b>Gallery</b>
          </div>
          <div style={{ paddingTop: "5px" }}>
            <b>Home | Gallery</b>
          </div>
        </div>
      </div>
      <h1
        style={{
          padding: "150px 0px 50px 0px",
          textAlign: "center",
          fontFamily: "fantasy",
          fontSize: "50px",
        }}
      >
        Our Gallery
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="image-display">
          <div className="image-card">
            <img
              src="https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="#"
            />
            <div>Sports Day,Ahmedabad</div>
          </div>
          <div className="image-card">
            <img
              src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="#"
            />
            <div>Wedding</div>
          </div>
          <div className="image-card">
            <img
              src="https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="#"
            />
            <div>Football Match,Ahmedabad</div>
          </div>
          <div className="image-card">
            <img
              src="https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="#"
            />
            <div>New Year Party</div>
          </div>
          <div className="image-card">
            <img
              src="https://images.pexels.com/photos/7180617/pexels-photo-7180617.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="#"
            />
            <div>Birthday Party</div>
          </div>
          <div className="image-card">
            <img
              src="https://images.pexels.com/photos/15862398/pexels-photo-15862398/free-photo-of-indian-flag-at-cricket-ground.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="#"
            />
            <div>Cricket Match,Narendra Modi Stadium</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
