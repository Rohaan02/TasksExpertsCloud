import { useState } from "react";
import Calculator from "./components/Calculator/Calculator.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import ThemeToggle from "./components/ThemeChanger/ThemeToggle.jsx";
import "./App.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [history, setHistory] = useState([]);
  const [selectedHistory, setSelectedHistory] = useState([]);

  const handleThemeToggle = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const addHistory = (calculation) => {
    setHistory((prevHistory) => [calculation, ...prevHistory]);
  };

  const handleHistoryClick = (calculation) => {
    const result = calculation.split(" = ")[1];
    setSelectedHistory((prevSelectedHistory) => [
      ...prevSelectedHistory,
      result,
    ]);
  };

  return (
    <div className={`Body ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <Header className="Calculator-head" />
      <div className="outDiv">
        <div className="task-Side">
          <h3>Theme Changer for check</h3>
          <ThemeToggle isDarkTheme={isDarkTheme} onToggle={handleThemeToggle} />
          <Calculator
            addHistory={addHistory}
            selectedHistory={selectedHistory}
          />
        </div>
        <div className="comments-Side">
          <h3>History</h3>
          <ul>
            {history.map((item, index) => (
              <li key={index} onClick={() => handleHistoryClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
