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
          <h3 className="projectTitle">Dad Joke Generator</h3>
          <p className="projectDesc">
            A fun app that generates random dad jokes to brighten your day!
          </p>
          <div className="projectLinks">
            <a
              href="https://dad-joke-generator-gilt.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href="https://github.com/lukmanuthmanabubakr/Dad-joke-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <FaGithub /> GitHub Repo
            </a>
          </div>
        </div>
        <div className="workItem">
          <h3 className="projectTitle">Loan Calculator</h3>
          <p className="projectDesc">
            A handy tool that helps you calculate monthly loan payments quickly
            and easily!
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
        <div className="workItem">
          <h3 className="projectTitle">BrainTick</h3>
          <p className="projectDesc">
            An interactive quiz platform built with React, offering a fun way to test your knowledge
          </p>
          <div className="projectLinks">
            <a
              href="https://react-quiz-app-ruddy-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href="https://github.com/lukmanuthmanabubakr/react-quiz-app"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <FaGithub /> GitHub Repo
            </a>
          </div>
        </div>
        <div className="workItem">
          <h3 className="projectTitle">InspireMe Quotes</h3>
          <p className="projectDesc">
          A refreshing quote generator that offers you inspiring.
          </p>
          <div className="projectLinks">
            <a
              href="https://quote-generator-seven-steel.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href="https://github.com/lukmanuthmanabubakr/quote-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <FaGithub /> GitHub Repo
            </a>
          </div>
        </div>
        <div className="workItem">
          <h3 className="projectTitle">ColorPeek</h3>
          <p className="projectDesc">
          A sleek tool to explore and check colors with precision!
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
          <h3 className="projectTitle">Dad Joke Generator</h3>
          <p className="projectDesc">
            A fun app that generates random dad jokes to brighten your day!
          </p>
          <div className="projectLinks">
            <a
              href="https://dad-joke-generator-gilt.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href="https://github.com/lukmanuthmanabubakr/Dad-joke-generator"
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
