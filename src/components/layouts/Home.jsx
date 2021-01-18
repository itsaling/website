import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container text-center home">
      <h2>Introducing</h2>
      <h1>Latsdavanh Le, aka Aling</h1>
      <h3>Web Developer</h3>
      <p>I love programming memes </p>
      <div className="btn-container">
        <Link to="/profile">
          <button className="btn btn-border">
            my profile <i class="fas fa-chevron-right"></i>
          </button>
        </Link>
        <br></br>
        <Link to="/experiences">
          <button className="btn btn-border">
            my Projects <i class="fas fa-chevron-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};
