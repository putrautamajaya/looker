import { UPDATE_USER } from "../actions/userAction";

export default function userReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_USER:
      return action.payload.users;
    default:
      return state;
  }
}
