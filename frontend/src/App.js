import "./App.css";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ExamDetailScreen from "./screens/ExamDetailScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <section className="main-content">
        <Route path="/exams" component={HomeScreen} exact />
        <Route path="/exams/details/:id" component={ExamDetailScreen} />
      </section>
    </Router>
  );
}

export default App;
