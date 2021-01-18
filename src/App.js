import "./css/App.css";
import { Navbar } from "./components/layouts/Navbar";
import { Experiences } from "./components/layouts/profile/Experiences";
import { Skills } from "./components/layouts/profile/Skills";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./components/layouts/Home";
import { Contact } from "./components/layouts/profile/Contact";
import { Projects } from "./components/layouts/projects/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <div className="container">
          <Home />
        </div>
      </Route>
      <Route path="/profile">
        <div className="container profile">
          <Skills />
          <Experiences />
          <Contact />
        </div>
      </Route>
      <Route path="/projects">
        <div className="container">
          <Projects />
        </div>
      </Route>
    </Router>
  );
}

export default App;
