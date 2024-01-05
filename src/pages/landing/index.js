import React from "react";
import { useRouter } from "next/router";
import Image from "next/image.js";

const Index = () => {
  const router = useRouter();
  return (
    <>
      <section className="max-w-screen-xl mx-auto pt-4 px-4 sm:px-6 md:px-8 lg:px-12 min-h-screen">
        <p className="text-sm sm:text-base">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Gaurav Sinha.
        </h1>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          I transform code into engaging digital experiences.
        </h3>
        <div className="flex flex-col sm:flex-row p-8 items-center justify-center">
          <Image
            src="/gaurav-image.png"
            width="450"
            height="400"
            className="p-5"
          />
          <div className="p-5 flex flex-col items-center">
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl mt-10 mb-5">
              A Bit About Me
            </h2>
            <p className="p-5">
              {/* <p> */}I am a Boston based full stack developer with a passion
              for building beautiful and user-friendly websites. I have a strong
              understanding of both front-end and backend technologies, and I am
              always looking to learn more. I am a quick learner and a team
              player, and I am confident that I can be a valuable asset to any
              web development team.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
