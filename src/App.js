import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import PreFace from "./components/preFace/preFace";
import LoginPage from "./components/loginPage/loginPage";
import FindJobs from "./components/findJobs/findJobs";
import Jobdetail from "./components/jobDetail/jobdetail";
import Profile from "./components/profile/profile";
import ActiveJob from "./components/activeJob/activeJob";
import Dashboard from "./components/dashboard/dashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" component={PreFace} exact />
          <Route path="/loginPage" component={LoginPage} />
          <Route path="/findJobs" component={FindJobs} />
          <Route path="/jobdetail" component={Jobdetail} />
          <Route path="/profile" component={Profile} />
          <Route path="/activeJob" component={ActiveJob} />
          <Route path="/dashboard" component={Dashboard} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
