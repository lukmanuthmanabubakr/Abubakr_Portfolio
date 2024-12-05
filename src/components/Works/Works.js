import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Works.css";

const Works = () => {
  return (
    <section id="works" className="worksSection">
      <h2 className="worksTitle">My Portfolio</h2>
      <p className="workDesc">
        Here are some of the notable projects I’ve developed.
      </p>
      <div className="workItems">
        <div className="workItem">
          <h3 className="projectTitle">Greenwoodsy</h3>
          <p className="projectDesc">
            Whether you're a beginner or an experienced investor, we offer the
            tools and resources to help you grow your wealth efficiently and
            confidently. Dashboard.
          </p>
          <div className="projectLinks">
            <a
              href="http://www.greenwoodsy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href="https://github.com/lukmanuthmanabubakr/Greenwood"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <FaGithub /> GitHub Repo
            </a>
          </div>
        </div>
        <div className="workItem">
          <h3 className="projectTitle">PlanIt</h3>
          <p className="projectDesc">
            PlanIt helps you turn goals into accomplishments with smart tools,
            innovative features, and a simple interface. Enable JavaScript to
            explore its full potential!
          </p>
          <div className="projectLinks">
            <a
              href="https://planitfy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href="https://github.com/lukmanuthmanabubakr/loan-calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <FaGithub /> GitHub Repo
            </a>
          </div>
        </div>
        <div className="workItem">
          <h3 className="projectTitle">EarthFi</h3>
          <p className="projectDesc">
            EarthFi uses Web3 technology to transform waste into valuable
            resources, fostering a sustainable, regenerative, and vibrant global
            economy for the future.
          </p>
          <div className="projectLinks">
            <a
              href="https://www.earthfi.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href="https://www.earthfi.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <FaGithub /> Sold Out
            </a>
          </div>
        </div>
        <div className="workItem">
          <h3 className="projectTitle">SkillSync</h3>
          <p className="projectDesc">
            A platform that connects individuals looking to learn new skills
            with experts willing to teach. Users can create profiles as learners
            or mentors, book live sessions, and exchange knowledge. Features
            include video call integration, scheduling, and user reviews.
          </p>
          <div className="projectLinks">
            <a
              href="https://abubakr-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href="https://abubakr-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <FaGithub /> Sold Out
            </a>
          </div>
        </div>
        <div className="workItem">
          <h3 className="projectTitle">ColorPeek</h3>
          <p className="projectDesc">
            A sleek and intuitive tool that allows designers, developers, and
            creatives to explore, identify, and manage colors with precision.
            Users can easily pick colors from images, explore color palettes,
            and check color codes in various formats.
          </p>
          <div className="projectLinks">
            <a
              href="https://color-generator-gray.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href="https://github.com/lukmanuthmanabubakr/color-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <FaGithub /> GitHub Repo
            </a>
          </div>
        </div>
        <div className="workItem">
          <h3 className="projectTitle">LoanMate</h3>
          <p className="projectDesc">
            LoanMate is an easy-to-use loan calculator and management tool
            designed to help users calculate loan repayments, compare different
            loan options, and plan their finances efficiently. Whether you're
            looking for personal loans.
            decisions.
          </p>
          <div className="projectLinks">
            <a
              href="https://loan-calculator-phi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href="https://github.com/lukmanuthmanabubakr/loan-calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <FaGithub /> GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
