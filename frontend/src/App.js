import "./App.css";
import Header from "./components/GlobalComponents/Header";
import ExamListScreen from "./screens/ExamListScreen";
import ExamDetailScreen from "./screens/ExamDetailScreen";
import LoginScreen from "./screens/LoginScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TestScreen from "./screens/TestScreen";
import TeacherScreen from "./screens/TeacherScreen";
import AdminScreen from "./screens/AdminScreen";
import ExamResultScreen from "./screens/ExamResultScreen";
import TeachersDetail from "./components/Admin/TeachersDetail"
import SubjectTimetable from "./components/Admin/SubjectTimetable"
import {BrowserRouter as Router, Route} from "react-router-dom";

import DragAndDrop from "./screens/DragAndDrop";

function App() {
  return (
    <Router>
      <Header />
      <section
        className="main-content"
        style={{width: "90%", margin: "0 auto"}}
      >
        <Route path="/test" component={TestScreen} exact />
        <Route path="/profile" component={ProfileScreen} exact />
        <Route path="/resetpassword" component={ResetPasswordScreen} exact />
        <Route path="/" component={LoginScreen} exact />
        <Route path="/exams" component={ExamListScreen} exact />
        <Route path="/exams/details/:id" component={ExamDetailScreen} exact />
        <Route path="/giangvien/" component={TeacherScreen} exact />
        <Route path="/exams/result" component={ExamResultScreen} exact />
        <Route path="/admin" component={AdminScreen} exact />
        <Route path="/chitietgiangvien" component={TeachersDetail} exact />
        <Route path="/thoikhoabieu" component={SubjectTimetable} exact />
        <Route path="/giangvien/draganddrop" component={DragAndDrop} exact />
      </section>
    </Router>
  );
}

export default App;
