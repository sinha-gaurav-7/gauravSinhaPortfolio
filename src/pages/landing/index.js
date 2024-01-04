import React from "react";
import { useRouter } from "next/router";
// import Navbar from "../../components/Navbar/index.js";
// import ProfileImage from "../../styles/gaurav-image.png";
import Image from "next/image.js";

const index = () => {
  const router = useRouter();
  return (
    <>
      {/* <Navbar /> */}
      <section className="max-w-screen-xl mx-auto pt-4">
        <p>Hi, my name is</p>
        <h1 className=" text-7xl">Gaurav Sinha.</h1>
        <h3 className="text-5xl">
          I transform code into engaging digital experiences.
        </h3>
        <div className="flex p-8">
          <Image
            src="/gaurav-image.png"
            width="450"
            height="400"
            className="p-5 m-10"
          />
          <div className="p-5 m-10 items-center">
            <h2 className="flex justify-center font-bold text-xl mt-20">
              A Bit About Me
            </h2>
            <p className="p-5 m-10">
              I am a Boston based full stack developer with a passion for
              building beautiful and user-friendly websites. I have a strong
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

export default index;
