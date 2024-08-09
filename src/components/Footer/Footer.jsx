import React from "react";
import "./Footer.css";

function Footer({ isDarkTheme }) {
  return (
    <div className={`${isDarkTheme ? "dark" : ""}`}>
      <div className="p-7 text-center align-middle bg-gray-300 dark:bg-gray-900 dark:text-white">
        <h4>No Copyrights claimed</h4>
      </div>
    </div>
  );
}

export default Footer;
