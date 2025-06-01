import { DiRedis } from "react-icons/di";
import { FaNodeJs, FaPython, FaJava, FaAws, FaGitAlt } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiFlask, SiMysql, SiTailwindcss, SiBootstrap, SiJavascript, SiLinux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineGithub } from "react-icons/ai";
import { CgCPlusPlus } from "react-icons/cg";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const iconBounceRotate = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 10, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      delay: (i) => i * 0.3,
    },
  },
};

const hoverEffect = {
  hover: {
    scale: 1.3,
    rotate: 15,
    color: "#22d3ee", // cyan color
    transition: { type: "spring", stiffness: 300 },
  },
};

const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const Technologies = () => {
  const techWithIcons = [
    { icon: <RiReactjsLine className="text-5xl" />, name: "React JS" },
    { icon: <SiMongodb className="text-5xl" />, name: "Mongo DB" },
    { icon: <TbBrandNextjs className="text-5xl" />, name: "Next.js" },
    { icon: <DiRedis className="text-5xl" />, name: "Redis" },
    { icon: <FaNodeJs className="text-5xl" />, name: "Node JS" },
    { icon: <AiOutlineGithub className="text-5xl" />, name: "GitHub" },
    { icon: <CgCPlusPlus className="text-5xl" />, name: "C++" },
    { icon: <FaPython className="text-5xl" />, name: "Python" },
    { icon: <FaJava className="text-5xl" />, name: "Java" },
    { icon: <SiFlask className="text-5xl" />, name: "Flask" },
    { icon: <SiMysql className="text-5xl" />, name: "MySQL" },
    { icon: <SiTailwindcss className="text-5xl" />, name: "Tailwind CSS" },
    { icon: <SiBootstrap className="text-5xl" />, name: "Bootstrap" },
    { icon: <SiJavascript className="text-5xl" />, name: "JavaScript" },
    { icon: <FaAws className="text-5xl" />, name: "AWS" },
    { icon: <FaGitAlt className="text-5xl" />, name: "Git" },
    { icon: <SiLinux className="text-5xl" />, name: "Unix/Linux" },
  ];

  // To create seamless looping marquee, we duplicate the icons array
  const marqueeItems = [...techWithIcons, ...techWithIcons];

  return (
    <div className="border-b border-neutral-800 pb-16 overflow-hidden">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 1.2 }}
        className="my-16 text-center text-3xl font-semibold"
      >
        Technologies
      </motion.h2>

      <motion.div
        variants={marqueeVariants}
        animate="animate"
        className="flex w-[200%] gap-8"
        style={{ willChange: "transform" }}
      >
        {marqueeItems.map((tech, index) => (
          <motion.div
            key={index}
            custom={index % techWithIcons.length}
            variants={iconBounceRotate}
            initial="animate"
            animate="animate"
            whileHover="hover"
            variants={hoverEffect}
            className="flex flex-col items-center rounded-xl border-2 border-neutral-700 p-3 w-20 cursor-pointer select-none text-neutral-300"
            title={tech.name}
          >
            {tech.icon}
            <span className="mt-1 text-center text-xs font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
