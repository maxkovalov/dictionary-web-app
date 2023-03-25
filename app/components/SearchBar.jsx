"use client";

import React from "react";
import { useState, useEffect } from "react";
import useStore from "../utils/stores/useStore";
import BeatLoader from "react-spinners/BeatLoader";
import className from "classnames";

function SearchBar() {
  const color = "#a445ed"
  const regexStr = "^[a-zA-Z](?:[a-zA-Z\\s-]+(?:-?(?=[a-zA-Z\\s-]))*[a-zA-Z\\s-]*)?|^$";

  const regex = new RegExp(regexStr);
  const [word, setWord] = useStore((state) => [state.word, state.setWord]);
  const { isLoading, error, fetchData, data } = useStore();
  const [searchBtnDisabled, setSearchBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleSearhInputChange = (e) => {
    let inputValue = e.target.value
      .replace(/^\s/, "")
      .replace(/^-/, "")
      .replace(/\s{2,}/g, " ")
      .replace(/-{2,}/g, "-")
      .replace(/(\s-){1,}/g, " ")
      .replace(/(-\s){1,}/g, "-");

    if (!/^[a-zA-Z\s-]*$/.test(inputValue)) {
      setSearchBtnDisabled(true);
      setMessage("Whoops, can only contain letters, space or hyphen...");
    } else if (inputValue === "") {
      setSearchBtnDisabled(true);
      setMessage("Whoops, can't be empty...");
      setWord("");
    } else if (inputValue.length > 50) {
      setSearchBtnDisabled(true);
      setMessage("Whoops, can't be longer than 50 characters...");
    } else {
      setMessage("")
      setWord(inputValue);
      setSearchBtnDisabled(false);
    }
  };

  const handleEnterKey = async (e) => {
    if (!searchBtnDisabled && e.keyCode === 13) {
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
          placeholder="Search for any word..."
          autoComplete="off"
          autoCapitalize="none"
          value={word}
          aria-invalid={message ? "true" : "false"}
          aria-describedby={message ? "search-error" : ""}
          pattern={`${regexStr}`}
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
          tabIndex={(data && data[0]?.word == word) || data?.title ? "-1" : "0"}
          onClick={handleClick}
          disabled={searchBtnDisabled}
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
        {message && <div id="search-error" className="absolute text-red p-1" aria-live="assertive">{message}</div>}
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
