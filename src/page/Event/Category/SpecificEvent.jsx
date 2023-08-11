import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ContextState } from "../../../context/EventContext";

const SpecificEvent = () => {
  const { eventid } = useParams();
  const { host } = ContextState();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function event() {
      try {
        const response = await fetch(
          `${host}/event/category/detail/${eventid}`,
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
        console.info(events);
      } catch (err) {
        console.log(err);
      }
    }
    event();
    // eslint-disable-next-line
  }, [eventid]);

  const handleBookEvent = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(
        `${host}/event/category/bookevent/${eventid}`,
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token_Event"),
          },
        }
      );
      const json = await response.json();
      console.log(json);
      alert("Event booked Successfully! Kindly check your profile");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "50px",
        fontFamily: "inherit",
      }}
    >
      <div
        style={{
          width: "70%",
          border: "1px solid white",
          backgroundColor: "#ffffff",
          paddingBottom: "100px",
          boxShadow: "2px 2px 4px 2px white",
        }}
      >
        <div>
          {/* Display image of event */}
          <img
            src={events.image_url}
            alt="#"
            style={{
              width: "100%",
              height: "200px",
            }}
          ></img>
          {/* Display category */}
          <h1 style={{ textAlign: "center" }}>{events.title}</h1>

          {/* Display description */}
          <p
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: "20px",
              lineHeight: "25px",
            }}
          >
            {events.description}
          </p>

          {/* Display address */}
          <div style={{ display: "flex", paddingLeft: "20px" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/484/484167.png"
              alt="#"
              style={{ width: "20px", height: "20px" }}
            />
            <b>{events.address}</b>
          </div>

          <div style={{ display: "flex", padding: "10px 0px 0px 20px" }}>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/992/992700.png"
                alt="#"
                style={{ width: "15px", height: "15px" }}
              />
            </div>
            <div>
              <b style={{ paddingLeft: "5px" }}>{events.time}</b>
            </div>
          </div>

          {/* Book event button */}
          <div style={{ textAlign: "center", paddingTop: "50px" }}>
            <button
              className="bookevent-btn"
              style={{
                width: "200px",
                height: "50px",
                fontSize: "15px",
                border: "1px solid white",
              }}
              onClick={(e) => {
                handleBookEvent(e);
              }}
            >
              BOOK EVENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificEvent;
