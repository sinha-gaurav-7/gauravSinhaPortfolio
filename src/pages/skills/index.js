import React from "react";
import Layout from "../Layout.js";
import MyCard from "../../components/Card/index.js";

const Index = () => {
  const backendTechnologies = [
    "Node.js",
    "Express",
    "MongoDB",
    "Next.js",
    "MySQL",
    "Mongoose",
    "REST APIs",
  ];
  const frontendTechnologies = [
    "HTML",
    "CSS",
    "React",
    "Javascript",
    "TypeScript",
    "JQuery",
    "Redux",
  ];
  const otherTechnologies = [
    "Java",
    "Python",
    "C",
    "Git",
    "Github",
    "Postman",
    "Vercel",
  ];

  return (
    <>
      <Layout>
        <section className="max-w-screen-xl mx-auto pt-20 min-h-screen">
          <h2 className="text-4xl font-bold">My Skills</h2>
          <div className="flex flex-wrap mt-10">
            <MyCard
              title="Frontend Technologies"
              technologies={frontendTechnologies}
              responsiveClass="sm:w-full md:w-1/2 lg:w-1/4"
            />
            <MyCard
              title="Backend Technologies"
              technologies={backendTechnologies}
              responsiveClass="sm:w-full md:w-1/2 lg:w-1/4"
            />
            <MyCard
              title="Other Technologies"
              technologies={otherTechnologies}
              responsiveClass="sm:w-full md:w-1/2 lg:w-1/4"
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
