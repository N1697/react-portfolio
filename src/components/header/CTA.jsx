import React from "react";
import { RiFilePaper2Fill } from "react-icons/ri";
import { FaPaperPlane } from "react-icons/fa";
import CV from "../../assets/images/Front-End Developer Fresher - Lê Quang Nghị_CV.png";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV <RiFilePaper2Fill />
      </a>
      <a href="#contact" className="btn btn-primary">
        Say Hello <FaPaperPlane />
      </a>
    </div>
  );
};

export default CTA;
