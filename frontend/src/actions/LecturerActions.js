import {
  LECTURER_LOGIN_REQUEST,
  LECTURER_LOGIN_SUCCESS,
  LECTURER_LOGIN_FAIL,
  LECTURER_LOGOUT,
} from "../constants/LecturerConstants";
import axios from "axios";
export const lecturerLoginAction = (input) => async (dispatch) => {
  try {
    dispatch({type: LECTURER_LOGIN_REQUEST});
    const {data} = await axios.post(
      `/api/lecturers/login?cmnd=${input.cmnd}&password=${input.password}`
    );
    localStorage.setItem("lecturerInfo", JSON.stringify(data));
    dispatch({type: LECTURER_LOGIN_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: LECTURER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const lecturerLogoutAction = () => async (dispatch) => {
  localStorage.removeItem("lecturerInfo")
  dispatch({type: LECTURER_LOGOUT})
}
