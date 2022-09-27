import { borderLeftColor } from "@mui/system";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryProfile = () => {
  const [countryData, setCountryData] = useState();
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      console.log("useEffect/fetchData() running");
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${params.countryName}`
      );
      console.log("response", response);
      const [data] = await response.json();
      setCountryData(data);
    };

    fetchData();
  }, [params]);

  if (!countryData) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <style>
        {`

      .country-profile-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        height: 100vh;
      } 

      .country-profile {
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 5rem;
      }

      #country-info {
        display: flex;
        border: 1px solid black;
        position: relative;
      }

      #border-countries {
        width: 100%;
        display:
      }

      `}
      </style>
      <div className="country-profile-wrap">
        <div className="country-profile">
          <div id="flag-image">
            <img src={countryData.flags.png} alt={countryData.name.common} />
          </div>
          <div id="country-info">
            <div id="country-info-left">
              <h2>{countryData.name.common}</h2>
              <p>
                Native Name:{" "}
                {countryData.name.nativeName &&
                  Object.values(countryData.name.nativeName).map(
                    (item, index, array) => {
                      if (index === 0) {
                        return item.common ? item.common : item;
                      }
                    }
                  )}
              </p>
              <p>
                Population: {countryData.population.toLocaleString("en-US")}
              </p>
              <p>Region: {countryData.region}</p>
              <p>Sub Region: {countryData.subregion}</p>
              <p>Capital: {countryData.capital[0]}</p>
            </div>
            <div id="country-info-right">
              <p>Top Level Domain: {countryData.tld[0]}</p>

              {Object.values(countryData.currencies).map((currency) => (
                <p>Currencies: {currency.name}</p>
              ))}

              <p>
                Languages:{" "}
                {Object.values(countryData.languages).map(
                  (lang, index, array) => {
                    if (index !== array.length - 1) {
                      return lang + ", ";
                    } else {
                      return lang;
                    }
                  }
                )}
              </p>
            </div>
            <div id="border-countries">
              <p>
                Border Countries:{" "}
                {countryData.borders &&
                  Object.values(countryData.borders).map(
                    (border, index, array) => {
                      if (index !== array.length - 1) {
                        return border + ", ";
                      } else {
                        return borderLeftColor;
                      }
                    }
                  )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryProfile;
