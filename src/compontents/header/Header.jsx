import React from "react";
import CTA from "./CTA";
import "./header.css";
import myPhoto from "../../assets/my-portfolio-photo.webp";
import HeaderSocials from "./HeaderSocials";
import Link from "react-scroll/modules/components/Link";
const Header = () => {
  return (
    <header id="header" className="apear">
      <div className="container header__container">
        <span>Hello I'm</span>
        <h1>Arkadiusz Wojciechowski</h1>
        <span className="text-light">FrontEnd Dev</span>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={myPhoto} alt="me" />
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <Link to="contact" className="scroll">
          Scroll down
        </Link>
      </div>
    </header>
  );
};

export default Header;
