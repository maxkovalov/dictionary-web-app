"use client";

import { useState } from "react";
import useStore from "../utils/useStore";

function Result() {
  const { word, data, isLoading, fetchData } = useStore();
  const [currentAudio, setCurrentAudio] = useState(null);

  const handlePlayAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    setCurrentAudio(audio);
    audio.play();
  };

  return (
    <>
      {data && !isLoading && data.title && (
        <div className="flex flex-col py-14 text-center transition ease duration-300">
          <span className="text-xl">&#128577;</span>
          <h1 className="font-bold pt-8 dark:text-white">{data.title}</h1>
          <p className="pt-4 dark:text-gray">{`${data.message} ${data.resolution}`}</p>
        </div>
      )}
      {data && !isLoading && data[0] != undefined && (
        <div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-3xl md:text-6xl font-extrabold tracking-wide dark:text-white">
                {data[0].word}
              </h2>
              <p className="text-lg md:text-2xl text-lavender mt-4">{data[0].phonetic}</p>
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
                      className="scale-90 md:scale-125 mt-4 transition ease duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="75"
                      height="75"
                      viewBox="0 0 75 75"
                    >
                      <g
                        className="fill-lavender hover:fill-white"
                        fill-rule="nonzero"
                      >
                        <circle
                          className="fill-lavender hover:fill-lavender opacity-30 hover:opacity-100"
                          cx="37.5"
                          cy="37.5"
                          r="37.5"
                        />
                        <path className="fill-inherit" d="M29 27v21l21-10.5z" />
                      </g>
                    </svg>
                  </div>
                </button>
              )}
            </div>
          </div>
          <div className="border-b-2 border-light-gray pb-4">
            {/* Meanings */}
            {data[0].meanings.map((meaning) => (
              <div
                className="flex flex-col space-y-8"
                key={meaning.partOfSpeech}
              >
                <div className=" mt-9 inline-block w-full overflow-hidden">
                  <h3 className="text-lg md:text-2xl font-bold italic relative dark:text-white">
                    {meaning.partOfSpeech}
                    <span className="absolute w-full ml-4 top-1/2 border-b border-off-white dark:border-gray"></span>
                  </h3>
                </div>
                <h4 className="text-md md:text-xl text-gray">Meaning</h4>
                <ul>
                  {meaning.definitions.map((definition) => (
                    <li
                      className="list-disc list-outside ml-10 mb-3 text-charcoal dark:text-white marker:text-lavender"
                      key={definition.definition}
                    >
                      <span className="relative left-2 text-lg leading-4">{definition.definition}</span>
                    </li>
                  ))}
                </ul>

                {/* {
                  <div className="flex">
                    <h4 className="text-xl text-gray pr-5">Synonyms</h4>
                    <div className="flex flex-wrap items-center gap-x-5">
                      {meaning.synonyms.map((synonym) => (
                        <span
                          onClick={async () => {
                            await fetchData(synonym);
                          }}
                          className="cursor-pointer font-bold text-xl hover:text-lavender hover:underline hover:underline-offset-2 hover:decoration-2 decoration-lavender"
                        >
                          {synonym}
                        </span>
                      ))}
                    </div>
                  </div>
                } */}

                {meaning.synonyms.length > 0 && (
                  <div className="flex">
                    <h4 className="text-xl text-gray pr-5">Synonyms</h4>
                    <div className="flex flex-wrap items-center gap-x-5">
                      {meaning.synonyms.map((synonym) => (
                        <span
                          onClick={async () => {
                            await fetchData(synonym);
                          }}
                          className="cursor-pointer font-bold text-xl hover:text-lavender hover:underline hover:underline-offset-2 hover:decoration-2 decoration-lavender"
                        >
                          {synonym}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>
          {data[0].sourceUrls && (
            <div className="dark:text-white text-sm py-4">
              <a
                className="flex items-center hover:underline hover:underline-offset-2 hover:decoration-2 decoration-lavender"
                href={data[0].sourceUrls[0]}
                target="_blank"
                rel="noreferrer"
              >
                {data[0].sourceUrls[0]}
                <div className="-order-1 pr-5">Source</div>
                <svg
                  className="ml-2 fill-none stroke-gray hover:stroke-lavender dark:stroke-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                >
                  <path
                    className=""
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Result;
