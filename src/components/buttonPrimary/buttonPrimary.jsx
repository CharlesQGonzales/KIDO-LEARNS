import React from "react";
import "./buttonPrimary.css";

function buttonPrimary(props) {
  return (
    <button className="learn-more relative inline-block cursor-pointer outline-none border-none no-underline bg-transparent p-0 w-48 h-auto align-middle">
      <span
        className="circle relative block m-0 w-12 h-12 bg-blue-300 rounded-[1.625rem] button-primary-t"
        aria-hidden="true"
      >
        <span className="icon arrow absolute top-0 bottom-0 m-auto button-primary-t left-[0.625rem] w-[1.125rem] h-[0.125rem] bg-none before:absolute before:content-space before:-top-[0.25rem] before:right-[0.0625rem] before:w-[0.625rem] before:h-[0.625rem] before:border-t-[0.125rem] before:border-solid before:border-r-[0.125rem] before:rotate-45 border-white"></span>
      </span>
      <span className="button-text button-primary-t absolute top-0 left-0 right-0 bottom-0 py-[0.75rem] px-0 ml-[1.85rem] text-black font-semibold font-primary leading-[1.6] text-center uppercase">
        Learn More
      </span>
    </button>
  );
}

export default buttonPrimary;
