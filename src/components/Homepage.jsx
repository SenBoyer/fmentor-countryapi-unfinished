import React from "react";
import { useState } from "react";
import Search from "./Search";
import Flags from "./Flags";

const Homepage = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
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
