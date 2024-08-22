import React from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Work from "./Components/Work";
import PlayReel from "./Components/PlayReel";
import Images from "./Components/Images";
import Spread from "./Components/Spread";

const page = () => {
  return (
    <div className="w-full ">
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
      <Images />
      <Spread />
    </div>
  );
};

export default page;
