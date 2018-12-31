import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./loginPage.scss";

import { connect } from "react-redux";

class LoginPage extends Component {
  state = {
    users: [],
    userAutentication: false
  };

  componentDidMount() {
    this.setState({ users: this.props.users });
  }

  userAutentication = () => {
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    let userCheck = this.state.users.find(user => (user.userName = userName));
    userCheck.password = password
      ? this.setState({ userAutentication: true })
      : this.setState({ userAutentication: false });
  };

  render() {
    console.log(this.state.users);
    if (!this.state.userAutentication) {
      return (
        <div>
          <h1>Looker</h1>

          <input id="userName" type="text" placeholder="Username or Email" />
          <br />

          <input id="password" type="password" placeholder="Password" />
          <br />

          <button type="submit" onClick={this.userAutentication}>
            Login
          </button>
          <br />

          <Link to="/">
            <p>Create new account</p>
          </Link>

          <Link to="/">
            <p>Forget password?</p>
          </Link>

          <p>Log in with Facebook account</p>
          <p>Log in with Google account</p>
        </div>
      );
    }
    return <Redirect to="/findJobs" />;
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(LoginPage);

// NOTE:

// 1.
// userAutentication will get two value from username input and password input.
// then find if there is an id as the username input
// then check if the password are correct.
// if the password is the same, set the userautentication to true.
// then redirect to homepage.
