import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
export const Projects = () => {
  const { projects } = useContext(GlobalContext);
  return (
    <>
      {projects.map((project) => (
        <div className="project" key={project.id} id={project.id}>
          <div className="title">
            <h1 className="year">{project.title}</h1>
            <h2 className="p-name">{project.year}</h2>
          </div>
          <div className="language-container">
            {Object.keys(project.development).map((dev) => (
              <h4 key={dev}>{project.development[dev]}</h4>
            ))}
          </div>
          <div className="language-container">
            {Object.keys(project.language).map((lang) => (
              <li key={lang}>{project.language[lang]}</li>
            ))}
          </div>
          <div className="img-container">
            {Object.keys(project.images).map((img) => (
              <img src={project.images[img]} alt={img} key={img} />
            ))}
          </div>
          <div className="info-container">
            <div className="decription">
              <h3>What is it?</h3>
              {Object.keys(project.descriptions).map((info) => (
                <p key={info}>{project.descriptions[info]}</p>
              ))}
            </div>
            <div className="challenge">
              <h3>Challenges</h3>
              {Object.keys(project.challenges).map((chal) => (
                <p key={chal}>{project.challenges[chal]}</p>
              ))}
            </div>
          </div>
          <div className="btn-container">
            {
              Object.keys(project.button).map((buttonType) => (
                <a href={project.button[buttonType]}>
                  <button className="btn btn-fill">View {buttonType}</button>
                </a>
              ))
              //   Object.keys(project.button) === 2 ? (
              //     <>
              //       <a href={project.button[buttonType].github}>
              //         <button className="btn btn-fill">See It Live</button>
              //       </a>
              //     </>
              //   ) : (
              //     <>
              //       <a href={project.button[buttonType].github}>
              //         <button className="btn btn-fill">View Github</button>
              //       </a>
              //       <a href={project.button[buttonType].live}>
              //         <button className="btn btn-fill">View Live</button>
              //       </a>
              //     </>
              //   )
              // )
            }
          </div>
        </div>
      ))}
    </>
  );
};
