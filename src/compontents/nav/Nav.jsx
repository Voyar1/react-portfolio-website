import React from "react";
import "./nav.css";
import { BiHomeAlt, BiMessageDetail } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { VscProject } from "react-icons/vsc";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <Link to="header" spy={true} offset={0} smooth={true} duration={0}>
        <BiHomeAlt />
      </Link>
      <Link to="about" spy={true} smooth={true} offset={-64} duration={0}>
        <AiOutlineUser />
      </Link>
      <Link to="experience" spy={true} smooth={true} offset={-160} duration={0}>
        <BsBook />
      </Link>
      <Link to="projects" spy={true} smooth={true} offset={-255} duration={0}>
        <VscProject />
      </Link>
      <Link to="contact" spy={true} smooth={true} offset={-350} duration={0}>
        <BiMessageDetail />
      </Link>
    </nav>
  );
};

export default Nav;
