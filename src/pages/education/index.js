import React from "react";
import Layout from "../Layout.js";

const index = () => {
  const educationData = {
    "Northeastern University": {
      place: "Boston, MA",
      degreeName: "Master of Science in Software Engineering Systems",
      yearOfGraduation: "2023 - Expected May 2025",
      relevantCourses: [
        "Object Oriented Design",
        "Web Design and User Experience",
      ],
    },
    "Mumbai University": {
      place: "Mumbai, India",
      degreeName:
        "Bachelor of Engineering in Electronics and Telecommunication Engineering",
      yearOfGraduation: "2017 - 2021",
      relevantCourses: [
        "Object Oriented Programming",
        "Database Management System",
      ],
    },
  };
  return (
    <>
      <Layout>
        <section className="max-w-screen-xl mx-auto pt-20">
          <h2 className="text-4xl font-bold">Education</h2>
          <div className="grid grid-cols-3 gap-4 p-4">
            <div className="col-span-2 p-4">
              <div className="container mx-auto my-8">
                {Object.entries(educationData).map(([university, details]) => (
                  <div key={university} className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">{university}</h2>
                    <div key={index} className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {details.place}
                      </h3>
                    </div>
                    <div key={index} className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {details.degreeName}
                      </h3>
                    </div>
                    <div key={index} className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {details.yearOfGraduation}
                      </h3>
                    </div>
                    <div key={index} className="mb-6">
                      <h3 className="flex items-center">
                        <span className="text-xl font-bold mb-2 mr-2">
                          Relevant Courses:
                        </span>
                        <span className=" mb-1 flex-grow">
                          {details.relevantCourses.map((course, index) => (
                            <span key={course}>
                              {index > 0 && ", "}
                              {course}
                            </span>
                          ))}
                        </span>
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default index;
