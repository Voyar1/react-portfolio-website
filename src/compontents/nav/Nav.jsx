import React from "react";
import "./nav.css";
import { BiHomeAlt, BiMessageDetail } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { FiAirplay } from "react-icons/fi";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <Link to="header" spy={true} offset={0} smooth={true} duration={0}>
        <BiHomeAlt />
      </Link>
      <Link to="about" spy={true} smooth={true} offset={-60} duration={0}>
        <AiOutlineUser />
      </Link>
      <Link to="experience" spy={true} smooth={true} offset={-80} duration={0}>
        <BsBook />
      </Link>
      <Link to="projects" spy={true} smooth={true} offset={-80} duration={0}>
        <FiAirplay />
      </Link>
      <Link to="contact" spy={true} smooth={true} offset={-160} duration={0}>
        <BiMessageDetail />
      </Link>
    </nav>
  );
};

export default Nav;
