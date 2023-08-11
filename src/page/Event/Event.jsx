import React from "react";
//import EventCard from "../../components/EventCard";
import "./Event.css";
import { Link, Outlet } from "react-router-dom";
import { ContextState } from "../../context/EventContext";

const Event = () => {
  const { categorynames } = ContextState();

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
      <div className="event-navbar">
        <ul>
          <li>
            <Link
              to="/event/allcategory"
              style={{ textDecoration: "none", color: "white" }}
            >
              <b>CATEGORY</b>
            </Link>
          </li>
          {[...categorynames].map((names) => {
            return (
              <li key={names._id}>
                <Link
                  to={`/event/${names.category}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <b>{names.category}</b>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
};

export default Event;
