import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have and</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="experience__text">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <DiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="experience__text">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="experience__text">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="experience__text">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GrReactjs className="experience__details-icon" />
              <div>
                <h4>React JS</h4>
                <small className="experience__text">Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Frontend */}
        <div className="experience__backend">
          <h3>Backend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="experience__text">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <FaJava className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="experience__text">Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Backend */}
      </div>
    </section>
  );
};

export default Experience;
