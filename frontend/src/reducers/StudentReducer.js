import {
  STUDENT_LOGIN_FAIL,
  STUDENT_LOGIN_REQUEST,
  STUDENT_LOGIN_SUCCESS,
  STUDENT_LOGOUT,
} from "../constants/StudentConstants";

export const studentLoginReducer = (state = {}, action) => {
  console.log(action.type)
  switch (action.type) {
    case STUDENT_LOGIN_REQUEST:
      return {loading: true};
    case STUDENT_LOGIN_SUCCESS:
      return {loading: false, student: action.payload};
    case STUDENT_LOGIN_FAIL:
      return {loading: false, error: action.payload};
    case STUDENT_LOGOUT:
      return {}
    default:
      return state ? state : "";
  }
};
