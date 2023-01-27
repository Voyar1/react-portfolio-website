import React, { useRef } from "react";
import "./about.css";
import DOG from "../../assets/my-portfolio-dog.jpg";
import { FaAward } from "react-icons/fa";
import useIntersection from "../../hooks/useIntersection";
const About = () => {
  const ref = useRef();
  const inViewport = useIntersection(ref, "-300px");

  return (
    <section
      id="about"
      ref={ref}
      className={`${inViewport ? "apear-section" : ""}`}
    >
      <span>Get To Know</span>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={DOG} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years of working</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Projects</h5>
              <small>3+ Years of working</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Passion</h5>
              <small>My passion is</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            suscipit iste molestias quos saepe eaque hic mollitia, delectus unde
            nobis vero aliquam quaerat dolorum excepturi neque in quam
            voluptates exercitationem!
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets contact!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
