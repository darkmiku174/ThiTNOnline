import {
  SUBJECT_DETAIL_LIST_FAIL,
  SUBJECT_DETAIL_LIST_REQUEST,
  SUBJECT_DETAIL_LIST_SUCCESS,
  SUBJECT_LIST_FAIL,
  SUBJECT_LIST_REQUEST,
  SUBJECT_LIST_SUCCESS,
} from "../constants/SubjectConstants";

export const subjectListReducer = (state = { subjectList: [] }, action) => {
  switch (action.type) {
    case SUBJECT_LIST_REQUEST:
      return { loading: true };
    case SUBJECT_LIST_SUCCESS:
      return { loading: true, subjects: action.payload };
    case SUBJECT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const subjectDetailListReducer = (
  state = { subjectDetailList: [] },
  action
) => {
  switch (action.type) {
    case SUBJECT_DETAIL_LIST_REQUEST:
      return { loading: true };
    case SUBJECT_DETAIL_LIST_SUCCESS:
      return { loading: false, subjectDetailList: action.payload };
    case SUBJECT_DETAIL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
