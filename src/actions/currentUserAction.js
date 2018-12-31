export const CURRENT_USER = "currentUser";

export function onLogin(currentUser) {
  return {
    type: CURRENT_USER,
    payload: {
      currentUser: currentUser
    }
  };
}
