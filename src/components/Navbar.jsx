import React from "react";

const Navbar = ({ darkMode, setDarkmode }) => {
  return (
    <nav className={`${darkMode ? "navbar dark-mode-nav" : "navbar"}`}>
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
    width: 7rem;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 800;
  }

  .dark-mode-nav {
    background-color: hsl(209, 23%, 22%)
  }
  
  .dark-mode-button {
    background-color: hsl(209, 23%, 22%);
    color: white;
  }
  `}
      </style>
      <h1 className={`${darkMode ? "dark-mode-button" : ""}`}>
        Where in the world?
      </h1>
      <button
        onClick={() => {
          console.log("clicked");
          setDarkmode(!darkMode);
        }}
        className={`${darkMode ? "dark-mode-button" : ""}`}
      >
        <span class="material-symbols-outlined">dark_mode</span>Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;
