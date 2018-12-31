import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./activeJob.scss";

import { connect } from "react-redux";
import { selectJob } from "../../actions/selectJobAction";

class ActiveJob extends Component {
  state = {
    selectedJob: undefined
  };

  onSelectJob = selectedJob => {
    this.props.onSelectJob(selectedJob);
    this.setState({ selectedJob });
  };

  render() {
    console.log("this.props.activeJob", this.props.activeJob);

    const listOfJob = this.props.activeJob.map(job => (
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
        <h1>this is active job</h1>
        {listOfJob}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeJob: state.activeJob,
  selectedJob: state.selectedJob
});

const mapActionsToProps = {
  onSelectJob: selectJob
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ActiveJob);
