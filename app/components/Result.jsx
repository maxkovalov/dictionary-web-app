"use client";

import { useState } from "react";
import useStore from "../utils/useStore";

function Result() {
  const { data, isLoading } = useStore();
  const [currentAudio, setCurrentAudio] = useState(null);

  const handlePlayAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    setCurrentAudio(audio);
    audio.play();
  };

  return (
    <div>
      {data && !isLoading && data.title && (
        <div className="flex flex-col py-14 text-center">
          <span className="text-4xl">&#128577;</span>
          <h1 className="font-bold pt-8 dark:text-white">{data.title}</h1>
          <p className="pt-4 dark:text-gray">{`${data.message} ${data.resolution}`}</p>
        </div>
      )}
      {data && !isLoading && data[0] != undefined && (
        <div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-5xl font-bold dark:text-white">
                {data[0].word}
              </h2>
              <p className="text-lg text-lavender mt-2">{data[0].phonetic}</p>
            </div>
            <div>
              {data[0].phonetics.find((phonetic) => phonetic.audio) && (
                <button
                  onClick={() =>
                    handlePlayAudio(
                      data[0].phonetics.find((phonetic) => phonetic.audio).audio
                    )
                  }
                  className="p-0 scale-75"
                >
                  <div className="">
                    <svg
                      className=""
                      xmlns="http://www.w3.org/2000/svg"
                      width="75"
                      height="75"
                      viewBox="0 0 75 75"
                    >
                      <g
                        className=" fill-lavender hover:opacity-100  hover:fill-white"
                        fill-rule="evenodd"
                      >
                        <circle
                          className="fill-inherit opacity-30 hover:fill-lavender hover:opacity-100"
                          cx="37.5"
                          cy="37.5"
                          r="37.5"
                        />
                        <path
                          className="fill-inherit opacity-100 hover:fill-white"
                          d="M29 27v21l21-10.5z"
                        />
                      </g>
                    </svg>
                  </div>
                </button>
              )}
            </div>
          </div>
          <div className="border-b-2 border-light-gray">
            {/* Meanings */}
            {data[0].meanings.map((meaning) => (
              <div key={meaning.partOfSpeech}>
                <div className="inline-block w-full overflow-hidden">
                  <h3 className="text-2xl font-bold italic relative dark:text-white">
                    {meaning.partOfSpeech}
                    <span className="absolute w-full ml-4 top-1/2 border-b border-off-white dark:border-gray"></span>
                  </h3>
                </div>
                <h4 className="text-lg text-gray font-medium my-4">Meaning</h4>
                <ul className="">
                  {meaning.definitions.map((definition) => (
                    <li
                      className="list-disc list-outside ml-8 mb-2 text-charcoal dark:text-white marker:text-lavender"
                      key={definition.definition}
                    >
                      {definition.definition}
                    </li>
                  ))}
                </ul>
                <h4 className="text-lg text-gray font-medium my-4">Synonyms</h4>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* {data &&
        data.map(
          (item) =>
            item.word && (
              <div key={item.id}>
                <div className="flex border border-red justify-between">
                  <div>
                    <h2 className="text-5xl font-bold">{item.word}</h2>
                    <p className="text-lg text-lavender">{item.phonetic}</p>
                  </div>
                  <div>
                    {item.phonetics.find((phonetic) => phonetic.audio) && (
                      <button
                        onClick={() =>
                          handlePlayAudio(
                            item.phonetics.find((phonetic) => phonetic.audio)
                              .audio
                          )
                        }
                        className="p-0 scale-75"
                      >
                        <img src="./assets/images/icon-play.svg"></img>
                      </button>
                    )}
                  </div>
                </div>

                {item.meanings.map((meaning) => (
                  <div key={meaning.partOfSpeech}>
                    <h3>{meaning.partOfSpeech}</h3>
                    {meaning.definitions.map((definition) => (
                      <p key={definition.definition}>{definition.definition}</p>
                    ))}
                  </div>
                ))}
              </div>
            )
        )} */}
    </div>
  );
}

export default Result;
