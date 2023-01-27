import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { useRef } from "react";
import useIntersection from "../../hooks/useIntersection";

const Experience = () => {
  const ref = useRef();
  const inViewport = useIntersection(ref, "-300px");
  return (
    <section
      id="experience"
      ref={ref}
      className={`${inViewport ? "apear-section" : ""}`}
    >
      <span>What Skills i Have</span>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__card">
          <h2>Good knowledge of:</h2>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Redux</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>React Router</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Hooks</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>CSS modules</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>NPM</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>GitHub</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Git</h4>
            </article>
          </div>
        </div>
        <div className="experience__card">
          <h2>Basic knowledge of:</h2>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>TypeScript</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Next.js</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Tailwind</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Firebase</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
