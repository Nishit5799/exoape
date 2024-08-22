"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Work from "./Components/Work";
import PlayReel from "./Components/PlayReel";
import Images from "./Components/Images";
import Spread from "./Components/Spread";
import LocomotiveScroll from "locomotive-scroll";

const Page = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        if (locomotiveScroll) locomotiveScroll.destroy();
      };
    }
  }, []);

  return (
    <div
      className="w-full"
      ref={scrollRef}
      style={{
        overflow: "hidden",
        position: "relative",
      }}
      data-scroll-container
    >
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
      <Images />
      <Spread />
    </div>
  );
};

export default Page;
