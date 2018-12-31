import { UPDATE_ACTIVE_JOB } from "../actions/activeJobAction";

export default function activeJobReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_ACTIVE_JOB:
      return action.payload.activeJob;
    default:
      return state;
  }
}
