import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {
  questionListReducer,
  questionReducer,
  questionCreateReducer,
} from "./reducers/QuestionReducers";
import {subjectListReducer} from "./reducers/SubjectListReducer";

const reducer = combineReducers({
  questionList: questionListReducer,
  questionCreate: questionCreateReducer,
  subjectList:subjectListReducer
});

const initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
