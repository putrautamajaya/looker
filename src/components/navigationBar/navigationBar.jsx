import React, { Component } from "react";
import "./navigationBar.scss";

import { Link } from "react-router-dom";

class NavigationBar extends Component {
  state = {};
  render() {
    return (
      <div className="navigation-bar">
        <Link to="/home">Home</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/findJobs">Jobs</Link>
        <Link to="/activeJob">Active</Link>
        <Link to="/profile">Profile</Link>
      </div>
    );
  }
}

export default NavigationBar;
