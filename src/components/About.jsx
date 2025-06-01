import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 px-4 lg:px-20">
      <h2 className="my-20 text-center text-4xl font-extrabold tracking-wide">
        About
        <span className="text-neutral-500 ml-2">Me</span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            className="rounded-3xl shadow-lg max-w-sm object-cover"
            src={aboutImg}
            alt="About Me"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/2 max-w-xl text-neutral-300 font-sans"
        >
          {ABOUT_TEXT.map((paragraph, index) => (
            <p key={index} className="mb-6 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
