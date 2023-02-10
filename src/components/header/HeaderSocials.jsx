import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { SiCodepen } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/N1697" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.facebook.com/lequangnghi97" target="_blank">
        <BsFacebook />
      </a>
      <a href="https://codepen.io/N1697" target="_blank">
        <SiCodepen />
      </a>
    </div>
  );
};

export default HeaderSocials;
