import { REGISTER_SUCCESS } from "../constants/authConstant";

const initialState = {
  auth: null,
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

    default:
      return state;
  }
};

export default authReducer;
