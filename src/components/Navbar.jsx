import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h2
          style={{ color: "white", fontWeight: "bold", fontSize: "26px" }}
          className="color: white"
        >
          My Portfolio
        </h2>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/divjot-aroraa/" aria-label="Linkedin Link">
          <FaLinkedin
            className="text-white transition ease-in-out delay-100 hover:-translate-y-1"
            cursor={"pointer"}
          ></FaLinkedin>
        </a>
        <a href="https://www.github.com/divjot121/" aria-label="Github Link">
          <FaGithub
            className="text-white transition ease-in-out delay-100 hover:-translate-y-1"
            cursor={"pointer"}
          ></FaGithub>
        </a>
        <a href="https://www.x.com/divjot121/" aria-label="X formerly known as Twitter Link">
          <FaSquareXTwitter
            className="text-white transition ease-in-out delay-100 hover:-translate-y-1"
            cursor={"pointer"}
          ></FaSquareXTwitter>
        </a>
        <a href="https://www.instagram.com/divjotsingharora/" aria-label="Instagram Link">
          <FaSquareInstagram
            className="text-white transition ease-in-out delay-100 hover:-translate-y-1"
            cursor={"pointer"}
          ></FaSquareInstagram>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
