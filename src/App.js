import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import NavigationBar from "./components/navigationBar/navigationBar";
import PreFace from "./components/preFace/preFace";
import LoginPage from "./components/loginPage/loginPage";
import FindJobs from "./components/findJobs/findJobs";
import Jobdetail from "./components/jobDetail/jobdetail";
import Profile from "./components/profile/profile";
import ActiveJob from "./components/activeJob/activeJob";
import Home from "./components/home/home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavigationBar />
          <Route path="/" component={PreFace} exact />
          <Route path="/loginPage" component={LoginPage} />
          <Route path="/findJobs" component={FindJobs} />
          <Route path="/jobdetail" component={Jobdetail} />
          <Route path="/profile" component={Profile} />
          <Route path="/activeJob" component={ActiveJob} />
          <Route path="/home" component={Home} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
