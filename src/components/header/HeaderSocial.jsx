import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="http://linkedIn.com" target="_blank" rel="noreferrer">
        <BsLinkedin></BsLinkedin>
      </a>
      <a href="https://github.com/ysYassine" target="_blank" rel="noreferrer">
        <FaGithub></FaGithub>
      </a>
      <a href="mailto: test@test.test" target="_blank" rel="noreferrer">
        <MdEmail></MdEmail>
      </a>
    </div>
  );
};

export default HeaderSocial;
