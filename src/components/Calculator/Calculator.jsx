import React, { useCallback, useState, useEffect } from "react";
import { calculatorData } from "../../utils/constants";
import ThemeToggle from "../ThemeChanger/ThemeToggle.jsx";

function Calculator({
  isDarkTheme,
  addHistory,
  selectedHistory,
  clearInputValue,
  history,
  handleThemeToggle,
  handleHistoryClick,
  ClearHistory,
}) {
  const [value, setValue] = useState("");
  const [isResult, setIsResult] = useState(false);

  useEffect(() => {
    if (selectedHistory.length > 0) {
      const latestSelected = selectedHistory[selectedHistory.length - 1];
      setValue((prevValue) =>
        isResult ? latestSelected : `${prevValue}${latestSelected}`
      );
      clearInputValue();
      setIsResult(false);
    }
  }, [selectedHistory, clearInputValue, isResult]);

  const handleClick = useCallback(
    (e) => {
      const newValue = e.target.getAttribute("value");

      setValue((prevValue) => {
        if (prevValue === "Error" || isResult) {
          setIsResult(false);
          return newValue;
        }
        return prevValue + newValue;
      });

      e.target.classList.add("clicked");
      setTimeout(() => {
        e.target.classList.remove("clicked");
      }, 300);
    },
    [isResult]
  );

  const handleEvaluate = useCallback(() => {
    try {
      if (
        !value ||
        /[^\d]$/.test(value) ||
        /^[^\d]/.test(value) ||
        /[\+\-\*\/]{2,}/.test(value)
      ) {
        setValue("Error");
      } else {
        const result = eval(value).toString();
        addHistory(`${value} = ${result}`);
        setValue(result);
      }
      setIsResult(true);
    } catch (error) {
      setValue("Error");
      setIsResult(true);
    }
  }, [value, addHistory]);

  return (
    <div className={`${isDarkTheme ? "dark" : ""}`}>
      <div className="w-full flex z-50">
        <div className="w-1/2 text-center bg-gray-200 dark:bg-gray-600 dark:text-white">
          <h3>Theme Changer for check</h3>
          <ThemeToggle isDarkTheme={isDarkTheme} onToggle={handleThemeToggle} />
          <div className="flex flex-col items-center text-center min-h-screen">
            <h2 className="text-2xl">-:Task: 1 :-</h2>
            <h3 className="my-5">Calculator which can perform DMAS</h3>
            <div className="p-4 rounded border-2 border-black flex justify-center items-center">
              <div className="w-full max-w-md">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-4">
                    <input
                      type="text"
                      value={value}
                      readOnly
                      className="w-full h-10 p-2 border rounded text-right text-xl dark:bg-slate-200 dark:text-black"
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {calculatorData.map((data) => (
                      <div
                        key={data.key}
                        value={data.key}
                        onClick={(e) => {
                          switch (data.key) {
                            case "AC":
                              setValue("");
                              setIsResult(false);
                              break;
                            case "DE":
                              setValue(value.slice(0, -1));
                              break;
                            case "Enter":
                              handleEvaluate();
                              break;
                            default:
                              handleClick(e);
                              break;
                          }
                        }}
                        className={`p-4 text-center rounded cursor-pointer transition bg-gray-300 hover:bg-gray-400 dark:bg-gray-500 dark:hover:bg-gray-700 dark:hover:border border-white ${
                          data.key === "Enter" ? "col-span-2" : ""
                        }`}
                      >
                        {data.value}
                      </div>
                    ))}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-green-100 dark:bg-green-700 dark:text-white">
          <h3 className="text-center font-extrabold text-3xl my-12">History</h3>
          <div className="flex justify-center mb-4">
            <button
              onClick={ClearHistory}
              className="p-2 rounded text-white bg-red-500 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-900 dark:hover:border-none"
            >
              Clear History
            </button>
          </div>
          <ul className="px-4">
            {history.map((item, index) => (
              <li
                key={index}
                onClick={() => handleHistoryClick(item)}
                className="text-left cursor-pointer text-xl mb-4"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
