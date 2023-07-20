import React from "react";
import Avatar from "../../assets/ABOUTIMG/student.gif";
import ButtonPrimary from "../../components/buttonPrimary/buttonPrimary";
import { abouts } from "../../data/about";

function About() {
  return (
    <>
      <div
        id="about"
        className="flex flex-row-reverse pl-10 justify-center md:grid md:grid-cols-[400px_minmax(900px,_1fr)] md:pr-0 bg-[#BAE6FD] md:pl-[400px]"
      >
        <div className="flex justify-end">
          <img
            src={Avatar}
            alt="student walking gif"
            className="filter-drop-shadow invisible md:visible"
          />
        </div>
        <div className="flex flex-col items-center gap-5 justify-end">
          <h1 className="font-secondary md:text-8xl text-6xl text-indigo-400 text-shadow">
            Support Children
            <br />
            Developing Skills
          </h1>
          <p className="font-primary md:text-xl font-semibold md:w-[650px]">
            Education is the process of facilitating learning. or the
            acquisition of knowledge. skills, values, morals, beliefs, and
            habits
          </p>
          <ButtonPrimary>ABOUT US</ButtonPrimary>
        </div>
      </div>
      <div className="flex md:gap-[400px] gap-10 justify-center md:py-20 py-10 bg-[#BAE6FD] pl-6 md:pl-[400px]">
        {abouts
          .filter((about) => about.info)
          .map((info_abouts) => (
            <div key={info_abouts.id}>
              <div>
                <p className="md:text-3xl text-2xl flex gap-2 font-semibold font-primary text-yellow-600">
                  {info_abouts.count}
                  <img
                    src={info_abouts.icon}
                    alt="student icon"
                    className="md:w-20 w-10 hover:hover-transform drop-shadow-icon pb-2"
                  />
                </p>
                <p className="font-semibold md:text-lg text-base leading-4 font-primary">
                  {info_abouts.subtext}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default About;
