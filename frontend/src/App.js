import "./App.css";
import Header from "./components/GlobalComponents/Header";
import ExamListScreen from "./screens/ExamListScreen";
import ExamDetailScreen from "./screens/ExamDetailScreen";
import LoginScreen from "./screens/LoginScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TestScreen from "./screens/TestScreen";
import TeacherScreen from "./screens/TeacherScreen";
import ExamResultScreen from "./screens/ExamResultScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminExamList from "./screens/AdminExamList";
import AdminSubjectList from "./screens/AdminSubjectList";
import DragAndDrop from "./screens/DragAndDrop";
import Components from "./screens/Components";
import LecturerScreen from "./screens/LecturerScreen";

function App() {
  return (
    <Router>
      <Header />
      <section
        className="main-content"
        style={{ width: "90%", margin: "0 auto" }}
      >
        <Route path="/test" component={TestScreen} exact />
        <Route path="/profile" component={ProfileScreen} exact />
        <Route path="/resetpassword" component={ResetPasswordScreen} exact />
        <Route path="/" component={LoginScreen} exact />
        <Route path="/exams" component={ExamListScreen} exact />
        <Route path="/exams/:id" component={ExamDetailScreen} exact />
        <Route path="/giangvien/" component={TeacherScreen} exact />
        <Route path="/exams/result" component={ExamResultScreen} exact />
        <Route path="/admin/exams/list" component={AdminSubjectList} />
        <Route path="/components/customtable" component={Components} />
        <Route path="/giangvien/login" component={LecturerScreen} exact />
      </section>
    </Router>
  );
}

export default App;
