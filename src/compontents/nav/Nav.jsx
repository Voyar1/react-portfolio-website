import React, { useState } from "react";
import "./nav.css";
import { BiHomeAlt, BiMessageDetail } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#header");
  console.log(activeNav);

  return (
    <nav>
      <a
        href="#header"
        className={activeNav === "#header" ? "active" : ""}
        onClick={() => setActiveNav("#header")}
      >
        <BiHomeAlt />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <MdOutlineMiscellaneousServices />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
