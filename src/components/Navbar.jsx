import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h2
          style={{ color: "white", fontWeight: "bold" , fontSize: '26px'  }}
          className="color: white"
        >
          My Portfolio
        </h2>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/divjot-aroraa/">
        <FaLinkedin className='text-white transition ease-in-out delay-100 hover:-translate-y-1' cursor={"pointer"}></FaLinkedin>
        </a>
        <a href="https://www.github.com/divjot121/">
        <FaGithub className='text-white transition ease-in-out delay-100 hover:-translate-y-1' cursor={"pointer"}></FaGithub>
        </a>
        <a href="https://www.x.com/divjot121/">
        <FaSquareXTwitter className='text-white transition ease-in-out delay-100 hover:-translate-y-1' cursor={"pointer"}></FaSquareXTwitter>
        </a>
        <a href="https://www.instagram.com/divjotsingharora/">
        <FaInstagram className='text-white transition ease-in-out delay-100 hover:-translate-y-1' cursor={"pointer"}></FaInstagram>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
