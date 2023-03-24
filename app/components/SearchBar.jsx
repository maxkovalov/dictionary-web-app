"use client";

import React from "react";
import { useState, useEffect } from "react";
import useStore from "../utils/stores/useStore";
import BeatLoader from "react-spinners/BeatLoader";
import className from "classnames";

function SearchBar() {
  const [word, setWord] = useStore((state) => [state.word, state.setWord]);
  const { isLoading, error, fetchData, deleteData } = useStore();
  const [color, setColor] = useState("#a445ed");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleSearhInputChange = (e) => {
    const inputValue = e.target.value.trim();
    if (inputValue === "") {
      setBtnDisabled(true);
      setMessage("Whoops, can't be empty...");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setWord(inputValue);
  };

  const handleEnterKey = async (e) => {
    if (e.keyCode === 13) {
      await fetchData(word);
    }
  };

  const handleClick = async () => {
    await fetchData(word);
  };

  return (
    <>
      <div className="relative my-12">
        <input
          id="search"
          type="text"
          aria-label="Search for any word"
          placeholder="Search for any word..."
          autoCapitalize="off"
          value={word}
          pattern="[A-Za-z]{1,}"
          onChange={handleSearhInputChange}
          onKeyDown={handleEnterKey}
          className={className(
            "w-full bg-off-white rounded-2xl font-bold text-xl px-6 py-5 caret-lavender focus:outline-none invalid:ring-2 invalid:ring-red dark:bg-charcoal dark:text-white",
            {
              "border border-red": message,
              "hover:border hover:border-lavender": !message,
            }
          )}
        />
        <button
          aria-label="Search word"
          onClick={handleClick}
          disabled={btnDisabled}
          className="absolute top-0 right-0 p-6 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              fill="none"
              stroke="#A445ED"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
            />
          </svg>
        </button>
        {message && <div className="absolute text-red p-1">{message}</div>}
      </div>
      {isLoading && (
        <div className="flex justify-center pt-32">
          <BeatLoader color={color} />
        </div>
      )}
      {/* {error && <p>Error: {error}</p>} */}
    </>
  );
}

export default SearchBar;
