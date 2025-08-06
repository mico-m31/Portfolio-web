import React from "react";
import { motion } from "framer-motion";
import foto from "../assets/unnamed.jpg";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-[calc(100vh-20rem)] px-5 pt-20 pb-10"
    >
      <div className="bg-purple-800/30 backdrop-blur-sm text-white p-6 sm:p-10 lg:p-14 rounded-xl max-w-6xl shadow-xl shadow-purple-900/40 space-y-3">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">About Me</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:items-stretch">
          <img
            className="mx-auto w-full max-w-[15rem] sm:max-w-[20rem] h-auto sm:h-[23em] rounded-lg object-cover border-4 border-purple-600 shadow-md shadow-purple-700/50"
            src={foto}
            alt="Profile"
          />

          <div className="text-sm sm:text-base space-y-4 leading-relaxed min-h-[260px] text-justify">
            <p>
              Hello! I’m Mico Martin <span className="font-semibold text-purple-300"></span>
              , currently a
              <span className="font-semibold text-purple-300">
                {" "}
                final-year Informatics student
              </span>{" "}
              in President University
              <span className="font-semibold text-purple-300"></span>. I’ve developed a strong interest in how
              technology can securely connect people, systems, and ideas — from
              the physical layer of networking to the logical components of
              backend systems.
            </p>

            <p>
              My passion lies in{" "}
              <span className="text-purple-300">Network Engineering</span>,
              where I enjoy understanding how data flows through routers,
              switches, and firewalls. I’ve spent much of my time learning about
              subnetting, routing protocols, VLANs, and network security
              principles using tools like Cisco Packet Tracer.
            </p>

            <p>
              In addition, I have experience in{" "}
              <span className="text-purple-300">backend development</span>,
              particularly with
              <span className="text-purple-300"> Go (Golang)</span>. I love the
              simplicity and performance of Go, and I’ve used it to build REST
              APIs and manage databases. Working with tools like Docker,
              PostgreSQL, and basic DevOps pipelines has helped me understand
              how backend services are deployed and maintained in real-world
              environments.
            </p>

            <p>
              I am driven by curiosity and always eager to expand my skillset —
              whether that’s diving deeper into cloud networking or building new
              backend projects with Go. I believe lifelong learning is the key
              to staying relevant in such a fast-paced field, and I’m excited to
              turn my knowledge into meaningful solutions in the future.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
