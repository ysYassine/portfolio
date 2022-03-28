import React from "react";
import { ABOUT_REF, CONTACT_REF } from "../../utils/sharedVariables";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id={ABOUT_REF}>
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"></FaAward>
              <h5>Experience</h5>
              <small>+99 years of working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"></FiUsers>
              <h5>Clients</h5>
              <small>3 Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"></VscFolderLibrary>
              <h5>Projects</h5>
              <small>At least 2</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem fugiat
            animi modi dolor necessitatibus, maxime nesciunt, tempora voluptate
            voluptatem, magni qui sunt consequatur sint suscipit sed aperiam eos
            nihil accusamus!
          </p>

          <a href={"#" + CONTACT_REF} className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
