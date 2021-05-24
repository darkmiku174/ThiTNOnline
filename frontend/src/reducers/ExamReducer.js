import {
    EXAM_LIST_FAIL,
    EXAM_LIST_REQUEST,
    EXAM_LIST_SUCCESS, GET_EXAM_FAIL,
    GET_EXAM_REQUEST,
    GET_EXAM_SUCCESS
} from "../constants/ExamConstants";

export const examListReducer = (state ={exams:[]},action) =>{
    switch (action.type){
        case EXAM_LIST_REQUEST:
            return {loading:true}
        case EXAM_LIST_SUCCESS:
            return {loading:false,exams:action.payload}
        case EXAM_LIST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}

export const examReducer = (state ={exams:[]},action) =>{
    switch (action.type){
        case GET_EXAM_REQUEST:
            return {loading:true}
        case GET_EXAM_SUCCESS:
            return {loading:false,exam:action.payload}
        case GET_EXAM_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}