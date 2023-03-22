"use client";

import React from "react";
import Switch from "./Switch";

function NavBar() {
  return (
    <nav>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mt-10 justify-between">
          <div>
            <a href="/">
              <img
                className="scale-90"
                src="./assets/images/logo.svg"
                alt="logo"
              />
            </a>
          </div>
          <div className="flex items-center h-3/6">
            <div>
              <img src="./assets/images/icon-arrow-down.svg" alt="logo" />
            </div>
            <div className="flex items-center">
              <Switch />
              <svg className="fill-none stroke-gray hover:stroke-lavender dark:stroke-lavender select-none" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
