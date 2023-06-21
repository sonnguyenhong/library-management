import React from "react";
import logo from "../assets/images/logo.png";
import "../assets/css/logo-header.css";

function component2(props) {
  return (
    <div className="logo-header">
      <div className="img">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="library">
        <h2>Library</h2>
        <h1>Management</h1>
      </div>
    </div>
  );
}

export default component2;
