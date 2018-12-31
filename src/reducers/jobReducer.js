import { UPDATE_JOBS } from "../actions/jobAction";

export default function productsReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_JOBS:
      return action.payload.jobs;
    default:
      return state;
  }
}
