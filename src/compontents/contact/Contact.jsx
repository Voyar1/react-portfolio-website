import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [submitSuceed, setSubmitSuceed] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const form = useRef();
  const { ref, inView } = useInView({ triggerOnce: true });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kvuyyow",
        "template_c2i2igw",
        form.current,
        "nqn7spn77EwGcFRV2"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitSuceed(true);
          setSubmitError(false);
        },
        (error) => {
          console.log(error.text);
          setSubmitError(true);
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`${inView ? "apear-section" : ""}`}
    >
      <span>Get In Touch</span>
      <h2>Contact me</h2>

      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact-option">
            <HiOutlineMail className="contact-option__icon" />
            <span>Email</span>
            <span className="contact-option__email">
              arkadiusz.r.wojciechowski@gmail.com
            </span>
            <a href="mailto:arkadiusz.r.wojciechowski@gmail.com">
              Send a message!
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          {submitSuceed && (
            <p className="submit-succes-message">Thank you for your message!</p>
          )}
          {submitError && (
            <p className="submit-succes-message">
              Something went wrong, try again later or choose another contact
              method
            </p>
          )}
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
