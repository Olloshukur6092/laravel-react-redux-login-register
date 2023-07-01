import { http } from "../../api/axios";
import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "../constants/authConstant";

export const register = (userData, navigate) => async (dispatch) => {
  try {
    const res = await http.post("register", userData);
    console.log(res);
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
    console.log(res);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    navigate("/dashboard", { replace: true });
  } catch (err) {
    dispatch({ type: LOGIN_ERROR });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
