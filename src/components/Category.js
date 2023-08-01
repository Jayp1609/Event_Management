import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EventCard from "../components/EventCard";
import "./CSS/Category.css";
import Footer from "./Footer";

const Category = () => {
  const location = useLocation();
  const host = "http://localhost:5000";
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function event() {
      try {
        const response = await fetch(
          `${host}/event/category/${location.state.category}`,
          {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const text = await response.text();
        const json = JSON.parse(text);
        setEvents(json);
        console.log(events);
      } catch (err) {
        console.log(err);
      }
    }
    event();
  }, [events, location.state.category]);
  return (
    <>
      <div className="heading">
        <h1>Upcoming {location.state.category} events !!!</h1>
      </div>

      <div className="events-display">
        {[...events].map((info) => {
          return (
            <div className="card-css">
              <EventCard info={info} key={info._id} />
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Category;
