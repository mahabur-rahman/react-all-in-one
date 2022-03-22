import React, { useState } from "react";
// style
import "./darkMode.scss";

const DarkTest = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="container">
          <span style={{ color: darkMode ? "red" : "green" }}>☀︎</span>
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
          <span style={{ color: darkMode ? "#c96dfd" : "red" }}>☽</span>
        </div>
        <div>
          <h1>Cool its {darkMode ? "red" : "green"} Mode </h1>
        </div>
      </div>
    </>
  );
};

export default DarkTest;
