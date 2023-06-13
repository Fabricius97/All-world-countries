import React, { useState, useEffect } from "react";
import "./../styles/HomePage.css";
import Search from "./Search";
import Dropdown from "./Dropdown";
import CountryCard from "./CountryCard";

const HomePage = ({
  isDarkMode,
  filteredData,
  handleCountryPageNavigation,
}) => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    handleSearch(searchTerm);
  }, [filteredData, selectedRegion, searchTerm]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);

    const filteredResults = filteredData.filter((country) => {
      const matchesSearchTerm = country.name.common
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRegion =
        selectedRegion === "" || country.region === selectedRegion;

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
          countryData={searchResults.length > 0 ? searchResults : filteredData}
          handleCountryPageNavigation={handleCountryPageNavigation}
        />
      </div>
    </div>
  );
};

export default HomePage;
