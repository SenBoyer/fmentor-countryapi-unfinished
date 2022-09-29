import React, { useEffect, useState } from "react";
import FlagCard from "./FlagCard";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Flags = ({ countries, setCountries, filteredCountries, darkMode }) => {
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
          background-color: hsl(0, 0%, 98%);
          grid-template-columns: repeat(4, 1fr);
          grid-column-gap: 4rem;
          grid-row-gap: 2rem;
        }

        .flag-container ul {
          padding: 0
        }

        
      .dark-mode {
        background-color: hsl(207, 26%, 17%)
      }

        @media screen and (max-width: 375px) {
          .flag-container {
            display: grid;
            grid-template-columns: 1fr;
            background-color: hsl(0, 0%, 98%)
          }
        
        `}
      </style>
      <div
        className={`${
          darkMode ? "dark-mode flag-container" : "flag-container"
        }`}
      >
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
