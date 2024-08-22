"use client"
import gsap, { Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const PlayReel = () => {
  const parent = useRef(null);
  const videodiv = useRef(null);
  const textdivPlay = useRef(null);
  const textdivReel = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "top top",
        scrub: 1,

        pin: true,
      },
    });
    tl.to(
      videodiv.current,
      {
        width: "100%",
        height: "100%",
        ease: Power4.easeOut,
      },
      "a"
    )
      .to(
        textdivPlay.current,
        {
          x: "80%",

          ease: Power4.easeOut,
        },
        "a"
      )
      .to(
        textdivReel.current,
        {
          x: "-80%",

          ease: Power4.easeOut,
        },
        "a"
      );
  }, []);

  return (
    <div ref={parent} className="w-full h-screen overflow-hidden relative">
      <div
        ref={videodiv}
        className="w-40 sm:w-96 overflow-hidden aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <video
          autoPlay
          muted
          loop
          className="w-full h-full scale-[1.2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="./vid1.mp4"
        ></video>
      </div>
      <div className="overlay w-full h-full bg-black text-white flex flex-col justify-between py-20">
        <div className="w-full flex items-center justify-center gap-3">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          <h3 className="text-sm">Work in motion</h3>
        </div>
        <h1 className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center flex gap-32 sm:gap-80 items-center">
          <div ref={textdivPlay} className="text-4xl sm:text-8xl font-light">
            Play
          </div>
          <div ref={textdivReel} className="text-4xl sm:text-8xl font-light">
            Reel
          </div>
        </h1>
        <p className="text-center px-10 text-xs sm:text-sm">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
};

export default PlayReel;
