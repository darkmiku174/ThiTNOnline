import {
  QUESTION_LIST_REQUEST,
  QUESTION_LIST_SUCCESS,
  QUESTION_LIST_FAIL,
  QUESTION_CREATE_REQUEST,
  QUESTION_CREATE_SUCCESS,
  QUESTION_CREATE_FAIL,
} from "../constants/QuestionConstants";
import axios from "axios";

{/*redux-thunk*/}
{/*ACTIONS*/}
export const listQuestion = () => async (dispatch) => {
  try {
    dispatch({type: QUESTION_LIST_REQUEST});
    const {data} = await axios.get("/api/questions");
    dispatch({type: QUESTION_LIST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: QUESTION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createQuestion = (
  question
) => async (dispatch) => {
  try {
    dispatch({type: QUESTION_CREATE_REQUEST});
    const {data} = await axios.post("/api/questions", question);
    dispatch({type: QUESTION_CREATE_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: QUESTION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
