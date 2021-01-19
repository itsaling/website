import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export const Experiences = () => {
  const { experiences } = useContext(GlobalContext);

  return (
    <div className="experiences">
      <h1>Experiences</h1>
      {experiences.map((job) => (
        <div className="company" id={job.id} key={job.id}>
          <h3>{job.company}</h3>
          <h4>{job.title}</h4>
          <h4>{job.date}</h4>
          {Object.keys(job.descriptions).map((info) => (
            <li key={info}>{job.descriptions[info]}</li>
          ))}
        </div>
      ))}
    </div>
  );
};
