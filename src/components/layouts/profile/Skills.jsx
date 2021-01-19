import React from "react";

export const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="icon-container">
        <img
          src="https://itsaling.github.io/Assets/Icons/html-5.svg"
          alt="html5"
        />
        <img src="https://itsaling.github.io/Assets/Icons/css.svg" alt="css" />
        <img
          src="https://itsaling.github.io/Assets/Icons/sass.svg"
          alt="sass/scss"
        />
        <img
          src="https://itsaling.github.io/Assets/Icons/javascript.svg"
          alt="javascript"
        />
        <img src="https://itsaling.github.io/Assets/Icons/php.svg" alt="php" />
        <img
          src="https://itsaling.github.io/Assets/Icons/github-logo.svg"
          alt="github"
        />
      </div>
      <br></br>
      <div className="skill-text-container">
        <p>SQL</p>
        <p>Bootstrap</p>
        <p>Responsive Web Design</p>
        <p>UI/UX</p>
      </div>
      <br />
      <h2>Familiar</h2>
      <br />
      <div className="skill-text-container">
        <p>Andriod Development</p>
        <p>React.js</p>
      </div>
    </div>
  );
};
