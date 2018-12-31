import { CURRENT_USER } from "../actions/currentUserAction";

export default function currentUserReducer(state = null, action) {
  switch (action.type) {
    case CURRENT_USER:
      return action.payload.currentUser;
    default:
      return state;
  }
}
