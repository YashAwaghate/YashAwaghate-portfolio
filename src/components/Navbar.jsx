import logo from "../assets/imageLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import resume from "../assets/Yash_Awaghate_Resume.pdf";  

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/yash-awaghate/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/YashAwaghate" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a 
          href={resume} 
          download="Yash_Sanjay_Awaghate_Resume.pdf"  
          className="ml-4 px-3 py-1 border border-purple-900 text-sm font-medium text-white rounded hover:bg-purple-900 hover:text-white transition"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
