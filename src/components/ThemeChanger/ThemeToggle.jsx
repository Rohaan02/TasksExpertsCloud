// src/components/ThemeToggle/ThemeToggle.jsx
import React from "react";
import "./ThemeToggle.css";

const ThemeToggle = ({ isDarkTheme, onToggle }) => {
  return (
    <div className="theme-toggle">
      <span>Light Theme</span>
      <label className="switch">
        <input type="checkbox" checked={isDarkTheme} onChange={onToggle} />
        <span className="slider round"></span>
      </label>
      <span>Dark Theme</span>
    </div>
  );
};

export default ThemeToggle;
