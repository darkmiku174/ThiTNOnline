import {
  QUESTION_CREATE_REQUEST,
  QUESTION_CREATE_SUCCESS,
  QUESTION_CREATE_FAIL,
  QUESTION_CREATE_RESET,
  QUESTION_LIST_REQUEST,
  QUESTION_LIST_SUCCESS,
  QUESTION_LIST_FAIL,
  QUESTION_REQUEST,
  QUESTION_SUCCESS,
  QUESTION_FAIL
} from "../constants/QuestionConstants";

export const questionListReducer = (state = {questions: []}, action) => {
  switch (action.type) {
    case QUESTION_LIST_REQUEST:
      return {loading: true, questions: []};
    case QUESTION_LIST_SUCCESS:
      return {loading: false, questions: action.payload};
    case QUESTION_LIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

export const questionReducer = (state = {}, action) => {
  switch (action.type) {
    case QUESTION_REQUEST:
      return {loading: true, question: {}};
    case QUESTION_SUCCESS:
      return {loading: false, question: action.payload};
    case QUESTION_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
}

export const questionCreateReducer = (
  state = {questionCreated: {}},
  action
) => {
  switch (action.type) {
    case QUESTION_CREATE_REQUEST:
      return {loading: true, questionCreated: {}};
    case QUESTION_CREATE_SUCCESS:
      return {loading: false, questionCreated: action.payload};
    case QUESTION_CREATE_FAIL:
      return {loading: false, error: action.payload};
    case QUESTION_CREATE_RESET:
      return {questionCreated: {}};
    default:
      return state;
  }
};
