// These are strings but we use it quite often so I defined them as constant and put it into an separate file
import {
  QUESTION_LIST_REQUEST,
  QUESTION_LIST_SUCCESS,
  QUESTION_LIST_FAIL,
  QUESTION_CREATE_REQUEST,
  QUESTION_CREATE_SUCCESS,
  QUESTION_CREATE_FAIL,
} from "../constants/QuestionConstants";
import axios from "axios";

// redux-thunk
// ACTIONS
// useDispatch dispath this action
export const listQuestion = () => async (dispatch) => {
  try {
    // Recommend open QuestionReducer beside to understand this
    // First it will dispatch this action which match the fist case in questionListReducer
    // => reducer return {loading:true,question:[]}
    dispatch({type: QUESTION_LIST_REQUEST});
    // Fetch data from server using axios
    // Search for axios params to know how to pass query or params with axios
    const {data} = await axios.get("/api/questions");

    // The same as above
    dispatch({type: QUESTION_LIST_SUCCESS, payload: data});
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
