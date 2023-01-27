import React from "react";
import "./projects.css";
import portoflioItem1 from "../../assets/portfolio-item1.jpg";
import { useInView } from "react-intersection-observer";
const data = [
  {
    id: 1,
    img: portoflioItem1,
    title: "This is a portfolio item title",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 2,
    img: portoflioItem1,
    title: "This is a portfolio item title",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
];

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <section
      id="projects"
      ref={ref}
      className={`${inView ? "apear-section" : ""}`}
    >
      <span>My Recent Work</span>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((project) => {
          return (
            <article className="portfolio__item" key={project.id}>
              <div className="portfolio__item-image">
                <img src={project.img} alt="project1" />
              </div>
              <span>{project.title}</span>
              <div className="cta">
                <a href={project.github} className="btn">
                  GitHub
                </a>
                <a href={project.demo} className="btn btn-primary">
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
