import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-neutral-500"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-wrap lg:justify-center lg:space-x-8"
          >
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                src={project.image}
                alt={project.title}
                width={300}
                height={300}
                className="rounded-md"
              />
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h2 className="mb-4 font-semibold text-xl">{project.title}</h2>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="mb-4 flex flex-wrap space-x-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mb-2 rounded-md bg-neutral-800 text-purple-500 px-2 py-1 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mb-2 mt-2 pt-2">
                <a
                  href={project.github}
                  className="mr-2 rounded-md bg-green-900 text-white px-4 py-2"
                >
                  Github
                </a>
                <a
                  href={project.live}
                  className="rounded bg-cyan-950 text-white px-4 py-2"
                >
                  Live
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;