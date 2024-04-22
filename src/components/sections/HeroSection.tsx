"use client";

import React from "react";
import MainButton from "../common/MainButton";

function HeroSection() {
  return (
    <section className="flex flex-col   -mt-11 gap-10 md:flex-row justify-between items-center">
      <div>
        <p className="text-[24px] font-semibold">Hi I am</p>
        <p className="text-[32px] text-green-500  font-semibold">
          fahad samara
        </p>
        <p className="text-[50px] md:text-[90px] font-extrabold leading-[4rem] md:leading-[6rem]">
          Designer
        </p>
        <p className="text-[50px] md:text-[90px] font-extrabold leading-[4rem] md:leading-[6rem]">
          Developer
        </p>
        <p className="my-8">
          I am a professional web designer and developer with over 8 years of
          experience. I specialize in UI/UX design, front-end development, and
          WordPress development.
        </p>
        <div>
          <MainButton text="Contact Me" classes="w-[188px]" />
        </div>
      </div>
      <div
        className="hidden md:block   md:w-[70%] relative"
        style={{ height: "500px" }}
      >
        <img src="/images/hero_image.png" alt="hero image" />

        <div
          className="absolute top-0 
          shadow-xl
          left-0 
            h-full w-full
            bg-green-500
          opcacity-50
            z-0
            rounded-full

            "
          style={{ zIndex: -1 }}
        ></div>
      </div>
    </section>
  );
}

export default HeroSection;
