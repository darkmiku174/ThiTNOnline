import {LECTURER_LOGIN_REQUEST, LECTURER_LOGIN_SUCCESS, LECTURER_LOGIN_FAIL, LECTURER_LOGOUT} from '../constants/LecturerConstants'
export const lecturerLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case LECTURER_LOGIN_REQUEST:
      return {loading: true}
    case LECTURER_LOGIN_SUCCESS:
      return {loading: true, lecturer: action.payload}
    case LECTURER_LOGIN_FAIL:
      return {loading: false, error: action.payload}
    case LECTURER_LOGOUT:
      return {}
    default:
      return state
  }
}
