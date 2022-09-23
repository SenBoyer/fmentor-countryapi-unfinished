import React, { useState } from "react";

const Search = ({
  countries,
  setCountries,
  filteredCountries,
  setFilteredCountries,
}) => {
  const [search, setSearch] = useState("");
  const countrySet = new Set();
  countries.forEach((country) => {
    countrySet.add(country.region);
  });
  console.log(countrySet);

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
          background-color: white;
          width: 8rem;
        }
        `}
      </style>
      <input
        placeholder="Search for a country..."
        value={search}
        onInput={(event) => searchFilter(event)}
      ></input>
      <div>{search}</div>
      <select onChange={(e) => dropDownFilter(e)}>
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
