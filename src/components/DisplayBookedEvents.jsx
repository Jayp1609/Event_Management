import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DisplayBookedEvents = (props) => {
  const [event, setBookedEvent] = useState([]);
  const host = "http://localhost:5000";

  const getBookedEvents = async () => {
    try {
      const response = await fetch(
        `${host}/auth/bookedEvents/display/${props.event_id}`,
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token_Event"),
          },
        }
      );
      const json = await response.json();
      setBookedEvent(json);
      console.log(json);
      console.log(event);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getBookedEvents();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className="card-main" key={event._id}>
        {/* .......1....... */}
        <div>
          <img src={event.image_url} alt="#" />
        </div>
        {/* .......2...... */}
        <div className="card-part-2">
          <div>
            <b>{event.title}</b>
          </div>
          <div>
            <b>{event.date}</b>
          </div>
          <div style={{ width: "150px" }}>
            <b>Tickets from ${event.price}</b>
          </div>
        </div>
        <div className="card-part-3">
          <div className="part3-flex">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/992/992700.png"
                alt="#"
              />
            </div>
            <div style={{ marginTop: "-2px" }}>
              <b>Start {event.time}</b>
            </div>
          </div>
          <div className="part3-flex">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/484/484167.png"
                alt="#"
              />
            </div>
            <div style={{ marginTop: "-2px" }}>
              <b>{event.address}</b>
            </div>
          </div>
        </div>
        <div className="card-part-4">
          <Link to={`/event/detail/${event._id}`}>
            <button>VIEW DETAILS</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayBookedEvents;
