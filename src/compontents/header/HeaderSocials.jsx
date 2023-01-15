import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/arkadiusz-wojciechowski-098047224/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin size={30} />
      </a>
      <a href="https://github.com/Voyar1" target="_blank" rel="noreferrer">
        <BsGithub size={30} />
      </a>
    </div>
  );
};

export default HeaderSocials;
