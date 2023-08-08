import React, { useEffect, useState } from "react";
import DisplayBookedEvents from "./DisplayBookedEvents";
import "./CSS/FetchBookedEvents.css";

const FetchBookedEvents = () => {
  const [events, setBookedEvents] = useState([]);
  const host = "http://localhost:5000";

  const getBookedEvents = async () => {
    try {
      const response = await fetch(`${host}/auth/bookedEvents`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token_Event"),
        },
      });
      const json = await response.json();
      setBookedEvents(json);
      console.log(json);
      console.log(events);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getBookedEvents();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="display-booked-events">
      <div>
        <h1>MY BOOKING</h1>
        <div className="display-grid">
          {[...events].map((events) => {
            return (
              <div key={events._id}>
                <DisplayBookedEvents event_id={events.event_id} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FetchBookedEvents;
