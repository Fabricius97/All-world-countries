import React, { useState } from "react";
import "../styles/Dropdown.css";
import lightarrowdown from "../assets/images/arrow-down-light.svg";
import darkarrowdown from "../assets/images/arrow-down-dark.svg";

const Dropdown = ({ isDarkMode, selectedRegion, setSelectedRegion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Filter by Region");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    if (option === "Filtered by Region") {
      setSelectedRegion("");
    } else {
      setSelectedRegion(option);
    }
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <div
        className={`dropdown-toggle ${isDarkMode ? "dark-mode" : "light-mode"}`}
        onClick={handleToggle}
      >
        <span className="dropdown-text">{selectedOption}</span>
        <svg
          className={`dropdown-icon ${isOpen ? "open" : ""}`}
          viewBox="0 0 20 30"
        >
          <image
            href={isDarkMode ? lightarrowdown : darkarrowdown}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
          />
        </svg>
      </div>
      {isOpen && (
        <ul
          className={`dropdown-menu ${isDarkMode ? "dark-mode" : "light-mode"}`}
        >
          <li
            onClick={() => handleSelectOption("Filtered by Region")}
            className={selectedRegion === "" ? "selected" : ""}
            style={{ opacity: 0.4 }}
          >
            All
          </li>
          <li
            onClick={() => handleSelectOption("Africa")}
            className={selectedRegion === "Africa" ? "selected" : ""}
          >
            Africa
          </li>
          <li
            onClick={() => handleSelectOption("Americas")}
            className={selectedRegion === "Americas" ? "selected" : ""}
          >
            Americas
          </li>
          <li
            onClick={() => handleSelectOption("Asia")}
            className={selectedRegion === "Asia" ? "selected" : ""}
          >
            Asia
          </li>
          <li
            onClick={() => handleSelectOption("Europe")}
            className={selectedRegion === "Europe" ? "selected" : ""}
          >
            Europe
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
