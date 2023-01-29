import React from "react";
import "./about.css";
import sky from "../../assets/sky.jpg";
import { FaAward } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      id="about"
      ref={ref}
      className={`${inView ? "apear-section" : ""}`}
    >
      <span>Get To Know</span>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={sky} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Commercial experience</h5>
              <small>1+ year working with SEO</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Workflow</h5>
              <small>Focused on customer needs</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Self development</h5>
              <small>Highly motivated to learn new tech</small>
            </article>
          </div>
          <p>
            I am currently expanding my skills in web development and SEO.
            During my work, I try to look for innovative solutions that, when
            implemented, will achieve satisfactory results. In addition to the
            IT and E-commerce aspects, my greatest passion is sports - I believe
            that for a fully fit mind we also need a fit and healthy body 🏋️
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
