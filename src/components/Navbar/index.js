import React from "react";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  return (
    <>
      <section>
        <nav className=" flex justify-between p-5 cursor-pointer bg-custom-color">
          <h1
            className="font-burtons"
            onClick={() => {
              router.push("/");
            }}
          >
            Gaurav Sinha's work
          </h1>
          <ul className="flex justify-between items-center">
            <li className="mr-5 cursor-pointer">
              <a
                onClick={() => {
                  router.push("/skills");
                }}
              >
                Skills
              </a>
            </li>
            <li className="mr-5 cursor-pointer">
              <a
                onClick={() => {
                  router.push("/education");
                }}
              >
                Qualifications
              </a>
            </li>
            <li className="mr-5 cursor-pointer">
              <a
                onClick={() => {
                  router.push("/workex");
                }}
              >
                Work Experience
              </a>
            </li>
            <li className="mr-5 cursor-pointer">
              <a
                onClick={() => {
                  router.push("/projects");
                }}
              >
                Software Projects
              </a>
            </li>
            <li className="mr-5 cursor-pointer">
              <a
                onClick={() => {
                  router.push("/contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default index;
