import {
  LECTURER_LOGIN_REQUEST,
  LECTURER_LOGIN_SUCCESS,
  LECTURER_LOGIN_FAIL,
  LECTURER_LOGOUT,
  UPDATE_LECTURER_INFO_REQUEST, UPDATE_LECTURER_INFO_FAIL, UPDATE_LECTURER_INFO_RESET, UPDATE_LECTURER_INFO_SUCCESS
} from '../constants/LecturerConstants'
export const lecturerLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case LECTURER_LOGIN_REQUEST:
      return {loading: true}
    case LECTURER_LOGIN_SUCCESS:
      return {loading: false, lecturerInfo: action.payload}
    case LECTURER_LOGIN_FAIL:
      return {loading: false, error: action.payload}
    case LECTURER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const updateLecturerInfoReducer=(state={},action)=>{
  switch (action.type){
    case UPDATE_LECTURER_INFO_REQUEST:
      return {loading:true}
    case UPDATE_LECTURER_INFO_SUCCESS:
      return {loading:false,message:action.payload}
    case UPDATE_LECTURER_INFO_FAIL:
      return {loading:false,error:action.payload}
    case UPDATE_LECTURER_INFO_RESET:
      return {}
    default:
      return state
  }
}
