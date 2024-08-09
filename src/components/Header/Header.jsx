import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ isDarkTheme }) {
  return (
    <div className={`${isDarkTheme ? "dark" : ""}`}>
      <div className="flex p-7 align-middle bg-white dark:bg-gray-900">
        <div className="w-1/2 dark:text-white">
          <h3 className="text-2xl font-extrabold">Experts Cloud Tasks</h3>
        </div>
        <div className="w-1/2">
          <nav>
            <ul className="flex justify-end space-x-5">
              <li>
                <Link className="text-style" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-style" to="/calculator">
                  Calculator
                </Link>
              </li>
              <li>
                <Link className="text-style" to="/ContactForm">
                  Contact Form
                </Link>
              </li>
              <li>
                <Link className="text-style" to="/CalendlyMeeting">
                  Calendly Meeting
                </Link>
              </li>
              <li>
                <Link className="text-style" to="/RestApis">
                  Rest Api
                </Link>
              </li>
              <li>
                <Link className="text-style" to="/Socket">
                  Socket
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
