import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator/Calculator.jsx";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ContactForm from "./Pages/ContactForm/ContactForm.jsx";
import CalendlyMeeting from "./Pages/CalendlyMeeting/CalendlyMeeting.jsx";
import RestApi from "./Pages/RestApis/RestApi.jsx";

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
    <Router>
      <div className={`App ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
        <Header className="Calculator-head" isDarkTheme={isDarkTheme} />
        <Routes>
          <Route
            path="/calculator"
            element={
              <Calculator
                isDarkTheme={isDarkTheme}
                addHistory={addHistory}
                selectedHistory={selectedHistory}
                clearInputValue={clearInputValue}
                history={history}
                handleThemeToggle={handleThemeToggle}
                handleHistoryClick={handleHistoryClick}
                ClearHistory={ClearHistory}
              />
            }
          />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/CalendlyMeeting" element={<CalendlyMeeting />} />
          <Route path="/RestApis" element={<RestApi />} />

          <Route
            path="/"
            element={
              <div className="min-h-screen">
                <h1>Home Page</h1>
                <h2 className="text-3xl font-semibold text-center text-gray-700 mt-4 mb-2">
                  Heelo G
                </h2>
              </div>
            }
          />
        </Routes>
        <Footer isDarkTheme={isDarkTheme} />
      </div>
    </Router>
  );
}

export default App;
