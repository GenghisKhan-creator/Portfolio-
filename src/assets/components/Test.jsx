"use client";
import React from "react";
import { SparklesCore } from "./sparkles";

export default function Test() {
  return (
    <div
      className="h-80 w-full bg-black font-Grotesk text-center mt-20 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1
        className="md:text-7xl text-5xl lg:text-9xl font-extrabold text-center text-white relative z-20 mt-20">
        TESTIMONIALS
      </h1>
      <p className="text-gray-400 text-center text-2xl">Here are a few kind words people have to say about collaborating and solving problems with me.</p>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-3/4" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF" />

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
