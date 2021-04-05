import "./App.css";
import Header from "./components/Header";
import ExamListScreen from "./screens/ExamListScreen";
import ExamDetailScreen from "./screens/ExamDetailScreen";
import LoginScreen from "./screens/LoginScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TestScreen from "./screens/TestScreen";
import TeacherScreen from "./screens/TeacherScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
        <Route path="/exams/details/:id" component={ExamDetailScreen} exact />
        <Route path="/giangvien" component={TeacherScreen} exact />
      </section>
    </Router>
  );
}

export default App;
