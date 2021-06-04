import axios from "axios";
import {
  STUDENT_LOGIN_FAIL,
  STUDENT_LOGIN_REQUEST,
  STUDENT_LOGIN_SUCCESS,
  STUDENT_LOGOUT,
} from "../constants/StudentConstants";

export const studentLoginAction = (input) => async (dispatch) => {
  try {
    dispatch({type: STUDENT_LOGIN_REQUEST});
    console.log(input)
    const {data} = await axios.post(
      `api/students/login?cmnd=${input.cmnd}&password=${input.password}`
    );
    localStorage.setItem("studentInfo", JSON.stringify(data));
    dispatch({type: STUDENT_LOGIN_SUCCESS, payload:data});
  } catch (error) {
    dispatch({
      type: STUDENT_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const studentLogoutAction = () => async (dispatch) => {
  localStorage.removeItem("studentInfo")
  localStorage.removeItem("exam")
  localStorage.removeItem("submittion")
  dispatch({type: STUDENT_LOGOUT})
}
