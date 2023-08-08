import React from "react";
import "./VerticalNav.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../HarmoniLogo.png";

const VerticalNav = () => {
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    // showalert("You are logged out!!!!", "primary");
    localStorage.removeItem("token_Admin");
    navigate("/");
    window.location.reload(false);
  };
  return (
    <div className="verticalnav-main">
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          paddingTop: "40px",
          justifyContent: "center",
        }}
      >
        <div>
          <img src={logo} alt="#" style={{ width: "40px", height: "20px" }} />
        </div>
        <div style={{ fontSize: "20px", color: "white" }}> HARMONI</div>
        <div style={{ fontSize: "8px", color: "orange" }}>EVENT MANAGEMENT</div>
      </div>
      <div className="flex">
        <ul>
          <li>
            <b>
              <Link
                to="/admin/dashboard/users"
                style={{ textDecoration: "none", color: "white" }}
              >
                User List
              </Link>
            </b>
          </li>
          <li>
            <b>
              <Link
                to="/admin/dashboard/postevent"
                style={{ textDecoration: "none", color: "white" }}
              >
                Event Post
              </Link>
            </b>
          </li>
          <li>
            <b>
              <Link
                to="/admin/dashboard/bookedevent"
                style={{ textDecoration: "none", color: "white" }}
              >
                Booked Event
              </Link>
            </b>
          </li>
          <li>
            <b>
              <Link
                to="/admin/dashboard/postcategory"
                style={{ textDecoration: "none", color: "white" }}
              >
                Post Category
              </Link>
            </b>
          </li>
          <li>
            <b
              style={{ color: "red" }}
              onClick={(e) => {
                handleLogOut(e);
              }}
            >
              LogOut
            </b>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VerticalNav;
