import React from "react";
import "./About.css";
import { Type } from "./Type";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmailIcon from "@material-ui/icons/Email";
// import PhoneIcon from "@material-ui/icons/Phone";
// import PublicIcon from "@material-ui/icons/Public";
// import { Introduction } from "./Introduction";
// import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";


function About() {
  return (
    <>
      <div>
        <h1>
          Hello, I am Mahamadou Touray
        </h1>
        <Type />
        <p>
          Passionate and creative Full Stack Developer having proficiency in
          MERN Stack. Attired with a variety of tools & technologies and keen to
          learn new one. Worked on wordpress since last 3 years and delivered
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
            {/* <GitHubIcon /> */}
          </a>
          <a
            href="mailto:mahamadou12@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            {/* <EmailIcon /> */}
          </a>
          <a
            href="tel:+19739050437"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            {/* <PhoneIcon /> */}
          </a>
          <a
            href="https://www.linkedin.com"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            {/* <LinkedInIcon /> */}
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
      {/* <Introduction />
      <Timeline /> */}
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};

export default About;