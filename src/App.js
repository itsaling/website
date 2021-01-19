import "./css/App.css";
import { Navbar } from "./components/layouts/Navbar";
import { Experiences } from "./components/layouts/profile/Experiences";
import { Skills } from "./components/layouts/profile/Skills";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./components/layouts/Home";
import { Contact } from "./components/layouts/profile/Contact";
import { Projects } from "./components/layouts/projects/Projects";
import { Footer } from "./components/Footer";
import { Scroll } from "./components/layouts/profile/Scroll";
import { ScrollProjects } from "./components/layouts/projects/ScrollProjects";
import { ScrollTop } from "./components/ScrollTop";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/website">
        <div className="container">
          <Home />
        </div>
      </Route>
      <Route path="/profile">
        <>
          <Scroll />
          <div className="container profile">
            <Skills />
            <Experiences />
            <Contact />
          </div>
        </>
      </Route>
      <Route path="/projects">
        <>
          <ScrollProjects />
          <div className="container project-container">
            <Projects />
          </div>
        </>
      </Route>
      <ScrollTop />
      <Footer />
    </Router>
  );
}

export default App;
