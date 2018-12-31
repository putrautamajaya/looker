import React, { Component } from "react";
import "./profile.scss";

import { connect } from "react-redux";

class Profile extends Component {
  state = {};

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <h1>{currentUser.name}</h1>

        <p>Good morning, this is the summary of your profile.</p>

        <div className="container">
          <p>OVO balance</p>
          <p>IDR 100,000</p>
        </div>

        <p>Upgrade your account</p>

        <div className="container">
          <p>About</p>

          <p>{currentUser.description}</p>
        </div>

        <div className="container">
          <p>Details</p>

          <p>Name</p>

          <p>{currentUser.name}</p>

          <p>Address</p>

          <p>{currentUser.address}</p>

          <p>Telephone</p>

          <p>{currentUser.phone}</p>

          <p>ID number (KTP)</p>

          <p>{currentUser.ktp}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  selectedJob: state.selectedJob
});

export default connect(mapStateToProps)(Profile);
