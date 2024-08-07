import React, { useCallback, useState, useEffect } from "react";
import "./Calculator.css";
import { calculatorData } from "../../utils/constants";

function Calculator({
  isDarkTheme,
  addHistory,
  selectedHistory,
  clearInputValue,
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
    <div className={`TaskBody ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <h2>-:Task: 1 :-</h2>
      <h3>Calculator which can perform DMAS</h3>
      <div className="main">
        <div
          className={`Calculator ${isDarkTheme ? "dark-theme" : "light-theme"}`}
        >
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="solution">
              <input type="text" value={value} readOnly />
            </div>
            <div className="btns">
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
                  className={data.key === "Enter" ? "dbl-wdth" : "single-width"}
                >
                  {data.value}
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
