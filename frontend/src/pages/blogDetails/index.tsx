import React from "react";

const index = () => {
  return (
    <div>
      <div className="w-full h-1000 bg-sky-200 bg-[url(/Images/about1.avif)] bg-no-repeat bg-cover ">
        <div className="w-full h-60 flex items-center ">
          <h1 className="font-bold text-6xl text-black/70 pl-25">
            WELCOME TO THE <br />
            <span className="text-orange-400 pr-8">SANZEEV'S</span>
            BLOG:
          </h1>
        </div>
        <div className="w-full h-200  flex justify-center">
          <div className="w-200 h-200 bg-amber-800 bg-[url(/Images/sanjeev3.jpg)] bg-no-repeat bg-cover rounded-3xl "></div>
        </div>
      </div>
    </div>
  );
};

export default index;
