import React from "react";
import Icon from "./../../assets/icon.svg";
import Sun from "./../../assets/Group 3.svg"
import { useState, useEffect } from "react";

import "./style.scss";

const index = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <header className={`${theme}`}>
        <div className="container">
          <div className="header">
            <a href="#link" className="logo">
              Where in the world?
            </a>
            <div className="dark__mode" onClick={toggleTheme}>
              <img
                className="icon"
                src={Sun}
                alt="icon"
              />
              Dark Mode
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
