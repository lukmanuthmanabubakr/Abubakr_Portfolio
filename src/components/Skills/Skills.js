import React from "react";
import "./Skills.css";
import { IoDiamondSharp } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { FaTv } from "react-icons/fa6";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDescription">
        I’m a versatile Full Stack Developer and UI/UX Designer skilled in
        crafting end-to-end web solutions. With proficiency in both frontend and
        backend technologies—like HTML, CSS, JavaScript, React, Node.js, and
        databases. From concept to deployment, I focus on delivering clean,
        responsive designs and seamless functionality for an exceptional user
        experience.
      </span>
      <ul className="skillBars">
        <div className="skillBar">
          <span className="skillBarIcon">
            <IoDiamondSharp  className="skillTheIcons"/>
          </span>
          <div className="skillBarText">
            <h2>Design</h2>
            <p>
              I am skilled in designing and developing websites using various
              programming languages and design tools.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <span className="skillBarIcon">
            <IoCodeSlash className="skillTheIcons"/>
          </span>
          <div className="skillBarText">
            <h2>DEVELOPMENT</h2>
            <p>
              I can develop, maintain websites and web applications as well as
              create the structure, layout, and interactivity of a website.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <span className="skillBarIcon">
            <FaTv className="skillTheIcons"/>
          </span>
          <div className="skillBarText">
            <h2>UI/UX</h2>
            <p>
              My design involves extensive research, wire framing, prototyping
              to ensure that the final product meets user needs and business
              goals.
            </p>
          </div>
        </div>
      </ul>
    </section>
  );
};

export default Skills;
