"use client";

import { useState } from "react";
import classNames from "classnames";

function Switch() {
  const [isDarkMode, setisDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setisDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      {true && (
        <div
          onClick={toggleDarkMode}
          className={classNames(
            "flex w-10 h-5 bg-gray mx-4 rounded-full hover:bg-lavender cursor-pointer transition ease duration-300",
            {
              "justify-end bg-lavender": isDarkMode,
            }
          )}
        >
          <span
            className={classNames("h-5 w-5 bg-white rounded-full scale-75", {})}
          ></span>
        </div>
      )}
    </>
  );
}

export default Switch;

