import React from "react";
import "./testimonials.css";
import DOGGY from "../../assets/my-portfolio-dog-profile.jpg";

const TESTIMONIAL_DATA = [
  {
    avatar: DOGGY,
    name: "Tiny Dogger",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non aliquid iusto asperiores facere praesentium saepe eaque ex, ducimus, ab consequatur, odio quod blanditiis reprehenderit sint dignissimos ratione similique maxime sunt?",
  },
  {
    avatar: DOGGY,
    name: "Ernest Catter",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate libero aliquid laborum neque odio molestias ipsam expedita eaque perspiciatis dicta ab, accusantium sit veniam sed consectetur quo modi natus rem. Fugiat possimus ea ipsam, enim quidem distinctio adipisci magni recusandae at repellendus asperiores! Nemo corrupti vitae, impedit alias fugiat quibusdam.",
  },
  {
    avatar: DOGGY,
    name: "Ernest Bearer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate libero aliquid laborum neque odio molestias ipsam expedita eaque perspiciatis dicta ab, accusantium sit veniam sed consectetur quo modi natus rem. Fugiat possimus ea ipsam, enim quidem distinctio adipisci magni recusandae at repellendus asperiores! Nemo corrupti vitae, impedit alias fugiat quibusdam.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <span>Review from coworkers</span>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        {TESTIMONIAL_DATA.map((client, index) => {
          return (
            <article className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={client.avatar} alt="" />
              </div>
              <span className="client__name">{client.name}</span>
              <small className="client__review">{client.review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
