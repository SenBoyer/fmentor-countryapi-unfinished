import React, { useState } from "react";

const Search = ({
  countries,
  setCountries,
  filteredCountries,
  setFilteredCountries,
  darkMode,
}) => {
  const [search, setSearch] = useState("");
  const countrySet = new Set();
  countries.forEach((country) => {
    countrySet.add(country.region);
  });

  const searchFilter = (event) => {
    setSearch(event.target.value);
    if (search.length >= 1) {
      //---------------------------------
      let temp = [
        ...countries.filter((country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase())
        ),
      ];
      setFilteredCountries(temp);
      //---------------------------------
    } else {
      setFilteredCountries(countries);
    }
  };

  const dropDownFilter = (event) => {
    let temp = [
      ...countries.filter(
        (country) =>
          country.region.toLowerCase() === event.target.value.toLowerCase()
      ),
    ];
    setFilteredCountries(temp);
  };

  return (
    <div className="search">
      <style>
        {`
        .search {
          display: flex;
          justify-content: space-between;
        }
        .search select{
          background-color: hsl(0, 0%, 98%)
          width: 8rem;
        }

        
      .dark-mode-search {
        background-color: hsl(209, 23%, 22%);
        color: white;
      }
        `}
      </style>
      <input
        placeholder="Search for a country..."
        value={search}
        onInput={(event) => searchFilter(event)}
        className={`${darkMode ? "dark-mode-search" : ""}`}
      ></input>
      <select
        onChange={(e) => dropDownFilter(e)}
        className={`${darkMode ? "dark-mode-search" : ""}`}
      >
        <option value="Filter by region" hidden>
          Filter by region
        </option>
        {[...countrySet].map((country, index) => (
          <option key={index} value={country.region}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Search;
