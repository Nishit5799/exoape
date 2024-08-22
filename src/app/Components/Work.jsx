"use client";
import { motion } from "framer-motion";

import React, { useState } from "react";

function Work() {
  const [elems, setElems] = useState([
    {
      heading: "Columbia Pictures",
      subheading: "Celebrating a century of cinema",
      video: "./vid2.mp4",
      image: "/pic1.webp",
    },
    {
      heading: "Rino and Pelle",
      subheading: "Effortless chic lifestyle",
      video: "./vid3.mp4",
      image: "/pic2.webp",
    },
    {
      heading: "Pixelflakes",
      subheading: "Architectural Marketing Agency",
      video: "./vid4.mp4",
      image: "/pic3.webp",
    },
    {
      heading: "Aebele Interiors",
      subheading: "Luxurious design experience",
      video: "./vid5.mp4",
      image: "/pic4.webp",
    },
  ]);
  return (
    <div className="w-full relative">
      <div className="max-w-screen-xl mx-auto py-20 px-5 sm:px-10">
        <div className="featured flex gap-2">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 "
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3 className="font-medium ">Featured Projects</h3>
        </div>
        <h1 className="text-6xl sm:text-[12rem] sm:leading-none sm:tracking-tight my-5 overflow-hidden">
          <motion.span
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 0.8,
            }}
            className="inline-block origin-left "
          >
            Work
          </motion.span>
        </h1>
        <p className="leading-2 text-lg ">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className="elems sm:flex sm:flex-wrap mt-10 sm:gap-5">
          {elems.map((item, index) => {
            return (
              <div key={index} className="elem w-full mt-10 sm:w-[48%] ">
                <div className="video w-full h-[104vw] sm:h-[50vw] relative   overflow-hidden">
                  <motion.img
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    data-scroll
                    data-scroll-speed="-.4"
                    className="hidden sm:absolute sm:top-0 sm:left-0 sm:z-[2] sm:block w-full h-full object-cover"
                    src={item.image}
                    alt="pic1"
                    height={1000}
                    width={1000}
                  ></motion.img>
                  <video
                    className="block absolute z-[1] w-full h-full top-1/2 left-1/2 scale-[1.3] -translate-x-1/2 -translate-y-1/2 "
                    autoPlay
                    muted
                    loop
                    src={item.video}
                  ></video>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold">{item.heading}</h3>
                  <h3 className="opacity-60">{item.subheading}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
