import React, { useState } from "react";
import "./Contact.css";
import { ContextState } from "../../context/EventContext";

const Contact = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    country: "",
    contact: "",
  });

  const onChangetext = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const { host } = ContextState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${host}/auth/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        contact: credentials.contact,
        country: credentials.country,
      }),
    });
    const json = await response.json();
    console.log(json);
    alert("We will contact you soon!!!");
    window.location.reload(false);
  };
  return (
    <div className="contact-main">
      <div className="back-image">
        <img
          src="https://images.pexels.com/photos/7658388/pexels-photo-7658388.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="#"
        />
      </div>
      <div className="image-text">
        <div>
          <p style={{ letterSpacing: "10px", lineHeight: "30px" }}>
            <b>CONTACT US NOW</b>
          </p>
          <div style={{ fontSize: "35px", color: "rgb(255, 183, 0)" }}>
            <b>KEEP </b>
          </div>
          <div style={{ fontSize: "35px", paddingTop: "5px" }}>
            <b>In Touch</b>
          </div>
          <div style={{ paddingTop: "5px" }}>
            <b>Home | Contact</b>
          </div>
        </div>
      </div>
      <div className="contact-us-flex">
        <div className="contact-form">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9068/9068751.png"
            alt="#"
          />
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="name*"
              name="name"
              value={credentials.name}
              onChange={(e) => {
                onChangetext(e);
              }}
            />
            <br />
            <br />
            <input
              type="email"
              placeholder="email*"
              name="email"
              value={credentials.email}
              onChange={(e) => {
                onChangetext(e);
              }}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="country*"
              name="country"
              value={credentials.country}
              onChange={(e) => {
                onChangetext(e);
              }}
            />
            <br />
            <br />
            <input
              type="number"
              placeholder="phone number*"
              name="contact"
              value={credentials.contact}
              onChange={(e) => {
                onChangetext(e);
              }}
            />
            <br />
            <br />
            <br />
            <button type="submit">SEND</button>
          </form>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1
            style={{
              color: "#2F3C7E",
              paddingBottom: "40px",
              fontSize: "40px",
              lineHeight: "60px",
            }}
          >
            Reach out to us, and together, <br />
            we'll weave a tapestry of
            <br />
            unforgettable moments.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
