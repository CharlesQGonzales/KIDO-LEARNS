import React from "react";
import Avatar from "../../assets/ABOUTIMG/student.gif";
import ButtonPrimary from "../../components/buttonPrimary/buttonPrimary";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center pt-20 pr-6 md:pr-0 md:pt-40 bg-[#BAE6FD]"
    >
      <div className="flex flex-row gap-24">
        <div className="flex justify-center md:visible invisible">
          <img
            src={Avatar}
            alt="student walking gif"
            className="filter-drop-shadow "
          />
        </div>
        <div className="flex flex-col items-center gap-5 justify-center">
          <p className="font-primary md:text-3xl text-xl font-semibold text-yellow-600">
            ABOUT
          </p>
          <h1 className="font-secondary md:text-8xl text-6xl text-indigo-400 text-shadow">
            Support Children
            <br />
            Developing Skills
          </h1>
          <p className="font-primary md:text-xl font-semibold md:px-14">
            Education is the process of facilitating learning.
            <br />
            or the acquisition of knowledge. skills, values, morals, beliefs,
            and habits
          </p>
          <ButtonPrimary>ABOUT US</ButtonPrimary>
        </div>
      </div>
    </div>
  );
}

export default About;
