import React from "react";
import classes from "./experiences.module.css";
import {
  BsCodeSlash,
  BsPersonWorkspace,
  BsFillBuildingFill,
} from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";

function Experiences() {
  return (
    <div className={classes.ExperiencePage}>
      <h1 className={classes.title}>EXPERIENCE</h1>
      <section className={classes.subtitle}>
        <p>
          Coming from a background in Business Administration, I've developed
          strong communication skills through various experiences. Now, as I
          venture into a new career path, I'm excited to blend my expertise with
          fresh challenges. If you're curious about my professional journey,
          feel free to explore my LinkedIn profile. I look forward to discussing
          how my diverse skill set can benefit your projects. Thank you for
          visiting my website.
        </p>
      </section>
      <section className={classes.block1}>
        <h3 className={classes.headtext}>
          <BsCodeSlash
            className={classes.icon}
            size="32px"
            color="rgb(55,178,255)"
            opacity="65%"
          />
          Coding
        </h3>
        <p>
          A MERN full stack web developer committed to writing clean, clear and
          maintainable code. Besides the MERN stack (MongoDB, Express, React and
          Node.Js), my main stack includes Git and GitHub for version control,
          Bootstrap and Figma for styling and, as one might expect, the power
          trio HTML 5, CSS and JavaScript (ES6).{" "}
        </p>
        <h5>Full-Stack Web Development</h5>
        <h6>Ironhack | RMT</h6>
        <span>9-week instensive web development bootcamp:</span>
        <ul>
          <li>
            Front-end technologies learned: HTML | CSS | JavaScript(ES6) | React
          </li>
          <li>
            Back-end technologies learned: ExpressJs | NodeJs | MongoDb | Axios
          </li>
        </ul>
        <h3 className={classes.headtext}>
          <GiNetworkBars
            className={classes.icon}
            size="25px"
            color="rgb(55,178,255)"
            opacity="65%"
          />
          Skills
        </h3>
        <h6>Languages</h6>{" "}
        <span>English (fluent); Portuguese (native); Spanish(basic).</span>
        <h6>Soft Skills </h6>{" "}
        <span>
          Time management, solution oriented, flexible, well-organized, eloquent
          communicator.
        </span>
      </section>
      <section className={classes.block2}>
        <h4 className={classes.headtext}>
          <BsPersonWorkspace
            className={classes.icon}
            size="25px"
            color="rgb(55,178,255)"
            opacity="65%"
          />
          Relevant Work Experience
        </h4>
        <h6>Team Leader at Permanent TSB</h6>
        <span>
          Abtran Ltd - Customer service provider for a chain of companies
        </span>
        <ul>
          <li>
            As a team leader I was responsible for managing day to day operation
            of a team of 15 people, daily meetings to align and track progress,
            product specialist.
          </li>
        </ul>
        <h4>
          <BsFillBuildingFill
            className={classes.icon}
            size="25px"
            color="rgb(55,178,255)"
            opacity="65%"
          />
          Education
        </h4>
        <h6>Full Stack Web Development Certificate</h6>
        <span>Ironhack</span>
        <h6>Bachelor in Business</h6>
        <span>CCT College Dublin</span>
        <h6>Advanced English Course</h6>
        <span>Erin School of English</span>
      </section>
    </div>
  );
}

export default Experiences;
