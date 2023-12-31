import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBg from './VideoBg';

const MainContainer = () => {
    const movies=useSelector(store=> store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovies=movies[1];
    const {original_title,overview,id}=mainMovies;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBg movieId={id}/>
    </div>
  )
}

export default MainContainer
