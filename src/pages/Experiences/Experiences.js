import React from "react";
import classes from "./experiences.module.css";

function Experiences() {
  return (
    <div className={classes.ExperiencePage}>
      <h1 className={classes.title}>EXPERIENCE</h1>
      <section className={classes.subtitle}>
        <p>bla bla bla bla bla</p>
      </section>
      <section className={classes.block1}>
        <h3 className={classes.headtext}>Coding</h3>
        <p>
          A MERN full stack web developer committed to writing clean, clear and
          maintainable code. Besides the MERN stack (MongoDB, Express, React and
          Node.Js), my main stack includes Git and GitHub for version control,
          Bootstrap and Figma for styling and, as one might expect, the power
          trio HTML 5, CSS and JavaScript (ES6).{" "}
        </p>
        <h5>Full-Stack Web Development</h5>
        <h5>Ironhack | RMT</h5>
        <span>9-week instensive web development bootcamp:</span>
        <ul>
          <li>
            Front-end technologies learned: HTML | CSS | JavaScript(ES6) | React
          </li>
          <li>
            Back-end technologies learned: ExpressJs | NodeJs | MongoDb | Axios
          </li>
        </ul>
        <h3 className={classes.headtext}>Skills</h3>
        <h5>Languages</h5>{" "}
        <span>English (fluent); Portuguese (native); Spanish(basic).</span>
        <h5>Soft Skills </h5>{" "}
        <span>
          Time management, solution oriented, flexible, well-organized, eloquent
          communicator.
        </span>
      </section>
      <section className={classes.block2}>
        <h3 className={classes.headtext}>Relevant Work Experience</h3>
        <h5>Team Leader at Permanent TSB</h5>
        <span>
          Abtran Ltd - Customer service provider for a chain of companies
        </span>
        <ul>
          <li>
            As a team leader I was responsible for managing day to day operation
            of a team of 15 people, daily meetings to align and track progress,
            product specialist.
          </li>
          <li>
            Report bugs or design flaws on the website or on the app, constantly
            doing surveys to improve online functionality and help the business
            to develop a user-friendly service to customers.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Experiences;
