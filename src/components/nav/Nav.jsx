import React from "react";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import "./nav.css";

const Nav = () => {
  const [active, setActive] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <BsStars />
      </a>
      <a
        href="#services"
        onClick={() => setActive("#services")}
        className={active === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive("#portfolio")}
        className={active === "#portfolio" ? "active" : ""}
      >
        <ImProfile />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActive("#testimonials")}
        className={active === "#testimonials" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <IoIosMail />
      </a>
    </nav>
  );
};

export default Nav;
