import React from "react";
import "./../styles/Navbar.css";
import darklogo from "./../assets/images/logo-dark.png";
import lightlogo from "./../assets/images/logo-light.png";
import moonBordered from "./../assets/images/moon-bordered.svg";
import moon from "./../assets/images/moon.svg";

const Navbar = ({ isDarkMode, handleDarkModeToggle }) => {
  const logoSrc = isDarkMode ? lightlogo : darklogo;

  return (
    <div className={`navbar ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="navbar-text">
        <h4>The Flag App</h4>
      </div>
      <div className="navbar-logo">
        <img src={logoSrc} alt="Techover Logo" />
      </div>
      <button
        className="dark-light-btn"
        onClick={handleDarkModeToggle}
        style={{ color: isDarkMode ? "white" : "black" }}
      >
        {isDarkMode ? (
          <>
            <img src={moon} alt="moon" />
            Light Mode
          </>
        ) : (
          <>
            <img src={moonBordered} alt="moon bordered" />
            Dark Mode
          </>
        )}
      </button>
    </div>
  );
};

export default Navbar;
