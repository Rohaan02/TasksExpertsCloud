import React from "react";
import "./Footer.css";

function Footer({ isDarkTheme }) {
  return (
    <div className={`foot-main ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <h4>No Copyrights claimed</h4>
    </div>
  );
}

export default Footer;
