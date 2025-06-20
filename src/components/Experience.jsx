import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl "
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((exp, ind) => (
          <div key={ind} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 text-lg font-bold text-purple-700">
                {exp.role}{" "}
                <span className="ml-2 text-base italic font-semibold text-purple-500 tracking-wide">
                  @{exp.company}
                </span>
              </h6>

              {exp.description.map((des, ind) => (
                <p key={ind} className="mb-4 text-neutral-400">
                  {des}
                </p>
              ))}

              {exp.technologies.map((tech, ind) => (
                <span
                  key={ind}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
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

export default Experience;
