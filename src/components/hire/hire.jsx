import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./hire.scss";

import { connect } from "react-redux";
import { updateJobs } from "../../actions/jobAction";

class Hire extends Component {
  state = {
    redirectToJobs: undefined
  };

  onUpdateJobs = () => {
    const { jobs, onUpdateJobs } = this.props;
    const newID = jobs[jobs.length - 1].id + 1;

    const newJob = {
      id: newID,
      title: document.getElementById("inputTitle").value,
      location: document.getElementById("inputLocation").value,
      description: document.getElementById("inputDescription").value,
      requirements: document.getElementById("inputRequirements").value,
      phone: document.getElementById("inputContact").value,
      price: document.getElementById("inputPrice").value
    };

    onUpdateJobs([...jobs, newJob]);

    this.setState({ redirectToJobs: true });
  };

  render() {
    if (this.state.redirectToJobs) {
      return <Redirect to="/findJobs" />;
    }

    return (
      <div>
        <h1>Post a job and hire today!</h1>

        <input id="inputTitle" type="text" placeholder="Job Title" />

        <input id="inputLocation" type="text" placeholder="Location" />

        <textarea id="inputDescription" rows="4" placeholder="Description" />

        <input id="inputPrice" type="text" placeholder="Price" />

        <input id="inputRequirements" type="text" placeholder="requirements" />

        <input id="inputContact" type="text" placeholder="Contact Number" />

        <button type="submit" onClick={this.onUpdateJobs}>
          Post The Job
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs
});

const mapActionToProps = {
  onUpdateJobs: updateJobs
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(Hire);
