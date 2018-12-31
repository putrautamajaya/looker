import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./findJobs.scss";

import { connect } from "react-redux";
import { updateJobs } from "../../actions/jobAction";
import { selectJob } from "../../actions/selectJobAction";

class FindJobs extends Component {
  state = {
    selectedJob: undefined
  };

  onSelectJob = selectedJob => {
    this.props.onSelectJob(selectedJob);
    this.setState({ selectedJob });
  };

  render() {
    const listOfJobs = this.props.jobs.map(job => (
      <div key={job.id} className="job" onClick={() => this.onSelectJob(job)}>
        <p>{job.title}</p>
        <p>{job.location}</p>
        <p>{job.description}</p>
      </div>
    ));

    if (this.state.selectedJob) {
      return <Redirect to="/jobDetail" />;
    }

    return (
      <div>
        <p>Showing 101 jobs under 5KM</p>

        <input type="text" placeholder="Search jobs..." />

        {listOfJobs}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs,
  selectedJob: state.selectedJob
});

const mapActionsToProps = {
  onUpdateJobs: updateJobs,
  onSelectJob: selectJob
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(FindJobs);
