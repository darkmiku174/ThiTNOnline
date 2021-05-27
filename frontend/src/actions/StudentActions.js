import axios from "axios";
import {
  STUDENT_LOGIN_FAIL,
  STUDENT_LOGIN_REQUEST,
  STUDENT_LOGIN_SUCCESS,
} from "../constants/StudentConstants";

export const studentLoginAction = (input) => async (dispatch) => {
  try {
    dispatch({ type: STUDENT_LOGIN_REQUEST });
    const { data } = await axios.post(
      `api/student/login?cmnd=${input.cmnd}&password=${input.password}`
    );
    localStorage.setItem("studentInfo", JSON.stringify(data));
    dispatch({ type: STUDENT_LOGIN_SUCCESS });
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
