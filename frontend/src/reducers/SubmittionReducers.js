import {
  GET_STUDENT_SUBMITTIONS_FAIL,
  GET_STUDENT_SUBMITTIONS_REQUEST, GET_STUDENT_SUBMITTIONS_SUCCESS,
  POST_SUBMITTION_FAIL,
  POST_SUBMITTION_REQUEST,
  POST_SUBMITTION_SUCESS,
} from "../constants/submittionConstants";

export const postSubmittionReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_SUBMITTION_REQUEST:
      return {loading: true};
    case POST_SUBMITTION_SUCESS:
      return {loading: false, postedSubmittion: action.payload};
    case POST_SUBMITTION_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

export const changeQuestionIndex = (state = {questionIndex: 0}, action) => {
  if (action.type === "CHANGE_QUESTION_INDEX") {
    return {questionIndex: action.payload};
  }
  return state;
};

export const getStudentSubmittionReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_STUDENT_SUBMITTIONS_REQUEST:
      return {loading: true}
    case GET_STUDENT_SUBMITTIONS_SUCCESS:
      return {loading: false, submittions: action.payload}
    case GET_STUDENT_SUBMITTIONS_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
}

export const studentDidQuestionReducer = (state = {}, action) => {
  if (action.type === "STUDENT_DID_QUESTION") {
    const submittion = JSON.parse(localStorage.getItem("submittion"))
    return {submittion: submittion}
  }
  return state
}
