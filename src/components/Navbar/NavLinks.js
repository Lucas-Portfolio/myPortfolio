import classes from "./navbar.module.css";
import React from "react";

function NavLinks() {
  return (
    <ul className={classes.NavLinks}>
      <li>
        <a href="/projects">PROJECTS</a>
      </li>
      <li>
        <a href="/experiences">EXPERIENCE</a>
      </li>
      <li>
        <a href="/about">ABOUT</a>
      </li>
      <li>
        <a href="/contact">CONTACT</a>
      </li>
    </ul>
  );
}

export default NavLinks;
