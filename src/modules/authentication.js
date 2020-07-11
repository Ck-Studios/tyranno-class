export const LOGIN = "authentication/LOGIN";
export const LOGOUT = "authentication/LOGOUT";

const initialState = {
  user: null,
};

export default function authentication(state=initialState, action) {
  switch(action.type) {
    case LOGIN:
      return {...state, user: "test_user"};

    case LOGOUT:
      return {...state, user: null};

    default:
      return {...state};
  }
}

export function login() {
  return {
    type: LOGIN,
  }
}

export function logout() {
  return {
    type: LOGOUT,
  }
}
