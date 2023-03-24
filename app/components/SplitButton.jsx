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
    <div className="flex relative cursor-pointer">
      <div onClick={handleClick} className="flex gap-x-4">
        <div className="font-bold text-lg dark:text-white ">
          {fontFamilies[currentFont]}
        </div>
        <img
          className="drag-none"
          src="./assets/images/icon-arrow-down.svg"
          alt="arrow-down"
        />
      </div>
      {/* onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} */}
      {isOpen && (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="absolute z-10 pt-10">
          <div className="flex flex-col space-y-4 py-5 pl-6 pr-16 bg-white dark:bg-charcoal shadow-lg shadow-light-graydark:shadow-lg dark:shadow-lavender dark:text-white rounded-2xl transition-all ease duration-300">
            {Object.entries(fontFamilies).map(([key, value]) => (
              <div
                className={classNames(
                  "flex cursor-pointer hover:text-lavender text-lg font-bold",
                  {
                    "font-bold": currentFont === key,
                    "font-sans": key === "sans",
                    "font-serif": key === "serif",
                    "font-mono": key === "mono",
                  }
                )}
                key={key}
                onClick={() => handleFontSelect(key)}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SplitButton;
