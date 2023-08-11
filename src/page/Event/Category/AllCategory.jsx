import React from "react";
import { Link } from "react-router-dom";
import { ContextState } from "../../../context/EventContext";

const AllCategory = () => {
  const { categorynames } = ContextState();

  return (
    <div>
      <div className="grid">
        {[...categorynames].map((names) => {
          return (
            <Link to={`/event/${names.category}`} key={names._id}>
              <div className="category" key={names._id}>
                <img
                  src="https://images.pexels.com/photos/7233126/pexels-photo-7233126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="#"
                />
                <div
                  style={{
                    width: "280px",
                    backgroundColor: "#ffffff",
                    textAlign: "center",
                    padding: "10px",
                  }}
                >
                  <b>{names.category}</b>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllCategory;
