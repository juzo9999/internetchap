import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Sleek Startup Site",
      description: "A fast, mobile-first website built for a disruptive fintech brand.",
      link: "#",
    },
    {
      title: "Neon Portfolio",
      description: "Interactive, animated portfolio that screams personality.",
      link: "#",
    },
    {
      title: "Brand Identity Kit",
      description: "Full visual brand revamp: logo, palette, typography, and vibe.",
      link: "#",
    },
  ];

  return (
    <motion.div
      className="bg-chapBlack text-white py-24 px-6 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12 drop-shadow-neon text-chapGreen">
          🚀 Projects That Slap
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-chapGray to-chapBlack p-6 rounded-xl border border-chapGreen shadow-xl hover:scale-105 transition duration-300"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-chapWhite/80 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-chapGreen font-semibold hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
