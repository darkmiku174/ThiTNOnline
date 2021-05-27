// These are strings but we use it quite often so I defined them as constant and put it into an separate file
import {
  QUESTION_LIST_REQUEST,
  QUESTION_LIST_SUCCESS,
  QUESTION_LIST_FAIL,
  QUESTION_CREATE_REQUEST,
  QUESTION_CREATE_SUCCESS,
  QUESTION_CREATE_FAIL,
  QUESTION_LIST_BY_SUBJECT_REQUEST,
  QUESTION_LIST_BY_SUBJECT_SUCCESS,
  QUESTION_LIST_BY_SUBJECT_FAIL,
} from "../constants/QuestionConstants";
import axios from "axios";

export const listQuestion = () => async (dispatch) => {
  try {
    dispatch({ type: QUESTION_LIST_REQUEST });
    const { data } = await axios.get("/api/questions");
    dispatch({ type: QUESTION_LIST_SUCCESS, payload: data });
  } catch (error) {
    // If there is an erro in try{} so this will occur
    dispatch({
      type: QUESTION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createQuestion = (question) => async (dispatch) => {
  try {
    dispatch({ type: QUESTION_CREATE_REQUEST });
    const { data } = await axios.post("/api/questions", question);
    dispatch({ type: QUESTION_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: QUESTION_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getQuestionListBySubjectAction = (input) => async (dispatch) => {
  try {
    dispatch({ type: QUESTION_LIST_BY_SUBJECT_REQUEST });
    const { data } = await axios.get(`/api/questions/subject?id=${input}`);
    dispatch({ type: QUESTION_LIST_BY_SUBJECT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: QUESTION_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
