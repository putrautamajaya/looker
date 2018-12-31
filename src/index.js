import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import jobReducer from "./reducers/jobReducer";
import UserReducer from "./reducers/currentUserReducer";
import selectJobReducer from "./reducers/selectJobReducer";
import activeJobReducer from "./reducers/activeJobReducer";
import usersReducer from "./reducers/usersReducer";

import Jobs from "./components/findJobs/jobs";

const allReducers = combineReducers({
  jobs: jobReducer,
  selectedJob: selectJobReducer,
  activeJob: activeJobReducer,
  currentUser: UserReducer,
  users: usersReducer
});

const userDummy = {
  id: 1,
  userName: "admin",
  password: 123456,
  name: "Putra",
  description: "Hi, my name is Putra. I have experience in coding",
  address: "Jakarta",
  phone: "0877 8899 1010",
  ktp: "012938761236"
};

const store = createStore(
  allReducers,
  {
    jobs: Jobs,
    users: [userDummy],
    activeJob: []
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
