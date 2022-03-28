import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import {
  HEADER_REF,
  ABOUT_REF,
  EXPERIENCE_REF,
  SERVICES_REF,
  CONTACT_REF,
} from "./../../utils/sharedVariables";

const Nav = () => {
  const [activeNav, setActiveNav] = useState(HEADER_REF);
  return (
    <nav>
      <a
        href={"#" + HEADER_REF}
        className={"navElement" + (activeNav === HEADER_REF ? " active" : "")}
        onClick={() => setActiveNav(HEADER_REF)}
      >
        <AiOutlineHome />
      </a>
      <a
        href={"#" + ABOUT_REF}
        className={"navElement" + (activeNav === ABOUT_REF ? " active" : "")}
        onClick={() => setActiveNav(ABOUT_REF)}
      >
        <AiOutlineUser />
      </a>
      <a
        href={"#" + EXPERIENCE_REF}
        className={
          "navElement" + (activeNav === EXPERIENCE_REF ? " active" : "")
        }
        onClick={() => setActiveNav(EXPERIENCE_REF)}
      >
        <BiBook />
      </a>
      <a
        href={"#" + SERVICES_REF}
        className={"navElement" + (activeNav === SERVICES_REF ? " active" : "")}
        onClick={() => setActiveNav(SERVICES_REF)}
      >
        <RiServiceLine />
      </a>
      <a
        href={"#" + CONTACT_REF}
        className={"navElement" + (activeNav === CONTACT_REF ? " active" : "")}
        onClick={() => setActiveNav(CONTACT_REF)}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
