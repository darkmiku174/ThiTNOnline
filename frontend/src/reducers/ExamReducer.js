import {
  CREATE_EXAM_FAIL,
  CREATE_EXAM_REQUEST,
  CREATE_EXAM_SUCCESS,
  EXAM_LIST_FAIL,
  EXAM_LIST_REQUEST,
  EXAM_LIST_SUCCESS,
  GET_EXAM_FAIL,
  GET_EXAM_LIST_BY_STUDENT_FAIL,
  GET_EXAM_LIST_BY_STUDENT_REQUEST,
  GET_EXAM_LIST_BY_STUDENT_SUCCESS,
  GET_EXAM_REQUEST,
  GET_EXAM_SUCCESS,
} from "../constants/ExamConstants";

export const examListReducer = (state = { exams: [] }, action) => {
  switch (action.type) {
    case EXAM_LIST_REQUEST:
      return { loading: true };
    case EXAM_LIST_SUCCESS:
      return { loading: false, exams: action.payload };
    case EXAM_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const examReducer = (state = { exam: {} }, action) => {
  switch (action.type) {
    case GET_EXAM_REQUEST:
      return { loading: true };
    case GET_EXAM_SUCCESS:
      return { loading: false, exam: action.payload };
    case GET_EXAM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tempExamReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TEMP_EXAM":
      return { tempExam: { ...state.tempExam, ...action.payload } };
    default:
      return state ? state : "";
  }
};

export const createExamReducer = (state = { exam: {} }, action) => {
  switch (action.type) {
    case CREATE_EXAM_REQUEST:
      return { loading: true };
    case CREATE_EXAM_SUCCESS:
      return { loading: true, exam: action.payload };
    case CREATE_EXAM_FAIL:
      return { loading: false, errro: action.payload };
    default:
      return state;
  }
};

export const getExamListBYStudentReducer = (state = { exams: [] }, action) => {
  switch (action.type) {
    case GET_EXAM_LIST_BY_STUDENT_REQUEST:
      return { loading: true, exams: [] };
    case GET_EXAM_LIST_BY_STUDENT_SUCCESS:
      return { loading: false, exams: action.payload };
    case GET_EXAM_LIST_BY_STUDENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
