import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/tanush.jpg";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  }),
};

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              custom={0}
              variants={container}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.05,
                color: "#6f42c1",
                transition: { duration: 0.3 },
              }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Tanush Agarkar
            </motion.h1>

            <motion.span
              custom={1}
              variants={container}
              initial="hidden"
              animate="visible"
              className="relative inline-block bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              <span className="animate-shimmer">
                Full Stack Developer | Python Developer
              </span>
            </motion.span>

            <motion.p
              custom={2}
              variants={container}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-1">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="Tanush Agarkar"
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Add these styles below or in your global CSS */}
      <style jsx>{`
        .animate-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.2) 25%,
            rgba(255, 255, 255, 0.6) 50%,
            rgba(255, 255, 255, 0.2) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 2.5s infinite linear;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
