import React, { useState, useEffect } from "react";
import "./../styles/Search.css";

const Search = ({ onSearch, isDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      onSearch(searchTerm);
    }, 300); // Vänta 300 ms innan sökningen aktiveras

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm, onSearch]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Förhindra standard beteende av Enter-tangenten
      onSearch(searchTerm);
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
