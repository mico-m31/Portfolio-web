import React from "react";
import { motion } from "framer-motion";
import CV from "../assets/Cv_Mico-Martin..pdf";
import pdf from "../assets/pdf.png";
import { FaFilePdf } from "react-icons/fa6";

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center px-4 pt-20 pb-20"
    >
      <div className="w-full max-w-4xl text-white bg-purple-800/30 backdrop-blur-sm p-6 sm:p-10 rounded-xl shadow-xl shadow-purple-900/30 space-y-8 text-justify">
       <div>
  <h2 className="flex text-xl font-semibold mb-2">
    Summary
    <div className="flex flex-1 justify-end">
      <a
        href={CV}
        target="_blank"
        download="Resume_Mico-Martin.pdf"
        className="flex items-center gap-2 bg-purple-700 hover:bg-purple-600 transition text-white px-3 py-2 rounded-md"
      >
        <FaFilePdf className="text-pink-600 w-5 h-5" />
        Download CV
      </a>
    </div>
          </h2>

          <p className="text-justify">
            final-year Informatics student with a solid foundation in networking
            and a strong problem-solving mindset. I am eager to apply and
            further develop my skills by supporting infrastructure maintenance
            and contributing to the development of robust and secure systems.
            Motivated to face real-world challenges and grow through hands-on
            experience in a professional environment.
          </p>
        </div>

        <hr className="border-purple-700/40" />
        <div>
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <div className="relative pl-6 border-l border-purple-700/40 space-y-6">
            <div className="relative">
              <div className="absolute -left-[11px] top-2 w-3 h-3 rounded-full bg-purple-500"></div>
              <h3 className="font-semibold">
                President University | 2023 - Present
              </h3>
              <p className="text-sm text-gray-300">
                Final year Informatics student
              </p>
              <p className="text-sm text-gray-300">Current GPA: 3.79 </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[11px] top-2 w-3 h-3 rounded-full bg-purple-500"></div>
              <h3 className="font-semibold">
                Xaverius 3 HighSchool | 2020 - 2023
              </h3>
              <p className="text-sm text-gray-300">GPA: 87.6</p>
            </div>
          </div>
        </div>

        <hr className="border-purple-700/40" />

        <div>
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-md bg-purple-900/50 border border-purple-700 text-sm">
              Backend Development
            </span>
            <span className="px-3 py-1 rounded-md bg-purple-900/50 border border-purple-700 text-sm">
              Website Pentest
            </span>
            <span className="px-3 py-1 rounded-md bg-purple-900/50 border border-purple-700 text-sm">
              Routing
            </span>
            <span className="px-3 py-1 rounded-md bg-purple-900/50 border border-purple-700 text-sm">
              Switching
            </span>
            <span className="px-3 py-1 rounded-md bg-purple-900/50 border border-purple-700 text-sm">
              DevOps Basics
            </span>
          </div>
        </div>

        <hr className="border-purple-700/40" />

        <div>
          <h2 className="text-xl font-semibold mb-4">Certifications</h2>
          <ul className="space-y-2">
            <li>• Fortinet Certified In Cyber Security | June 2025</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
