"use client";

import React from "react";

function NavBar() {

  return (
    <nav>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mt-10 justify-between">
          <div>
            <img src="./assets/images/logo.svg" alt="logo" />
          </div>
          <div className="flex items-center h-3/6">
            <div>
              <img src="./assets/images/icon-arrow-down.svg" alt="logo" />
            </div>
            <div className="flex">
              <img src="./assets/images/icon-moon.svg" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
