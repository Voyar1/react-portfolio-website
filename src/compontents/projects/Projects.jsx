import React from "react";
import "./projects.css";
import portfolioWebsitePhoto from "../../assets/my-portfolio-snapshot.png";
import hynextSnapshotPhoto from "../../assets/hynext-snapshot.png";
import ecommerceNext from "../../assets/voyar-gym.png";
import typeScriptProject from "../../assets/website-typescript-project.png";
import { motion } from "framer-motion";
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
    img: ecommerceNext,
    title: "Voyar - Next.js Ecommerce ",
    stack:
      "Next.js, React, Redux, redux-toolkit, formik, CSS modules, Strapi, Stripe",
    github: "https://github.com/Voyar1/Voyar-Next.js-Ecommerce",
    demo: "https://voyar-next-js-ecommerce-demo.vercel.app/",
  },
  {
    id: 3,
    img: portfolioWebsitePhoto,
    title: "Personal portfolio website",
    stack: "React, email.js, CSS, react-scroll",
    github: "https://github.com/Voyar1/react-portfolio-website",
    demo: "#",
  },
  {
    id: 4,
    img: typeScriptProject,
    title: "TypeScript - React app",
    stack: "TypeScript, React, Vite, Tailwind,Hero Icons, Framer Motion",
    github: "https://github.com/Voyar1/Gym-Website-with-TypeScript",
    demo: "https://gym-website-with-typescript.pages.dev/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
          },
        }}
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
                <span className="portfolio__project-title">
                  {project.title}
                </span>
                <span className="portfolio__project-stack">
                  {project.stack}
                </span>
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
      </motion.div>
    </section>
  );
};

export default Projects;
