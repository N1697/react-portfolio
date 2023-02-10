import React from "react";
import { BsStars } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { FaFolder } from "react-icons/fa";
import PROFILE_AVATAR2 from "../../assets/images/profile-avatar2.png";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Introduction</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me--image">
            <img src={PROFILE_AVATAR2} alt="profile avatar 2" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsStars className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>
            <article className="about__card">
              <GiSkills className="about__icon" />
              <h5>Skills</h5>
              <small>Web Development</small>
            </article>
            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            I'm a fresher Front-End Developer with a good foundation of Web
            Development (HTML/CSS/JavaScript/ReactJS) who's seeking an
            opportunity to further develop my skills and gain hands-on
            experience in a professional setting <br />
            I'll be glad if I could get your attention!
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
