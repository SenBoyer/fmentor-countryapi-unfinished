import React from "react";

const CountryProfile = ({ country }) => {
  return (
    <div className="country-profile">
      <div id="flag-image">
        <img src={country.flags.png} alt={country.name.common} />
      </div>
    </div>
  );
};

export default CountryProfile;
