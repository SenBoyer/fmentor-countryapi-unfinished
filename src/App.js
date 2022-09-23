import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryProfile from "./components/CountryProfile";

const App = () => {
  return (
    <div className="app">
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

//===================================================================//

// import "./App.css";
// import Navbar from "./components/Navbar";
// import Homepage from "./components/Homepage";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CountryProfile from "./components/CountryProfile";

// const App = () => {
//   const [countries, setCountries] = useState([]);

//   return (
//     <div className="app">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route
//             path="/country/:countryName"
//             element={<CountryProfile />}
//             state={{ countries: countries, setCountries }}
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default App;
