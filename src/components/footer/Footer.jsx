import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { SiCodepen } from "react-icons/si";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Le Quang Nghi
      </a>

      <ul className="footer__permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="footer__socials-icons">
        <a href="">
          <BsGithub />
        </a>
        <a href="">
          <BsFacebook />
        </a>
        <a href="">
          <SiCodepen />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Le Quang Nghi. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
