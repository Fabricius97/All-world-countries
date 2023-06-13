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
        setFilteredData(filteredData);
      })
      .catch((error) => {
        console.log("An error occurred while fetching country data:", error);
      });
  }, []);

  const handleCountryPageNavigation = (name) => {
    // Validate the country name using the filteredData
    const isValidCountry = filteredData.some(
      (country) => country.name.common.toLowerCase() === name.toLowerCase()
    );

    if (isValidCountry) {
      navigate(`/countries/${name}`);
    } else {
      console.log("Invalid country name:", name);
    }
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
            />
          }
        />
        {data.map((stoffe, index) => {
          <Route
            key={index}
            path={`/countries/:name`}
            element={<CountryPage stoffe={stoffe} />}
          />;
        })}
      </Routes>
    </div>
  );
};

export default App;
