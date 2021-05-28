import axios from "axios";
import {
  POST_SUBMITTION_FAIL,
  POST_SUBMITTION_REQUEST,
  POST_SUBMITTION_SUCESS,
} from "../constants/submittionConstants";

export const postSubmittionAction = () => async (dispatch) => {
  try {
    dispatch({ type: POST_SUBMITTION_REQUEST });
    const submittion = JSON.parse(localStorage.getItem("submittion"));
    const exam = JSON.parse(localStorage.getItem("exam"));
    const index = exam[0].ThoiGian.indexOf(":");
    const hour = parseInt(exam[0].ThoiGian.substring(0, index));
    const minutes = parseInt(exam[0].ThoiGian.substring(index + 1));
    const submitTime = hour * 60 + minutes + parseInt(exam[0].ThoiLuong);
    const currentTime =
      parseInt(new Date().getHours()) * 60 + parseInt(new Date().getMinutes());
    if (currentTime < submitTime + 1) {
      const { data } = await axios.post("/api/submittions", submittion);
      localStorage.removeItem("submittion");
      dispatch({ type: POST_SUBMITTION_SUCESS, payload: { data } });
    }
  } catch (error) {
    dispatch({
      type: POST_SUBMITTION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
