"use client";

import React from "react";
import useStore from "../utils/stores/useStore";

function SkipLink() {
  const links = [
    { label: "Skip to content", target: "#main-content" },
    { label: "Skip to search", target: "#search" },
  ];
  const setWord = useStore((state) => state.setWord);

  const handleClick = () => {
    setWord("");
  };

  return (
    <>
      {links && (
        <ul>
          {links.map((link) => (
            <li key={link.target}>
              <a
                href={link.target}
                tabIndex={0}
                onClick={handleClick}
                className="absolute sr-only focus:not-sr-only focus:absolute bg-lavender py-2 left-0 right-0 w-40 focus:w-40 mx-auto focus:mx-auto text-center text-white rounded-lg  focus:px-4 focus:py-2 translate-y-1 z-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default SkipLink;
