import React from "react";
import CTA from "./CTA";
import "./header.css";
import myPhoto from "../../assets/my-portfolio-photo.jpg";
import HeaderSocials from "./HeaderSocials";
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
        </div>
        <a href="#contact" className="scroll">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
