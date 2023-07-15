import React from "react";
import "../navbar/navbar.css";
import { navlinks } from "../../data/navlinks";
import Logo from "../../assets/logo/logo.png";
import { IconContext } from "react-icons";

function navBar() {
  return (
    <>
      <input type="checkbox" id="menu-open" className="hidden" />

      <label
        for="menu-open"
        className="absolute right-2 bottom-2 shadow-lg rounded-full z-10 p-2 bg-gray-100 text-gray-600 md:hidden"
        data-dev-hint="floating action button"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>

      <header
        className="bg-blue-200 text-gray-100 shadow-md flex justify-between md:hidden"
        data-dev-hint="mobile menu bar"
      >
        <a href="#" className="flex items-center ml-4">
          <img src={Logo} alt="KiddoLearns Logo" className="w-10" />
        </a>

        <label
          for="menu-open"
          id="mobile-menu-button"
          className="m-2 p-2 focus:outline-none hover:text-white bg-gray-700 rounded-full"
        >
          <svg
            id="menu-open-icon"
            className="h-6 w-6 transition duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            id="menu-close-icon"
            className="h-6 w-6 transition duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>
      </header>

      <aside
        id="sidebar"
        className="bg-blue-300 rounded-r-xl z-10 shadow-lg text-gray-100 md:w-64 w-3/4 drop-shadow-xl space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col overflow-y-auto"
        data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
      >
        <a href="#">
          <img src={Logo} alt="KiddoLearns Logo" className="w-20 ml-5" />
        </a>
        {navlinks
          .filter((navlink) => navlink.page)
          .map((page_navlinks) => (
            <div key={page_navlinks.id}>
              <div
                className="flex flex-col space-y-6"
                data-dev-hint="optional div for having an extra footer navigation"
              >
                <nav data-dev-hint="main navigation">
                  <a
                    href={page_navlinks.link}
                    className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-blue-200 rounded-lg mx-1 text-white font-medium font-primary"
                  >
                    <pan>
                      {" "}
                      <IconContext.Provider
                        value={{
                          color: "white",
                          size: "23px",
                        }}
                      >
                        {page_navlinks.icon}
                      </IconContext.Provider>
                    </pan>
                    <span>{page_navlinks.name}</span>
                  </a>
                </nav>
              </div>
            </div>
          ))}
      </aside>
    </>
  );
}

export default navBar;
