import "./App.css";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <section class="main-content">
        <HomeScreen />
      </section>
    </Router>
  );
}

export default App;
