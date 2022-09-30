import React from "react";
import { useState, useContext } from "react";
import Search from "./Search";
import Flags from "./Flags";
import { countryContext } from "../CountryContext";
const Homepage = ({ darkMode, setDarkmode }) => {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const { countries, setCountries } = useContext(countryContext);
  return (
    <div className={`${darkMode ? "dark-mode homepage" : "homepage"}`}>
      <style>
        {`  
      .homepage {
        background-color: hsl(0, 0%, 98%);
        margin: 0 3rem;
      }

      
      .dark-mode {
        background-color: hsl(207, 26%, 17%)
      }
        
        `}
      </style>
      <Search
        countries={countries}
        setCountries={setCountries}
        filteredCountries={filteredCountries}
        setFilteredCountries={setFilteredCountries}
        darkMode={darkMode}
      />
      <Flags
        countries={countries}
        setCountries={setCountries}
        filteredCountries={filteredCountries}
        darkMode={darkMode}
      />
    </div>
  );
};

export default Homepage;
