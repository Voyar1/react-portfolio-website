import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <span>VOYAR</span>
      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#testimonials">Passion</a>
        </li>
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
