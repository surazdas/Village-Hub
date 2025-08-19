import React from "react";
import { Users, Megaphone, Play, ChevronRight } from "lucide-react";

const Latest = () => {
  return (
    <div className="flex justify-around h-50 w-full">
      <div className="   flex  h-30 w-80 bg-gradient-to-r via-emerald-400 rounded-2xl ">
        <div className="flex w-40 h-30 ml-50% justify-center items-center text-white ">
          <Megaphone className="w-15 h-15" />
        </div>
        <div className=" text-white w-40 h-30 items-center">
          <h1 className="h-15 w-40  py-4 text-[20px] font-bold">LATEST NEWS</h1>
          <button className="flex justify-center items-center text-center h-10 w-30 mt-3 py-2 bg-white text-black hover:shadow-lg  transition-all hover:scale-105 cursor-pointer hover:bg-red-100 rounded-2xl hover:text-red-800 ">
            View More
            <ChevronRight className="mt-1 w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex h-30 w-80   bg-gradient-to-r via-orange-400 rounded-2xl">
        <div className="flex w-40 h-30 ml-50% justify-center items-center text-white ">
          <Users className="h-15 w-15" />
        </div>
        <div className=" text-white w-40 h-30 items-center font-slab">
          <h1 className="h-15 w-40  py-4 text-[20px] font-bold">
            LATEST STORIES
          </h1>
          <button className="flex justify-center items-center text-center h-10 w-30 mt-3 py-2 bg-white text-black cursor-pointer hover:shadow-lg  transition-all hover:scale-105 hover:bg-red-100 rounded-2xl hover:text-red-800 ">
            View More
            <ChevronRight className="mt-1 w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex h-30 w-80  bg-gradient-to-r  via-yellow-400 rounded-2xl">
        <div className="flex w-40 h-30 ml-50% justify-center items-center text-white ">
          <Play className="w-15 h-15" />
        </div>
        <div className=" text-white w-40 h-30 items-center font-slab">
          <h1 className="h-15 w-40  py-4 text-[20px] font-bold">
            LATEST VIDEOS
          </h1>
          <button className="flex justify-center items-center text-centerh-10 w-30 mt-3 py-2 bg-white text-black cursor-pointer hover:shadow-lg  transition-all hover:scale-105 hover:bg-red-100 rounded-2xl hover:text-red-900  ">
            View More
            <ChevronRight className="mt-1 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Latest;
