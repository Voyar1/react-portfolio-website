import React from "react";
import CTA from "./CTA";
import "./header.css";
import myPhoto from "../../assets/my-portfolio-photo.jpg";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Arkadiusz Wojciechowski</h1>
        <h5 className="text-light">FrontEnd Dev</h5>
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
