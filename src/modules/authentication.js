export const LOGIN = "authentication/LOGIN";
export const LOGOUT = "authentication/LOGOUT";

const initialState = {
  user: null,
};

const _testUser = {
  name: "ck",
  profileImage: "/static/images/profile/profile2.jpg",
  email: "info@synapsecorp.kr",
  class: null,
};

export default function authentication(state=initialState, action) {
  switch(action.type) {
    case LOGIN:
      return {...state, user: _testUser};

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
