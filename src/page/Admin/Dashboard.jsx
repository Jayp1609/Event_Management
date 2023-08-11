import React from "react";
import { Outlet } from "react-router";
import VerticalNav from "./VerticalNav";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dash-main">
      <div className="left">
        <VerticalNav />
      </div>
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
