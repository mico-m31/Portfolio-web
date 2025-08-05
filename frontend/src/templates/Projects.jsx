import React from "react";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";    
import { motion } from "framer-motion";


function Projects() {
  const projects = [
    {
      id: 1,
      title: "Cyber Security Education Platform",
      description: "Collaborative project with Icon+ PLN to create a platform for cybersecurity education and training.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop&auto=format",
      technologies: ["HTML", "Tailwind CSS", "MySQL", "Golang","Docker"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Personal Finance Tracker",
      description: "Comprehensive money management app with budgeting tools, and expense tracking",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&auto=format",
      technologies: ["React", "Golang", "PostgreSQL", "Chart.js", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my projects and skills.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&auto=format",
      technologies: ["React", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id:4,
      title: "Student Enrollment System",
      description: "A mobile application for managing student enrollments",
      image: "https://images.unsplash.com/photo-1584697964216-7b8f0c1d2c3f?w=400&h=250&fit=crop&auto=format",
      technologies: ["Java", "SQLite"],
      liveUrl: "#",
      githubUrl: "#",
    }
  ];

  return (
     <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
    <div className="flex justify-center items-start min-h-[calc(100vh-25rem)] p-4 py-20">
      <div className="text-white bg-purple-800/30 rounded-md  w-full max-w-7xl p-4 sm:p-6 lg:p-8 shadow-xl shadow-purple-900/40  ">
        
        <div className="flex flex-col justify-center items-center space-y-2 sm:space-y-4 mb-6 sm:mb-8 lg:mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">My Projects</h1>
          <p className="text-center text-gray-300 text-sm sm:text-base max-w-2xl px-2">
            Here are some of my featured projects showcasing various technologies and problem-solving approaches.
          </p>
        </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-black/40 border-2 border-purple-600 rounded-xl overflow-hidden hover:border-purple-400 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4 sm:p-5">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-purple-900/50 text-purple-200 text-xs px-2 py-1 rounded-md border border-purple-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1 bg-purple-600 hover:bg-purple-500 text-white text-sm px-3 py-2 rounded-md transition-colors duration-200 flex-1 justify-center"
                  >
                    <Link />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 text-white text-sm px-3 py-2 rounded-md transition-colors duration-200 flex-1 justify-center"
                  >
                    <FaGithub />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default Projects;