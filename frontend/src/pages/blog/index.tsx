import BlogCard from "@/components/BlogPage/BlogCard";
import { BookMarked } from "lucide-react";
import React from "react";

const Blog = () => {
  return (
    <>
      <div className=" w-full h-screen bg-[url(/Images/story4.jpg)] bg-no-repeat bg-cover ">
        <div className="flex w-full h-20 pl-25 pt-10">
          <BookMarked className="h-10 w-10 text-orange-400" />
          <h1 className="font-bold text-3xl flex text-center pl-2 text-black/50">
            STORY.
          </h1>
        </div>
        <div className=" pl-30  w-full h-100">
          <span className="flex items-end w-full h-60">
            <h1 className="font-bold text-5xl text-black/60 ">HELLO, I'M</h1>
            <span className="text-blue-400 flex font-bold text-5xl pl-4">
              SURAZ
            </span>
          </span>

          <span className="text-5xl font-bold text-black/60 ">
            WELCOME TO OUR BLOG.
            <p className="text-[20px] text-black/30">
              DON'T MISS OUT BECAUSE IT'S HELPFULL FOR MOTIVATION.
            </p>
          </span>
        </div>
      </div>
      <BlogCard />
    </>
  );
};

export default Blog;
