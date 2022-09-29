import "./App.css";
import { useState } from "react";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryProfile from "./components/CountryProfile";
import Navbar from "./components/Navbar";

const App = () => {
  const [darkMode, setDarkmode] = useState(false);
  return (
    <div className={`${darkMode ? "dark-mode app" : "app"}`}>
      <Navbar darkMode={darkMode} setDarkmode={setDarkmode} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Homepage darkMode={darkMode} setDarkmode={setDarkmode} />}
          />
          <Route
            path="/country/:countryName"
            element={
              <CountryProfile darkMode={darkMode} setDarkmode={setDarkmode} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
