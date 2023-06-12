import React, { useState, useEffect } from "react";
import "./../styles/HomePage.css";
import Search from "./Search";
import Dropdown from "./Dropdown";
import CountryCard from "./CountryCard";

const HomePage = ({ isDarkMode }) => {
  const [countryData, setCountryData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region"
    )
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter(
          (country) =>
            country.region === "Asia" ||
            country.region === "Europe" ||
            country.region === "Americas" ||
            country.region === "Africa"
        );
        setCountryData(filteredData);
      })
      .catch((error) => {
        console.log("Ett fel uppstod vid hämtning av landsdata:", error);
      });
  }, []);

  useEffect(() => {
    handleRegionSelect(selectedRegion);
  }, [selectedRegion]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);

    const filteredResults = countryData.filter((country) => {
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

    const filteredResults = countryData.filter((country) => {
      const matchesSearchTerm =
        searchTerm.trim() === "" ||
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = region === "" || country.region === region;

      return matchesSearchTerm && matchesRegion;
    });

    setSearchResults(filteredResults);
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
          countryData={searchResults.length > 0 ? searchResults : countryData}
        />
      </div>
    </div>
  );
};

export default HomePage;
