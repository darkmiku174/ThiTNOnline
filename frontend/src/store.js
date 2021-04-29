import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  questionListReducer,
  questionCreateReducer,
} from "./reducers/QuestionReducers";

const reducer = combineReducers({
  questionList: questionListReducer,
  questionCreate: questionCreateReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
