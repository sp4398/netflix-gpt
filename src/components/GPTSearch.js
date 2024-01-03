import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed w-screen -z-10">
        <img className="h-screen object-cover md:w-screen" src={BG_URL} alt="bgImage" />
      </div>
      <div className="pt-[30%] md:p-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
