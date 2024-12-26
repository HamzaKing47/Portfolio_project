import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home"); // State for tracking the active menu item

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu); // Update the active menu
  };

  return (
    <div className="bg-gray-900 text-gray-100 font-sans min-h-screen h-full flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-12 flex-grow">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-4">
          {/* Left Section - Profile Image with Hover Effect */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start md:mb-0 md:ml-[80px] border-4 border-green-500 rounded-2xl p-6">
            <div className="group relative w-[220px] sm:w-[260px] md:w-[290px] lg:w-[320px] px xl:w-[360px] h-[294px] sm:h-[347px] md:h-[387px] lg:h-[427px] xl:h-[480px]">
              {/* First Image */}
              <img
                src="dp.jpg"
                alt="Profile Picture"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0"
              />

              {/* Second Image */}
              <img
                src="hoveredDp.jpg"
                alt="Hovered Profile Picture"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>

          {/* Right Section - Text */}
          <div className="w-full md:w-1/2 text-center md:text-left px-4 md:pr-20 md:pl-28 transition-all duration-300 ease-in-out">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Hi, I&apos;m <span className="text-green-500">Ameer Hamza.</span>{" "}
              A Web Developer.
            </h1>
            <p className="text-lg md:text-xl mb-10">
              I&apos;m a MERN Stack Developer specializing in building dynamic
              and scalable web applications. With expertise in React, Nodejs,
              and Tailwind CSS, I create user-centric interfaces and reliable
              backend systems. My focus is on delivering fast, secure, and
              high-performing solutions tailored to clients&apos; unique needs.
            </p>
            <div className="flex justify-center mt-10">
              <Link
                to="#resume"
                className="bg-green-600 text-white font-semibold text-lg md:text-xl py-4 px-8 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600 hover:shadow-[0_10px_25px_rgba(72,199,116,0.8)] hover:-translate-y-1 hover:tracking-wider"
              >
                Download CV/Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed top-1/2 right-6 transform -translate-y-1/2 flex flex-col space-y-5 md:space-y-5 transition-all duration-300 ease-in-out">
        {/* Menu Button for Mobile */}
        <button
          onClick={toggleMenu}
          className="bg-gray-700 p-5 rounded-full hover:bg-green-600 text-white flex items-center justify-center text-lg md:hidden transition-all duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {/* Smooth Transition for Menu */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } md:flex md:max-h-full md:opacity-100 md:flex-col md:space-y-5`}
        >
          <Link
            to="/"
            onClick={() => handleMenuClick("home")}
            className={`p-5 rounded-full flex items-center justify-center text-lg transition-all duration-300 ease-in-out ${
              activeMenu === "home"
                ? "bg-green-600"
                : "bg-gray-700 hover:bg-green-600"
            }`}
          >
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link
            to="/about"
            onClick={() => handleMenuClick("about")}
            className={`p-5 rounded-full flex items-center justify-center text-lg transition-all duration-300 ease-in-out ${
              activeMenu === "about"
                ? "bg-green-600"
                : "bg-gray-700 hover:bg-green-600"
            }`}
          >
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link
            to="/portfolio"
            onClick={() => handleMenuClick("portfolio")}
            className={`p-5 rounded-full flex items-center justify-center text-lg transition-all duration-300 ease-in-out ${
              activeMenu === "portfolio"
                ? "bg-green-600"
                : "bg-gray-700 hover:bg-green-600"
            }`}
          >
            <FontAwesomeIcon icon={faBriefcase} />
          </Link>
          <Link
            to="/contact"
            onClick={() => handleMenuClick("contact")}
            className={`p-5 rounded-full flex items-center justify-center text-lg transition-all duration-300 ease-in-out ${
              activeMenu === "contact"
                ? "bg-green-600"
                : "bg-gray-700 hover:bg-green-600"
            }`}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
//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