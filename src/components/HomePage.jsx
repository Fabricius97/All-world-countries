import React from "react";
import "./../styles/HomePage.css";
import Search from "./Search";
import Dropdown from "./Dropdown";

const HomePage = ({ isDarkMode }) => {
  const handleSearch = (searchTerm) => {
    // Utför söklogiken här baserat på den givna söktermen
    console.log("Sökt efter:", searchTerm);
    // Uppdatera state, gör API-anrop, filtrera data, etc.
  };
  return (
    <div className="homePage">
      <div className="searchAndFilter">
        <Search isDarkMode={isDarkMode} onSearch={handleSearch} />
        <Dropdown isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default HomePage;
