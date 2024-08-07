import { useState, useEffect } from "react";
import Calculator from "./components/Calculator/Calculator.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import ThemeToggle from "./components/ThemeChanger/ThemeToggle.jsx";
import "./App.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [history, setHistory] = useState(
    JSON.parse(sessionStorage.getItem("calculatorHistory")) || []
  );
  const [selectedHistory, setSelectedHistory] = useState([]);

  useEffect(() => {
    sessionStorage.setItem("calculatorHistory", JSON.stringify(history));
  }, [history]);

  const handleThemeToggle = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const addHistory = (calculation) => {
    setHistory((prevHistory) => [calculation, ...prevHistory]);
  };

  const handleHistoryClick = (calculation) => {
    const result = calculation.split(" = ")[1];
    setSelectedHistory([result]); // Clear previous selected history
  };

  const ClearHistory = () => {
    setHistory([]);
  };

  const clearInputValue = () => {
    setSelectedHistory([]);
  };

  return (
    <div className={`Body ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <Header className="Calculator-head" isDarkTheme={isDarkTheme} />
      <div className="outDiv">
        <div className="task-Side">
          <h3>Theme Changer for check</h3>
          <ThemeToggle isDarkTheme={isDarkTheme} onToggle={handleThemeToggle} />
          <Calculator
            isDarkTheme={isDarkTheme}
            addHistory={addHistory}
            selectedHistory={selectedHistory}
            clearInputValue={clearInputValue}
          />
        </div>
        <div className="comments-Side">
          <h3>History</h3>
          <div className="cls-hst">
            <button onClick={ClearHistory}>Clear History</button>
          </div>
          <ul>
            {history.map((item, index) => (
              <li key={index} onClick={() => handleHistoryClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer isDarkTheme={isDarkTheme} />
    </div>
  );
}

export default App;
