import React from "react";
import "./footer.css";
import {
  HEADER_REF,
  ABOUT_REF,
  EXPERIENCE_REF,
  SERVICES_REF,
  PORTFOLIO_REF,
  TESTIMONALS_REF,
  CONTACT_REF,
} from "./../../utils/sharedVariables";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <a href={"#" + HEADER_REF} className="footer__logo">
        Lorem IPSUM
      </a>
      <ul className="permalinks">
        <li>
          <a href={"#" + HEADER_REF}>Home</a>
        </li>
        <li>
          <a href={"#" + ABOUT_REF}>About</a>
        </li>
        <li>
          <a href={"#" + EXPERIENCE_REF}>Experience</a>
        </li>
        <li>
          <a href={"#" + SERVICES_REF}>Services</a>
        </li>
        <li>
          <a href={"#" + PORTFOLIO_REF}>Portfolio</a>
        </li>
        <li>
          <a href={"#" + TESTIMONALS_REF}>Testimonials</a>
        </li>
        <li>
          <a href={"#" + CONTACT_REF}>Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="http://linkedIn.com" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://github.com/ysYassine" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="mailto: test@test.test" target="_blank" rel="noreferrer">
          <MdEmail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
