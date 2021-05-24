import {
    EXAM_LIST_FAIL,
    EXAM_LIST_REQUEST,
    EXAM_LIST_SUCCESS, GET_EXAM_FAIL,
    GET_EXAM_REQUEST,
    GET_EXAM_SUCCESS
} from "../constants/ExamConstants";
import axios from "axios";

export const examListAction =() => async (dispatch) =>{
    try{
        dispatch({type:EXAM_LIST_REQUEST})
        const {data} = await axios.get("/api/exams")
        const examDetail = await axios.get("/api/examDetails")
        dispatch({type:EXAM_LIST_SUCCESS,payload:data})
    }catch (error){
        dispatch({
            type: EXAM_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const examAction = (id) => async (dispatch) =>{
    try{
        dispatch({type:GET_EXAM_REQUEST})
        const {data} = await  axios.get(`/api/exams/${id}`)
        dispatch({type:GET_EXAM_SUCCESS,payload:data})
    }catch(error){
        dispatch({
            type:GET_EXAM_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}