import React, { useState } from "react";
import "./../styles/Search.css";

const Search = ({ onSearch, isDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        className={`search-bar ${isDarkMode ? "dark-mode" : ""}`}
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Search;
