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
  QUESTION_LIST_BY_SUBJECT_FAIL, DELETE_QUESTION_REQUEST, DELETE_QUESTION_SUCCESS, DELETE_QUESTION_FAIL,
} from "../constants/QuestionConstants";
import axios from "axios";
import {DELETE_EXAM_FAIL} from "../constants/ExamConstants";

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
export const deleteQuestionAction=(id)=>async(dispatch)=>{
  try{
      dispatch({type:DELETE_QUESTION_REQUEST})
    const {data} = await axios.delete(`/api/questions/${id}`)

    dispatch({type:DELETE_QUESTION_SUCCESS,payload:data})
  }catch(error){
    dispatch({
      type: DELETE_QUESTION_FAIL,
      payload:
          error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
    });
  }
}
