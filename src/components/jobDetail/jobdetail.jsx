import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./jobDetail.scss";

import { connect } from "react-redux";
import { updateActiveJob } from "../../actions/activeJobAction";

class JobDetail extends Component {
  state = {};

  onApplyJob = () => {
    const { activeJob, selectedJob } = this.props;
    let newActiveJob = [...activeJob, selectedJob];
    this.props.onApplyJob(newActiveJob);
  };

  render() {
    console.log("render props", this.props.activeJob);

    const { selectedJob } = this.props;

    return (
      <div>
        <h1>{selectedJob.title}</h1>

        <p>{selectedJob.description}</p>

        <b>Requirement</b>

        <p>{selectedJob.requirements}</p>

        <b>Benefits</b>

        <p>{selectedJob.price}</p>

        <b>Address and contact</b>

        <p>{selectedJob.location}</p>

        <p>{selectedJob.phone}</p>

        <Link to="/activeJob" onClick={this.onApplyJob}>
          Apply for this job!
        </Link>

        <p>Share this job</p>

        <p>I think it's a scam</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedJob: state.selectedJob,
  activeJob: state.activeJob
});

const mapActionsToProps = {
  onApplyJob: updateActiveJob
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(JobDetail);
