import React, { useState } from "react";
import "./nav.css";
import { BiHomeAlt, BiMessageDetail } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { FiAirplay } from "react-icons/fi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#header");

  const activeHandler = (event) => {
    const id = event.currentTarget.dataset.key;
    setActiveNav(id);
  };

  return (
    <nav>
      <a
        href="#header"
        className={activeNav === "#header" ? "active" : ""}
        onClick={activeHandler}
        data-key="#header"
      >
        <BiHomeAlt />
      </a>
      <a
        href="#about"
        onClick={activeHandler}
        data-key="#about"
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={activeHandler}
        data-key="#experience"
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsBook />
      </a>
      <a
        href="#projects"
        onClick={activeHandler}
        data-key="#projects"
        className={activeNav === "#projects" ? "active" : ""}
      >
        <FiAirplay />
      </a>
      <a
        href="#contact"
        onClick={activeHandler}
        data-key="#contact"
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
