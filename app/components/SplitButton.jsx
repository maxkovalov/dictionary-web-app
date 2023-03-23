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
    <div className="flex border-r border-light-gray mr-3 relative cursor-pointer">
      <div onClick={handleClick} className="flex pr-6 space-x-5 ">
        <div className="font-bold text-lg ml-4 pl-6 dark:text-white">
          {fontFamilies[currentFont]}
        </div>
        <img
          className="drag-none"
          src="./assets/images/icon-arrow-down.svg"
          alt="arrow-down"
        />
      </div>
      {isOpen && (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="absolute right-0 -translate-x-6 z-10 pt-10">
          <div className="bg-white dark:bg-charcoal shadow-lg shadow-light-graydark:shadow-lg dark:shadow-lavender dark:text-white rounded-xl px-6 py-4 transition-all ease duration-300">
            {Object.entries(fontFamilies).map(([key, value]) => (
              <div
                className={classNames(
                  "cursor-pointer hover:text-lavender py-1",
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
