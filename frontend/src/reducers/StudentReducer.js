import {
  STUDENT_LOGIN_FAIL,
  STUDENT_LOGIN_REQUEST,
  STUDENT_LOGIN_SUCCESS,
} from "../constants/StudentConstants";

export const studentLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDENT_LOGIN_REQUEST:
      return { loading: true };
    case STUDENT_LOGIN_SUCCESS:
      return { loading: false, student: action.payload };
    case STUDENT_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state ? state : "";
  }
};
