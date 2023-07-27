import React from "react";
import "./CSS/EventCard.css";

const EventCard = (props) => {
  return (
    <div>
      <div className="card-main" key={props.info._id}>
        {/* .......1....... */}
        <div>
          <img src={props.info.image_url} alt="#" />
        </div>
        {/* .......2...... */}
        <div className="part-2">
          <div>
            <b>{props.info.title}</b>
          </div>
          <div>
            <b>{props.info.date}</b>
          </div>
          <div style={{ width: "150px" }}>
            <b>Tickets from ${props.info.price}</b>
          </div>
        </div>
        <div className="part-3">
          <div className="flex">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/992/992700.png"
                alt="#"
              />
            </div>
            <div style={{ marginTop: "-2px" }}>
              <b>Start {props.info.time}</b>
            </div>
          </div>
          <div className="flex">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/484/484167.png"
                alt="#"
              />
            </div>
            <div style={{ marginTop: "-2px" }}>
              <b>{props.info.address}</b>
            </div>
          </div>
        </div>
        <div className="part-4">
          <button>VIEW IN DETAIL</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
