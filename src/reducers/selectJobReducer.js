import { SELECT_JOB } from "../actions/selectJobAction";

export default function productsReducer(state = [], action) {
  switch (action.type) {
    case SELECT_JOB:
      return action.payload.selectedJob;
    default:
      return state;
  }
}
