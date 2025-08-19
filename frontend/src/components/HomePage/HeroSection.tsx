import React from "react";
import dynamic from "next/dynamic";
const Text = dynamic(() => import("@/components/HomePage/Text"), {
  ssr: false,
});

import LatestBox from "@/components/HomePage/LatestBox";

const HeroSection = () => {
  return (
    <div>
      <div className="  w-full h-screen bg-[url(/Images/bg2.jpg)] bg-no-repeat bg-cover">
        <Text />
        <LatestBox />
      </div>
    </div>
  );
};

export default HeroSection;
