import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "react-scroll/modules/components/Link";

const Footer = () => {
  return (
    <footer>
      <span>VOYAR</span>
      <ul className="permalinks">
        <li>
          <Link to="header" spy={true} offset={0} smooth={true} duration={0}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} offset={0} smooth={true} duration={0}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            spy={true}
            offset={0}
            smooth={true}
            duration={0}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} offset={0} smooth={true} duration={0}>
            Projects
          </Link>
        </li>
        {/* <li>
          <Link
            to="testimonials"
            spy={true}
            offset={0}
            smooth={true}
            duration={0}
          >
            Testimonials
          </Link>
        </li> */}
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/Voyar1">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/arkadiusz-wojciechowski-098047224/">
          <BsLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Voyar. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
