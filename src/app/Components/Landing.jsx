"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <div className="w-full h-[130vh] sm:h-[250vh] relative">
      <div className="picture w-full h-full overflow-hidden">
        <Image
       
          className="w-full h-full object-cover"
          src="/bg.webp"
          width={1000}
          height={1000}
          alt=""
        />
      </div>
      <div className="w-full absolute top-0">
        <div className=" text max-w-screen-xl mx-auto px-5 sm:px-10 text-white  h-full">
          <div className="para mt-72 sm:mt-[27rem] ">
            {[
              "Global digital design studio partnering",
              "with brans and businesses that create",
              "exceptional experiences where people",
              "live, work, and unwind.",
            ].map((item, index) => {
              return (
                <p
                  key={index}
                  className="text-md  masker overflow-hidden sm:text-3xl"
                >
                  {" "}
                  <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 0.8,
                      delay: index * 0.1,
                    }}
                    className="inline-block origin-left  "
                  >
                    {item}
                  </motion.span>{" "}
                </p>
              );
            })}
          </div>  
          <div className="headings mt-5 sm:mt-10">
            {["Digital", "Design", "Experience"].map((item, index) => {
              return (
                <h1
                  key={index}
                  className="text-6xl py-4 sm:py-9 -mt-4 sm:-mt-10 sm:text-[14rem] font-light tracking-tighter leading-none overflow-hidden"
                >
                  <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 0.8,
                      delay: 1 + index * 0.15,
                    }}
                    className="inline-block origin-left  "
                  >
                    {item}
                  </motion.span>
                </h1>
              );
            })}
          </div>
          <div className="para2 mt-10 sm:w-1/3 sm:mt-20">
            <p className="sm:text-xl">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
          </div>
          <a
            className="sm:text-xl border-b-[.3px] sm:border-b-[1px] border-zinc-100 pb-1 mt-8  inline-block"
            href="#"
          >
            The Studio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
