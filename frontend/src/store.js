import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  questionListReducer,
  questionReducer,
  questionCreateReducer,
  getQuestionListBySubjectReducer,
} from "./reducers/QuestionReducers";
import {
  subjectListReducer,
  subjectDetailListReducer,
} from "./reducers/SubjectListReducer";
import {
  examListReducer,
  examReducer,
  tempExamReducer,
  createExamReducer,
  getExamListBYStudentReducer,
} from "./reducers/ExamReducer";
import { lecturerLoginReducer } from "./reducers/LecturerReducers";
import { studentLoginReducer } from "./reducers/StudentReducer";
import {
  postSubmittionReducer,
  changeQuestionIndex,
} from "./reducers/SubmittionReducers";

const reducer = combineReducers({
  questionList: questionListReducer,
  questionCreate: questionCreateReducer,
  subjectList: subjectListReducer,
  examList: examListReducer,
  exam: examReducer,
  tempExam: tempExamReducer,
  createExam: createExamReducer,
  lecturerLogin: lecturerLoginReducer,
  subjectDetailList: subjectDetailListReducer,
  questionListBySubject: getQuestionListBySubjectReducer,
  studentLogin: studentLoginReducer,
  examListByStudent: getExamListBYStudentReducer,
  postSubmittion: postSubmittionReducer,
  questionIndex: changeQuestionIndex,
});

const tempExamInitial = {
  DSCH: [],
};

const initialState = {
  tempExam: { tempExam: tempExamInitial },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
