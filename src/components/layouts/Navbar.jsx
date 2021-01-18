import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../logo.svg";

export const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="nav justify-content-between">
        <Link to="/" className="nav-brand justify-content-start">
          <Logo className="logo" />
        </Link>

        <div className="justify-content-start">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/profile" className="nav-link">
            Profile
          </Link>

          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </div>
      </nav>
    </div>
  );
};
