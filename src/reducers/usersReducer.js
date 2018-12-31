import { UPDATE_USERS } from "../actions/usersAction";

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_USERS:
      return action.payload.users;
    default:
      return state;
  }
}
