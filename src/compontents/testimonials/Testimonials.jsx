import React from "react";
import "./testimonials.css";
import DOGGY from "../../assets/my-portfolio-dog-profile.jpg";
import { useRef } from "react";
import useIntersection from "../../hooks/useIntersection";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const TESTIMONIAL_DATA = [
  {
    avatar: DOGGY,
    name: "Tiny Dogger",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate libero aliquid laborum neque odio molestias ipsam expedita eaque perspiciatis dicta ab, accusantium sit veniam sed consectetur quo modi natus rem. Fugiat possimus ea ipsam, enim quidem distinctio adipisci magni recusandae at repellendus asperiores! Nemo corrupti vitae, impedit alias fugiat quibusdam.",
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
  const ref = useRef();
  const inViewport = useIntersection(ref, "-300px");

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`${inViewport ? "apear-section" : ""}`}
    >
      <span>Review from coworkers</span>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container mySwiper"
        pagination={{ clickable: true }}
        spaceBetween={40}
        modules={[Pagination]}
      >
        {TESTIMONIAL_DATA.map((client, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={client.avatar} alt="" />
              </div>
              <span className="client__name">{client.name}</span>
              <small className="client__review">{client.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
