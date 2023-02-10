import React, { useRef, useEffect } from "react";
import { BsMouseFill } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./header.css";
import CTA from "./CTA.jsx";
import HeaderSocials from "./HeaderSocials.jsx";
import PROFILE_AVATAR from "../../assets/images/profile-avatar.png";
import Typed from "typed.js";

const Header = () => {
  React.useEffect(() => {
    /*3D text animation*/
    let typingEffect = new Typed(".multiText", {
      strings: ["Le Quang Nghi", "Coder", "Designer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });

    return () => {
      typingEffect.destroy();
    };
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>
          <span className="multiText"></span>
        </h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="profile-avatar">
          <img src={PROFILE_AVATAR} alt="profile avatar" />
        </div>

        <a href="#contact" className="scroll__down" text="Scroll Down">
          <BsMouseFill className="scroll__down--mouse-icon" />
          Scroll Down
          <AiOutlineArrowDown className="scroll__down--arrow-icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
