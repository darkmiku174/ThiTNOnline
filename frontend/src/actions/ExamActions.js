import {
  EXAM_LIST_FAIL,
  EXAM_LIST_REQUEST,
  EXAM_LIST_SUCCESS,
  GET_EXAM_FAIL,
  GET_EXAM_REQUEST,
  GET_EXAM_SUCCESS,
  CREATE_EXAM_REQUEST,
  CREATE_EXAM_SUCCESS,
  CREATE_EXAM_FAIL,
} from "../constants/ExamConstants";
import axios from "axios";

export const examListAction = () => async (dispatch) => {
  try {
    dispatch({ type: EXAM_LIST_REQUEST });
    const lecturer = JSON.parse(localStorage.getItem("lecturerInfo"));
    const { data } = await axios.get(`/api/exams/lecturer?id=${lecturer._id}`);
    dispatch({ type: EXAM_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EXAM_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const examAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_EXAM_REQUEST });
    const { data } = await axios.get(`/api/exams/${id}`);
    dispatch({ type: GET_EXAM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_EXAM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createExamAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_EXAM_REQUEST });
    let {
      tempExam: { tempExam },
    } = getState();
    tempExam = { ...tempExam, CTMH: "60ad780d4ac0c5073e32781b" };
    const { data } = await axios.post("/api/exams", { ...tempExam });
    dispatch({ type: CREATE_EXAM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_EXAM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
