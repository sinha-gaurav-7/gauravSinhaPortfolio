"use client";
import React from "react";
import Layout from "../Layout.js";
import Card from "react-bootstrap/Card";
import MyCard from "../../components/Card/index.js";

const index = () => {
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
          <div className="flex mt-10">
            <MyCard
              title="Frontend Technologies"
              technologies={frontendTechnologies}
            />
            <MyCard
              title="Backend Technologies"
              technologies={backendTechnologies}
            />
            <MyCard
              title="Other Technologies"
              technologies={otherTechnologies}
            />
            <MyCard title="Tools" technologies={tools} />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default index;

// {<Card
//     style={{ width: "18rem" }}
//     className="border shadow-lg mx-auto mt-8 bg-white border-gray-300"
//   >
//     <Card.Body className="text-center">
//       <Card.Title className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
//         Frontend Technologies
//       </Card.Title>
//       <Card.Text className="text-blue-500">HTML</Card.Text>
//       <Card.Text className="text-blue-500">CSS</Card.Text>
//       <Card.Text className="text-blue-500">React</Card.Text>
//       <Card.Text className="text-blue-500">Javascript</Card.Text>
//       <Card.Text className="text-blue-500">Tailwind CSS</Card.Text>
//       <Card.Text className="text-blue-500">Bootstrap</Card.Text>
//       <Card.Text className="text-blue-500">JQuery</Card.Text>
//       <Card.Text className="text-blue-500">Redux</Card.Text>
//     </Card.Body>
//   </Card>
/* <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle> */
// }
{
  /* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Skills</h1>
              <p className="text-gray-600 mt-2">
                I am a full stack developer with a keen interest in web
                development. I am proficient in HTML, CSS, JavaScript, React,
                Node, Express, MongoDB, and Python. I have also worked with
                several libraries and frameworks like Bootstrap, Tailwind CSS,
                Material UI, and Flask. I am also familiar with version control
                systems like Git and Github. I am currently learning Next.js and
                TypeScript.
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Tools</h1>
              <p className="text-gray-600 mt-2">
                I use Visual Studio Code as my code editor. I use the following
                extensions in VS Code: Prettier, Live Server, Bracket Pair
                Colorizer, and Material Icon Theme. I use Git and Github for
                version control. I use Figma for designing and prototyping. I
                use Canva for creating thumbnails and other graphics. I use
                Google Chrome as my primary browser. I use the following
                extensions in Chrome: React Developer Tools, Redux DevTools,
                JSON Viewer, and ColorZilla. I use Postman for testing APIs.
                I've used Heroku for deploying my projects.
              </p>
            </div>
          </div> */
}
