import React from "react";
import ArrowLong from "../image/arrowdot.png";

export const ScrollTop = () => {
  return (
    <div className="scroll-top">
      <a href="#top">
        <img src={ArrowLong} alt="arrow" />
      </a>
    </div>
  );
};
