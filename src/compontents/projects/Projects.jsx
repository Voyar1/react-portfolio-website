import React from "react";
import "./projects.css";
import portoflioItem1 from "../../assets/portfolio-item1.jpg";
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
  return (
    <section id="projects">
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
