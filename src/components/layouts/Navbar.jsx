import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../logo.svg";

export const Navbar = () => {
  return (
    <div className="container-fluid" id="top">
      <nav className="nav fixed-top justify-content-between">
        <Link to="/website" className="nav-brand justify-content-start">
          <Logo className="logo" />
        </Link>

        <div className="justify-content-start">
          <Link to="/website" className="nav-link">
            Home
          </Link>

          <Link to="/profile" className="nav-link">
            Profile
          </Link>

          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/designs" className="nav-link">
            Designs+
          </Link>
        </div>
      </nav>
    </div>
  );
};
