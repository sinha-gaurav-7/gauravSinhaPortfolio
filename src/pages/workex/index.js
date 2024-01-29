import React from "react";
import Layout from "../Layout.js";

const WorkExperience = () => {
  const workExperienceData = [
    {
      period: "August 2022 - July 2023",
      company: "Tata Consultancy Services",
      position: "System Engineer",
      responsibilities: [
        "Collaborated with product managers and software developers to translate the design team's custom dashboard into responsive, single-page web applications (SPAs) using React, AJAX, and JavaScript, resulting in a 25% load time reduction.",
        "Coordinated with cross-functional teams, comprising UI/UX designers and backend engineers, to ensure that the new React components complied with project specifications.",
        "Designed a REST API architecture jointly with the back-end team for efficient CRUD operations. Successfully integrated the API with the user interface for data management and display that improved the overall speed and reliability of the company’s web application by 20%.",
      ],
    },
    {
      period: "July 2021 - July 2022",
      company: "Tata Consultancy Services",
      position: "Assistant System Engineer",
      responsibilities: [
        "Designed page wireframes and mockups in Figma that increased the ease of development of individual page design, while adhering to WCAG 2.x compliance.",
        "Identified and rectified front-end issues, including HTML, CSS, and JavaScript errors (including jQuery), through thorough unit testing. Achieved a 30% enhancement in overall quality assurance.",
      ],
    },
  ];

  return (
    <>
      <Layout>
        <section className="max-w-screen-xl mx-auto pt-20 flex flex-col md:flex-row min-h-screen">
          <header className="md:w-1/4">
            <h2 className="text-4xl font-bold">
              Work <br />
              Experience
            </h2>
          </header>
          <div className="md:ml-32 mt-8 md:mt-0">
            {workExperienceData.map((experience, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row mb-8 md:mb-16"
              >
                <p
                  className="w-full md:w-2/4 mb-4 md:mb-0 md:mr-4"
                  style={{
                    minWidth: "150px",
                    maxWidth: "2000px",
                    padding: "10px",
                  }}
                >
                  {experience.period}
                </p>
                <div className="flex flex-col">
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ width: "100%" }}
                  >
                    {experience.company}
                  </h3>
                  <h2
                    className="text-lg font-bold mb-2"
                    style={{ width: "100%" }}
                  >
                    {experience.position}
                  </h2>
                  <ul className="list-disc pl-8" style={{ width: "100%" }}>
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="mb-2">
                        <p className="text-lg leading-relaxed">
                          {responsibility}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default WorkExperience;
