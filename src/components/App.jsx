import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import CountryPage from "./CountryPage";

import data from "../../data.json";
import "./../styles/App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const appBackgroundColor = isDarkMode ? "#202C36" : "#F2F2F2";

  useEffect(() => {
    // Filter the data based on regions
    const filteredData = data.filter(
      (country) =>
        country.region === "Asia" ||
        country.region === "Europe" ||
        country.region === "Americas" ||
        country.region === "Africa"
    );
    setFilteredData(filteredData);
  }, []);

  const handleCountryPageNavigation = (name) => {
    // Validate the country name using the filteredData
    const isValidCountry = filteredData.some(
      (country) => country.name.toLowerCase() === name.toLowerCase()
    );

    if (isValidCountry) {
      navigate(`/countries/${name}`);
    } else {
      console.log("Invalid country name:", name);
    }
  };

  const formatPopulation = (population) => {
    const formattedPopulation = population
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedPopulation;
  };

  return (
    <div className="App" style={{ backgroundColor: appBackgroundColor }}>
      <Navbar
        isDarkMode={isDarkMode}
        handleDarkModeToggle={handleDarkModeToggle}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              isDarkMode={isDarkMode}
              filteredData={filteredData}
              handleCountryPageNavigation={handleCountryPageNavigation}
              formatPopulation={formatPopulation}
            />
          }
        />
        {filteredData.map((country, index) => (
          <Route
            key={index}
            path={`/countries/${country.name}`}
            element={
              <CountryPage
                country={country}
                isDarkMode={isDarkMode}
                filteredData={filteredData}
                formatPopulation={formatPopulation}
              />
            }
          />
        ))}
      </Routes>
    </div>
  );
};

export default App;
