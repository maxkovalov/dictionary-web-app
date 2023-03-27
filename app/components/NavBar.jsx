"use client";

import React from "react";
import Switch from "./Switch";
import SplitButton from "./SplitButton";

function NavBar() {
  return (
    <nav className="max-w-3xl mx-auto pt-10">
      <div className="flex items-center justify-between">
        <a className="drag-none" href="/">
          <img
            aria-label="Logo of a book - Enter for home page"
            className="drag-none min-w-fit"
            src="./assets/images/logo.svg"
            alt="logo"
          />
          <span className="sr-only"></span>
        </a>
        <div className="flex divide-x divide-light-gray py-2">
          <SplitButton />
          <div className="flex items-center justify-center pl-3 space-x-1">
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
    </nav>
  );
}

export default NavBar;
