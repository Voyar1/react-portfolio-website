import React from "react";
import CTA from "./CTA";
import "./header.css";
import myPhoto from "../../assets/me-arek.png";
import HeaderSocials from "./HeaderSocials";
import Link from "react-scroll/modules/components/Link";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <header id="header">
      <motion.div
        className="container header__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
          },
        }}
      >
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
      </motion.div>
    </header>
  );
};

export default Header;
