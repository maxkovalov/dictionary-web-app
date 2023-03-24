import React from "react";

function SkipLink() {
  return (
    <a
      href="#main-content"
      className="absolute sr-only focus:not-sr-only focus:absolute bg-lavender py-2 left-0 right-0 w-40 focus:w-40 mx-auto focus:mx-auto text-center text-white rounded-lg  focus:px-4 focus:py-2 translate-y-1 z-50"
    >
      Skip to content
    </a>
  );
}

export default SkipLink;
