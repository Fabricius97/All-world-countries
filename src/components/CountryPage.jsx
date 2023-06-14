import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/CountryPage.css";
import lightbtn from "../assets/images/arrow-left-dark.svg";
import darkbtn from "../assets/images/arrow-left.svg";

const CountryPage = ({
  country,
  isDarkMode,
  filteredData,
  formatPopulation,
}) => {
  const selectedCountry = country;
  const navigate = useNavigate();

  if (!selectedCountry) {
    return <div>Country not found!</div>;
  }

  const btnImage = isDarkMode ? darkbtn : lightbtn;
  const textColor = isDarkMode ? "#ffffff" : "#000000";
  const backgroundColor = isDarkMode ? "#2b3844" : "#ffffff";

  const getNativeNames = () => {
    const nativeNames = Object.values(selectedCountry.nativeName).map(
      (value) => {
        return value;
      }
    );
    return nativeNames;
  };

  const nativeNames = getNativeNames();

  const getFullBorderNames = () => {
    if (!selectedCountry.borders) {
      return [];
    }

    const fullBorderNames = selectedCountry.borders
      .filter((borderCode) => borderCode) // Filter out null or undefined values
      .map((borderCode) => {
        const borderCountry = filteredData.find(
          (country) => country.alpha3Code === borderCode
        );
        return borderCountry ? borderCountry.name : borderCode;
      });
    console.log(fullBorderNames);
    return fullBorderNames;
  };

  const fullBorderNames = getFullBorderNames();

  return (
    <div className="countryPage" style={{ color: textColor }}>
      <div className="countryContainer">
        <button
          className="back-btn"
          style={{ color: textColor }}
          onClick={() => navigate("/")}
        >
          <img src={btnImage} alt="Button" />
          Back
        </button>

        <div className="country">
          <div className="countryFlag">
            <img src={selectedCountry.flags.png} alt="Flag" />
          </div>

          <div className="countryInfo">
            <h2>{selectedCountry.name}</h2>
            <div className="countryInfoText">
              <div className="leftInfo">
                <p>
                  <span className="label">Population:</span>{" "}
                  {formatPopulation(country.population)}
                </p>
                <p>
                  <span className="label">Region:</span>{" "}
                  {selectedCountry.region}
                </p>
                <p>
                  <span className="label">Capital:</span>{" "}
                  {selectedCountry.capital}
                </p>
                <p>
                  <span className="label">Native name:</span> {nativeNames}
                </p>
              </div>
              <div className="rightInfo">
                <p>
                  <span className="label">Top Level Domain:</span>{" "}
                  {selectedCountry.topLevelDomain.join(", ")}
                </p>
                <p>
                  <span className="label">Currencies:</span>{" "}
                  {Object.values(selectedCountry.currencies)
                    .map((currency) => currency.name)
                    .join(", ")}
                </p>
                <p>
                  <span className="label">Language:</span>{" "}
                  {Object.values(selectedCountry.languages)
                    .map((language) => language.name)
                    .join(", ")}
                </p>
              </div>
            </div>
            <div className="borderCountries">
              <div className="borderCountriesText">
                <span className="label">Border Countries:</span>{" "}
              </div>
              <div className="borderCountriesbtn">
                {fullBorderNames.map((border, index) => (
                  <Link
                    key={index}
                    to={`/countries/${border}`} // Link to the corresponding country
                  >
                    <button
                      key={index}
                      style={{
                        color: textColor,
                        backgroundColor: backgroundColor,
                      }}
                    >
                      {border}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;

// {`countryPage ${isDarkMode ? "dark-mode" : "light-mode"}`}
