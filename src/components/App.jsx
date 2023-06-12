import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import CountryPage from "./CountryPage";
import "./../styles/App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const appBackgroundColor = isDarkMode ? "#202C36" : "#F2F2F2";

  return (
    <div className="App" style={{ backgroundColor: appBackgroundColor }}>
      <Navbar
        isDarkMode={isDarkMode}
        handleDarkModeToggle={handleDarkModeToggle}
      />
      <Routes>
        <Route path="/" element={<HomePage isDarkMode={isDarkMode} />} />
        <Route path="/page" element={<CountryPage />} />
      </Routes>
    </div>
  );
};

export default App;
