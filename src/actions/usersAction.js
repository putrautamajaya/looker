export const UPDATE_USERS = "updateUsers";

export function updateUsers(newUsers) {
  return {
    type: UPDATE_USERS,
    payload: {
      users: newUsers
    }
  };
}
