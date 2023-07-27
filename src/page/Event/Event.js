import React from "react";
//import EventCard from "../../components/EventCard";
import "./Event.css";
import { useNavigate } from "react-router-dom";

const Event = () => {
  const navigate = useNavigate();

  return (
    <div className="event-main">
      <div className="back-image">
        <img
          src="https://images.pexels.com/photos/1384614/pexels-photo-1384614.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="#"
        />
      </div>
      <div className="image-text">
        <div>
          <p style={{ letterSpacing: "10px", lineHeight: "30px" }}>
            <b>BOOK YOUR EVENT</b>
          </p>
          <div style={{ fontSize: "35px", color: "rgb(255, 183, 0)" }}>
            <b>HARMONI</b>
          </div>
          <div style={{ fontSize: "35px", paddingTop: "5px" }}>
            <b>Events</b>
          </div>
          <div style={{ paddingTop: "5px" }}>
            <b>Home | Events</b>
          </div>
        </div>
      </div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          padding: "200px 0px 30px 0px",
          marginTop: "0px",
        }}
      >
        Choose your Category
      </h1>
      <div className="flex">
        {/* ......1..... */}
        <div
          className="category"
          onClick={() => {
            navigate("category", {
              state: {
                category: "wedding",
              },
            });
          }}
        >
          <img
            src="https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="#"
          />
          <div
            style={{
              width: "280px",
              backgroundColor: "#0A1828",
              textAlign: "center",
              padding: "10px",
            }}
          >
            <b>WEDDING</b>
          </div>
        </div>

        {/* .......2......... */}

        <div
          className="category"
          onClick={() => {
            navigate("category", {
              state: {
                category: "birthday",
              },
            });
          }}
        >
          <img
            src="https://images.pexels.com/photos/8101708/pexels-photo-8101708.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="#"
          />
          <div
            style={{
              width: "280px",
              backgroundColor: "wheat",
              textAlign: "center",
              padding: "10px",
            }}
          >
            <b>BIRTHDAY</b>
          </div>
        </div>

        {/* .......3...... */}

        <div
          className="category"
          onClick={() => {
            navigate("category", {
              state: {
                category: "sports",
              },
            });
          }}
        >
          <img
            src="https://images.pexels.com/photos/6275764/pexels-photo-6275764.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="#"
          />
          <div
            style={{
              width: "280px",
              backgroundColor: "#F0122D",
              textAlign: "center",
              padding: "10px",
            }}
          >
            <b>SPORTS</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
