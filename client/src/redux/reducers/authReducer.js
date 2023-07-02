import {
  // AUTH_USER,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
} from "../constants/authConstant";

const initialState = {
  auth: JSON.parse(localStorage.getItem("user")),
  error: false,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        auth: action.payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: action.payload,
        error: false,
      };

    case LOGOUT:
      return {
        auth: null,
      };

    default:
      return state;
  }
};

export default authReducer;
