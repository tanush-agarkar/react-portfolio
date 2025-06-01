import logo from "../assets/Ta.png";
import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { motion } from "framer-motion";

// Hover effect for icons
const iconHoverEffect = {
  whileHover: {
    scale: 1.3,
    color: "#6f42c1",
    transition: { type: "spring", stiffness: 300, damping: 10, duration: 0.2 },
  },
};

// Hover effect for logo
const logoHoverEffect = {
  whileHover: {
    scale: 1.2,
    rotate: 10, // Slight tilt
    transition: { type: "spring", stiffness: 300, damping: 15, duration: 0.2 },
  },
};

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <motion.div
        className="flex flex-shrink-0 items-center"
        {...logoHoverEffect}
      >
        <img className="mx-3 w-10" src={logo} alt="logo" />
      </motion.div>

      <div className="m-6 flex items-center justify-center gap-4 text-2xl">
        <motion.a href="https://www.linkedin.com/in/tanush-agarkar/" {...iconHoverEffect}>
          <FaLinkedin />
        </motion.a>
        <motion.a href="https://github.com/tanush-agarkar" {...iconHoverEffect}>
          <FaGithub />
        </motion.a>
        <motion.a href="https://twitter.com/Tanush_Agarkar" {...iconHoverEffect}>
          <FaSquareXTwitter />
        </motion.a>
        <motion.a href="https://leetcode.com/Tanush_Agarkar/" {...iconHoverEffect}>
          <SiLeetcode />
        </motion.a>
        <motion.a href="https://www.instagram.com/tanush_agarkar/" {...iconHoverEffect}>
          <FaInstagram />
        </motion.a>
        <motion.a href="https://auth.geeksforgeeks.org/user/tanushagarkar684" {...iconHoverEffect}>
          <SiGeeksforgeeks />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
