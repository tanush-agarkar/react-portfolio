import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl font-bold"
      >
        Education
      </motion.h2>

      <div>
        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={idx}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
            transition={{ duration: 0.5 }} // Faster initial animation
            whileHover={{
              scale: 1.07,
              boxShadow: "0 15px 35px rgba(128, 0, 128, 0.4)", // Purple colored shadow
              transition: {
                duration: 0.2, // Faster hover effect
                ease: "easeInOut",
              },
            }}
            className="mb-10 max-w-4xl mx-auto px-4 flex items-center gap-4 rounded-lg p-4 transition-all ease-in-out"
          >
            {/* College Logo */}
            <div className="flex-shrink-0">
              <img
                src={edu.logo}
                alt={`${edu.institution} logo`}
                className="w-16 h-16 object-contain rounded-md shadow-md"
              />
            </div>

            {/* Education Details */}
            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-1">
                {edu.degree}
              </h3>
              <p className="text-neutral-600 italic mb-1">{edu.institution}</p>
              <p className="text-sm text-neutral-500 mb-2">{edu.duration}</p>
              <p className="text-neutral-700 font-medium">{edu.cgpa}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
