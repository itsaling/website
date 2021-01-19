import React, { useContext } from "react";
import ArrowLong from "../../../image/arrowdot.png";
import { GlobalContext } from "../../context/GlobalState";
export const ScrollProjects = () => {
  const { projects } = useContext(GlobalContext);
  return (
    <div className="scroll-tab">
      <div className="arrow">
        <img src={ArrowLong} alt="arrow" />
      </div>
      {projects.map((info) => (
        <div className="scroll1" key={info.id}>
          <a href={`#${info.id}`}>◐</a>
        </div>
      ))}
    </div>
  );
};
