import React, { useEffect, useState } from "react";
import "./CSS/UsersList.css";
import { ContextState } from "../../../context/EventContext";

const UsersList = () => {
  const [credentials, setCredentials] = useState([]);
  const { host } = ContextState();
  const getusers = async () => {
    try {
      const response = await fetch(`${host}/admin/userslist`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token_Admin"),
        },
      });
      const json = await response.json();
      setCredentials(json);
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getusers();
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ paddingTop: "60px" }}>
      <div className="userslist-main">
        <div className="list-head">
          <div>
            <b>User Id</b>
          </div>
          <div>
            <b>Name</b>
          </div>
          <div>
            <b>Email</b>
          </div>
          <div>
            <b>Phone No</b>
          </div>
        </div>
      </div>
      <div>
        {[...credentials].map((info) => {
          return (
            <div className="userslist-main" key={info._id}>
              <div className="list-display">
                <div>
                  <b>{info._id}</b>
                </div>
                <div>
                  <b>{info.name}</b>
                </div>
                <div>
                  <b>{info.email}</b>
                </div>
                <div>
                  <b>{info.contact}</b>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersList;
