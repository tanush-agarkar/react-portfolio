import logo from "../assets/Ta.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-3 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-6 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/tanush-agarkar/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/tanush-agarkar">
          <FaGithub />
        </a>
        <a href="https://twitter.com/Tanush_Agarkar">
          <FaSquareXTwitter />
        </a>
        <a href="https://leetcode.com/Tanush_Agarkar/">
          <SiLeetcode />
        </a>
        <a href="https://www.instagram.com/tanush_agarkar/">
          <FaInstagram />
        </a>
        <a href="https://auth.geeksforgeeks.org/user/tanushagarkar684">
          <SiGeeksforgeeks />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
