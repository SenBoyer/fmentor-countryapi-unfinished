import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <style>
        {`
  .navbar {
    font-family: 'Nunito Sans', sans-serif;
    display: flex;
    justify-content: space-between;
    align-content: center;
    border-bottom: 1px solid #eaeaea;
  } 
  
  .navbar h1 {
    margin-left: 3rem;
  }
  
  .navbar button {
    margin-right: 3rem;
    height: 2rem;
    width: 6rem;
    margin-top: 1rem;
  }`}
      </style>
      <h1>Where in the world?</h1>
      <button>Dark Mode</button>
    </nav>
  );
};

export default Navbar;
