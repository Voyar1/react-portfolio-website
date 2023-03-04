import React from "react";
import "./projects.css";
import portfolioWebsitePhoto from "../../assets/my-portfolio-snapshot.png";
import hynextSnapshotPhoto from "../../assets/hynext-snapshot.png";
import { useInView } from "react-intersection-observer";
const data = [
  {
    id: 1,
    img: hynextSnapshotPhoto,
    title: "Hynext - Headless CMS blog",
    stack: "Next.js, CSS modules, Hygraph and graphql-request",
    github: "https://github.com/Voyar1/hynext-blog-template",
    demo: "https://hynext-blog-template-fcf6.vercel.app/",
    targetBlank: true,
  },
  {
    id: 2,
    img: portfolioWebsitePhoto,
    title: "Personal portfolio website",
    stack: "React, email.js, CSS",
    github: "https://github.com/Voyar1/react-portfolio-website",
    demo: "#",
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
              <span className="portfolio__project-title">{project.title}</span>
              <span className="portfolio__project-stack">{project.stack}</span>
              <div className="cta">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target={project.targetBlank ? "_blank" : ""}
                  className="btn btn-primary"
                  rel="noreferrer"
                >
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
