import React, { useEffect, useState } from "react";
import FlagCard from "./FlagCard";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Flags = ({ countries, setCountries, filteredCountries }) => {
  useEffect(() => {
    const fetchFlags = () => {
      fetch(`https://restcountries.com/v3.1/all`)
        .then((response) => response.json())
        .then((data) => {
          setCountries(data);
        });
    };

    fetchFlags();
  }, []);

  return (
    <>
      <style>
        {` 
        .flag-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-column-gap: 4rem;
          grid-row-gap: 2rem;
        }

        @media screen and (max-width: 375px) {
          .flag-container {
            display: grid;
            grid-template-columns: 1fr;
            background-color: black
          }
        
        `}
      </style>
      <div className="flag-container">
        {filteredCountries.length > 0
          ? filteredCountries.map((country, index) => (
              <ul key={index}>
                <Link to={`/country/${country.name.common}`} state={country}>
                  <FlagCard {...country} />
                </Link>
              </ul>
            ))
          : countries.map((country, index) => (
              <Link to={`/country/${country.name.common}`} state={country}>
                <ul key={index}>
                  <FlagCard {...country} />
                </ul>
              </Link>
            ))}
      </div>
    </>
  );
};

export default Flags;
