import React, { useState } from "react";
import { useEffect } from "react";
import "./CSS/EventPost.css";

const EventPost = () => {
  const [credentials, setCredentials] = useState({
    address: "",
    image_url: "",
    description: "",
    price: "",
    time: "",
    title: "",
    category: "",
    date: "",
  });
  const [categorynames, setCategorynames] = useState([]);

  const host = "http://localhost:5000";

  const getcategories = async () => {
    try {
      const response = await fetch(`${host}/admin/categories`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setCategorynames(json);
      console.log(json);
      console.log(categorynames);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getcategories();
    // eslint-disable-next-line
  }, []);

  const onChangetext = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${host}/admin/postevent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: credentials.address,
        image_url: credentials.image_url,
        description: credentials.description,
        price: credentials.price,
        time: credentials.time,
        title: credentials.title,
        category: credentials.category,
        date: credentials.date,
      }),
    });
    const json = await response.json();
    console.log(json);
    window.location.reload(false);
  };
  return (
    <div className="eventpost-main">
      <div className="eventpost-form">
        <h2>Post Event</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title*"
            name="title"
            value={credentials.title}
            onChange={(e) => {
              onChangetext(e);
            }}
            minLength={3}
            required
          />
          <br />
          <br />

          <input
            type="address"
            placeholder="address*"
            name="address"
            value={credentials.address}
            onChange={(e) => {
              onChangetext(e);
            }}
            required
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="price*"
            name="price"
            value={credentials.price}
            onChange={(e) => {
              onChangetext(e);
            }}
            minLength={10}
            required
          />
          <br />
          <br />
          <input
            type="time"
            placeholder="time*"
            name="time"
            value={credentials.time}
            onChange={(e) => {
              onChangetext(e);
            }}
            minLength={8}
            required
          />
          <br />
          <br />
          <input
            type="date"
            name="date"
            value={credentials.date}
            onChange={(e) => {
              onChangetext(e);
            }}
            required
          />
          <br />
          <br />
          <input
            type="image_url"
            placeholder="image_url*"
            name="image_url"
            value={credentials.image_url}
            onChange={(e) => {
              onChangetext(e);
            }}
            required
          />
          <br />
          <br />
          <label htmlFor="catg">Category : </label>
          <select
            name="category"
            id="catg"
            value={credentials.category}
            onChange={(e) => {
              onChangetext(e);
            }}
          >
            <option value=""></option>
            {[...categorynames].map((names) => {
              return <option value={names.category}>{names.category}</option>;
            })}
          </select>
          <br />
          <br />
          <textarea
            rows={4}
            cols={40}
            name="description"
            placeholder="description*"
            value={credentials.description}
            onChange={(e) => {
              onChangetext(e);
            }}
          ></textarea>
          <br />
          <br />
          <br />
          <button type="submit">POST</button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default EventPost;
