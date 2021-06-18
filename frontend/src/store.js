import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {
  questionListReducer,
  questionReducer,
  questionCreateReducer,
  getQuestionListBySubjectReducer, deleteQuestionReducer,
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
  getExamListBYStudentReducer, deleteExamReducer,
} from "./reducers/ExamReducer";
import {lecturerLoginReducer, updateLecturerInfoReducer} from "./reducers/LecturerReducers";
import {studentLoginReducer} from "./reducers/StudentReducer";
import {
  postSubmittionReducer,
  changeQuestionIndex, getStudentSubmittionReducer, studentDidQuestionReducer,
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
  studentSubmittions: getStudentSubmittionReducer,
  updateLecturerInfo: updateLecturerInfoReducer,
  deleteExam: deleteExamReducer,
  deleteQuestion: deleteQuestionReducer,
  studentDidQuestion: studentDidQuestionReducer
});

const tempExamInitial = {
  DSCH: [],
};

const submittion = localStorage.getItem("submittion") ? JSON.parse(localStorage.getItem("submittion")) : null

const studentInfoFromStorage = localStorage.getItem("studentInfo") ? JSON.parse(localStorage.getItem("studentInfo")) : null
const lecturerInfoFromStorage = localStorage.getItem("lecturerInfo") ? JSON.parse(localStorage.getItem("lecturerInfo")) : null


const initialState = {
  tempExam: {tempExam: tempExamInitial},
  studentLogin: {studentInfo: studentInfoFromStorage},
  lecturerLogin: {lecturerInfo: lecturerInfoFromStorage},
  studentDidQuestion: {submittion: submittion}
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
