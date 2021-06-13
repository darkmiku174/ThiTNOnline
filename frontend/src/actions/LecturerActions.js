import {
  LECTURER_LOGIN_REQUEST,
  LECTURER_LOGIN_SUCCESS,
  LECTURER_LOGIN_FAIL,
  LECTURER_LOGOUT,
  UPDATE_LECTURER_INFO_SUCCESS,
  UPDATE_LECTURER_INFO_FAIL,
  UPDATE_LECTURER_INFO_REQUEST,
} from "../constants/LecturerConstants";
import axios from "axios";
import {studentLogoutAction} from "./StudentActions";
export const lecturerLoginAction = (input) => async (dispatch) => {
  try {
    dispatch(studentLogoutAction())
    dispatch({type: LECTURER_LOGIN_REQUEST});
    const {data} = await axios.post(
      `/api/lecturers/login?cmnd=${input.cmnd}&password=${input.password}`
    );
    localStorage.setItem("lecturerInfo", JSON.stringify(data));
    dispatch({type: LECTURER_LOGIN_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: LECTURER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const lecturerLogoutAction = () => async (dispatch) => {
  localStorage.removeItem("lecturerInfo")
  dispatch({type: LECTURER_LOGOUT})
}

export const updateLecturerInfo=(input)=>async(dispatch,getState)=>{
  try{
    dispatch({type:UPDATE_LECTURER_INFO_REQUEST})
    const {
      lecturerLogin:{lecturerInfo}
    } = getState()
    const config ={
      headers:{
        Authorization: `Bearer ${lecturerInfo.token}`,
      }
    }
    const {data} = await axios.put(`/api/lecturers/${lecturerInfo._id}`,input,config)
    dispatch({type:UPDATE_LECTURER_INFO_SUCCESS,payload:data})
  }catch(error){
    const message =
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(lecturerLogoutAction())
    }
    dispatch({
      type: UPDATE_LECTURER_INFO_FAIL,
      payload: message,
    })
  }
}
