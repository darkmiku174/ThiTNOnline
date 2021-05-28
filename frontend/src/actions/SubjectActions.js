import {
  SUBJECT_LIST_FAIL,
  SUBJECT_LIST_REQUEST,
  SUBJECT_LIST_SUCCESS,
  SUBJECT_DETAIL_LIST_REQUEST,
  SUBJECT_DETAIL_LIST_SUCCESS,
  SUBJECT_DETAIL_LIST_FAIL,
} from "../constants/SubjectConstants";
import axios from "axios";

export const subjectListAction = () => async (dispatch) => {
  try {
    dispatch({type: SUBJECT_LIST_REQUEST});
    const {data} = await axios.get(`/api/subjects`);
    dispatch({type: SUBJECT_LIST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: SUBJECT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const subjectDetailListAction = () => async (dispatch) => {
  try {
    dispatch({type: SUBJECT_DETAIL_LIST_REQUEST});
    const lecturer = JSON.parse(localStorage.getItem("lecturerInfo"));
    const {data} = await axios.get(
      `/api/subjects/details?giangvien=${lecturer._id}`
    );
    dispatch({type: SUBJECT_DETAIL_LIST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: SUBJECT_DETAIL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
