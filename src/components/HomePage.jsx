import React from "react";
import "./../styles/HomePage.css";
import Search from "./Search";

const HomePage = () => {
  const handleSearch = (searchTerm) => {
    // Utför söklogiken här baserat på den givna söktermen
    console.log("Sökt efter:", searchTerm);
    // Uppdatera state, gör API-anrop, filtrera data, etc.
  };
  return (
    <div className="homePage">
      <Search onSearch={handleSearch} />
    </div>
  );
};

export default HomePage;
