import React from "react";
import Layout from "../Layout.js";
import Image from "next/image.js";

const projects = () => {
  const projectsData = {
    Present: [
      {
        header: "Full Stack Web Application Development",
        description: [
          "Developed an end-to-end web application using Next.js for both front-end and back-end, implementing 7 RESTful APIs for user registration, authentication, and presentation management.",
          "Utilized TypeScript for front-end components, implementing routing with Next.js's useRouter hook, and employed Redux for state management to handle slide creation, element placement, and user sessions.",
        ],
      },
      {
        header: "MongoDB Integration and Data Management",
        description: [
          "Successfully integrated MongoDB to store and retrieve data throughout the project, leveraging its capabilities for efficient presentation creation, storage, and retrieval.",
          "Implemented robust data handling mechanisms, allowing users to save, edit, and delete presentations seamlessly, while maintaining data consistency across the application.",
        ],
      },
      {
        header: "Responsive Design and Styling",
        description: [
          "Implemented a responsive and visually appealing user interface using Tailwind CSS for styling and Shadcn for component libraries.",
          "Ensured a seamless user experience with efficient routing, allowing users to create, preview, and manage presentation slides with a user-friendly interface.",
        ],
      },
    ],
    "Financial Budget Tracking Application": [
      {
        header: "Led Development of Financial Budget Tracking System:",
        description: [
          "Spearheaded the development of an innovative expense-sharing application using Java SpringBoot, Java, React, and MySQL.",
          "Implemented user-friendly features such as group management, real-time updates, and a Java Swing calculator, enhancing user experience and transparency in expense tracking.",
        ],
      },
      {
        header: "Technological Proficiency:",
        description: [
          "Demonstrated expertise in utilizing Java SpringBoot for a robust and scalable backend, Java for various functionalities, and React for a dynamic user interface.",
          "Successfully integrated Java Swing for in-application calculations and utilized Spark to host the Swing application alongside the Spring Boot backend, ensuring seamless communication with the React frontend.",
        ],
      },
      {
        header: "Contributed to Future Enhancements:",
        description: [
          "Played a key role in the development of upcoming features, including image uploading for expenses and admin authorization, showcasing a commitment to continuous improvement and expanding the application's capabilities.",
          "Collaborated on backend changes, implementing @Aspect for authorization based on user roles, and laid the groundwork for linking bank accounts to facilitate timely debt payments within the application.",
        ],
      },
    ],
  };

  return (
    <>
      <Layout>
        <section className="max-w-screen-xl mx-auto pt-20">
          <h2 className="text-4xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <div className="md:col-span-2 p-4">
              <div className="container mx-auto my-8">
                {Object.entries(projectsData).map(([category, projects]) => (
                  <div key={category} className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">{category}</h2>
                    {projects.map((project, index) => (
                      <div key={index} className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">
                          {project.header}
                        </h3>
                        <ul className="list-disc ml-6">
                          {project.description.map((point, pointIndex) => (
                            <li key={pointIndex} className="mb-2">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-1 p-4 xs:flex-col">
              <Image
                src="/present-1.png"
                width={500}
                height={500}
                className="mt-20"
              />
              <Image
                src="/Present-2.png"
                width={500}
                height={500}
                className="mt-20"
              />
              <Image
                src="/fbta-1.png"
                width={500}
                height={500}
                className="mt-20"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default projects;
