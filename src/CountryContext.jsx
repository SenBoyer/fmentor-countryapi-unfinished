import { createContext, useState } from "react";

export const countryContext = createContext();

const CountryContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  return (
    <countryContext.Provider value={{ countries, setCountries }}>
      {children}
    </countryContext.Provider>
  );
};

export default CountryContextProvider;
