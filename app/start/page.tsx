/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";

//#region data
const data =
  "The zoophilous rhizophilic xyloglyphy of the hemidemisemiquaver required an inordinate amount of dexterity and concentration on the QWERTY keyboard. The unyielding dichlorodifluoromethane permeating the surroundings further exacerbated the challenge, as the mechanical actuation of each arduous key demanded meticulous precision. The pneumonoultramicroscopicsilicovolcanoconiosis-affected fingers trembled, yet the perseverant typist forged ahead, defying the perplexity of their endeavor. Through perseverance and tenacity, the formidable words were triumphantly transcribed, their elusive consonants and vowels elegantly woven into a coherent paragraph despite the labyrinthine constraints of the QWERTY layout.";
//#endregion

const page = () => {
  const [inputVaule, setInputValue] = useState("");
  const [textFinished, setTextFinished] = useState("");
  const [textUpcoming, setTextUpcoming] = useState("");

  const limit = 18;

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
    setTextFinished(
      data.slice(event.target.value.length, event.target.value.length + limit)
    );
    setTextUpcoming(data.slice(textFinished.length, limit + 10));
  };

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 8) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    setTextUpcoming(data.slice(0, limit + 10));
  }, []);
  return (
    <div className="h-screen w-screen bg-zinc-900">
      <div className="flex  align-middle text-white text-center flex-col h-screen">
        <div className="mt-36 text-6xl flex felx-col justify-center align-middle font-semibold max-w-full h-20 text-center overflow-hidden">
          <span className="text-slate-50">{textFinished}</span>
          <span className="text-slate-400">{textUpcoming}</span>
        </div>
        <div className="mt-16 text-xl font-semibold flex justify-evenly px-36">
          <div className="mt-6 text-xl font-semibold felx justify-center align-middle flex-col">
            1:23
          </div>
          <div className="mt-6 text-xl font-semibold">78 WPM</div>
        </div>

        <div className="mt-16 text-5xl font-semibold">
          <input
            className="text-white text-5xl font-semibold border-b-4 text-center bg-zinc-900 h-24 focus:ring-0 focus:outline-none"
            type="text"
            value={inputVaule}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default page;
