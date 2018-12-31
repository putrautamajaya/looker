import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./preFace.scss";

class PreFace extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Looker</h1>

        <Link to="/loginPage">
          <h3>I want to find a job</h3>
        </Link>

        <h4>Or</h4>

        <Link to="/loginPage">
          <h3>I want to hire someone</h3>
        </Link>
      </div>
    );
  }
}

export default PreFace;
