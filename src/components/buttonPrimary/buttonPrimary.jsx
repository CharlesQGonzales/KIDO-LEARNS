import React from "react";
import "./buttonPrimary.css";

function buttonPrimary(props) {
  return (
    <button className="relative m-auto py-3 px-5 border-none bg-none transition-all duration-[0.2s] ease-linear before:content-space before:absolute before:top-0 before:left-0 before:block before:rounded-[50px] before:bg-blue-200 before:w-11 before:h-11 before:transition-all before:duration-[0.3s] before:ease-linear hover:before:w-full hover:before:bg-blue-200 active:transform active:scale-95">
      <span className="relative font-primary text-lg font-semibold text-blue-950">
        {props.children}
      </span>
      <svg
        viewBox="0 0 13 10"
        height="10px"
        width="15px"
        className="relative top-0 ml-3 fill-none stroke-blue-950"
      >
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </button>
  );
}

export default buttonPrimary;
