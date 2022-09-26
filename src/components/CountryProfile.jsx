import React from "react";
import { useLocation } from "react-router-dom";

const CountryProfile = ({ data }) => {
  const location = useLocation();
  console.log("data", data);
  console.log("location=", location);
  return (
    <div className="country-profile">
      <div id="flag-image">
        <img src={location.state.flags.png} alt={location.state.name.common} />
      </div>
      <div id="country-info">
        <h2>{location.state.name.common}</h2>
        <div id="country-info-left">
          <p>
            Native Name:
            {location.state.name.nativeName &&
              Object.values(location.state.name.nativeName).map((item) =>
                item.common ? item.common : item
              )}
          </p>
          <p>Population: {location.state.population}</p>
          <p>Region: {location.state.region}</p>
          <p>Sub Region: {location.state.subregion}</p>
          <p>Capital: {location.state.capital[0]}</p>
        </div>
        <div id="country-info-right">
          <p>Top Level Domain: {location.state.tld[0]}</p>

          {Object.values(location.state.currencies).map((currency) => (
            <p>Currencies: {currency.name}</p>
          ))}

          <p>
            Languages:{" "}
            {Object.values(location.state.languages).map((lang) => (
              <span>{lang},</span>
            ))}
          </p>
        </div>
        <div id="border-countries">
          {location.state.borders &&
            Object.values(location.state.borders).map((border) => (
              <p>Border Countries: {border} </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CountryProfile;
