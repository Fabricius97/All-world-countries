import React from "react";
import { Link } from "react-router-dom";
import "../styles/CountryCard.css";

const CountryCard = ({ isDarkMode, countryData }) => {
  const formatPopulation = (population) => {
    const formattedPopulation = population
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedPopulation;
  };

  return (
    <div className="countryCardContainer">
      {countryData.map((country, index) => (
        <div
          key={index}
          className={`countryCard ${isDarkMode ? "dark-mode" : "light-mode"}`}
        >
          <Link
            to={`/countries/${country.name.common}`} // Använd unik identifierare här
            className={`countryCard-link ${
              isDarkMode ? "dark-mode" : "light-mode"
            }`}
          >
            <img src={country.flags.png} alt="Flag" />
            <div className="cardText">
              <h3>{country.name.common}</h3>
              <p>
                <span>Population:</span> {formatPopulation(country.population)}
              </p>
              <p>
                <span>Region:</span> {country.region}
              </p>
              <p>
                <span>Capital:</span> {country.capital}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CountryCard;
