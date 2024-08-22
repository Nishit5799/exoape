"use client";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Work from "./Work";
import PlayReel from "./PlayReel";
import Images from "./Images";
import Spread from "./Spread";
import LocomotiveScroll from "locomotive-scroll";

const Main = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);
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

export default Main;
