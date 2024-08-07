import React from "react";
import "./Header.css";

function Header({ isDarkTheme }) {
  return (
    <div className={`head ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <div className="left-div">
        <h3>Experts Cloud Tasks</h3>
      </div>
      <div className="right-div">
        <h4>Dev: Rohaan Nadeem</h4>
      </div>
    </div>
  );
}

export default Header;
