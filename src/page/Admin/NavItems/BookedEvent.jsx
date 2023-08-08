import React, { useEffect, useState } from "react";
import "./CSS/BookedEvent.css";

const BookedEvent = () => {
  const [bookedevents, setBookedevents] = useState([]);
  const host = "http://localhost:5000";
  const getusers = async () => {
    try {
      const response = await fetch(`${host}/admin/bookedevents`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token_Admin"),
        },
      });
      const json = await response.json();
      setBookedevents(json);
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getusers();
  }, []);
  return (
    <div className="booked-main">
      <div className="booked-display">
        <table>
          <tr>
            <th>Email</th>
            <th>UserID</th>
            <th>EventID</th>
          </tr>
          {[...bookedevents].map((book) => {
            return (
              <tr key={book._id}>
                <td>{book.email}</td>
                <td>{book.user_id}</td>
                <td>{book.event_id}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default BookedEvent;
