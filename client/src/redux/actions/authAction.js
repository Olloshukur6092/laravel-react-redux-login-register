import { http } from "../../api/axios";
import {
  AUTH_FAILED,
  AUTH_USER,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "../constants/authConstant";

export const register = (userData, navigate) => async (dispatch) => {
  try {
    const res = await http.post("register", userData);
    // console.log(res.data.user);

    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    navigate("/login", { replace: true });
  } catch (err) {
    console.log(err);
    dispatch({ type: REGISTER_ERROR });
  }
};

export const login = (userData, navigate) => async (dispatch) => {
  try {
    const res = await http.post("login", userData);
    console.log(res.data);
    localStorage.setItem("user", JSON.stringify(res.data));
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    navigate("/dashboard", { replace: true });
  } catch (err) {
    dispatch({ type: LOGIN_ERROR });
  }
};

export const logout = (navigate) => async (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: LOGOUT });
  navigate("/login");
};

// export const authUser = (options) => async (dispatch) => {
//   try {
//     const res = await http.get("user", options);
//     console.log(res);
//     dispatch({ type: AUTH_USER, payload: res.data.user });
//   } catch (err) {
//     console.log(err);
//     dispatch({ type: AUTH_FAILED });
//   }
// };
