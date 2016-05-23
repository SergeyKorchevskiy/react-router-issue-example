const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const INITIAL_STATE = {
  user: null,
  isAuthenticated: false
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user
      }
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false
      }
    default:
      return state
  }
}
