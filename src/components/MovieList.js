import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="z-20 p-2 text-white">
      <h1 className="text-2xl md:text-3xl font-sans p-2 pb-3">{title}</h1>
      <div className="flex overflow-x-scroll pl-1">
        <div className="flex gap-1">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
