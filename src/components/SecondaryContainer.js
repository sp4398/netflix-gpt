import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  return (
    <div className='z-10 bg-black text-white absolute w-full'>
      <div className=' md:-mt-44 pl-2 md:pl-5 relative'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcoming}/>
      </div>
      

    </div>
  )
}

export default SecondaryContainer
