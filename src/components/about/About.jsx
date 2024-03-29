import React from "react";
import "./about.css";

import { UseWords } from "../../API/Words";
import { Introduction } from "../Introduction/Introduction";
import { Timeline } from "../Timeline/Timeline";
import { Techstacks } from "../Techstacks/Techstacks";
import { Type } from "./Type";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";



export function About() {
  return (
    <>
      <div>
        
        <div>
        <UseWords />
        </div>

        <h1>
          Hello, I am Mahamadou Touray
        </h1>
        <Type />
        <p>
          Passionate and creative Software Developer having proficiency in
          Full Stack. Attired with a variety of tools & technologies and keen to
          learn new one. Worked on since last year and delivered
          15+ projects till now.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/Mtouray123"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:mahamadou12@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+19739050437"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              ""
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
