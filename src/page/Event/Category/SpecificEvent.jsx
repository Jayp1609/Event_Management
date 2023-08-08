import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const SpecificEvent = () => {
  const { eventid } = useParams();

  const host = "http://localhost:5000";
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
          backgroundColor: "#101820",
          paddingBottom: "100px",
        }}
      >
        <div>
          <img
            src={events.image_url}
            alt="#"
            style={{
              width: "100%",
              height: "200px",
            }}
          ></img>
          <p
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: "30px",
              color: "#FCF6F5",
              lineHeight: "60px",
            }}
          >
            {events.description}
          </p>
          <div style={{ textAlign: "center" }}>
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
