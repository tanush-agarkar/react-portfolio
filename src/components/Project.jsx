import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Project
      </motion.h2>

      <div>
        {PROJECTS.map((project, ind) => (
          <div key={ind} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={250}
                height={200}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4 flex items-center mb-3"
              >
                {/* Project title lowercase */}
                <h6 className="font-bold text-xl text-purple-700  tracking-wide hover:text-purple-900 transition-colors duration-300 ">
                  {project.title}
                </h6>

                {/* External link icon */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-purple-700 hover:text-purple-900 transition-colors duration-300"
                  aria-label={`Visit ${project.title} project link`}
                >
                  <FiExternalLink size={20} />
                </a>
              </motion.div>

              {/* Description */}
              <ul className="mb-4 text-neutral-400 list-disc list-inside">
                {Array.isArray(project.description) ? (
                  project.description.map((point, index) => (
                    <li key={index} className="mb-2">
                      {point}
                    </li>
                  ))
                ) : (
                  <li>{project.description}</li>
                )}
              </ul>

              {/* Technologies */}
              {project.technologies.map((tech, ind) => (
                <span
                  key={ind}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
