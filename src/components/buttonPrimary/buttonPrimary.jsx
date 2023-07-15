import React from "react";
import "./buttonPrimary.css";

function buttonPrimary(props) {
  return (
    <button className="learn-more relative inline-block cursor-pointer outline-none border-none no-underline bg-transparent p-0 font-primary w-48 h-auto">
      <span
        className="circle relative block m-0 w-12 h-12 bg-blue-300"
        aria-hidden="true"
      >
        <span className="icon arrow absolute top-0 bottom-0 m-auto"></span>
      </span>
      <span className="button-text">Learn More</span>
    </button>
  );
}

export default buttonPrimary;
