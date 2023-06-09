import React, { useState } from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
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
      <HomePage isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
