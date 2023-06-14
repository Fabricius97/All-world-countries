import React, { useState, useEffect } from "react";
import "./../styles/HomePage.css";
import Search from "./Search";
import Dropdown from "./Dropdown";
import CountryCard from "./CountryCard";

import data from "../../data.json";

const HomePage = ({
  isDarkMode,
  handleCountryPageNavigation,
  formatPopulation,
}) => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    handleSearch(searchTerm);
  }, [selectedRegion, searchTerm]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);

    const filteredResults = data.filter((country) => {
      const matchesSearchTerm = country.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRegion =
        (selectedRegion === "" || country.region === selectedRegion) &&
        ["Asia", "Europe", "Americas", "Africa"].includes(country.region);

      return matchesSearchTerm && matchesRegion;
    });

    setSearchResults(filteredResults);
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  return (
    <div className="homePage">
      <div className="searchAndFilter">
        <Search isDarkMode={isDarkMode} onSearch={handleSearch} />
        <Dropdown
          isDarkMode={isDarkMode}
          selectedRegion={selectedRegion}
          setSelectedRegion={handleRegionSelect}
        />
      </div>
      <div className="cards">
        <CountryCard
          isDarkMode={isDarkMode}
          countryData={searchResults.length > 0 ? searchResults : data}
          handleCountryPageNavigation={handleCountryPageNavigation}
          formatPopulation={formatPopulation}
        />
      </div>
    </div>
  );
};

export default HomePage;
