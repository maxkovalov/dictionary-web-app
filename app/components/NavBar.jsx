"use client";

import React from "react";
import Switch from "./Switch";
import SplitButton from "./SplitButton";

function NavBar() {
  return (
    <nav>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mt-10 justify-between">
          <div>
            <a className="drag-none" href="/">
              <img
                className="drag-none"
                src="./assets/images/logo.svg"
                alt="logo"
              />
            </a>
          </div>
          <div className="flex items-center h-3/6">
            <div>
              <SplitButton />
            </div>
            <div className="flex items-center">
              <Switch />
              <svg
                className="fill-none stroke-gray hover:stroke-lavender dark:stroke-lavender select-none transition ease duration-300"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
