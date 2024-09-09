// pages/about.js

import React from "react";
import Image from "next/image";
import Layout from "../Layout";

const About = () => {
  return (
    <Layout>
      <section className="mx-auto w-3/4">
        <div className="min-h-screen flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 flex justify-center p-10">
            <Image
              src="/gaurav-about.jpg"
              height={450}
              width={350}
              className="rounded-lg"
              alt="Gaurav Rakesh Sinha"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center p-10">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed">
              I am Gaurav Rakesh Sinha, a full-stack developer based in Boston
              with a passion for modern web technologies. I specialize in React,
              Next.js, Node.js, and Flask, and I enjoy building scalable web
              applications while managing cloud-based services. Lately, I've
              been focusing on creating user-friendly interfaces and optimizing
              performance for seamless user experiences.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto w-3/4 pt-20 min-h-screen">
        <div>
          <h2 className="text-4xl font-bold">Get In Touch</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-10">
          <div className="sm:pr-8">
            <p className="text-lg sm:px-0">
              I am currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I will
              try my best to get back to you!
            </p>
            <p className="text-lg sm:mt-10">
              Phone:{" "}
              <a
                href="tel:+18573983073"
                className="text-blue-500 hover:underline"
              >
                (857)-(398)-(3073)
              </a>
            </p>
            <p className="text-lg sm:mt-10">
              Email:{" "}
              <a
                href="mailto:sinha.g@northeastern.edu"
                className="text-blue-500 hover:underline"
              >
                sinha.g@northeastern.edu
              </a>
            </p>
          </div>
          <div className="sm:pl-8 mt-4 sm:mt-0">
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-600"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-600"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-600"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter the subject"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Type your message here"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
