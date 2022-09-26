import React from "react";
import { useState, useContext } from "react";
import Search from "./Search";
import Flags from "./Flags";
import { countryContext } from "../CountryContext";
const Homepage = () => {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const { countries, setCountries } = useContext(countryContext);
  return (
    <div className="homepage">
      <style>
        {`  
      .homepage {
        background-color: hsl(0, 0%, 98%);
        margin: 0 3rem;
      }
        
        `}
      </style>
      <Search
        countries={countries}
        setCountries={setCountries}
        filteredCountries={filteredCountries}
        setFilteredCountries={setFilteredCountries}
      />
      <Flags
        countries={countries}
        setCountries={setCountries}
        filteredCountries={filteredCountries}
      />
    </div>
  );
};

export default Homepage;
