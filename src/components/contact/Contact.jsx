import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { BsMessenger } from "react-icons/bs";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_hjk4dc4",
      "template_2j3cb6k",
      form.current,
      "buQTKnEwAZpSiCBIr"
    );
    // .then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
    e.target.reset(); //Resets form after submitting
  };

  return (
    <section id="contact">
      <h5>Let's</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__content">
          <h3 className="contact__content-title">Let's talk!</h3>

          <div className="contact__content-info">
            <div className="contact__content-card">
              <IoIosMail className="contact__content--card-icon" />

              <h4 className="contact__content--card-title">Email</h4>
              <span className="contact__content--card-data">
                lequangnghi16797@gmail.com
              </span>

              <a
                href="mailto:lequangnghi16797@gmail.com"
                className="contact__content--card-btn"
              >
                Contact me
                <AiOutlineArrowRight className="contact__content--card-arrow-icon" />
              </a>
            </div>

            <div className="contact__content-card">
              <BsMessenger className="contact__content--card-icon" />

              <h4 className="contact__content--card-title">Messenger</h4>
              <span className="contact__content--card-data">
                facebook.com/lequangnghi97
              </span>

              <a
                href="https://m.me/lequangnghi97"
                target="_blank"
                className="contact__content--card-btn"
              >
                Contact me
                <AiOutlineArrowRight className="contact__content--card-arrow-icon" />
              </a>
            </div>

            <div className="contact__content-card">
              <BsFillPhoneFill className="contact__content--card-icon" />

              <h4 className="contact__content--card-title">Phone Number</h4>
              <span className="contact__content--card-data">0369-848-090</span>

              <a
                href="tel: 0369-848-090"
                className="contact__content--card-btn"
              >
                Contact me
                <AiOutlineArrowRight className="contact__content--card-arrow-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__content-title">Send me a message</h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact__content-form"
          >
            <div className="contact__content--form-div">
              <label className="contact__content--form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__content--form-input"
                placeholder="Your Name"
              />
            </div>

            <div className="contact__content--form-div">
              <label className="contact__content--form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__content--form-input"
                placeholder="Your Email"
              />
            </div>

            <div className="contact__content--form-div contact__content--form-textarea">
              <label className="contact__content--form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__content--form-input"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button href="#contact" className="btn btn-primary">
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
