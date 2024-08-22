"use client"
import gsap, { Linear, ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Images = () => {
  const parent = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  useEffect(() => {
    gsap.registerEffect(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 90%",
        scrub: 1,
      },
    });
    tl.to(
      first.current,
      {
        x: "40%",
        ease: Linear,
      },
      "a"
    );
    tl.to(
      second.current,
      {
        x: "-20%",
        ease: Linear,
      },
      "a"
    );
    tl.to(
      third.current,
      {
        x: "-40%",
        ease: Linear,
      },
      "a"
    );
    tl.to(
      fourth.current,
      {
        x: "20%",
        ease: Linear,
      },
      "a"
    );
  }, []);
  return (
    <div
      ref={parent}
      className="w-full h-[70vh] sm:h-[100vh] bg-white flex items-center justify-center overflow-hidden"
    >
      <div className="w-[40%] sm:w-[20%] sm:h-[70%] h-1/2 relative">
        <div
          ref={first}
          className="absolute w-20 sm:w-40 sm:h-[15rem] h-[7rem] -right-1/3 top-6 "
        >
          <Image
            src="/img2.webp"
            height={1000}
            width={1000}
            alt="img2"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          ref={second}
          className="absolute -left-1/2 sm:-left-3/4 top-1/3 w-[7rem] sm:w-[20rem] aspect-video overflow-hidden "
        >
          <video
            src="./vid7.mp4"
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div
          ref={third}
          className="absolute w-[8rem] sm:w-[17rem] aspect-video -left-[74%] sm:-left-[50%] -bottom-12 "
        >
          <Image
            className="h-full w-full object-cover"
            src="/img3.webp"
            height={1000}
            width={1000}
            alt="img3"
          />
        </div>
        <div
          ref={fourth}
          className="absolute w-[10rem] sm:w-[15rem] aspect-[1.5/1] -right-[75%] sm:-right-[50%] -bottom-[37%] sm:-bottom-[20%] "
        >
          <video
            src="./vid6.mp4"
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <Image
          className="w-full h-full object-cover"
          src="/img1.webp"
          width={1000}
          height={1000}
          alt="img1"
        />
      </div>
    </div>
  );
};

export default Images;
