import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCategory = () => {
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
