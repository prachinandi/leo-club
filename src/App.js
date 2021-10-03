import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Event from "./pages/Events";
import Projects from "./pages/projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/event" exact component={Event} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
          
        <Footer />
      </Router>
    </div>
  );
}

export default App;
