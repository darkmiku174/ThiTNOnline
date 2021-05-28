import {
  POST_SUBMITTION_FAIL,
  POST_SUBMITTION_REQUEST,
  POST_SUBMITTION_SUCESS,
} from "../constants/submittionConstants";

export const postSubmittionReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_SUBMITTION_REQUEST:
      return { loading: true };
    case POST_SUBMITTION_SUCESS:
      return { loading: false, postedSubmittion: action.payload };
    case POST_SUBMITTION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const changeQuestionIndex = (state = { questionIndex: 0 }, action) => {
  if (action.type === "CHANGE_QUESTION_INDEX") {
    return { questionIndex: action.payload };
  }
  return state;
};
