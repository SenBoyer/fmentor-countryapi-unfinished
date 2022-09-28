import "./App.css";
import { useState } from "react";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryProfile from "./components/CountryProfile";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/country/:countryName" element={<CountryProfile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
