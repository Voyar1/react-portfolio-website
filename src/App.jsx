import React from "react";
import About from "./compontents/about/About";
import Experience from "./compontents/experience/Experience";
import Header from "./compontents/header/Header";
import Nav from "./compontents/nav/Nav";
import Projects from "./compontents/projects/Projects";
// import Testimonials from "./compontents/testimonials/Testimonials";
import Contact from "./compontents/contact/Contact";
import Footer from "./compontents/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
