import React from 'react'
import { FaPlay } from "react-icons/fa";
import { GiInfo } from "react-icons/gi";

const VideoTitle = ({title,overview}) => {
  return (
    <div className=" absolute top-0 md:pt-64 pt-56 md:pl-24 pl-11 bg-gradient-to-r from-black text-white w-screen aspect-video">
      <h1 className="text-2xl md:text-6xl pb-3 font-bold">{title}</h1>
      <p className="md:text-lg md:w-1/2 md:pb-3 hidden md:inline-block">{overview}</p>
      <div className='flex gap-2'>
        <button className="bg-white text-black md:p-2 md:px-6 p-1 px-3 rounded flex items-center gap-2 hover:bg-opacity-65"> <FaPlay/>Play</button>
        <button className="bg-gray-500 md:p-2 md:px-6 p-1 px-3 rounded bg-opacity-40 flex items-center gap-2"><GiInfo/>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
