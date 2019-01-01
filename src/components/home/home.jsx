import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.scss";

import { connect } from "react-redux";

class Dashboard extends Component {
  state = {};
  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <h1>{currentUser.name}</h1>

        <div className="home-content">
          <p>OVO balance</p>
          <p>IDR 100,000</p>
          <p>withdraw</p>
          <p>pay</p>
          <p>top up</p>
        </div>

        <div className="home-content">
          <p>How can looker help you today?</p>
          <Link to="/findJobs">Find a job</Link>
          <p>Hire</p>
          <p>Upgrade</p>
          <Link to="/activeJob">Active jobs</Link>
          <p>Reward</p>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(Dashboard);
