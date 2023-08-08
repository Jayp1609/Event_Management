import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventCard from "../../../components/EventCard";

const Category = () => {
  const host = "http://localhost:5000";
  const [events, setEvents] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    async function event() {
      try {
        const response = await fetch(`${host}/event/category/${category}`, {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
        });
        const text = await response.text();
        const json = JSON.parse(text);
        setEvents(json);
        console.log(events);
      } catch (err) {
        console.log(err);
      }
    }
    event();
    // eslint-disable-next-line
  }, [category]);
  return (
    <div className="grid">
      {[...events].map((info) => {
        return <EventCard info={info} key={info._id} />;
      })}
    </div>
  );
};

export default Category;
