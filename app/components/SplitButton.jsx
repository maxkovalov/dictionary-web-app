"use client";

import { useState } from "react";
import classNames from "classnames";

function SplitButton() {
  const fontFamilies = { sans: "Sans Serif", serif: "Serif", mono: "Mono" };
  const [currentFont, setCurrentFont] = useState("sans");
  const [isOpen, setIsOpen] = useState(false);
  const [isMouseInside, setIsMouseInside] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleFontSelect = (key) => {
    document.documentElement.classList.remove(`font-${currentFont}`);
    setCurrentFont(key);
    document.documentElement.classList.add(`font-${key}`);
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsMouseInside(true);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative" onMouseLeave={handleMouseLeave}>
        <button
          aria-label="Font selection"
          tabIndex={0}
          onClick={handleClick}
          onMouseEnter={handleClick}
          className="font-bold text-lg text-black dark:text-white dark:bg-transparent focus:ring-4 focus:outline-none focus:ring-lavender rounded-lg text-center inline-flex items-center dark:focus:ring-lavender"
        >
          {fontFamilies[currentFont]}
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            viewBox="0 0 14 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-none stroke-lavender stroke-1"
              d="m1 1 6 6 6-6"
            />
          </svg>
        </button>
        {isOpen && (
          <div
            onMouseEnter={handleMouseEnter}
            className="absolute -right-2 z-10 bg-white rounded-xl w-44 shadow-lg shadow-light-graydark:shadow-lg dark:shadow-lavender dark:bg-charcoal"
          >
            <ul className="text-sm px-6 py-6 text-gray-700 dark:text-white space-y-3">
              {Object.entries(fontFamilies).map(([key, value], index) => (
                <li
                  key={`${key}-${index}`}
                  onClick={() => handleFontSelect(key)}
                  className={classNames(
                    "block cursor-pointer hover:text-lavender text-lg font-bold",
                    {
                      "font-bold": currentFont === key,
                      "font-sans": key === "sans",
                      "font-serif": key === "serif",
                      "font-mono": key === "mono",
                    }
                  )}
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default SplitButton;