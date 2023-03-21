"use client";

import React, { use } from "react";
import { useState, useEffect } from "react";

function SearchBar() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
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

  async function fetchWord() {
    setLoading(true);
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <>
      <div className="relative my-12">
        <input
          id="search"
          type="text"
          placeHolder="Search for any word..."
          onChange={handleSearhInputChange}
          className="w-full bg-off-white rounded-lg font-semibold px-4 py-3 caret-lavender  focus:outline-lavender"
        />
        <button
          onClick={fetchWord}
          disabled={btnDisabled}
          className="absolute top-0 right-0 p-4 scale-90"
        >
          <img src="./assets/images/icon-search.svg"></img>
        </button>
        {message && <div className="text-red p-1">{message}</div>}
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {result.map((item) => (
            <div key={item.id}>
              <h2>{item.word}</h2>
              {item.meanings.map((meaning) => (
                <div key={meaning.partOfSpeech}>
                  <h3>{meaning.partOfSpeech}</h3>
                  {meaning.definitions.map((definition) => (
                    <p key={definition.definition}>{definition.definition}</p>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SearchBar;
