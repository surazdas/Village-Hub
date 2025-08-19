import { GraduationCap, Laptop, Pickaxe, Sparkles, Star } from "lucide-react";
import React, { useState } from "react";

const BlogCard = () => {
  return (
    <div>
      <div className=" w-full h-300 bg-sky-100 ">
        <div className=" flex w-full h-20 items-center ml-25 pt-20 font-bold text-3xl text-black/75">
          <GraduationCap className="h-10 w-10 text-emerald-500" />
          <h1 className="pl-5">SUCCESS PEOPLE STORIES</h1>
        </div>
        <div className="flex w-full h-100 gap-15">
          <div className="w-[875px] h-100 mt-20 ml-25 rounded-t-3xl rounded-b-[5px] bg-[url(/Images/card3.jpg)] bg-no-repeat bg-cover cursor-pointer hover:shadow-2xl shadow-black transition duration-[0.3s] hover:-translate-y-1">
            <div className="w-full h-20 flex items-center pl-10">
              <div className="w-10 h-10 rounded-[50%] bg-green-400 flex justify-center items-center">
                <Laptop className="h-6 w-6 text-white " />
              </div>
            </div>
            <div className="w-full h-69 flex align-bottom items-end ">
              <h1 className="text-4xl pl-25 font-bold text-gray-600">
                I'M GOD OF THE COMPUTER
              </h1>
            </div>
          </div>

          <div className="w-[26.5%] h-100 bg-green-600 mt-20  rounded-t-3xl rounded-b-[10px] cursor-pointer hover:shadow-2xl shadow-black transition duration-[0.3s] hover:-translate-y-1">
            <div className="w-full h-20 flex items-center pl-10">
              <div className="w-10 h-10 rounded-[50%] bg-orange-400 flex justify-center items-center">
                <Star className="h-6 w-6 text-white " />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full h-100 gap-15 ">
          <div className="w-[27%] h-100 bg-amber-600  mt-35 ml-25 rounded-t-3xl rounded-b-[10px] cursor-pointer hover:shadow-2xl shadow-black transition duration-[0.3s] hover:-translate-y-1">
            <div className="w-full h-20 flex items-center pl-10">
              <div className="w-10 h-10 rounded-[50%] bg-yellow-400 flex justify-center items-center">
                <Sparkles className="h-6 w-6 text-white " />
              </div>
            </div>
          </div>
          <div className="w-[27%] h-100 bg-amber-600 mt-35  rounded-t-3xl rounded-b-[10px] cursor-pointer hover:shadow-2xl shadow-black transition duration-[0.3s] hover:-translate-y-1">
            <div className="w-full h-20 flex items-center pl-10">
              <div className="w-10 h-10 rounded-[50%] bg-yellow-400 flex justify-center items-center">
                <Pickaxe className="h-6 w-6 text-white " />
              </div>
            </div>
          </div>
          <div className="w-[26%] h-100 bg-amber-600 mt-35  rounded-t-3xl rounded-b-[10px] cursor-pointer hover:shadow-2xl shadow-black transition duration-[0.3s] hover:-translate-y-1">
            <div className="w-full h-20 flex items-center pl-10">
              <div className="w-10 h-10 rounded-[50%] bg-yellow-400 flex justify-center items-center">
                <GraduationCap className="h-6 w-6 text-white " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
