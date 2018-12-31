import React, { Component } from "react";
import "./profile.scss";

import { connect } from "react-redux";

class Profile extends Component {
  state = {
    user: {},
    selectedJob: {}
  };

  componentDidMount() {
    const { user, selectedJob } = this.props;
    this.setState({
      user,
      selectedJob
    });
  }

  render() {
    console.log("user", this.state.user);
    console.log("selectedJob", this.state.selectedJob);

    const user = this.props.user[0];

    return (
      <div>
        <h1>{user.name}</h1>

        <p>Good morning, this is the summary of your profile.</p>

        <div className="container">
          <p>OVO balance</p>
          <p>IDR 100,000</p>
        </div>

        <p>Upgrade your account</p>

        <div className="container">
          <p>About</p>

          <p>{user.description}</p>
        </div>

        <div className="container">
          <p>Details</p>

          <p>Name</p>

          <p>{user.name}</p>

          <p>Address</p>

          <p>{user.address}</p>

          <p>Telephone</p>

          <p>{user.phone}</p>

          <p>ID number (KTP)</p>

          <p>{user.ktp}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users,
  selectedJob: state.selectedJob
});

export default connect(mapStateToProps)(Profile);
