import { borderLeftColor } from "@mui/system";
import React from "react";
import { useEffect, useState, useContext } from "react";
import { countryContext } from "../CountryContext";
import { useParams } from "react-router-dom";

const CountryProfile = () => {
  const [countryData, setCountryData] = useState();
  const [borderCountries, setBorderCountries] = useState();
  const params = useParams();

  const { countries } = useContext(countryContext);

  //GET NAME OF COUNTRY AND SET IT AS TARGET COUNTRY
  //USE TARGET COUNTRY TO GET ALL BORDERS
  //CONVERT BORDER CODES TO COUNTRY NAMES

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${params.countryName}`
      );
      const [data] = await response.json();
      setCountryData(data);
    };
    fetchData();
  }, [params]);

  useEffect(() => {
    const getBorders = () => {
      if (countryData.borders) {
        let borders = [];
        let real_name = [];
        console.log("countries=", countries);
        countryData.borders.forEach((border_code) => borders.push(border_code));
        borders.forEach((border_code) => {
          countries.forEach((country) => {
            if (country.cca3 === border_code) {
              real_name.push(country.name.common);
            }
          });
        });
        setBorderCountries(real_name);
      } else {
        setBorderCountries([]);
      }
    };

    if (countryData) {
      getBorders();
    }
  }, [countryData]);

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
        flex-direction: column;
        border: 1px solid black;
        position: relative;
      }

      .data-columns {
        display: flex;
      }

      #border-countries {
        width: 100%;
        display:
      }

      @media screen and (max-width: 375px) {
        .country-profile{
          flex-direction: column;
  }
  }

      `}
      </style>
      <div className="country-profile-wrap">
        <div className="country-profile">
          <div id="flag-image">
            <img src={countryData.flags.png} alt={countryData.name.common} />
          </div>
          <div id="country-info">
            <h2>{countryData.name.common}</h2>
            <div className="data-columns">
              <div id="country-info-left">
                <p>
                  <b>Native Name:</b>{" "}
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
                  <b>Population:</b>{" "}
                  {countryData.population.toLocaleString("en-US")}
                </p>
                <p>
                  <b>Region:</b> {countryData.region}
                </p>
                <p>
                  <b>Sub Region:</b> {countryData.subregion}
                </p>
                <p>
                  <b>Capital:</b> {countryData.capital[0]}
                </p>
              </div>
              <div id="country-info-right">
                <p>
                  <b>Top Level Domain:</b> {countryData.tld[0]}
                </p>

                {Object.values(countryData.currencies).map((currency) => (
                  <p>
                    <b>Currencies:</b> {currency.name}
                  </p>
                ))}

                <p>
                  <b>Languages:</b>{" "}
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
            </div>
            <div id="border-countries">
              <p>
                <b>Border Countries: </b>
                {countryData.borders &&
                  borderCountries.map((country, index, array) => {
                    if (index !== array.length - 1) {
                      return (
                        <span style={{ border: "1px solid black" }}>
                          {country},{" "}
                        </span>
                      );
                    } else
                      return (
                        <span
                          style={{
                            border: "1px solid black",
                            paddingRight: "1rem",
                          }}
                        >
                          {country}
                        </span>
                      );
                  })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryProfile;
