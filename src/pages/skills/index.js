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
    "Restful APIs",
    "Django",
  ];
  const frontendTechnologies = [
    "HTML",
    "CSS",
    "React",
    "Javascript",
    "Tailwind CSS",
    "Bootstrap",
    "JQuery",
    "Redux",
  ];
  const otherTechnologies = [
    "Java",
    "Python",
    "C",
    "Git",
    "Github",
    "TypeScript",
    "Vercel",
  ];
  const tools = [
    "IntellijIdea",
    "VS Code",
    "Postman",
    "VMware vCenter",
    "VMware Horizon",
    "Vmware Workspace One",
    "VMware DEM",
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
            <MyCard
              title="Tools"
              technologies={tools}
              responsiveClass="sm:w-full md:w-1/2 lg:w-1/4"
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
